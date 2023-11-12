import Button from '@/components/common/Button';
import { SellerProductList } from '@/types/product.types';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { productStatusStyle } from './utils';
import dateFormat from '@/utils/dateFormat';
import CustomModal from '@/components/common/CustomModal';

interface ProductListProps {
  deleteHandler: (productId: string) => void;
  editHandler: (productId: string) => void;
  products: SellerProductList[];
  isLoadingDelete: boolean;
}

function ProductListTable({
  products,
  deleteHandler,
  editHandler,
  isLoadingDelete,
}: ProductListProps): JSX.Element {
  return (
    <div className="w-full h-full bg-white mt-3 md:mt-5 rounded-[16px]">
      {/* <div className="w-full flex md:pb-3">
        <div className="w-full flex items-center h-[48px] bg-[#F9FAFB] border border-gary-200 rounded-md relative">
          <AiOutlineSearch className="text-gray-500 w-6 h-6 ml-4" />
          <Input
            className="w-full h-full border-none"
            containerClassName="w-full h-full"
            placeholder="Search product"
          />
        </div>
      </div> */}

      <div className="w-full h-full overflow-x-auto border-t border-gray-200 pt-5 min-h-[300px]">
        <div className="overflow-x-auto min-w-[440px] flex justify-between items-center w-full h-[48px] px-[18px] bg-primaryLight mb-[10px]">
          <div className="w-full max-w-[210px] min-w-[210px]">
            <h3 className="text-[13px] text-gray-600 font-semibold ml-[16px]">
              Product
            </h3>
          </div>

          <div className="flex items-center">
            <div className="min-w-[170px]">
              <h3 className="text-[13px] text-gray-600 font-semibold">
                Status
              </h3>
            </div>

            <div className="w-full min-w-[160px] max-w-[160px]">
              <h3 className="text-[13px] text-gray-600 font-semibold min-w-[96px]">
                Create At
              </h3>
            </div>

            <div className="w-full min-w-[118px] max-w-[118px]">
              <h3 className="text-[13px] text-gray-600 font-semibold">
                Sell Price
              </h3>
            </div>
          </div>
        </div>

        {products.map(product => (
          <List
            key={product._id}
            product={product}
            isLoadingDelete={isLoadingDelete}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListTable;

interface ListProps {
  product: SellerProductList;
  deleteHandler: (productId: string) => void;
  editHandler: (productId: string) => void;
  isLoadingDelete: boolean;
}

const List: FC<ListProps> = ({
  product,
  deleteHandler,
  editHandler,
  isLoadingDelete,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isDeleteModel, setIsDeleteModel] = useState<boolean>(false);

  const onMenuHandler = (isOpen: boolean): void => {
    setShowMenu(isOpen);
  };

  return (
    <>
      <div
        key={product._id}
        className="min-w-[440px] flex start items-center justify-between w-full h-[45px] px-[18px] border-b border-gray-200 hover:bg-primaryLight group duration-150 mb-[12px]"
      >
        <div className="h-full max-w-[210px] w-full cursor-pointer">
          <Link href={`${product._id}`} passHref className="w-full h-full">
            <div className="flex items-center">
              <Image
                width={40}
                height={40}
                src={product.imgUrl}
                className="rounded-[8px]"
                alt={product.title}
              />
              <h3 className="text-[13px] line-clamp-1 text-gray-600 group-hover:text-gray-700 font-semibold ml-[16px]">
                {product.title}
              </h3>
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="w-full min-w-[170px]">
            <span
              className={`font-semibold ${productStatusStyle(product.status)}`}
            >
              {product.status}
            </span>
          </div>

          <div className="w-full min-w-[160px] max-w-[160px]">
            <span className="text-[13px] text-gray-600 font-semibold">
              {dateFormat(product.createdAt)}
            </span>
          </div>

          <div className="relative w-full min-w-[118px] flex items-center">
            <h3 className="text-[13px] text-gray-600 font-semibold">
              {product.price}
            </h3>
            <Button
              onClick={() => onMenuHandler(true)}
              className={`${
                showMenu ? 'bg-primary text-white' : ''
              } ml-1 rounded-full overflow-hidden flex items-center justify-center w-[28px] h-[28px] hover:bg-primary hover:text-white group active:scale-95 duration-200 relative`}
            >
              <HiOutlineDotsVertical className="" />
            </Button>
            <AnimatePresence>
              {showMenu && (
                <ClickAwayListener onClickAway={() => onMenuHandler(false)}>
                  <motion.div
                    initial={{ x: 1, y: -1, opacity: 0 }}
                    animate={{ x: -65, y: 25, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-50 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[150px] h-[100px] absolute right-[24px] p-2 rounded-[12px] 
              after:content-[''] after:w-3 after:h-3 after:absolute after:bg-white after:shadow-z12 after:top-[19px] after:-right-[7px] after:rotate-45"
                  >
                    <Button
                      onClick={() => editHandler(product._id)}
                      className="h-[40px] flex items-center space-x-2 text-start font-normal text-sm rounded-[8px] w-full mb-1 py-[9px] px-4 hover:bg-primary hover:bg-opacity-[8%] active:scale-95 duration-200"
                    >
                      <MdModeEditOutline /> <span>Edit</span>
                    </Button>
                    <Button
                      onClick={() => setIsDeleteModel(true)}
                      disabled={isLoadingDelete}
                      isLoading={isLoadingDelete}
                      loadingColor="red"
                      loadingSpinnerSize={40}
                      className="h-[40px] flex text-red-600 items-center space-x-2 text-start font-normal text-sm rounded-[8px] w-full mb-1 py-[9px] px-4 hover:bg-red-600 hover:bg-opacity-[8%] active:scale-95 duration-200"
                    >
                      <RiDeleteBinLine /> <span>Delete</span>
                    </Button>
                  </motion.div>
                </ClickAwayListener>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <CustomModal
        boxStyle={{ width: 350 }}
        onClose={() => setIsDeleteModel(false)}
        isOpen={isDeleteModel}
      >
        <div className="w-[300px] flex flex-col justify-end">
          <h3 className="py-[3px]">
            To delete product press the confirm button!
          </h3>
          <Button
            disabled={isLoadingDelete}
            isLoading={isLoadingDelete}
            loadingColor="white"
            loadingSpinnerSize={40}
            onClick={() => deleteHandler(product._id)}
            className="bg-red-600 mt-[16px] max-w-[134.89px] w-full rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] h-[33px]"
          >
            Confirm Delete
          </Button>
        </div>
      </CustomModal>
    </>
  );
};
