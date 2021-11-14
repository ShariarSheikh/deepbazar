import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsFeed from "../../../components/ProductsFeed/ProductsFeed";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";
import { LoadingShoppingCart } from "../../../utils/loading";
import {
  fetchCategoryList,
  getCategoryList,
} from "../../../redux/getCategoryListSlice/getCategorySlice";

const FetchRelatedProducts = ({ category }) => {
  const { status, error, products } = useSelector(getCategoryList);

  const dispatch = useDispatch();
  useEffect(() => {
    category && dispatch(fetchCategoryList(category));
  }, [category]);

  return (
    <div className="w-full">
      {status === "pending" ? (
        <ProductsFeed sectionName="">
          <LoadingShoppingCart />
          <LoadingShoppingCart />
        </ProductsFeed>
      ) : (
        <ProductsFeed sectionName="Related Products">
          {products?.slice(0, 8).map((x) => (
            <ShoppingCart key={x.id} data={x} />
          ))}
        </ProductsFeed>
      )}
    </div>
  );
};

export default FetchRelatedProducts;
