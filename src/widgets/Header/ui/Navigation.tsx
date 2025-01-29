'use client';

import Link from 'next/link';

import GithubIcon from '@/shared/svg/ic-github-cat.svg';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="https://github.com/ejinn1/blog"
            className="hover:underline"
          >
            <GithubIcon className="transition-colors-base text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
