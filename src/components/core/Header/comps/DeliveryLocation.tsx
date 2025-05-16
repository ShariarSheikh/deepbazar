// import Input from '@/components/common/Input';
// import Skeleton from '@/components/common/Skeleton';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import ClickAwayListener from 'react-click-away-listener';

// //---------------------------------------------------------
// interface GetLocationData {
//   imageUrl: string;
//   cca2: string;
//   capital: string;
//   region: string;
//   country: string;
// }
// //---------------------------------------------------------

// const DeliveryLocation = () => {
//   const [locations, setLocations] = useState<GetLocationData[]>([]);
//   const [isOpenList, setIsOpenList] = useState<boolean>(false);
//   const [filterList, setFilterList] = useState<GetLocationData[]>([]);
//   const [searchInput, setSearchInput] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [defaultLocation, setDefaultLocation] = useState<GetLocationData>({
//     imageUrl: '',
//     cca2: '',
//     capital: '',
//     region: '',
//     country: '',
//   });

//   //SEARCH HANDLER
//   const searchHandler = (event: { target: { value: string } }) => {
//     const value = event.target.value?.trim();
//     setSearchInput(value);
//     if (!value) return setFilterList([]);

//     const array = [...locations];
//     const filter = array?.filter(item =>
//       item.country.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilterList(filter);
//   };

//   //SELECT LOCATION
//   const setLocationHandler = (location: GetLocationData) => {
//     setDefaultLocation(location);
//     setIsOpenList(false);
//     setFilterList([]);
//     setSearchInput('');
//   };

//   useEffect(() => {
//     if (locations?.length) return undefined;
//     async function getLocations() {
//       fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           const countries = data?.map((cnt: any) => {
//             return {
//               imageUrl: cnt?.flags?.png || cnt?.flags?.svg,
//               region: cnt?.region,
//               capital:
//                 typeof cnt?.capital !== 'undefined' ? cnt?.capital[0] : '',
//               cca2: cnt?.cca2,
//               country: cnt?.name?.common,
//             };
//           });

//           setLocations(countries);
//           setLoading(false);
//           // SET DEFAULT LOCATION LENGTH (10) THE FIRST ONE
//           setDefaultLocation(countries[10]);
//         });
//     }
//     getLocations();

//     return () => {};
//   }, []);

//   if (loading && !defaultLocation.country)
//     return (
//       <div className="flex w-[133px] h-[38px] justify-between">
//         <Skeleton />
//         <div>
//           <Skeleton />
//           <Skeleton />
//         </div>
//       </div>
//     );

//   return (
//     <AnimatePresence>
//       <ClickAwayListener onClickAway={() => setIsOpenList(false)}>
//         <div className="h-[38px] max-w-[133px]">
//           <div className="h-[38px] overflow-hidden cursor-pointer mr-7 w-full bg-white rounded-sm relative">
//             <div
//               onBlur={() => setIsOpenList(false)}
//               onClick={() => setIsOpenList(!isOpenList)}
//               className="w-full h-[27px] flex items-center px-1"
//             >
//               <img
//                 className="w-[35px] h-[25px] object-contain"
//                 src={defaultLocation?.imageUrl}
//                 alt={defaultLocation?.country}
//               />
//               <div className="flex flex-col ml-1 w-full">
//                 <span className="font-medium text-[13px] w-full line-clamp-1 leading-none text-primary">
//                   {defaultLocation?.country}
//                 </span>
//                 <span className="text-gray-500 text-[10px] w-full line-clamp-1 leading-none">
//                   {defaultLocation?.capital}{' '}
//                   <span>| {defaultLocation?.region}</span>
//                 </span>
//               </div>
//             </div>
//             <p className="text-[10px] text-gray-500 px-3">
//               Chose your location
//             </p>
//           </div>
//           {isOpenList && (
//             <motion.div
//               initial={{ opacity: 0, y: -20, x: 0 }}
//               animate={{ opacity: 1, y: -10, x: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ type: 'spring', damping: 30, stiffness: 400 }}
//               className="h-full w-full cursor-default min-w-[320px] max-w-[360px] mt-2 z-50 right-[60px] lg:right-0 relative bg-white border border-[#EDEDED] text-gray-400 min-h-[433px] rounded-[10px]"
//             >
//               <div className="w-full h-full">
//                 <h1 className="text-black text-opacity-80 text-[20px] font-medium border-b pb-[10px] mt-[20px] pl-[15px]">
//                   Categories
//                 </h1>
//                 <div className="cursor-default z-50 w-full p-1 overflow-hidden h-[360px]">
//                   <div className="w-full h-10 mt-[8px]">
//                     <Input
//                       onChange={searchHandler}
//                       className="w-full h-full rounded-sm border-none outline-none bg-gray-50 px-2"
//                       type="text"
//                       placeholder="Search Your Location"
//                       value={searchInput}
//                     />
//                   </div>

