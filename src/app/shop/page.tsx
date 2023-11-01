'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGetProductsMutation } from '@/redux/services/productApi';
import Product from './Product';
import Skeleton from '@/components/common/Skeleton';
import SearchAndFilter from './SearchAndFilter';
import { ProductListApiQuery } from '@/types/product.types';

//-----------------------------------------

//-----------------------------------------

export default function Page() {
  const [getProducts, getProductsApi] = useGetProductsMutation();

  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');

  useEffect(() => {
    const query: ProductListApiQuery = {
      limit: 10,
    };

    if (category) query.category = category;
    if (startPrice) query.startPrice = startPrice;
    if (endPrice) query.endPrice = endPrice;

    getProducts({
      query: query,
    });
  }, [category, startPrice, endPrice, searchParams]);

  const loadingSkeleton = (
    <>
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
      <Skeleton width="100%" height="240px" />
    </>
  );

  const zeroProducts = typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals === 0 && (
      <div className="flex items-center justify-center h-[200px] w-full text-sm text-gray-500">
        <span>Zero Products</span>
      </div>
    );

  const productsList =
    typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals > 0 &&
    getProductsApi.data?.data.products.map(product => (
      <Product key={product._id} product={product} />
    ));

  return (
    <main className="min-h-[60vh] w-full m-auto px-2 pb-4">
      <SearchAndFilter totalItems={getProductsApi.data?.data.totals ?? 0} />

      {zeroProducts}
      <div className="grid grid-cols-4 gap-4 w-full pt-[30px]">
        {getProductsApi.isLoading && loadingSkeleton}
        {productsList}
      </div>
    </main>
  );
}
