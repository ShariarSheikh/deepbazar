import Image from 'next/image';

function ImageGallery(): JSX.Element {
  return (
    <div className="w-full max-w-[470px] p-2">
      <div className="relative w-full h-[470px]">
        <Image
          className="rounded-[8px]"
          fill
          src="https://res.cloudinary.com/oikko-foundation/image/upload/h_450,w_450/v1667752178/ed8ehccy3gzn5i54f3x1.webp"
          alt=""
        />
      </div>

      <div className="h-[90px] w-full flex items-center space-x-4 justify-center">
        <div className="relative cursor-pointer active:scale-95 duration-150 w-[64px] h-[64px] rounded-[8px] bg-primaryLight">
          <Image
            className="rounded-[8px]"
            fill
            src="https://res.cloudinary.com/oikko-foundation/image/upload/h_450,w_450/v1667752178/ed8ehccy3gzn5i54f3x1.webp"
            alt=""
          />
        </div>
        <div className="relative cursor-pointer active:scale-95 duration-150 w-[64px] h-[64px] rounded-[8px] bg-primaryLight">
          <Image
            className="rounded-[8px]"
            fill
            src="https://res.cloudinary.com/oikko-foundation/image/upload/h_450,w_450/v1667752178/ed8ehccy3gzn5i54f3x1.webp"
            alt=""
          />
        </div>
        <div className="relative cursor-pointer active:scale-95 duration-150 w-[64px] h-[64px] rounded-[8px] bg-primaryLight">
          <Image
            className="rounded-[8px]"
            fill
            src="https://res.cloudinary.com/oikko-foundation/image/upload/h_450,w_450/v1667752178/ed8ehccy3gzn5i54f3x1.webp"
            alt=""
          />
        </div>
        <div className="relative cursor-pointer active:scale-95 duration-150 w-[64px] h-[64px] rounded-[8px] bg-primaryLight">
          <Image
            className="rounded-[8px]"
            fill
            src="https://res.cloudinary.com/oikko-foundation/image/upload/h_450,w_450/v1667752178/ed8ehccy3gzn5i54f3x1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
