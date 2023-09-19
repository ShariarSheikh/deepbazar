import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

interface ProductListType {
  id: string;
  commentUrl: string;
  name: string;
  createdAt: string;
  sellPrice: string;
  status: string;
}

export const pdList: ProductListType[] = [
  {
    id: '1',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'In Stock',
  },
  {
    id: '2',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'Low Stock',
  },
  {
    id: '3',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'Out Of Stock',
  },

  {
    id: '4',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'Out Of Stock',
  },
  {
    id: '5',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'Low Stock',
  },
  {
    id: '6',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'In Stock',
  },
  {
    id: '7',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'In Stock',
  },
  {
    id: '8',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'In Stock',
  },
  {
    id: '9',
    commentUrl:
      'https://res.cloudinary.com/oikko-foundation/image/upload/h_55,w_55/v1671991673/pgbdxqseavcsuuztw97l.webp',
    name: 'Hand Purse',
    createdAt: '02 Feb 2023',
    sellPrice: '৳ 550',
    status: 'Low Stock',
  },
];

interface ProductListProps {
  product: ProductListType;
}

function ProductList({ product }: ProductListProps): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onMenuHandler = (isOpen: boolean): void => {
    setShowMenu(isOpen);
  };

  return (
    <div
      key={product.id}
      className="flex justify-between items-center w-full h-[64px] px-[18px] hover:shadow-card group active:shadow-z1 duration-200"
    >
      <div className="min-h-[56px] max-w-[264px] w-full cursor-pointer">
        <Link href={`${product.id}`} passHref className="w-full h-full">
          <div className="flex items-center">
            <Image
              width={40}
              height={40}
              src={product.commentUrl}
              className="rounded-[8px] ml-[16px]"
              alt={product.name}
            />
            <h3 className="text-[13px] text-gray-600 group-hover:text-gray-700 font-semibold ml-[16px]">
              {product.name}
            </h3>
          </div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="w-full min-w-[96px]">
          <h3 className="text-[13px] text-gray-600 font-semibold">
            {product.createdAt}
          </h3>
        </div>

        <div className="relative w-full min-w-[96px] flex items-center">
          <h3 className="text-[13px] text-gray-600 font-semibold">
            {product.sellPrice}
          </h3>
          <button
            onClick={() => onMenuHandler(true)}
            className={`${
              showMenu ? 'bg-primary text-white' : ''
            } ml-1 rounded-full overflow-hidden flex items-center justify-center w-[28px] h-[28px] hover:bg-primaryLight group active:scale-75 duration-200 relative`}
          >
            <HiOutlineDotsVertical className="" />
          </button>
          <AnimatePresence>
            {showMenu && (
              <ClickAwayListener onClickAway={() => onMenuHandler(false)}>
                <motion.div
                  initial={{ x: 10, y: -10, opacity: 0 }}
                  animate={{ x: -65, y: 25, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="z-50 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[150px] h-[100px] absolute -right-[2px] p-2 rounded-[12px] 
                      after:content-[''] after:w-3 after:h-3 after:absolute after:bg-white after:shadow-z12 after:top-[19px] after:-right-[7px] after:rotate-45"
                >
                  <button className="h-[40px] flex items-center space-x-2 text-start font-normal text-sm rounded-[8px] w-full mb-1 py-[9px] px-4 hover:bg-primary hover:bg-opacity-[8%] active:scale-95 duration-200">
                    <MdModeEditOutline /> <span>Edit</span>
                  </button>
                  <button className="h-[40px] flex text-red-600 items-center space-x-2 text-start font-normal text-sm rounded-[8px] w-full mb-1 py-[9px] px-4 hover:bg-red-600 hover:bg-opacity-[8%] active:scale-95 duration-200">
                    <RiDeleteBinLine /> <span>Delete</span>
                  </button>
                </motion.div>
              </ClickAwayListener>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ProductList;