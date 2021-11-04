import { products } from "../../../utils/Data";

export default async function topSelling(req, res) {
  const data = products;

  const topSellingData = await data.filter((x) => x.topSelling === true);
  res.status(200).json({ data: topSellingData });
}
