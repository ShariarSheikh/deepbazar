import Link from 'next/link';
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCaravan } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import DeliveryLocation from './DeliveryLocation';
import HamburgerMenuIcon from './Icon';
import Logo from './Logo';
import ProfileButtons from './ProfileButtons';
import SearchBar from './SearchBar';

export default function DesktopView() {
  // const user = useAppSelector(state => state.authSlice.user);
  const [open, setOpen] = useState(false);

  // const dispatch = useAppDispatch();
  // const router = useRouter();

  // const trackOrderHandler = () => {
  //   if (!user._id)
  //     return dispatch(loginOpenModal({ redirectUrl: PATH_USER.trackOrder }));
  //   router.push(PATH_USER.trackOrder);
  // };

  return (
    <div className="hidden w-full h-full lg:block">
      {/* <div className="w-full bg-[#F5F5F5]">
        <div className="h-[42px] max-w-[1201px] text-[#666666] font-light mx-auto flex items-center justify-between">
          <h1 className="text-sm">Welcome to worldwide DeepBazar!</h1>
          <div className="flex space-x-4">
            <button>
              <Link href="tel:01304802278" className="flex items-center">
                <CiLocationOn className="text-primary" />
                <p className="ml-[6px] text-sm">
                  Deliver to <b>033456</b>
                </p>
              </Link>
            </button>
            <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

            <button onClick={trackOrderHandler} className="flex items-center">
              <FaCaravan className="text-primary" />
              <p className="ml-[6px] text-sm">Track your order</p>
            </button>
            <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

            <Link href="/best-offers">
              <button className="flex items-center">
                <MdLocalOffer className="text-primary" />
                <p className="ml-[6px] text-sm">Best Offers</p>
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="w-full bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1201px] mx-auto px-4">
          <div className="h-10 flex items-center justify-between text-sm">
            {/* Welcome message with subtle animation */}
            <p className="text-gray-600 animate-fadeIn">
              Welcome to worldwide{' '}
              <span className="font-semibold text-primary">DeepBazar</span>!
            </p>

            {/* Utility links with better visual hierarchy */}
            <div className="flex items-center space-x-6">
              {/* Delivery location with hover effect */}
              <Link
                href="/delivery"
                className="flex items-center group transition-all duration-200"
              >
                <div className="p-1 rounded-full bg-primary bg-opacity-10 group-hover:bg-opacity-20 mr-2">
                  <CiLocationOn className="text-primary text-lg" />
                </div>
                <span className="text-gray-600 group-hover:text-primary">
                  Deliver to <span className="font-medium">033456</span>
                </span>
              </Link>

              {/* Vertical divider */}
              <span className="h-5 w-px bg-gray-200 transform rotate-12" />

              {/* Track order with hover effect */}
              <Link
                href="/user/track-order"
                className="flex items-center group transition-all duration-200"
              >
                <div className="p-1 rounded-full bg-primary bg-opacity-10 group-hover:bg-opacity-20 mr-2">
                  <FaCaravan className="text-primary text-lg" />
                </div>
                <span className="text-gray-600 group-hover:text-primary">
                  Track your order
                </span>
              </Link>

              {/* Vertical divider */}
              <span className="h-5 w-px bg-gray-200 transform rotate-12" />

              {/* Best offers with hover effect */}
              <Link
                href="/best-offer"
                className="flex items-center group transition-all duration-200"
              >
                <div className="p-1 rounded-full bg-primary bg-opacity-10 group-hover:bg-opacity-20 mr-2">
                  <MdLocalOffer className="text-primary text-lg" />
                </div>
                <span className="text-gray-600 group-hover:text-primary">
                  Best Offers
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#EDEDED] px-4">
        <div className="max-w-[1201px] h-full min-h-[90px] mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <HamburgerMenuIcon open={open} setOpen={setOpen} />
            <Logo />
            <DeliveryLocation />
          </div>

          <div className="w-full max-w-[828px] flex items-center space-x-4 justify-end">
            <SearchBar />
            <ProfileButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
