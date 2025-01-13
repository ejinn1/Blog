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
  const { default: Content, meta } = (await import(
    `@/content/${slug}.mdx`
  )) as {
    default: ComponentType;
    meta: CustomMetadata;
  };

  return (
    <div className="size-full py-24 md:w-750">
      <article className="prose px-16 md:px-50">
        <header className="border-b border-gray-100 py-16">
          <h1>{meta.title}</h1>
          <p className="text-16 font-medium text-gray-300">
            {meta.description}
          </p>
          <p className="mt-16 text-12 text-gray-200">{meta.date}</p>
        </header>
        <Content />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'first' },
    { slug: 'second' },
    { slug: 'test' },
    { slug: 'test2' },
    { slug: 'test3' },
    { slug: 'next-image' },
  ];
}

export const dynamicParams = false;
