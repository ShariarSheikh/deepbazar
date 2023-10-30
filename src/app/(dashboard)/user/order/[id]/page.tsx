'use client';
import Link from 'next/link';
import {
  useDeleteOrderMutation,
  useGetOrderDetailsQuery,
} from '@/redux/services/orderApi';
import { LoadingPage } from '@/components/common/loading';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { AiOutlineDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PATH_USER } from '@/utils/routes';
import CustomModal from '@/components/common/CustomModal';

//-------------------------------------

//-------------------------------------

const Page = ({ params }: { params: { id: string } }) => {
  const getOrderDetails = useGetOrderDetailsQuery({ orderId: params.id });
  const [deleteOrder, deleteOrderApi] = useDeleteOrderMutation();
  const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);

  const router = useRouter();

  const deleteHandler = () => {
    deleteOrder({ orderId: params.id });
  };

  useEffect(() => {
    if (deleteOrderApi.isLoading) return;
    if (!deleteOrderApi.data?.data._id) return;
    router.replace(PATH_USER.order);
  }, [deleteOrderApi.isLoading]);

  return (
    <div className="w-full h-full p-1 mg:p-5 max-w-[1080px] mx-auto pt-3">
      <header>
        <h1 className="text-gray-600 font-medium">My Details</h1>
      </header>

      {getOrderDetails.isLoading && <LoadingPage />}

      {typeof getOrderDetails.data !== 'undefined' &&
        getOrderDetails.data.data._id && (
          <div className="w-full bg-white rounded-[6px] p-[16px] mt-2">
            <h1 className="text-xl font-semibold">Your Items</h1>

            <div className="w-full max-h-[395px] pb-4 overflow-y-auto invisible-scrollbar visible-scrollbar-onHover">
              {getOrderDetails.data.data.items?.map(item => (
                <div
                  key={item.productId}
                  className="w-full max-h-[180px] flex flex-row items-center relative border-b border-gray-300 pb-1 overflow-hidden"
                >
                  {/* img container  */}
                  <Link href={`/product/${item.productId}`}>
                    <div className="h-[150px] w-[185px] overflow-hidden relative rounded-[6px]">
                      <Image
                        fill
                        className="w-full h-full cursor-pointer hover:scale-110 duration-200"
                        src={item.imgUrl}
                        alt="cart items"
                      />
                    </div>
                  </Link>

                  {/* infoContainer */}
                  <div className="w-[60%] max-h-[280px] h-[180px] pl-3 ml-5 pb-2 py-3">
                    <div>
                      <Link href={`/product/${item.productId}`}>
                        <h2 className="font-medium text-[15px] text-gray-700 line-clamp-2">
                          {item.title}
                        </h2>
                      </Link>

                      <div className="mt-1 flex items-center justify-start space-x-2 text-[12px] lg:text-[13px] font-bold text-primary">
                        <span className="text-gray-600">
                          Price: $
                          {item.discountPrice > 0
                            ? item.discountPrice
                            : item.price}
                        </span>
                        {item.discountPrice > 0 && <del>${item.price}</del>}
                        {item.discountPercent > 0 && (
                          <span className="bg-primary text-white px-2 py-[1px] rounded-[6px]">
                            {item.discountPercent}%
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 mt-1 text-sm">
                        Total Price:
                        <span className="font-semibold">
                          <span className="font-medium text-sm pl-1">$</span>
                          {(
                            Number(
                              item.discountPrice > 0
                                ? item.discountPrice
                                : item.price
                            ) * Number(item.cartQuantity)
                          ).toFixed(2)}
                        </span>
                      </p>
                      <p className="text-gray-600 mt-1 text-sm">
                        Total Quantity: {item.cartQuantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-3">
              <h1 className="text-xl font-semibold pb-3 border-b border-gray-200">
                Order Summary
              </h1>

              <ul className="text-gray-600">
                <li className="flex items-center justify-between mb-[15px] mt-[15px]">
                  <span>Sub Total</span>
                  <span className="font-semibold">
                    ${getOrderDetails.data.data.subtotalAmount}
                  </span>
                </li>
                <li className="flex items-center justify-between mb-[12px]">
                  <span>Tax</span>
                  <span className="font-semibold">$0.00</span>
                </li>
                <li className="flex items-center justify-between mb-[12px]">
                  <span>Shipping</span>
                  <span className="font-semibold text-primary">Free</span>
                </li>
                <li className="flex items-center justify-between mb-[20px]">
                  <span>Total</span>
                  <span className="font-semibold">
                    ${getOrderDetails.data.data.totalAmount}
                  </span>
                </li>
              </ul>
              <div className="mt-3 flex items-center space-x-3 justify-end">
                <Button className="px-[16px] py-[6px] border border-primary flex items-center rounded-[6px] text-primary hover:text-white font-bold text-sm hover:bg-primary active:scale-95 duration-200">
                  Print
                </Button>

                <Button
                  onClick={() => setIsDeleteBox(true)}
                  className="px-[16px] py-[6px] border border-red-500 flex items-center rounded-[6px] text-red-500 hover:text-white font-bold text-sm hover:bg-red-600 active:scale-95 duration-200"
                >
                  <AiOutlineDelete className="ml-2 w-5 h-5" />
                  <span>Delete</span>
                </Button>
              </div>
            </div>
          </div>
        )}

      <CustomModal
        boxStyle={{ width: 350 }}
        onClose={() => setIsDeleteBox(false)}
        isOpen={isDeleteBox}
      >
        <div className="w-[300px] flex flex-col justify-end">
          <div className="w-full flex flex-col justify-center">
            <p className="text-gray-600 text-sm py-2">
              Delete order from profile!
            </p>
            <Button
              disabled={deleteOrderApi.isLoading}
              isLoading={deleteOrderApi.isLoading}
              loadingColor="white"
              loadingSpinnerSize={40}
              onClick={() => deleteHandler()}
              className="mt-[4px] font-semibold text-white rounded-[6px] h-[32px] w-full bg-red-500 active:scale-95 duration-200"
            >
              Confirm Delete
            </Button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Page;
