import { Metadata } from 'next';
import { ComponentType } from 'react';

import { getSlug } from '@/shared/lib/getSlug';
import { CustomMetadata } from '@/shared/types/meta';
import Tag from '@/shared/ui/Tag';
import { getTags } from '@/shared/util/getTags';
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
  const tags = getTags(meta.keywords);

  return (
    <div className="size-full max-w-1000">
      <header className="prose mx-auto w-full max-w-1000 border-b border-gray-100 p-16 dark:prose-invert dark:border-gray-400">
        <h1 className="text-24 font-semibold">{meta.title}</h1>
        <p className="text-16 font-medium text-gray-400 dark:text-gray-200">
          {meta.description}
        </p>
        <div className="mt-16 flex items-center">
          <p className="mr-20 text-12 text-gray-200">{meta.date}</p>
          <div className="flex items-center gap-4 pb-4">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </header>
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
