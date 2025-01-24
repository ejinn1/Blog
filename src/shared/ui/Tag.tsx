interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <span className="transition-colors-base rounded-12 bg-gray-100 px-8 py-4 text-12 font-medium text-gray-300 group-hover:bg-green-100 dark:bg-black dark:text-gray-100 dark:group-hover:bg-black dark:group-hover:text-green-100">
      {tag}
    </span>
  );
};

export default Tag;
