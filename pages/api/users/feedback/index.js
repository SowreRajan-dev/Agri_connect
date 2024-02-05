import { prisma } from "../../login";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    const { userId, ratingStars, feedback, adminId } = req.body;

    try {
      if (!adminId) {
        return res.status(404).json({ message: "Admin Id is Required" });
      }
      if (!userId) {
        return res.status(404).json({ message: "User Id is required" });
      }

      const isUser = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      const isAdmin = await prisma.admin.findFirst({
        where: {
          id: adminId,
        },
      });
      if (!isUser) {
        return res.status(404).json({ message: "No user found" });
      }
      if (!isAdmin) {
        return res.status(404).json({ message: "No admin found" });
      }
      if (ratingStars <= 0) {
        return res
          .status(500)
          .json({ message: "Atleast one star is required" });
      }

      const rating = await prisma.review.create({
        data: {
          adminId: adminId,
          userId: userId,
          starRating: ratingStars,
          feedback: feedback,
        },
      });

      return res.status(200).json(rating);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
