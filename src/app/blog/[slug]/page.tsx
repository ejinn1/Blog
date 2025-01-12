import { Metadata } from 'next';
import { ComponentType } from 'react';

import { CustomMetadata } from '@/shared/types/meta';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const { meta } = (await import(`@/content/${slug}.mdx`)) as {
    meta: CustomMetadata;
  };

  return {
    title: meta.title,
    description: meta.description,
    category: meta.category,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.images ? [...meta.images] : [],
      publishedTime: meta.date,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = (await import(`@/content/${slug}.mdx`)) as {
    default: ComponentType;
    meta: CustomMetadata;
  };

  return (
    <div className="size-full py-24 md:w-700">
      <article className="prose px-16">
        <Post />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'first' }, { slug: 'second' }];
}

export const dynamicParams = false;
