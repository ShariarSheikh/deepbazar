import {
  GetLocationData,
  getLocations,
} from '@/redux/features/userLocationSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';

//---------------------------------------------------------
const MY_LOCATION =
  typeof window !== 'undefined' && localStorage.getItem('myLocation')
    ? JSON.parse(localStorage.getItem('myLocation') ?? '')
    : {
        imageUrl: 'https://flagcdn.com/w320/bd.png',
        cca2: 'BD',
        capital: 'Dhaka',
        region: 'Asia',
        country: 'Bangladesh',
      };
//---------------------------------------------------------

const DeliveryLocation = () => {
  const {
    locations: { status, locations },
  } = useAppSelector(state => state.userLocationSlice);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [filterList, setFilterList] = useState<GetLocationData[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [myLocation, setMyLocation] = useState<GetLocationData>(MY_LOCATION);

  const dispatch = useAppDispatch();

  //fetch locations
  useEffect(() => {
    if (!isOpenList) return undefined;
    if (locations.length > 0) return undefined;
    dispatch(getLocations());
    return () => undefined;
  }, [isOpenList, dispatch, locations.length]);

  //for locations modal box
  useEffect(() => {
    addEventListener('scroll', () => setIsOpenList(false));
    return () => removeEventListener('scroll', () => setIsOpenList(false));
  }, [isOpenList]);

  //search location handler
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

  //on selected country
  const setLocationHandler = ({
    imageUrl,
    cca2,
    capital,
    region,
    country,
  }: GetLocationData) => {
    setMyLocation({
      imageUrl,
      cca2,
      capital,
      region,
      country,
    });

    setIsOpenList(false);
    setFilterList([]);
    localStorage.setItem(
      'myLocation',
      JSON.stringify({
        imageUrl,
        cca2,
        capital,
        region,
        country,
      })
    );
    setSearchInput('');
  };

  return (
    <div className="h-full cursor-pointer mr-7 w-full bg-white max-w-[150px] rounded-sm relative">
      <div
        onBlur={() => setIsOpenList(false)}
        onClick={() => setIsOpenList(!isOpenList)}
        className="w-full h-full flex items-center px-1 border border-gray-300"
      >
        <img
          className="w-[35px] h-[35px] object-contain"
          src={myLocation?.imageUrl}
          alt={myLocation?.country}
        />
        <div className="flex flex-col ml-1 w-full">
          <span className="font-medium text-sm w-full line-clamp-1 leading-none text-gray-800">
            {myLocation?.country}
          </span>
          <span className="text-gray-600 text-[13px] w-full line-clamp-1 leading-none">
            {myLocation?.capital} <span>| {myLocation?.region}</span>
          </span>
        </div>
      </div>

      <div
        hidden={!isOpenList}
        onClick={e => e.stopPropagation()}
        className="cursor-default z-50 w-full min-w-[320px] max-w-[360px] p-1 overflow-hidden absolute top-[36px] left-0 right-0 shadow-md bg-white h-[360px]"
      >
        <div className="w-full h-10">
          <input
            onChange={searchHandler}
            className="w-full h-full rounded-sm border-none outline-none bg-white px-2"
            type="text"
            placeholder="Search Your Location"
            value={searchInput}
          />
        </div>

        <ul className="pt-3 px-2 w-full h-[320px] overflow-y-scroll overflow-hidden scrollbar-hide">
          {status === 'pending' && (
            <>
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
              <li className="w-full h-10 bg-slate-100 mb-2 animate-pulse" />
            </>
          )}

          {/* all result show initial time */}
          {status === 'success' &&
            filterList.length === 0 &&
            locations?.map(({ imageUrl, country, region, capital, cca2 }) => (
              <li
                onClick={() =>
                  setLocationHandler({
                    imageUrl,
                    cca2,
                    capital,
                    region,
                    country,
                  })
                }
                key={country}
                className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
              >
                <div className="w-[35px] h-[35px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={imageUrl}
                    alt={country}
                  />
                </div>
                <p>{country}</p>
              </li>
            ))}

          {/* show filtered results */}
          {status === 'success' &&
            filterList.length > 0 &&
            filterList?.map(({ imageUrl, country, region, capital, cca2 }) => (
              <li
                onClick={() =>
                  setLocationHandler({
                    imageUrl,
                    cca2,
                    capital,
                    region,
                    country,
                  })
                }
                key={country}
                className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
              >
                <div className="w-[35px] h-[35px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={imageUrl}
                    alt={country}
                  />
                </div>
                <p>{country}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DeliveryLocation;
