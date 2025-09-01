import React from 'react';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const blogDirectory = path.join(process.cwd(), '_data/blog');
    const filenames = fs.readdirSync(blogDirectory);

    const posts = filenames.map(filename => {
        const filePath = path.join(blogDirectory, filename);
        const contents = fs.readFileSync(filePath, 'utf8');
        const lines = contents.split('\n');
        const rawDate = lines[1].trim();
        
        // Convert date format "30th August, 2025" to ISO format "2025-08-30"
        const parseDateToISO = (dateStr) => {
            const months = {
                'January': '01', 'February': '02', 'March': '03', 'April': '04', 'May': '05', 'June': '06',
                'July': '07', 'August': '08', 'September': '09', 'October': '10', 'November': '11', 'December': '12'
            };
            
            const parts = dateStr.split(' ').filter(part => part.trim() !== '');
            const day = parts[0].replace(/\D/g, '').padStart(2, '0');
            const month = months[parts[1]];
            const year = parts[2].replace(',', '');
            
            if (!month) {
                console.error(`Month not found for: "${parts[1]}" in date: "${dateStr}"`);
                return dateStr;
            }
            
            return `${year}-${month}-${day}`;
        };
        
        return {
            title: lines[0].replace('# ', ''),
            date: parseDateToISO(rawDate),
            rawDate: rawDate,
            endpoint: filename.replace('.md', '')
        };
    });
    
    posts.sort((a, b) => {
        return b.date.localeCompare(a.date);
    });
    
    res.status(200).json(posts);
}