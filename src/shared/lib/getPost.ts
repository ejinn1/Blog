import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content');

export async function getAllPosts() {
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const { meta } = await import(`@/content/${slug}.mdx`);

        return {
          slug,
          meta,
        };
      }),
  );

  return posts;
}
