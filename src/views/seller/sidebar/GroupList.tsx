import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
// icons
import { BsDot } from 'react-icons/bs';
// types
import { SellerSidebarActionList } from './navLinks';
//
import useActiveLink from '@/hooks/isActiveLink';
import { isMatchEndPoint } from './utils';

//--------------------------------------------

//--------------------------------------------
interface IGroupList {
  data: SellerSidebarActionList;
  ExpendSidebar: boolean;
  handleGroup: ({
    text,
    isExpend,
  }: {
    text: string;
    isExpend?: boolean;
  }) => void;
  setExpendSidebar: Dispatch<SetStateAction<boolean>>;
}
//--------------------------------------------

//--------------------------------------------

function GroupList({
  data,
  handleGroup,
  ExpendSidebar,
  setExpendSidebar,
}: IGroupList) {
  // const [showOnHover, setShowOnHover] = useState<boolean>(false);
  const { id, text, Icon, child, link, height, isExpend } = data;

  const pathname = usePathname();
  const { isParentsActive } = useActiveLink({
    path: pathname,
    parentsLink: link,
  });

  const openGroupLink = (): void => {
    if (ExpendSidebar) {
      return handleGroup({ text, isExpend: !isExpend });
    }

    handleGroup({ text, isExpend: true });
    return setExpendSidebar(true);
  };

  // const isShowGroupLinkWithHover = (isShow: boolean): void => {
  //   setShowOnHover(isShow);
  // };

  // console.log(showOnHover);

  //
  return (
    <li role="presentation" key={id} className="w-fll relative mb-1">
      {/* CHILD TO OPEN */}
      <div
        role="presentation"
        onClick={openGroupLink}
        className={`
          ${
            isParentsActive
              ? 'bg-primaryMain bg-opacity-[8%] hover:bg-opacity-[12%] [&>span]:text-gray-800 [&>svg]:text-gray-800'
              : ''
          }
          ${
            ExpendSidebar
              ? 'flex-row h-12 [&>span]:ml-[16px] text-sm rounded-md pl-[18px] pr-[12px]'
              : 'flex-col justify-evenly w-[74px] min-h-[54px] [&>span]:text-[10px] rounded-lg'
          }
          w-full flex cursor-pointer items-center group relative
          `}
      >
        <Icon className="text-gray-800 group-hover:text-gray-800 w-6 h-6" />
        <span
          className={`${ExpendSidebar ? 'justify-between' : 'justify-center'}
          text-gray-800 group-hover:text-gray-800 flex items-center w-full `}
        >
          {text}

          {isExpend ? (
            <MdKeyboardArrowDown
              className={`${ExpendSidebar ? '' : 'absolute top-1/3 right-2'}`}
            />
          ) : (
            <MdKeyboardArrowRight
              className={`${ExpendSidebar ? '' : 'absolute top-1/3 right-2'}`}
            />
          )}
        </span>
      </div>

      {/* LIST CONTAINER */}
      <ul
        className={`${isExpend ? height : 'h-0'} overflow-hidden duration-200`}
      >
        {child.map(childAction => (
          <li key={childAction.id}>
            <Link
              passHref
              href={childAction.link}
              className={`
                ${
                  isMatchEndPoint(childAction.link, pathname)
                    ? '[&>span]:text-gray-800 [&>svg]:text-gray-800 font-semibold duration-200 ease-in-out'
                    : ''
                }
                pl-[18px] pr-[12px] h-9 flex items-center hover:bg-primaryLight hover:bg-opacity-[8%] cursor-pointer rounded-md`}
            >
              <div className="overflow-hidden flex items-center justify-center h-[30px] w-[30px]">
                <BsDot
                  className={
                    isMatchEndPoint(childAction.link, pathname)
                      ? 'w-8 h-8 text-gray-800'
                      : ''
                  }
                />
              </div>

              <span className="text-gray-800 group-hover:text-gray-800 text-sm ml-2">
                {childAction.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* <AnimatePresence>
        {showOnHover && !ExpendSidebar && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            exit={{ opacity: 0 }}
            className="w-[181px] shadow-lg z-50 rounded-md bg-white absolute top-0 backdrop-blur-sm bg-white/80"
          >
            <ul className={`${height}`}>
              {child.map((childAction) => (
                <li
                  key={childAction.id}
                  className="text-start flex items-center pl-2 h-9 rounded-md hover:bg-primary-0 text-black-80 hover:bg-opacity-60 cursor-pointer text-sm"
                >
                  <Link
                    passHref
                    href={childAction.link}
                    className={`rounded-md
                      ${
                        isMatchEndPoint(childAction.link, pathname)
                          ? 'text-gray-800 font-medium duration-200 ease-in-out'
                          : 'font-normal'
                      }`}
                  >
                    {childAction.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </li>
  );
}

export default GroupList;
