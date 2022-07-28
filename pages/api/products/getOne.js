import { products } from "../../../data/Data";
import pdEndpoint from "../../../utils/pdEndpoint";

export default async function getCategoryList(req, res) {
  const { pdUrl } = req.query;

  const product = await products.find((x) => {
    const url = pdEndpoint(x.title, x.id);
    if (url === pdUrl) return x;
  });
  res.status(200).json({ data: product });
}
