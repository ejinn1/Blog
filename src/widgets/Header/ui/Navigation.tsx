import Image from 'next/image';
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
            <Image
              src="/svg/ic-github.svg"
              width={24}
              height={24}
              alt="Github Icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
