'use client';

import ProductsFeed from '@/components/common/ProductFeed';
import CategorySection from '@/views/home/CategorySection';
import HeroSection from '@/views/home/HeroSection';

//---------------------------------------------------------

//---------------------------------------------------------
export default function Home() {
  // const { data, isLoading } = useProductListQuery();

  // const products = data?.data.products ?? [];

  return (
    <main className="min-h-screen w-full m-auto mt-10">
      <div className="w-full max-w-[1201px] mx-auto">
        <HeroSection />
        <CategorySection />
      </div>
      <ProductsFeed>
        {/* {isLoading && (
          <>
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
          </>
        )} */}

        {/* {products?.length > 0 &&
          products?.map(product => (
            <ProductCart key={product._id} data={product} />
          ))} */}
      </ProductsFeed>
    </main>
  );
}
