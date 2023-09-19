import Product from './Product';

const Feed = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full pt-[30px]">
      <Product discount="42%" offerText="HOT" />
      <Product discount="" />
      <Product discount="" offerText="BEST DEAL" />
      <Product discount="" />

      <Product discount="" />
      <Product discount="42%" offerText="BEST DEAL" />
      <Product discount="" offerText="HOT" />
      <Product discount="42%" />
    </div>
  );
};

export default Feed;
