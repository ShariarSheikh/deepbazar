import { products } from "../../../data/Data";

export default async function getCategoryList(req, res) {
  const { category } = req.query;
  const categoryList = await products.filter(
    (x) => x.category.toLowerCase() === category.toLowerCase()
  );
  res.status(200).json({ data: categoryList });
}
