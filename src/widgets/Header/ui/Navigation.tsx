import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="https://github.com/ejinn1/blog"
            className="hover:underline"
          >
            <span className="text-14 text-gray-300">Github</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
