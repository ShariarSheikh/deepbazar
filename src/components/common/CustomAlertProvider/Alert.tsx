import { AlertType, removeAlert } from '@/redux/features/alertSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import {
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { GrValidate } from 'react-icons/gr';
import Button from '../Button';

const alertVariants = {
  Info: { opacity: 1, y: 0, backgroundColor: '#2196F3', color: 'white' }, // Blue for Info
  Error: { opacity: 1, y: 0, backgroundColor: '#f44336', color: 'white' }, // Red for Error
  Warning: { opacity: 1, y: 0, backgroundColor: '#FFC107', color: 'white' }, // Amber for Warning
  Success: { opacity: 1, y: 0, backgroundColor: '#4CAF50', color: 'white' }, // Green for Success
};

const AlertMessage = () => {
  const alert = useAppSelector(state => state.alertSlice);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(removeAlert());
  };

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

  return (
    <AnimatePresence>
      {alert.isAlert && (
        <motion.div className="w-full flex items-center justify-center z-[100000] px-5 relative">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={alertVariants[alert.type]}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            variants={alertVariants}
            className="fixed top-0 max-w-[1201px] mx-auto flex items-center justify-between h-[48px] w-full  p-2 rounded-md overflow-hidden"
          >
            <div className="flex items-center space-x-2">
              {iconFilter(alert.type, 'mr-[10px]')} {alert.message || ''}
            </div>
            <Button
              onClick={onClose}
              className="w-[30px] h-[30px] rounded-full bg-primaryLight bg-opacity-70 active:scale-95 duration-150 flex items-center justify-center text-black"
            >
              <AiOutlineCloseCircle size={20} className="text-primary" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertMessage;
