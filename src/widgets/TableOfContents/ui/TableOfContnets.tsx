'use client';

import { useEffect, useState } from 'react';

import { TocItem } from '../model/types';

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3');
    const items: TocItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: Number(element.tagName.charAt(1)),
    }));

    setHeadings(items);
  }, []);

  return (
    <nav className="sticky top-100 ml-20 mt-20 hidden h-max w-250 rounded-20 bg-beige-300 px-10 py-15 dark:bg-gray-400/20 lg:block">
      <p className="transition-colors-base pb-10 text-center font-bold text-gray-400 dark:text-white">
        Table Of Contents
      </p>
      <ul className="space-y-4 text-13 font-medium text-black dark:text-gray-100">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
            className="transition-colors-base hover:text-green-400 dark:hover:text-green-200"
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
