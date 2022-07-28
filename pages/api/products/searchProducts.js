import { products } from "../../../data/Data";

export default async function searchProducts(req, res) {
  const { category, query } = req.query;

  let data = [];

  if (category.toLowerCase() === "all" || !category) {
    data = products.filter((x) =>
      x.title.toLowerCase().startsWith(query.toLowerCase())
    );
  } else {
    const findCategoriesPd = products.filter(
      (x) => x.category.toLowerCase() === category.toLowerCase()
    );

    data = findCategoriesPd.filter((value) =>
      value.title.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  res.status(200).json({ data: data });
}
