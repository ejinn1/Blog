import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content');

export async function getSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');

        return { slug: slug };
      }),
  );

  return Array.from(new Set(slugs));
}