//                   <ul className="pt-3 px-2 w-full h-[320px] overflow-y-scroll overflow-hidden scrollbar-hide">
//                     {/* all result show initial time */}
//                     {filterList.length === 0 &&
//                       locations?.map(location => (
//                         <li
//                           onClick={() => setLocationHandler(location)}
//                           key={location.country}
//                           className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
//                         >
//                           <div className="w-10 h-10 overflow-hidden">
//                             <img
//                               className="w-full h-full object-contain"
//                               src={location.imageUrl}
//                               alt={location.country}
//                             />
//                           </div>
//                           <p>{location.country}</p>
//                         </li>
//                       ))}

//                     {/* show filtered results */}
//                     {filterList?.map(location => (
//                       <li
//                         onClick={() => setLocationHandler(location)}
//                         key={location.country}
//                         className="flex items-center space-x-3 w-full h-10 bg-slate-50 mb-2 hover:bg-slate-100"
//                       >
//                         <div className="w-10 h-10 overflow-hidden">
//                           <img
//                             className="w-full h-full object-contain"
//                             src={location.imageUrl}
//                             alt={location.country}
//                           />
//                         </div>
//                         <p>{location.country}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </ClickAwayListener>
//     </AnimatePresence>
//   );
// };

// export default DeliveryLocation;

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiChevronDown, FiSearch, FiX } from 'react-icons/fi';

interface CountryData {
  imageUrl: string;
  cca2: string;
  capital: string;
  region: string;
  country: string;
}

const DeliveryLocation = () => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<CountryData>({
    imageUrl: '',
    cca2: '',
    capital: '',
    region: '',
    country: 'Select Country',
  });

  // Filter countries based on search query
  const filteredCountries = searchQuery
    ? countries.filter(country =>
        country.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries;

  // Select country handler
  const selectCountry = (country: CountryData) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedCountries = data.map((country: any) => ({
          imageUrl: country.flags?.png || country.flags?.svg,
          region: country.region,
          capital: country.capital?.[0] || 'N/A',
          cca2: country.cca2,
          country: country.name.common,
        }));

        setCountries(formattedCountries);
        setSelectedCountry(formattedCountries[10]); // Set default country
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching countries:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center w-40 h-10 px-3 rounded-lg bg-gray-100 animate-pulse">
        <div className="w-6 h-4 bg-gray-200 rounded mr-2"></div>
        <div className="flex-1 space-y-1">
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="relative">
        {/* Location Selector Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded-lg border border-gray-200 hover:border-primary transition-colors"
        >
          {selectedCountry.imageUrl && (
            <img
              src={selectedCountry.imageUrl}
              alt={selectedCountry.country}
              className="w-5 h-4 object-cover mr-2 rounded-sm"
            />
          )}
          <div className="text-left">
            <p className="text-sm font-medium text-gray-800 line-clamp-1">
              {selectedCountry.country}
            </p>
            <p className="text-xs text-gray-500 line-clamp-1">
              {selectedCountry.capital} | {selectedCountry.region}
            </p>
          </div>
          <FiChevronDown
            className={`ml-2 text-gray-500 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
            >
              {/* Search Input */}
              <div className="p-3 border-b border-gray-100">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search country..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Countries List */}
              <div className="max-h-80 overflow-y-auto">
                {filteredCountries.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No countries found
                  </div>
                ) : (
                  <ul>
                    {filteredCountries.map(country => (
                      <li
                        key={country.cca2}
                        onClick={() => selectCountry(country)}
                        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 ${
                          selectedCountry.cca2 === country.cca2
                            ? 'bg-primary/10'
                            : ''
                        }`}
                      >
                        <img
                          src={country.imageUrl}
                          alt={country.country}
                          className="w-8 h-6 object-cover rounded-sm mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {country.country}
                          </p>
                          <p className="text-xs text-gray-500">
                            {country.capital} • {country.region}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ClickAwayListener>
  );
};

export default DeliveryLocation;
