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
      const usersBrought = await prisma.purchase.findMany({
        where: {
          adminId: adminId,
        },
        select: {
          user: true,
          totalCost: true,
          orderStatus: true,
          productsBrought: true,
          purchasedAt: true,
        },
      });

      return res.status(200).json({ usersBrought });
    } catch (err) {
      console.log("Error ", err);
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT", "DELETE"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
