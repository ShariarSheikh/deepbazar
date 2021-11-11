import { products } from "../../../utils/Data";

export default async function getCategoryList(req, res) {
  const { id } = req.query;

  const product = await products.find((x) => x.id === Number(id));
  res.status(200).json({ data: product });
}
