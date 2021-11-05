import { products } from "../../../utils/Data";

export default async function newProducts(req, res) {
  const data = products;

  const newProducts = await data.filter((x) => x.newProduct === true);
  res.status(200).json({ data: newProducts });
}
