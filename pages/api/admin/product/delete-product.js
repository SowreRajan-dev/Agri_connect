import { prisma } from "../../login";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const { pid, adminId } = req.query;
      if (!pid && !adminId) {
        return res.status(500).json({
          messgae: "Product id and admin id is required, please check once!",
        });
      }
      const productVerification = await prisma.product.findUnique({
        where: {
          id: pid,
        },
      });
      if (!productVerification) {
        return res.status(404).json({
          message: "Product Not Found",
        });
      }
      if (productVerification.admin_id !== adminId) {
        return res.status(403).json({
          message: "You're not the owner of this product",
        });
      }
      const deletedProduct = await prisma.product.delete({
        where: {
          id: pid,
        },
      });
      return res
        .status(200)
        .json({ message: "Product deleted Succesfully", deletedProduct });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
