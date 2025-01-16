import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex-center bg-beige-100 mt-120 min-h-60 text-14">
      <Link href="https://github.com/ejinn1">
        <div className="flex items-center gap-8">
          <Image
            src="/svg/ic-github.svg"
            width={24}
            height={24}
            alt="github-icon"
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
