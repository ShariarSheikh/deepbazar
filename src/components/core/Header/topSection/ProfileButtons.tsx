import CartBadges from '@/components/common/CartBadge';
import { showCartHandler } from '@/redux/features/cartSlice';
import { showLoginHandler } from '@/redux/features/loginSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

//-----------------------------------

//-----------------------------------

const Profile = () => {
  const { userData } = useAppSelector(state => state.loginSlice);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleProfile = () => {
    if (userData?.user?.name) {
      router.push(`/profile`);
    } else {
      dispatch(showLoginHandler());
    }
  };

  return (
    <div className="md:h-12 flex items-center relative" onClick={handleProfile}>
      <div className="h-[40px] w-[120px] sm:w-[140px] rounded-lg bg-gray-200 px-1 cursor-pointer group overflow-hidden">
        {userData?.user?.name ? (
          <div
            onClick={() => router.push('/profile')}
            className="w-full h-full flex justify-center space-x-2 items-center"
          >
            <img
              className="hidden sm:block w-[35px] h-[35px] rounded-full overflow-hidden object-cover"
              src={userData?.user?.profileImg}
              alt={userData?.user?.name}
            />
            <p>{userData?.user?.name}</p>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center space-x-2 items-center">
            <BsPerson className="w-5 h-5" />
            <p>Sign In</p>
            <RiArrowDropDownLine className="group-hover:animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileButtons = () => {
  //STATE
  const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);

  //HOOKS
  const dispatch = useAppDispatch();

  //HANDLERS
  const handleCart = () => {
    dispatch(showCartHandler());
  };

  return (
    <div className="flex items-center md:space-x-4 space-x-2 ml-[30px]">
      <Link href="/auth">
        <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
          <MdOutlinePersonOutline size={24} className="text-primary" />
          <p className="ml-[6px] text-[16px] font-bold text-[#666666]">
            Sign Up/Sign In
          </p>
        </button>
      </Link>

      <button
        onClick={handleCart}
        className="flex items-center w-full relative"
      >
        <FiShoppingCart size={24} className="text-primary" />
        {cartTotalQuantity > 10 && (
          <CartBadges number={cartTotalQuantity || 6} />
        )}
        <p className="ml-[6px] text-[16px] font-bold text-[#666666]">Cart</p>
      </button>
    </div>
  );
};

export default ProfileButtons;
