import fs from 'fs/promises';
import path from 'path';


export default async function handler(req, res) {
  try {
    const { menuId } = req.query;    
    const filePath = path.join(process.cwd(), 'components', 'data', `${menuId}.json`);
    const jsonData = await fs.readFile(filePath, 'utf-8');
    
    const parsedData = JSON.parse(jsonData);

    res.status(200).json(parsedData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
