import useActiveLink from '@/hooks/isActiveLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { BsDot } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { SellerSidebarActionList } from './navLinks';
import { isMatchEndPoint } from './utils';

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

function GroupList({
  data,
  handleGroup,
  ExpendSidebar,
  setExpendSidebar,
}: IGroupList) {
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
              ? 'bg-primary bg-opacity-[8%] hover:bg-opacity-[12%] [&>span]:text-gray-800 [&>svg]:text-gray-800'
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
    </li>
  );
}

export default GroupList;
