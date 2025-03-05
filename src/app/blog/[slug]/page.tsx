import { Metadata } from 'next';
import { ComponentType } from 'react';

import { getSlug } from '@/shared/lib/getSlug';
import { CustomMetadata } from '@/shared/types/meta';
import { getTags } from '@/shared/util/getTags';
import BlogHeader from '@/widgets/BlogHeader';
import TableOfContents from '@/widgets/TableOfContents';

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
    title: meta.title + ' | 의진 블로그',
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

export default async function BlogPage({ params }: BlogPageProps) {
  const slug = (await params).slug;
  const { default: Content, meta } = (await import(
    `@/content/${slug}.mdx`
  )) as {
    default: ComponentType;
    meta: CustomMetadata;
  };
  const tags = getTags(meta.keywords);

  return (
    <div className="size-full max-w-1000">
      <BlogHeader meta={meta} tags={tags} slug={slug} />
      <div className="flex size-full">
        <article className="prose size-full px-16 py-24 dark:prose-invert md:w-750">
          <Content />
        </article>
        <TableOfContents />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getSlug();
}

export const dynamicParams = false;
