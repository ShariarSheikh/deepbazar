import { AiOutlineCheck } from 'react-icons/ai';

interface IProps {
  isChecked: boolean;
  onClick?: (value: boolean) => void;
  className?: string;
  name: string;
  height?: string;
  width?: string;
}

function CheckBox({
  isChecked,
  onClick,
  className,
  name,
  height,
  width,
}: IProps) {
  return (
    <button
      name={name}
      onClick={() => onClick?.(isChecked)}
      className={className}
      type="button"
    >
      {isChecked ? (
        <div
          style={{
            height: height ?? 20,
            width: width ?? 20,
          }}
          className="bg-primary flex items-center justify-center rounded-[5px]"
        >
          <AiOutlineCheck className="text-white w-3 h-3" />
        </div>
      ) : (
        <svg
          width={width ?? '20'}
          height={height ?? '20'}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5V14.5C1.5 16.7091 3.29086 18.5 5.5 18.5H14.5C16.7091 18.5 18.5 16.7091 18.5 14.5V5.5C18.5 3.29086 16.7091 1.5 14.5 1.5H5.5Z"
            fill="#637381"
          />
        </svg>
      )}
    </button>
  );
}

export default CheckBox;
