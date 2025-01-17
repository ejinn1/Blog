interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <span className="transition-colors-base rounded-12 bg-gray-100 px-8 py-4 text-12 group-hover:bg-green-100">
      {tag}
    </span>
  );
};

export default Tag;
