import { prisma } from "../login";

export default async function handler(req, res) {
  const { category } = req.query;
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    try {
      const productsByCategory = await prisma.product.findMany({
        where: {
          category: {
            equals: category,
          },
        },
      });
      res.status(200).json(productsByCategory);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  }
}
