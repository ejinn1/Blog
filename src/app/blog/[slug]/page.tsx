import { Metadata } from 'next';

type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { meta } = await import(`@/content/${params.slug}.mdx`);

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
      {/* <h1>{meta.title}</h1> */}
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'first' }, { slug: 'second' }];
}

export const dynamicParams = false;
