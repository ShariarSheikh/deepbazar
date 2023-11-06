import Skeleton from '@/components/common/Skeleton';
import { useGetSponsorItemQuery } from '@/redux/services/productApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const SponsoredItem: FC = () => {
  const getSponsorItem = useGetSponsorItemQuery();

  const router = useRouter();

  if (getSponsorItem.isLoading)
    return <Skeleton className="w-full mt-[50px]" height={300} />;
  if (getSponsorItem.isError || typeof getSponsorItem.data === 'undefined')
    return null;

  const item = getSponsorItem.data.data;

  return (
    <div className="mt-[22px] md:mt-[40px] lg:mt-[60px] lg:h-[424px] w-full h-full mx-auto max-w-[1201px] bg-[#f3f9fb] flex md:flex-row flex-col items-center justify-between md:px-[40px] py-3 rounded-[6px] lg:rounded-[30px]">
      <div className="lg:max-w-[50%] w-full">
        <h1 className="text-2xl lg:text-[48px] font-bold leading-10 line-clamp-1">
          {item.title}
        </h1>
        <p className="text-sm lg:text-[24px] mt-4 leading-snug">
          Discover the perfect blend of style and quality in every purchase –
          your path to shopping excellence awaits.
        </p>
        <button
          onClick={() => router.push(`/product/${item._id}`)}
          className="relative bg-primary text-white uppercase active:scale-95 duration-150 flex items-center space-x-3 mt-[21px] border rounded-[6px] h-[48px] px-[16px] group"
        >
          <p>Shop Now</p>
          <BsArrowRightShort className="group-hover:animate-bounce" />
        </button>
      </div>
      <div className="lg:w-[400px] w-[320px] lg:h-[400px] h-[350px] mx-auto relative">
        <Image
          className="w-full h-full"
          src={item.imgUrl}
          alt="product image"
          fill
        />
      </div>
    </div>
  );
};

export default SponsoredItem;
