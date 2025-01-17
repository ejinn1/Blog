import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-beige-100 mt-50 flex min-h-60 items-center justify-center text-14 md:mt-120">
      <Link
        href="https://github.com/ejinn1"
        className="flex items-center space-x-4"
      >
        <Image
          src="/svg/ic-github.svg"
          width={20}
          height={20}
          alt="GitHub Icon"
        />
        <span className="text-12 font-medium text-gray-300">ejinn1</span>
      </Link>
    </footer>
  );
};

export default Footer;
