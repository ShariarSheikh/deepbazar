import Link from 'next/link';

const DeepBazar = () => {
  return (
    <div className="flex-grow lg:pt-4 w-2/4 sm:w-[30%] md:w-1/4">
      <div className="w-full text-gray-200">
        <p className="cursor-pointer font-bold text-lg sm:text-2xl text-gray-50">
          <Link href="/" passHref>
            DeepBazar
          </Link>
        </p>

        <p className="lg:mt-10 mt-4 text-sm md:text-base text-gray-200 font-semibold">
          Join Us in Social <br className="md:hidden" /> Network
        </p>
        <div className="h-10 flex items-center justify-start w-full space-x-3">
          <span className="text-gray-100 cursor-pointer hover:scale-105 duration-200 pr-3">
            F
          </span>
          |
          <span className="text-gray-100 cursor-pointer hover:scale-105 duration-200 pr-3">
            T
          </span>
          |
          <span className="text-gray-100 cursor-pointer hover:scale-105 duration-200 pr-3">
            L
          </span>
        </div>
        <p className="mt-3 font-semibold text-sm md:text-base">
          ◽ +880-17720****
        </p>
        <p className="lg:mt-16 mt-8 text-yellow-500 text-sm md:text-base">
          Created by <a href="http://shariar.vercel.app"> Shariar </a>
        </p>
      </div>
    </div>
  );
};

export default DeepBazar;
