import { prisma } from "../../login";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { adminId } = req.query;
    try {
      if (!adminId) {
        return res.status(403).json({ message: "Admin Id is required" });
      }
      const isAdmin = await prisma.admin.findFirst({
        where: {
          id: adminId,
        },
      });
      if (!isAdmin) {
        return res
          .status(403)
          .json({ message: "Admin Not found! Unrestricted User" });
      }
      const ordersCount = await prisma.purchase.count({
        where: {
          adminId: adminId,
        },
      });

      const usersCount = await prisma.purchase.count({
        select: {
          userId: true,
        },
      });

      const totalSalesAmount = await prisma.purchase.aggregate({
        where: {
          adminId: adminId,
        },
        _sum: {
          totalCost: true,
        },
      });

      const totalProducts = await prisma.product.count({
        where: {
          admin_id: adminId,
        },
        select: {
          _all: true,
        },
      });

      return res.status(200).json({
        totalOrders: ordersCount,
        usersCount: usersCount,
        totalSalesAmount: totalSalesAmount,
        totalProducts: totalProducts,
      });
    } catch (err) {
      console.log("Error ", err);
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT", "DELETE"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
