import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import GroupList from './GroupList';
import actionsList, { SellerSidebarActionList } from './navLinks';
import { isMatchEndPoint } from './utils';

//---------------------------------------------------
interface IProps {
  expendSidebar: boolean;
  setIsExpendSidebar: Dispatch<SetStateAction<boolean>>;
}
//---------------------------------------------------

function SellerSidebar({ expendSidebar, setIsExpendSidebar }: IProps) {
  const [NavLinks, setNavLinks] =
    useState<SellerSidebarActionList[]>(actionsList);

  const pathname = usePathname();
  const { replace } = useRouter();

  const logOutHandler = () => {
    replace('/');
  };

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
    setIsExpendSidebar(!expendSidebar);

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
       ${expendSidebar ? 'pl-2 pr-[2px]' : 'max-w-[87px] px-[3px]'} 
        py-3 bg-white duration-200 w-full relative shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
    >
      <button
        onClick={expendedHandler}
        className="w-[28px] h-[28px] rounded-full border border-gray-200 border-dashed flex justify-center items-center absolute -right-4 top-9 bg-white"
      >
        {expendSidebar ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
      </button>

      <aside
        className={`w-full h-full overflow-y-auto
        ${
          expendSidebar
            ? 'invisible-scrollbar visible-scrollbar-onHover'
            : 'px-[2px] invisible-scrollbar pb-10'
        }
        `}
      >
        <div className="w-full max-w-[247px] mx-auto flex flex-col justify-between">
          <ul className="mt-2">
            <div
              className={`w-full pl-3 relative flex items-center justify-start bg-primary rounded-[6px] mb-[30px]
            ${
              expendSidebar
                ? 'h-[50px] text-lg'
                : 'h-[48px] w-[60px] text-[10px]'
            }
            `}
            >
              <h1 className="cursor-pointer font-bold text-white">
                <Link href="/" passHref>
                  DeepBazar
                </Link>
              </h1>
            </div>
            {NavLinks.map(navLink => {
              // Single LINK
              if (navLink.type === 'link' && navLink.link)
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
                        expendSidebar
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
                    setExpendSidebar={setIsExpendSidebar}
                    data={navLink}
                    handleGroup={handleGroup}
                    ExpendSidebar={expendSidebar}
                  />
                );
            })}
          </ul>

          <div className="w-full mt-8">
            <div
              style={{
                height: expendSidebar ? 400 : 80,
              }}
              className="relative w-full h-[400px] overflow-hidden rounded-[6px]"
            >
              <Image
                src="https://i.ibb.co/0sf9GXN/Deep-Bazar.png"
                alt="abc"
                fill
              />
            </div>

            <button
              onClick={logOutHandler}
              className={`w-full mt-[20px] flex items-center bg-red-600 bg-opacity-[10%] hover:bg-opacity-[20%] mb-1 group
                      ${
                        expendSidebar
                          ? 'flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]'
                          : 'flex-col justify-evenly w-[74px] h-[54px] [&>span]:text-[10px] rounded-lg'
                      }
                     `}
            >
              <BiLogOutCircle className="text-red-500 w-6 h-6" />
              <span className=" text-red-500 text-center line-clamp-1">
                LogOut
              </span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SellerSidebar;
