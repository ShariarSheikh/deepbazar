'use client';

import ProductCart from '@/components/common/ProductCart';
import ProductsFeed from '@/components/common/ProductFeed';
import { LoadingProductCart } from '@/components/common/loading';
import { useProductListQuery } from '@/redux/services/Product';
import HeroSection from '@/views/home/HeroSection';

//---------------------------------------------------------

//---------------------------------------------------------
export default function Home() {
  const { data, isLoading } = useProductListQuery();

  const products = data?.data.products ?? [];

  return (
    <main className="min-h-screen max-w-[1300px] w-full m-auto mt-10">
      <HeroSection />
      <ProductsFeed>
        {isLoading && (
          <>
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
          </>
        )}

        {products?.length > 0 &&
          products?.map(product => (
            <ProductCart key={product._id} data={product} />
          ))}
      </ProductsFeed>
    </main>
  );
}
