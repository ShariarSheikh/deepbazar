'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetProductsMutation } from '@/redux/services/productApi';
import Product from './Product';
import Skeleton from '@/components/common/Skeleton';
import SearchAndFilter from './SearchAndFilter';
import { ProductListApiQuery } from '@/types/product.types';
import PaginationComponent from '@/components/common/PaginationComponent';

//-----------------------------------------

//-----------------------------------------

export default function Page() {
  const [getProducts, getProductsApi] = useGetProductsMutation();
  const [pageLengthSate, setPageLengthState] = useState<number>(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  const category = searchParams.get('category');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');
  const pageLengthQuery = searchParams.get('pageLength');

  const getPageLength = (): number => {
    if (pageLengthQuery !== null) {
      const parsedPageLength = parseInt(pageLengthQuery, 10);
      if (!isNaN(parsedPageLength) && parsedPageLength > 0) {
        return parsedPageLength;
      }
    }
    return pageLengthSate; // Use the default if query param is invalid or null
  };

  const query: ProductListApiQuery = {
    limit: 12,
    pageLength: getPageLength(),
  };

  if (category) query.category = category;
  if (startPrice) query.startPrice = startPrice;
  if (endPrice) query.endPrice = endPrice;

  // ON PAGINATION CHANGE
  const pageLengthHandler = (length: number) => {
    if (pageLengthSate === length) return;

    setPageLengthState(length);
    queryParams.set('pageLength', length.toString());
    router.replace(`/shop?${queryParams.toString()}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setPageLengthState(getPageLength());
  }, []);

  useEffect(() => {
    getProducts({ query: query });
  }, [category, startPrice, endPrice, pageLengthQuery]);

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

  const pagination = typeof getProductsApi.data !== 'undefined' &&
    getProductsApi.data?.data.totals > 0 && (
      <PaginationComponent
        currentPage={pageLengthSate}
        onChange={pageLengthHandler}
        totalProducts={getProductsApi.data?.data.totals}
        limit={12}
      />
    );

  return (
    <main className="min-h-[60vh] w-full m-auto px-2 pb-4">
      <SearchAndFilter totalItems={getProductsApi.data?.data.totals ?? 0} />

      {zeroProducts}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4 w-full pt-[30px]">
        {getProductsApi.isLoading && loadingSkeleton}
        {productsList}
      </div>
      <div className="w-full flex items-center justify-center h-[80px]">
        {pagination}
      </div>
    </main>
  );
}
