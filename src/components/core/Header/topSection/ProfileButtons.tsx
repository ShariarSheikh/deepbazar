import CartBadges from '@/components/common/CartBadge';
import { showCartHandler } from '@/redux/features/cartSlice';
import { showFavoriteCartHandler } from '@/redux/features/favoriteCartSlice';
import { showLoginHandler } from '@/redux/features/loginSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { BsHeart, BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
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
  const { items: cartFavoriteItems } = useAppSelector(
    state => state.favoriteCartSlice
  );
  const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);

  //HOOKS
  const dispatch = useAppDispatch();

  //HANDLERS
  const handleCart = () => {
    dispatch(showCartHandler());
  };

  return (
    <div className="flex md:space-x-4 space-x-2">
      <div
        className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group relative"
        onClick={() => handleCart()}
      >
        <FiShoppingCart className="w-6 h-6 group-hover:scale-105 transform ease-out transition duration-200" />
        {cartTotalQuantity > 0 && <CartBadges number={cartTotalQuantity} />}
      </div>
      <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center group relative">
        <BsHeart
          onClick={() => dispatch(showFavoriteCartHandler())}
          className="w-6 h-6 group-hover:scale-105 transform ease-out transition duration-200 cursor-pointer"
        />
        {cartFavoriteItems.length > 0 && (
          <div className="absolute md:right-0 -right-1 md:top-0 -top-2 w-4 md:w-5 h-4 md:h-5 bg-red-500 text-white rounded-full flex justify-center items-center overflow-hidden">
            <p className="text-[12px]">{cartFavoriteItems.length}</p>
          </div>
        )}
      </div>
      <Profile />
    </div>
  );
};

export default ProfileButtons;
