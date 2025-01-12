import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content');

export async function getCategories() {
  const files = fs.readdirSync(contentDir);
  const categories = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const { meta } = await import(`@/content/${slug}.mdx`);

        return meta.category;
      }),
  );

  return Array.from(new Set(categories));
}
