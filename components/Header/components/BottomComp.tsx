import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "All Products",
    link: "/shop",
  },
  {
    id: 3,
    name: "Customer Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Help Center",
    link: "/help",
  },
];

const BottomComp = () => {
  const router = useRouter();

  return (
    <nav className="w-full  overflow-x-scroll hide-scrollbar px-4 2xl:px-0 h-10 py-6 border-b border-gray-300">
      <div className="w-full h-full flex items-center justify-between min-w-[600px] ">
        {/* left navigation div */}
        <div className="flex h-full items-center">
          {links.slice(0, 2).map(({ id, name, link }) => (
            <Link href={link} key={id} passHref>
              <a
                className={`font-roboto font-semibold text-sm text-gray-800 cursor-pointer
              transition duration-200 p-2 hover:border-b-2 border-gray-900 ${
                router.pathname === link ? "border-b-2 border-gray-900" : ""
              }`}
              >
                {name}
              </a>
            </Link>
          ))}
          <div
            className="flex items-center font-roboto font-semibold text-sm text-gray-800
           cursor-pointer p-2"
          >
            Categories <RiArrowDropDownLine className="text-xl" />
          </div>
          {/* //.... */}
          {links.slice(2, 4).map(({ id, name, link }) => (
            <Link href={link} key={id} passHref>
              <a className="font-roboto font-semibold text-sm text-gray-800 cursor-pointer transition duration-200 p-2">
                {name}
              </a>
            </Link>
          ))}
        </div>
        {/* any random things */}
        <div className="font-semibold pr-5 md:pr-0">Covid-19</div>
      </div>
    </nav>
  );
};

export default BottomComp;
