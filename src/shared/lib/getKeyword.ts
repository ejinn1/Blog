import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content');

export async function getKeywords() {
  const files = fs.readdirSync(contentDir);
  const keywords = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const { meta } = await import(`@/content/${slug}.mdx`);

        return meta.keywords
          ? meta.keywords.split(',').map((keyword: string) => keyword.trim())
          : [];
      }),
  );

  const allKeywords = [].concat(...keywords);
  return Array.from(new Set(allKeywords));
}
