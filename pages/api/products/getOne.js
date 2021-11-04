import { products } from "../../../utils/Data";

export default async function getCategoryList(req, res) {
  const { category, id, name } = req.query;

  const filterCategory = await products.filter((x) => x.category === category);

  const product = await filterCategory.find(
    (x) => x.id === Number(id) && x.title === name
  );

  res.status(200).json({ data: product });
}
