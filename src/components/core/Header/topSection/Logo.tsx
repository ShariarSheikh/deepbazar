import Link from 'next/link';

const Logo = () => {
  return (
    <div className="lg:pr-5 ml-7 lg:ml-0">
      <p className="cursor-pointer font-bold text-lg sm:text-2xl text-gray-800">
        <Link href="/" passHref>
          DeepBazar
        </Link>
      </p>
    </div>
  );
};

export default Logo;
