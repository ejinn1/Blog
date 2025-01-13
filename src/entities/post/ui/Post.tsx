import Link from 'next/link';

interface PostProps {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  date: string;
}

const Post = ({ slug, title, description, tags = [], date }: PostProps) => {
  return (
    <div className="group cursor-pointer p-16">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-20 font-semibold transition-colors duration-300 ease-in-out group-hover:text-green-400">
          {title}
        </h2>
        <p className="text-13 font-medium text-gray-300">{description}</p>
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
        <p className="mt-16 text-12 text-gray-200">{date}</p>
      </Link>
    </div>
  );
};

export default Post;
