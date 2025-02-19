'use client';

import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

import GithubIcon from '@/shared/svg/ic-github-cat.svg';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <ThemeToggle />
        <li>
          <Link href="https://github.com/ejinn1/blog">
            <GithubIcon className="transition-colors-base size-32 rounded-8 p-4 text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-black dark:hover:text-gray-200" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
