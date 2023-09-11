interface IProps {
  isActive: boolean;
  onClick?: () => void;
}

function ToggleButton({ isActive, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? 'bg-primaryMain justify-end' : 'bg-gray-500 justify-start'
      } relative overflow-hidden w-[33px] h-[20px] rounded-[50px] flex items-center px-[2px] duration-200 transition-all`}
    >
      <div className="w-[14px] h-[14px] rounded-full bg-white" />
    </button>
  );
}

export default ToggleButton;
