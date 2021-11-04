import { products } from "../../../utils/Data";

export default async function getCategoryList(req, res) {
  const category = req.query.category;
  const categoryList = await products.filter((x) => x.category === category);
  res.status(200).json({ data: categoryList });
}
