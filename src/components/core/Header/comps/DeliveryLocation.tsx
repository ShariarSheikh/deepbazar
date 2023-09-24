import Input from '@/components/common/Input';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import Skeleton from 'react-loading-skeleton';

//---------------------------------------------------------
interface GetLocationData {
  imageUrl: string;
  cca2: string;
  capital: string;
  region: string;
  country: string;
}
//---------------------------------------------------------

const DeliveryLocation = () => {
  const [locations, setLocations] = useState<GetLocationData[]>([]);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [filterList, setFilterList] = useState<GetLocationData[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [myLocation, setMyLocation] = useState<GetLocationData>({
    imageUrl: '',
    cca2: '',
    capital: '',
    region: '',
    country: '',
  });

  //SEARCH HANDLER
  const searchHandler = (event: { target: { value: string } }) => {
    const value = event.target.value?.trim();
    setSearchInput(value);
    if (!value) return setFilterList([]);

    const array = [...locations];
    const filter = array?.filter(item =>
      item.country.toLowerCase().includes(value.toLowerCase())
    );
    setFilterList(filter);
  };

  //SELECT LOCATION
  const setLocationHandler = (location: GetLocationData) => {
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    setMyLocation(location);
    setIsOpenList(false);
    setFilterList([]);
    setSearchInput('');
  };

  useEffect(() => {
    async function getLocations() {
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const countries = data?.map((cnt: any) => {
            return {
              imageUrl: cnt?.flags?.png || cnt?.flags?.svg,
              region: cnt?.region,
              capital:
                typeof cnt?.capital !== 'undefined' ? cnt?.capital[0] : '',
              cca2: cnt?.cca2,
              country: cnt?.name?.common,
            };
          });

          setLocations(countries);
          setLoading(false);
          // SET DEFAULT LOCATION LENGTH (31)
          setMyLocation(countries[56]);
        });
    }
    getLocations();

    return () => {};
  }, []);

  if (loading && !myLocation.country)
    return (
      <div className="flex w-[133px] h-[38px] justify-between">
        <Skeleton height={25} width={35} />
        <div>
          <Skeleton height={25} width={90} />
          <Skeleton className="mt-[4px]" height={7} width={90} />
        </div>
      </div>
    );

  return (
    <AnimatePresence>
      <ClickAwayListener onClickAway={() => setIsOpenList(false)}>
        <div className="h-[38px] cursor-pointer mr-7 w-full bg-white max-w-[133px] rounded-sm relative">
          <div
            onBlur={() => setIsOpenList(false)}
            onClick={() => setIsOpenList(!isOpenList)}
            className="w-full h-full flex items-center px-1"
          >
            <img
              className="w-[35px] h-[25px] object-contain"
              src={myLocation?.imageUrl}
              alt={myLocation?.country}
            />
            <div className="flex flex-col ml-1 w-full">
              <span className="font-medium text-[13px] w-full line-clamp-1 leading-none text-primary">
                {myLocation?.country}
              </span>
              <span className="text-gray-500 text-[10px] w-full line-clamp-1 leading-none">
                {myLocation?.capital} <span>| {myLocation?.region}</span>
              </span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 px-3">Chose your location</p>

          {isOpenList && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: 0 }}
              animate={{ opacity: 1, y: -10, x: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="h-full w-full cursor-default min-w-[320px] max-w-[360px] mt-2 z-50 right-0 relative bg-white border border-[#EDEDED] text-gray-400 min-h-[433px] rounded-[10px]"
            >
              <div className="w-full h-full">
                <h1 className="text-black text-opacity-80 text-[20px] font-medium border-b pb-[10px] mt-[20px] pl-[15px]">
                  Categories
                </h1>
                <div className="cursor-default z-50 w-full p-1 overflow-hidden h-[360px]">
                  <div className="w-full h-10 mt-[8px]">
                    <Input
                      onChange={searchHandler}
                      className="w-full h-full rounded-sm border-none outline-none bg-gray-50 px-2"
                      type="text"
                      placeholder="Search Your Location"
                      value={searchInput}
                    />
                  </div>

                  <ul className="pt-3 px-2 w-full h-[320px] overflow-y-scroll overflow-hidden scrollbar-hide">
                    {/* all result show initial time */}
                    {filterList.length === 0 &&
                      locations?.map(location => (
                        <li
                          onClick={() => setLocationHandler(location)}
                          key={location.country}
                          className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
                        >
                          <div className="w-10 h-10 overflow-hidden">
                            <img
                              className="w-full h-full object-contain"
                              src={location.imageUrl}
                              alt={location.country}
                            />
                          </div>
                          <p>{location.country}</p>
                        </li>
                      ))}

                    {/* show filtered results */}
                    {filterList?.map(location => (
                      <li
                        onClick={() => setLocationHandler(location)}
                        key={location.country}
                        className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
                      >
                        <div className="w-10 h-10 overflow-hidden">
                          <img
                            className="w-full h-full object-contain"
                            src={location.imageUrl}
                            alt={location.country}
                          />
                        </div>
                        <p>{location.country}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ClickAwayListener>
    </AnimatePresence>
  );
};

export default DeliveryLocation;
