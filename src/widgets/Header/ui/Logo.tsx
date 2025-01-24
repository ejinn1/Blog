import Link from 'next/link';

export default function Logo() {
  return (
    <div className="dark:text-beige-100 text-18 font-bold text-gray-200 md:text-20">
      <Link href="/">메모장</Link>
    </div>
  );
}
