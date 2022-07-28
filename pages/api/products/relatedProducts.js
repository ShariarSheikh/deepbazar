import { products } from "../../../data/Data";

export default async function relatedProducts(req, res) {
  const { category } = req.query;

  const newProducts = await products.filter(
    (x) => x.category.toLowerCase() === category.toLowerCase()
  );
  res.status(200).json({ data: newProducts });
}
