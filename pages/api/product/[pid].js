import { prisma } from "../login";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { pid } = req.query;
      const product = await prisma.product.findUnique({
        where: {
          id: pid,
        },
      });
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
