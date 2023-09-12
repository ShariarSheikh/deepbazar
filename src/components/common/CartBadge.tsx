const CartBadges = ({ number }: { number: number }) => {
  return (
    <div
      className={`w-[18px]
      h-[18px] bg-primary text-white rounded-full flex justify-center items-center overflow-hidden`}
    >
      <p className="text-[11px]">{number}</p>
    </div>
  );
};

export default CartBadges;
