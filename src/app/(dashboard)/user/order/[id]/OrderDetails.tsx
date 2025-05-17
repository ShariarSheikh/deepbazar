import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import { useDeleteOrderMutation } from '@/redux/services/orderApi';
import { OrderData } from '@/types/order.type';
import { PATH_USER } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai';

const OrderDetails = ({ details }: { details: OrderData }) => {
  const [deleteOrder, deleteOrderApi] = useDeleteOrderMutation();
  const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);

  const router = useRouter();

  const deleteHandler = () => {
    deleteOrder({ orderId: details._id });
  };

  useEffect(() => {
    if (deleteOrderApi.isLoading) return;
    if (!deleteOrderApi.data?.data._id) return;
    router.replace(PATH_USER.order);
  }, [deleteOrderApi.isLoading]);

  return (
    <div>
      <div className="w-full bg-white rounded-[6px] p-[16px] mt-2">
        <h1 className="text-xl font-semibold">
          Your Items | Order Id: {details.orderId}
        </h1>

        <div className="w-full max-h-[395px] pb-4 overflow-y-auto invisible-scrollbar visible-scrollbar-onHover">
          {details.items?.map(item => (
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
                      {item.discountPrice > 0 ? item.discountPrice : item.price}
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
              <span className="font-semibold">${details.subtotalAmount}</span>
            </li>
            <li className="flex items-center justify-between mb-[12px]">
              <span>Tax</span>
              <span className="font-semibold text-primary">Free</span>
            </li>
            <li className="flex items-center justify-between mb-[12px]">
              <span>Shipping</span>
              <span className="font-semibold ">{details.shippingFee}</span>
            </li>
            <li className="flex items-center justify-between mb-[20px]">
              <span>Total</span>
              <span className="font-semibold">${details.totalAmount}</span>
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

      <CustomModal
        style={{ width: 350 }}
        onClose={() => setIsDeleteBox(false)}
        isOpen={isDeleteBox}
      >
        <div className="w-[300px] flex flex-col justify-end">
          <div className="w-full flex">
            <div className="h-[50px] w-[50px] rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
              <AiOutlineCheckCircle />
            </div>
            <div className="pl-3">
              <h1 className="text-[20px] font-semibold">
                Sure you want to delete?
              </h1>
              <p className="mt-2 text-sm text-[#54595E]">
                Are you sure you want to delete this?
              </p>
            </div>
          </div>

          {deleteOrderApi.isError && (
            <p className="text-[11px] text-red-700 px-[3px] pt-[4px] pb-2">
              {InputApiErrorMessage(
                //@ts-expect-error
                deleteOrderApi.error?.data?.message
              )}
            </p>
          )}
          <Button
            disabled={deleteOrderApi.isLoading}
            isLoading={deleteOrderApi.isLoading}
            loadingColor="white"
            loadingSpinnerSize={40}
            onClick={deleteHandler}
            className="bg-red-600 mt-[24px] w-full rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] h-[33px]"
          >
            Confirm Delete
          </Button>
        </div>
      </CustomModal>
    </div>
  );
};

export default OrderDetails;
