import { products } from "../../../testData";

export function getProducts() {
  return products;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ messgae: `mehtod ${req.method} not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
