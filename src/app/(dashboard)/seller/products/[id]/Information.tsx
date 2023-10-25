import Button from '@/components/common/Button';
import RatingStar from '@/components/common/RatingStar';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useDeleteProductMutation } from '@/redux/services/productApi';
import { ProductTypes } from '@/types/product.types';
import { PATH_SELLER } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Information({ data }: { data: ProductTypes }) {
  const [
    deleteProduct,
    { isLoading: isLoadingDelete, isSuccess: isSuccessDelete },
  ] = useDeleteProductMutation();

  // USE HOOK
  const dispatch = useAppDispatch();
  const router = useRouter();

  const deleteHandler = async (productId: string) => {
    await deleteProduct({ productId: productId });
  };

  useEffect(() => {
    if (!isSuccessDelete) return;

    dispatch(
      showAlert({
        message: 'Your product deleted successfully',
        type: AlertType.Success,
      })
    );

    router.replace(PATH_SELLER.products.manage);

    return () => undefined;
  }, [isSuccessDelete, dispatch]);

  return (
    <div className="py-[40px] px-[16px] ml-[24px] text-gray-600">
      <h1 className="text-3xl font-semibold uppercase">{data.title}</h1>

      <div className="flex items-center flex-wrap space-x-2 pt-[3px] text-base text-gray-500">
        <span>Category:</span>
        <span>{data.category}</span>
      </div>

      <div className="mt-3 flex flex-col items-start">
        <div className="flex items-center space-x-1">
          <RatingStar
            reviews={{
              totalReviews: data.ratings.totalReviews,
              star: data.ratings.star,
            }}
          />
          <p className="text-[12px] text-gray-500 pt-[3px]">Ratings</p>
        </div>

        <p className="text-[12px] text-gray-500 pt-[3px]">
          ({data.totalAnswers}) Answered Questions
        </p>
      </div>

      <div className="flex items-center flex-wrap space-x-2 pt-[3px] text-base text-gray-500">
        <span>Status:</span> <span>{data.status}</span>
      </div>

      <div className="flex items-center flex-wrap space-x-2 pt-[3px] text-base text-gray-500">
        <span>Code:</span> <span>{data.productCode}</span>
      </div>

      {data.offerText?.trim() && (
        <div className="flex items-center flex-wrap space-x-2 pt-[3px] text-base text-gray-500">
          <span>Offer:</span> <span>{data.offerText}</span>
        </div>
      )}

      <button className="py-[2px] px-[8px] rounded-[8px] bg-green-500 text-[12px] text-white font-bold mt-[16px] cursor-default">
        {data.inStock ? 'InStock' : 'Out Of Stock'}
      </button>

      <p className="mt-3 pb-5 text-primary">
        <span className="font-semibold text-xl">
          <span className="font-medium pl-1">$</span>
          {data.price}
        </span>
      </p>

      <Button
        onClick={() => deleteHandler(data._id)}
        disabled={isLoadingDelete}
        isLoading={isLoadingDelete}
        loadingColor="red"
        loadingSpinnerSize={40}
        className="h-[38px] w-[80px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-red-600 text-white active:scale-75 duration-200"
      >
        Delete
      </Button>
    </div>
  );
}

export default Information;
