import Link from 'next/link';

const Category = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 sm:mt-0 w-2/4 sm:w-[30%] md:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">
          Category
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <Link
            href={{
              pathname: '/shop',
              query: {
                keyword: 'watch',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Watch
            </li>
          </Link>

          <Link
            href={{
              pathname: '/shop',
              query: {
                keyword: 'smart-phone',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Smart Phone
            </li>
          </Link>

          <Link
            href={{
              pathname: '/shop',
              query: {
                keyword: 'laptop',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Laptop
            </li>
          </Link>

          <Link
            href={{
              pathname: '/shop',
              query: {
                keyword: 'camera',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Camera
            </li>
          </Link>

          <Link
            href={{
              pathname: '/shop',
              query: {
                keyword: 'audio',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Audio
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Category;
