'use client';

import { useToc } from '../model/useToc';
import TopButton from './TopButton';

import { cn } from '@/shared/util/className';

const TableOfContents = () => {
  const { headings, activeId, handleClickHeading } = useToc();

  const tocClassName = (id: string) =>
    cn(
      'rounded-4 px-4 transition-all duration-300 ease-in-out',
      activeId === id
        ? 'text-[13.5px] font-bold text-green-400 dark:text-green-200'
        : 'hover:bg-green-200/30 dark:hover:bg-green-200/20 dark:hover:text-gray-100',
    );

  return (
    <div className="sticky top-100 ml-20 mt-20 hidden h-max w-230 rounded-12 bg-beige-300 dark:bg-gray-400/20 lg:block">
      <nav className="px-4 pt-16">
        <p className="transition-colors-base pb-10 pl-12 text-start font-bold text-gray-400 dark:text-white">
          목차
        </p>
        <ul className="space-y-4 text-13 font-medium text-gray-400 dark:text-gray-200">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClickHeading(e, heading.id)}
                className={tocClassName(heading.id)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-full items-center justify-end p-10">
        <TopButton />
      </div>
    </div>
  );
};

export default TableOfContents;
