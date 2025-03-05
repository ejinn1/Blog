import Image from 'next/image';

import { CustomMetadata } from '@/shared/types/meta';
import Tag from '@/shared/ui/Tag';

interface BlogHeaderProps {
  meta: CustomMetadata;
  tags: string[];
  slug: string;
}

const BlogHeader = ({ meta, tags, slug }: BlogHeaderProps) => {
  const { title, description, date } = meta;

  return (
    <header className="prose mx-auto w-full max-w-1000 border-b border-gray-100 p-16 dark:prose-invert dark:border-gray-400">
      <h1 className="bottom-0 text-24 font-semibold">{title}</h1>
      <Image
        src={`/img/thumbnail/${slug}.png`}
        width={100}
        height={100}
        layout="responsive"
        quality={100}
        className="rounded-12"
        alt={`${title} thumbnail image`}
      />

      <p className="text-16 font-medium text-gray-400 dark:text-gray-200">
        {description}
      </p>
      <p className="ml-4 text-12 text-gray-200">{date}</p>
      <div className="flex items-center gap-4 pb-4">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </header>
  );
};

export default BlogHeader;
