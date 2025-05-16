const CartBadges = ({
  number,
  className = '',
}: {
  number: number;
  className?: string;
}) => {
  return (
    <div
      className={`w-5 h-5 bg-primary text-white rounded-full flex justify-center items-center text-xs font-medium shadow-sm ${className}`}
    >
      {number > 9 ? '9+' : number}
    </div>
  );
};

export default CartBadges;
