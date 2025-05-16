import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="lg:pr-5 ml-[16px]">
      {/* <h1 className="cursor-pointer font-bold text-lg sm:text-2xl text-primary">
        <Link href="/" passHref>
          DeepBazar
        </Link>
      </h1> */}

      <Link href="/" passHref>
        <div className="relative w-[100px] h-[70px]">
          <Image
            src={logo.src} // Replace with your actual logo path
            alt="DeepBazar Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
