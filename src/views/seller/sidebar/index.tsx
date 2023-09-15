import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
        className={`
        ${
          ExpendSidebar
            ? 'invisible-scrollbar visible-scrollbar-onHover'
            : 'px-[2px] invisible-scrollbar pb-10'
        }
         w-full h-full flex flex-col justify-between overflow-y-auto`}
        aria-label="Sidebar"
      >
        <div className="mt-4 w-full max-w-[247px] mx-auto">
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

          {/* navigation list */}
          <ul className="mt-10">
            {NavLinks.map(
              ({
                id,
                Icon,
                text,
                type,
                link,
                child,
                height,
                isExpend,
                searchText,
              }) => {
                // LINK
                if (type === 'link' && link)
                  return (
                    <li key={id}>
                      <Link
                        href={link}
                        passHref
                        className={`
                      ${
                        isMatchEndPoint(link, pathname)
                          ? 'bg-primaryMain bg-opacity-[8%] [&>span]:text-gray-800 [&>svg]:text-gray-800 font-semibold'
                          : ''
                      }
                      ${
                        ExpendSidebar
                          ? 'flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]'
                          : 'flex-col justify-evenly w-[74px] h-[54px] [&>span]:text-[10px] rounded-lg'
                      }
                      flex items-center hover:bg-primaryMain hover:bg-opacity-[10%] mb-1 group`}
                      >
                        <Icon className="text-gray-800 group-hover:text-gray-900 w-6 h-6" />
                        <span className=" text-gray-800 text-center group-hover:text-gray-900 line-clamp-1">
                          {text}
                        </span>
                      </Link>
                    </li>
                  );

                // CONTAIN LIST
                if (type === 'list')
                  return (
                    <GroupList
                      key={id}
                      setExpendSidebar={setExpendSidebar}
                      data={{
                        id,
                        Icon,
                        text,
                        type,
                        link,
                        child,
                        height,
                        isExpend,
                        searchText,
                      }}
                      handleGroup={handleGroup}
                      ExpendSidebar={ExpendSidebar}
                    />
                  );

                // onClick handle link
                return (
                  <li key={id}>
                    <div className="h-12 flex items-center hover:bg-primary-0 hover:bg-opacity-60 pl-[18px] pr-[12px] rounded-md group">
                      <Icon className="text-primary-60 group-hover:text-primary-main-80 w-6 h-6" />
                      {isExpend && (
                        <span className="ml-[16px] text-primary-60 group-hover:text-primary-main-80 text-sm">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* {ExpendSidebar && (
          <div className="px-[10px]">
            <div className="relative w-full h-40 my-10">
              <Image src={sidebarBottomIllustration} alt="abc" />
            </div>
          </div>
        )} */}
      </aside>
    </div>
  );
}

export default SellerSidebar;
