export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: 'first' }, { slug: 'second' }];
}

export const dynamicParams = false;
