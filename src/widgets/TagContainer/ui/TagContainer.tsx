export const TagContainer = () => {
  const tags = ['zustand', 'tanstack-query'];

  return (
    <aside
      aria-labelledby="tags-section"
      className="relative hidden border-l border-gray-100 px-16 md:block"
    >
      <div className="sticky top-100">
        <h2 id="tags-section" className="sr-only">
          관련 태그
        </h2>
        <h3 className="py-4 text-16 font-semibold text-green-300">태그</h3>
        <ul className="flex flex-col gap-4 text-14 font-medium">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-400"
            >
              <button
                type="button"
                className="tag-button"
                aria-label={`태그: ${tag}`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TagContainer;
