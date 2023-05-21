import { prisma } from "../login";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        productName,
        productType,
        productRate,
        image,
        productDescription,
        productStock,
        location,
        productWeight,
        adminId,
      } = req.body;

      const admin = await prisma.admin.findFirst({
        where: {
          id: adminId,
        },
      });

      if (!admin) {
        return res.status(500).json({ message: "User not found" });
      }

      if (admin.role !== "ADMIN") {
        return res
          .staus(403)
          .json({ message: "You are not allowed to add new product" });
      }

      const newProduct = await prisma.product.create({
        data: {
          description: productDescription,
          name: productName,
          price: productRate,
          quantity: productStock,
          category: productType,
          image: image,
          location: location,
          weight: productWeight,
          admin_id: adminId,
          productOwnerName: admin.user_name,
        },
      });
      res.status(200).json(newProduct);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
