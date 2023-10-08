import { Role } from '@/app/auth/utils';
import CartBadges from '@/components/common/CartBadge';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';

//-----------------------------------

//-----------------------------------

const ProfileButtons = () => {
  const { user } = useAppSelector(state => state.authSlice);

  const route = useRouter();

  const handleRouter = (afterPath: string = '') => {
    if (user?.role.includes(Role.USER))
      return route.push(`/user${afterPath && `/${afterPath}`}`);
    if (user?.role.includes(Role.SELLER)) return route.push(`/seller`);
  };

  return (
    <div className="flex items-center md:space-x-4 space-x-2 ml-[30px]">
      {user?._id ? (
        <button
          onClick={() => handleRouter()}
          className="flex items-center w-full max-w-[160px]"
        >
          <div className="h-[40px] w-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden relative">
            {user.imgUrl ? (
              <Image
                fill
                src={user.imgUrl}
                alt="user picture"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary text-white font-medium flex items-center justify-center rounded-full">
                {user.firstName.charAt(0)}
              </div>
            )}
          </div>
          <p className="pl-[5px] text-[16px] text-start font-bold text-[#666666] w-full max-w-[120px] line-clamp-1">
            {user.firstName}
          </p>
        </button>
      ) : (
        <Link href="/auth">
          <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
            <MdOutlinePersonOutline size={24} className="text-primary" />
            <p className="ml-[6px] text-[16px] font-bold text-[#666666]">
              Sign Up/Sign In
            </p>
          </button>
        </Link>
      )}

      <button
        onClick={() => handleRouter('wishlist')}
        className="flex items-center w-full relative"
      >
        <AiOutlineHeart size={24} className="text-primary" />
        <div className="absolute right-[35px] -top-[7px] ">
          <CartBadges number={6} />
        </div>

        <p className="ml-[6px] text-[16px] font-bold text-[#666666]">Cart</p>
      </button>

      <button
        // onClick={handleCart}
        className="flex items-center w-full relative"
      >
        <FiShoppingCart size={24} className="text-primary" />
        <div className="absolute right-[35px] -top-[7px] ">
          <CartBadges number={6} />
        </div>

        <p className="ml-[6px] text-[16px] font-bold text-[#666666]">Cart</p>
      </button>
    </div>
  );
};

export default ProfileButtons;
