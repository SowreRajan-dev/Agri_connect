import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ messgae: `method ${req.method} not allowed` });
  } else {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  }
}
