import fs from "fs";
import path from "path";
import { NextApiResponse } from "next";

const Sitemap = () => {};

export const getServerSideProps = ({ res }: { res: NextApiResponse }) => {
  const baseUrl: string = {
    development: "http://localhost:3000",
    production: "https://www.polski.dev",
  }["production"];

  const staticPages: string[] = fs
    .readdirSync(__dirname)
    .filter((staticPage: string): boolean => {
      return !["post", "user", "tag", "search", "index.js", "dashboard", "auth", "api", "404.js", "_app.js", "_document.js", "_error.js", "sitemap.xml.js"].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${path.basename(staticPagePath, path.extname(staticPagePath))}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
             <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
               <url>
               <loc>https://www.polski.dev</loc>
               <lastmod>${new Date().toISOString()}</lastmod>
               <changefreq>monthly</changefreq>
               <priority>1.0</priority>
             </url>
      ${staticPages
        .map((url: string): string => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
