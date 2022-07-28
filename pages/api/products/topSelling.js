import { products } from "../../../data/Data";

export default async function topSelling(req, res) {
  const topSellingData = await products.filter((x) => x.topSelling === true);

  const data =
    req.query.length > 0
      ? topSellingData.slice(0, req.query.length)
      : topSellingData;

  res.status(200).json({ data });
}
