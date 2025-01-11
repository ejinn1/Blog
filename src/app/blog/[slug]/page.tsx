import { Metadata } from 'next';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const { meta } = await import(`@/content/${slug}.mdx`);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : [],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, meta } = await import(`@/content/${slug}.mdx`);

  console.log(meta);

  return (
    <div>
      <article className="prose">
        <Post />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'first' }, { slug: 'second' }];
}

export const dynamicParams = false;
