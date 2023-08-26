import Link from 'next/link';

const Logo = () => {
  return (
    <div className="lg:pr-5 ml-7 lg:ml-0">
      <h1 className="cursor-pointer font-bold text-lg sm:text-2xl text-primary">
        <Link href="/" passHref>
          DeepBazar
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
