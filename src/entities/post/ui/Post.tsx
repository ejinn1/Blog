import Link from 'next/link';

import Tag from '@/entities/tag/ui/Tag';
import { CustomMetadata } from '@/shared/types/meta';
import { getTags } from '@/shared/util/getTags';

interface PostProps {
  slug: string;
  meta: CustomMetadata;
}

const Post = ({ slug, meta }: PostProps) => {
  const { title, description, date, keywords } = meta;
  const tags = getTags(keywords);

  return (
    <div className="group cursor-pointer p-16">
      <Link href={`/blog/${slug}`}>
        <h2 className="transition-colors-base text-20 font-semibold group-hover:text-green-400">
          {title}
        </h2>
        <p className="text-13 font-medium text-gray-300">{description}</p>
        <div className="mt-16 flex items-center">
          <p className="mr-20 text-12 text-gray-200">{date}</p>
          <div className="flex items-center gap-4 pb-4">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
