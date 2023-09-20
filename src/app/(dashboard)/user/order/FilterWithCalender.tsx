import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BsCalendarCheck } from 'react-icons/bs';

//--------------------------------------------------------------
export enum CalenderFilterableList {
  Today = 'Today',
  Yesterday = 'Yesterday',
  LastSevenDays = 'Last 7 Days',
  LastThirty = 'Last 30 Days',
  ThisMonth = 'This Month',
  LastMonth = 'Last Month',
  LastThreeMonth = 'Last Three Month',
  LastSixMonth = 'Last Six Month',
  LastOneYears = 'Last One Years',
  CustomRange = 'Custom Range',
}

interface IProps {
  isOpenDateFilter: boolean;
  isOpenCalender: boolean;
  setIsOpenDateFilter: Dispatch<SetStateAction<boolean>>;
  setIsOpenCalender: Dispatch<SetStateAction<boolean>>;
  filterProductBasedOnDate: (date: CalenderFilterableList) => void;
}

//--------------------------------------------------------------

function FilterWithCalender({
  isOpenCalender,
  isOpenDateFilter,
  setIsOpenCalender,
  setIsOpenDateFilter,
  filterProductBasedOnDate,
}: IProps): JSX.Element {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <div className="w-full h-[56px] max-w-[200px] rounded-md ml-[18px] relative">
      <button
        onClick={() => setIsOpenDateFilter(prevState => !prevState)}
        className="w-full rounded-[8px] h-full border borderColor flex items-center justify-between px-4 group"
      >
        <span className="text-[16px] text-gray-500 group-hover:text-gray-600">
          Last 30 Days
        </span>
        <BsCalendarCheck className="text-gray-500" />
      </button>

      {isOpenDateFilter && (
        <ClickAwayListener
          onClickAway={() => {
            setIsOpenDateFilter(prevState => !prevState);
            setIsOpenCalender(false);
          }}
        >
          <motion.div
            initial={{ x: 0, y: -40, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-50 bg-white shadow-dropdown w-full max-w-[290] h-auto absolute -right-[2px] p-2 rounded-[12px] after:content-[''] after:w-3 after:h-3 after:absolute after:bg-white after:shadow-z12 after:-top-[4px] after:right-[16px] after:rotate-45"
          >
            <div className="w-full h-full relative">
              <ul>
                {Object.values(CalenderFilterableList).map(list => (
                  <li
                    role="presentation"
                    key={list}
                    onClick={() => filterProductBasedOnDate(list)}
                    className="h-[35px] w-full cursor-pointer active:scale-95 duration-200 rounded-[6px] bg-white hover:bg-gray-200 text-[14px] py-[6px] px-[16px]"
                  >
                    {list}
                  </li>
                ))}
              </ul>

              {isOpenCalender && (
                <ClickAwayListener
                  onClickAway={() => setIsOpenCalender(prevState => !prevState)}
                >
                  <motion.div
                    initial={{ x: 40, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-50 w-full bg-white shadow-card min-w-[320px] h-auto absolute -left-[340px] -top-[8px] after:content-[''] after:w-3 after:h-3 after:absolute after:bg-white after:shadow-z12 after:bottom-[18px] after:-right-[3px] after:rotate-45"
                  >
                    <DateRange
                      editableDateInputs
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      ranges={state}
                    />
                  </motion.div>
                </ClickAwayListener>
              )}
            </div>
          </motion.div>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default FilterWithCalender;
