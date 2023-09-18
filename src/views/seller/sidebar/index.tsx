import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import GroupList from './GroupList';
import actionsList, { SellerSidebarActionList } from './navLinks';
import { isMatchEndPoint } from './utils';

//---------------------------------------------------

//---------------------------------------------------

function SellerSidebar() {
  const [NavLinks, setNavLinks] =
    useState<SellerSidebarActionList[]>(actionsList);
  const [ExpendSidebar, setExpendSidebar] = useState<boolean>(true);

  const pathname = usePathname();

  // GROUP Link HANDLER
  const handleGroup = ({
    text,
    isExpend,
  }: {
    text: string;
    isExpend?: boolean;
  }): void => {
    const findIndex = NavLinks.findIndex(nav => nav.text === text);

    if (findIndex < 0) return undefined;

    const newArray = [...NavLinks];
    newArray[findIndex] = {
      ...newArray[findIndex],
      isExpend,
    };
    return setNavLinks(newArray);
  };

  // Expended Handler
  const expendedHandler = () => {
    setExpendSidebar(!ExpendSidebar);

    const newList = NavLinks.map(nav => {
      if (nav.isExpend) {
        return {
          ...nav,
          isExpend: false,
        };
      }
      return nav;
    });

    setNavLinks(newList);
  };

  //
  return (
    <div
      className={`
       ${ExpendSidebar ? 'w-[280px] pl-2 pr-[2px]' : 'w-[87px] px-[3px]'} 
        py-3 border-r borderColor border-dashed bg-white duration-200 w-full h-screen relative`}
    >
      <button
        onClick={expendedHandler}
        className="w-[28px] h-[28px] rounded-full border borderColor border-dashed flex justify-center items-center absolute -right-4 top-9 bg-white"
      >
        {ExpendSidebar ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
      </button>

      <aside
        className={`w-full h-full overflow-y-auto
        ${
          ExpendSidebar
            ? 'invisible-scrollbar visible-scrollbar-onHover'
            : 'px-[2px] invisible-scrollbar pb-10'
        }
        `}
      >
        <div className="w-full max-w-[247px] mx-auto flex flex-col justify-between">
          <ul className="mt-6">
            <div
              className={`
            ${
              ExpendSidebar
                ? 'rounded-3xl h-[50px]'
                : 'rounded-full h-[60px] w-[60px]'
            }
            w-full pl-3 relative flex items-start justify-start`}
            >
              <h1 className="cursor-pointer font-bold text-lg sm:text-2xl text-primary">
                <Link href="/" passHref>
                  DeepBazar
                </Link>
              </h1>
            </div>
            {NavLinks.map(navLink => {
              // Single LINK
              if (navLink.type === 'link' && navLink.link && navLink.id !== 4)
                return (
                  <li key={navLink.id}>
                    <Link
                      href={navLink.link}
                      passHref
                      className={`
                      ${
                        isMatchEndPoint(navLink.link, pathname)
                          ? 'bg-primary bg-opacity-[8%] [&>span]:text-gray-800 [&>svg]:text-gray-800 font-semibold'
                          : ''
                      }
                      ${
                        ExpendSidebar
                          ? 'flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]'
                          : 'flex-col justify-evenly w-[74px] h-[54px] [&>span]:text-[10px] rounded-lg'
                      }
                      flex items-center hover:bg-primary hover:bg-opacity-[10%] mb-1 group`}
                    >
                      <navLink.Icon className="text-gray-800 group-hover:text-gray-900 w-6 h-6" />
                      <span className=" text-gray-800 text-center group-hover:text-gray-900 line-clamp-1">
                        {navLink.text}
                      </span>
                    </Link>
                  </li>
                );

              // Group Link
              if (navLink.type === 'list')
                return (
                  <GroupList
                    key={navLink.id}
                    setExpendSidebar={setExpendSidebar}
                    data={navLink}
                    handleGroup={handleGroup}
                    ExpendSidebar={ExpendSidebar}
                  />
                );
            })}
          </ul>

          <div className="w-full mt-8">
            {ExpendSidebar && (
              <div className="relative w-full h-[400px] overflow-hidden rounded-[6px]">
                <Image
                  src="https://i.ibb.co/0sf9GXN/Deep-Bazar.png"
                  alt="abc"
                  fill
                />
              </div>
            )}

            <div key={NavLinks[3].id} className="mt-[20px]">
              <Link
                href={NavLinks[3].link}
                passHref
                className={`
                      ${
                        isMatchEndPoint(NavLinks[3].link, pathname)
                          ? 'bg-primary bg-opacity-[8%] [&>span]:text-gray-800 [&>svg]:text-gray-800 font-semibold'
                          : ''
                      }
                      ${
                        ExpendSidebar
                          ? 'flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]'
                          : 'flex-col justify-evenly w-[74px] h-[54px] [&>span]:text-[10px] rounded-lg'
                      }
                      flex items-center hover:bg-primary hover:bg-opacity-[10%] mb-1 group`}
              >
                <FiSettings className="text-gray-800 group-hover:text-gray-900 w-6 h-6" />
                <span className=" text-gray-800 text-center group-hover:text-gray-900 line-clamp-1">
                  {NavLinks[3].text}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SellerSidebar;
