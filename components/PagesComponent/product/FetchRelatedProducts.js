import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRelatedProducts,
  getProductApiState,
} from "../../../redux/productsApi/productApiSlice";
import ProductsFeed from "../../common/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../common/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../common/Loading/loading";

const FetchRelatedProducts = ({ category }) => {
  const { relatedProducts } = useSelector(getProductApiState);

  const dispatch = useDispatch();
  useEffect(() => {
    category && dispatch(fetchRelatedProducts(category));
  }, [category]);

  return (
    <div className="w-full">
      {relatedProducts.status === "pending" ? (
        <ProductsFeed sectionName="">
          <LoadingShoppingCart />
          <LoadingShoppingCart />
        </ProductsFeed>
      ) : (
        <ProductsFeed sectionName="Related Products">
          {relatedProducts.products?.slice(0, 6).map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      )}
    </div>
  );
};

export default FetchRelatedProducts;
