import Image from 'next/image';
import Link from 'next/link';

import { CustomMetadata } from '@/shared/types/meta';

interface PostProps {
  slug: string;
  meta: CustomMetadata;
}

const Post = ({ slug, meta }: PostProps) => {
  const { title, description, date } = meta;

  return (
    <div className="transition-all-base w-full cursor-pointer rounded-12 bg-beige-300 hover:bg-beige-400/60 dark:bg-gray-400/20 dark:hover:bg-gray-400/40">
      <Link href={`/blog/${slug}`}>
        <Image
          src={`/img/thumbnail/${slug}.png`}
          width={100}
          height={100}
          quality={100}
          className="w-full rounded-t-12"
          alt={`${title} thumbnail image`}
        />
        <div className="flex h-150 flex-col justify-between p-16">
          <div>
            <h2 className="transition-colors-base text-18 font-semibold dark:text-white">
              {title}
            </h2>
            <p className="text-13 font-medium text-gray-300 dark:text-gray-200">
              {description}
            </p>
          </div>
          <p className="text-end text-12 text-gray-200">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
