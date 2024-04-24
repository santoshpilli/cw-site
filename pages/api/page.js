// import slugResolverData from '../slug-resolver.json';
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const { slug } = req.query;
//   const matchedSlug = slugResolverData.slugData.find(item => item.slug === slug);
//   if (!matchedSlug) {
//     return res.status(404).json({ message: 'Slug not found' });
//   }
//   const filePath = path.join(process.cwd(), 'pages', 'api', matchedSlug.slugFile);
//   try {
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     const finalData = JSON.parse(jsonData);
//     res.status(200).json(finalData);
//   } catch (err) {
//     return res.status(500).json({ message: 'Error reading file' });
//   }
// }


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { slug } = req.query;

    // Query the 'pages' table using Prisma Client
    const pageData = await prisma.pages.findFirst({
      where: {
        url_slug: slug
      }
    });

    if (!pageData) {
      return res.status(404).json({ message: 'Slug not found' });
    }
    res.status(200).json(pageData.content);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client after the operation
  }
}
