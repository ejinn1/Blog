import { CustomMetadata } from '@/shared/types/meta';
import Tag from '@/shared/ui/Tag';

interface BlogHeaderProps {
  meta: CustomMetadata;
  tags: string[];
}

const BlogHeader = ({ meta, tags }: BlogHeaderProps) => {
  return (
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
  );
};

export default BlogHeader;
