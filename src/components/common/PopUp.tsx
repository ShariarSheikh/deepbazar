import { AnimatePresence } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

interface IPopUp {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children: React.ReactElement;
}

function PopUp({ show, setShow, children }: IPopUp) {
  return (
    <AnimatePresence>
      {show && (
        <>
          <div
            role="presentation"
            className="fixed z-40 inset-0 cursor-default w-full h-screen bg-transparent"
            onClick={() => setShow(!show)}
          />
          {children}
        </>
      )}
    </AnimatePresence>
  );
}

export default PopUp;
