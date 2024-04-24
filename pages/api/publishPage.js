
import { PrismaClient } from '@prisma/client';
import axios from "axios";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    if (typeof slug === 'undefined') {
      return res.status(400).json({ error: "Slug parameter is required." });
    }

    const response = await axios.get(`${process.env.HUBAPI_URL}/getPageJson`, {
      params: {
        slug: slug 
      }
    });
    const data = JSON.parse(response.data.data);
    const finalData = JSON.parse(data[0]?.content);

    const existingPage = await prisma.pages.findFirst({
      where: {
        page_id: data[0].site_pages_id
      }
    });
    let insertedPage;
    if (existingPage) {
      insertedPage = await prisma.pages.update({
        where: {
          id: existingPage.id
        },
        data: {
          site_id: data[0].site_list_id,
          page_id: data[0].site_pages_id,
          url_slug: data[0].url_slug,
          status: data[0].status,
          content: finalData
        }
      });
    } else {
      // Insert a new record
      insertedPage = await prisma.pages.create({
        data: {
          site_id: data[0].site_list_id,
          page_id: data[0].site_pages_id,
          url_slug: data[0].url_slug,
          status: data[0].status,
          content: finalData
        }
      });
    }
    await prisma.$disconnect();

    res.status(200).json({ message: 'Slug resolver and Page Json updated successfully.' });

  } catch (error) {
    console.error('There was a problem with your request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
