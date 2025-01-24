import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="bg-beige-100 mt-50 min-h-60 text-14 dark:bg-black">
      <div className="flex-between mx-auto max-w-700">
        <Link
          href="https://github.com/ejinn1"
          className="text-black dark:text-gray-100"
        >
          ejinn1
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
