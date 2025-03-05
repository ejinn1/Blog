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
            <GithubIcon className="hover-bg-base size-32 rounded-8 p-4 text-black  dark:text-gray-300 dark:hover:text-gray-200" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
