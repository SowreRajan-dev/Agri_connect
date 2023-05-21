import { prisma } from "../../login";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const {
        pid,
        adminId,
        category,
        description,
        price,
        weight,
        quantity,
        location,
        updatedAt,
      } = req.body;
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
      const product = await prisma.product.update({
        where: {
          id: pid,
        },
        data: {
          category: category,
          description: description,
          location: location,
          price: price,
          quantity: quantity,
          weight: weight,
          updated_at: updatedAt,
        },
      });
      res
        .status(200)
        .json({ message: "Product Updated Successfully!", product });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
