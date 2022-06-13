import { products } from "../../../testData";

export function getProductsByCategory(category) {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export default function handler(req, res) {
  const { category } = req.query;
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(category);
    res.status(200).json(products);
  }
}
