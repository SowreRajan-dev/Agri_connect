import { prisma } from "../../login";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, products, admin_id, totalCost } = req.body;
    try {
      if (!admin_id) {
        return res.status(404).json({ message: "Admin Id is Required" });
      }
      if (!userId) {
        return res.status(404).json({ message: "User Id is required" });
      }

      if (products.length <= 0) {
        return res
          .status(404)
          .json({ message: "Atleast one product is required" });
      }
      const purchasedOrder = await prisma.purchase.create({
        data: {
          productsBrought: products,
          totalCost: totalCost,
          purchasedAt: new Date(),
          userId: userId,
          adminId: admin_id,
        },
      });
      return res
        .status(200)
        .json({ message: "Purchased done succesfully!", purchasedOrder });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else if (req.method === "GET") {
    const { userId, isAuthenticated } = req.query;
    try {
      if (!userId) {
        res.status(403).json({ message: "User Id is required!" });
      }
      const isUser = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (!isUser) return res.status(403).json({ message: "No User Records!" });
      if (!isAuthenticated)
        return res
          .status(403)
          .json({ message: "User should be authenticated!" });

      const productsBrought = await prisma.purchase.findMany({
        where: {
          userId: userId,
        },
      });
      return res.status(200).json({ orders: productsBrought });
    } catch (err) {
      console.log("Error ", err);
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
