import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="text-18 font-bold text-gray-200 dark:text-beige-100 md:text-20">
      <Link href="/">
        <Image
          src="/img/img-clover.png"
          width="32"
          height="32"
          alt="logo"
          className="hover-bg-base rounded-8 p-4 dark:text-gray-300 dark:hover:text-gray-200"
        />
      </Link>
    </div>
  );
}
