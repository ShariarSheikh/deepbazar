import Skeleton from '@/components/common/Skeleton';
import { useGetProductSellerQuery } from '@/redux/services/auth';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiRotateRight } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaCaravan, FaHandHoldingUsd } from 'react-icons/fa';
import { GrValidate } from 'react-icons/gr';

const SellerAndDeliveryInfo: FC<{ sellerId: string }> = ({ sellerId }) => {
  const { data, isLoading, isError } = useGetProductSellerQuery({
    sellerId,
  });

  if (isLoading)
    return (
      <div className="w-full flex flex-col justify-center min-h-[300px]">
        <Skeleton circle height={20} width={20} />
        <Skeleton className="mt-2" height={12} width={120} />

        <div className="mt-[30px]">
          <Skeleton className="mt-2" height={12} width={120} />
          <Skeleton className="mt-2" height={12} width={120} />
          <Skeleton className="mt-2" height={12} width={120} />
        </div>
      </div>
    );

  if (isError && !data?.data.user)
    return <p className="text-red-600 text-sm">Seller Information Error</p>;

  //@ts-expect-error
  const user = data.data.user;

  return (
    <div className="w-full max-h-[436px] h-full py-[25px] px-[11px] rounded-[6px] border border-gray-200">
      <div className="flex items-center h-[50px] pb-[14px] border-b border-gray-200">
        <div className="h-[50px] w-[50px] rounded-full overflow-hidden border-2 border-primary relative">
          {user.imgUrl ? (
            <Image
              src={user.imgUrl}
              alt="user picture"
              className="object-cover w-full h-full"
              fill
            />
          ) : (
            <div className="text-sm w-full h-full bg-primary text-white flex items-center justify-center rounded-full">
              {user.firstName.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-[9px]">
          <h1 className="text-[16px] line-clamp-1">
            {user.firstName} {user.lastName}
          </h1>
          <Link
            href={`/seller/${user._id}`}
            className="w-full mt-[5px] line-clamp-1"
          >
            <p className="text-[12px] text-gray-600">See More Options</p>
          </Link>
        </div>
      </div>

      <div className="flex items-center mt-[12px]">
        <div className="mr-[9px]">
          <CiLocationOn
            size={18}
            className="text-[#3D3D3FE5] text-opacity-90"
          />
        </div>
        <h2 className="font-medium text-[12px] text-[#3D3D3FE5] text-opacity-90 line-clamp-2 w-full">
          {user.address ? user.address : 'User not added address'}
        </h2>
      </div>

      <div className="h-[36px] flex items-center mt-[12px]">
        <div className="mr-[9px]">
          <FaHandHoldingUsd
            size={18}
            className="text-[#3D3D3FE5] text-opacity-90"
          />
        </div>
        <h2 className="font-medium text-[12px] text-[#3D3D3FE5] text-opacity-90 line-clamp-1 w-full">
          Cash on Delivery Available
        </h2>
      </div>

      <div className="h-[36px] flex items-center mt-[12px]">
        <div className="mr-[9px]">
          <FaCaravan size={18} className="text-[#3D3D3FE5] text-opacity-90" />
        </div>
        <h2 className="font-medium text-[12px] text-[#3D3D3FE5] text-opacity-90 line-clamp-1 w-full">
          Super fast home delivery
        </h2>
      </div>

      <h2 className="text-[14px] mt-[3px]">Return And Warranty</h2>
      <div className="border-b border-gray-200 my-[11px]" />

      <div className="flex">
        <AiOutlineFieldTime size={15} />
        <h1 className="ml-[9px] text-[12px] text-[#757575]">
          100% Authentic Products
        </h1>
      </div>

      <div className="flex mt-[10px]">
        <BiRotateRight size={15} />
        <h1 className="ml-[9px] text-[12px] text-[#757575]">
          7 Days to easy returns
        </h1>
      </div>

      <div className="flex mt-[10px]">
        <GrValidate size={12} />
        <h1 className="ml-[9px] text-[12px] text-[#757575]">1 Year Warranty</h1>
      </div>
    </div>
  );
};

export default SellerAndDeliveryInfo;
