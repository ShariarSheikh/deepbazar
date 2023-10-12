import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import GroupList from './GroupList';
import actionsList, { SellerSidebarActionList } from './navLinks';
import { isMatchEndPoint } from './utils';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/authSlice';

//---------------------------------------------------

//---------------------------------------------------

function SellerSidebar() {
  const [NavLinks, setNavLinks] =
    useState<SellerSidebarActionList[]>(actionsList);

  const dispatch = useDispatch();
  const pathname = usePathname();

  const logOutHandler = () => {
    dispatch(logout());
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

  //
  return (
    <div className="h-full pl-2 pr-[2px] py-3 bg-white duration-200 w-full relative shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <aside
        className={`w-full h-full overflow-y-auto invisible-scrollbar visible-scrollbar-onHover`}
      >
        <div className="w-full max-w-[247px] mx-auto flex flex-col justify-between">
          <ul className="mt-2">
            <div
              className={`w-full pl-3 relative flex items-center justify-start bg-primary rounded-[6px] mb-[30px] h-[50px] text-lg`}
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
                   
                     flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px flex items-center hover:bg-primary hover:bg-opacity-[10%] mb-1 group`}
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
                    data={navLink}
                    handleGroup={handleGroup}
                  />
                );
            })}
          </ul>

          <div className="w-full mt-8">
            <div className="relative w-full h-[120px] overflow-hidden rounded-[6px]">
              <Image
                src="https://i.ibb.co/0sf9GXN/Deep-Bazar.png"
                alt="abc"
                fill
                objectFit="cover"
              />
            </div>

            <button
              onClick={logOutHandler}
              className={`w-full mt-[40px] flex items-center bg-red-600 bg-opacity-[10%] hover:bg-opacity-[20%] mb-1 group flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]`}
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
