import { AlertType, removeAlert } from '@/redux/features/alertSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { GrValidate } from 'react-icons/gr';
import Button from '../Button';

const iconFilter = (type: AlertType, className: string) => {
  if (type === AlertType.Info)
    return <AiFillInfoCircle className={className} size={24} />;
  if (type === AlertType.Warning)
    return <AiFillWarning className={className} size={24} />;
  if (type === AlertType.Error)
    return <BiSolidErrorCircle className={className} size={24} />;
  if (type === AlertType.Success)
    return <GrValidate className={className} size={24} />;
};

const alertVariants = {
  Info: { opacity: 1, y: 0, backgroundColor: '#2196F3', color: 'white' }, // Blue for Info
  Error: { opacity: 1, y: 0, backgroundColor: '#f44336', color: 'white' }, // Red for Error
  Warning: { opacity: 1, y: 0, backgroundColor: '#0d0740', color: 'white' }, // Amber for Warning
  Success: { opacity: 1, y: 0, backgroundColor: '#4CAF50', color: 'white' }, // Green for Success
};

const AlertMessage = () => {
  const { user } = useAppSelector(state => state.authSlice);
  const alert = useAppSelector(state => state.alertSlice);
  const [count, setCount] = useState<number>(10);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(removeAlert());
  };

  useEffect(() => {
    if (!alert.isAlert || alert.isPermanent) return undefined;

    const interval = setInterval(() => {
      if (count === 0) return dispatch(removeAlert());

      if (count > 0) setCount(count - 1);
      else clearInterval(interval);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [alert.isAlert, dispatch, count]);

  useEffect(() => {
    if (!user?._id) dispatch(removeAlert());
  }, [user?._id]);

  return (
    <AnimatePresence>
      {alert.isAlert && (
        <motion.div className="z-[100000] fixed bottom-10 w-full px-5">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={alertVariants[alert.type]}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            variants={alertVariants}
            className="max-w-[1080px] mx-auto flex items-center justify-between min-h-[48px] w-full  p-2 rounded-md overflow-hidden"
          >
            <div className="flex items-center space-x-2">
              {iconFilter(alert.type, 'mr-[10px]')}{' '}
              <p className="text-sm lg:text-base">{alert.message || ''}</p>
            </div>

            <div className="flex items-center">
              {!alert.isPermanent && (
                <p className="text-[12px] text-white mr-[20px] font-semibold">
                  {count}
                </p>
              )}
              <Button
                onClick={onClose}
                className="w-[30px] h-[30px] rounded-full bg-primaryLight bg-opacity-70 active:scale-95 duration-150 flex items-center justify-center text-black"
              >
                <AiOutlineCloseCircle size={20} className="text-primary" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertMessage;
