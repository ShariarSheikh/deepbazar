import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsFeed from "../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { fetchNewProducts, getNewProducts } from "../../redux/getNewProductsSlice/getNewProductsSlice";
import { LoadingShoppingCart } from "../../utils/loading";


const NewProductsFeed = () => {
  const { error, status, products } = useSelector(getNewProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewProducts());
  }, []);


  if (error) {
    <div>{error}</div>;
  }

  return (
    <div>
      {status === "pending" ? (
        <ProductsFeed sectionName="New Arrivals" mt={12}>
         <LoadingShoppingCart/>
         <LoadingShoppingCart/>
         <LoadingShoppingCart/>
         <LoadingShoppingCart/>
      </ProductsFeed>
      ) : (
        <ProductsFeed sectionName="New Arrivals" mt={12}>
          {products?.slice(0, 8).map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      )}
    </div>
  );
};

export default NewProductsFeed;
