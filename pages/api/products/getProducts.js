import { products } from "../../../data/Data";

export default async function getProducts(req, res) {
  const data = await products;
  res.status(200).json({ data });
}
