import { prisma } from "../../login";

export default async function handler(req, res) {
  const { method } = req;
  if (method == "GET") {
    try {
      const { adminId } = req.query;
      const admin = await prisma.admin.findFirst({
        where: {
          id: adminId,
        },
      });
      if (!admin) {
        return res.status(401).send("Unauthorized user");
      }
      return res.status(200).send("Verified");
    } catch (err) {
      console.log(err);
    }
  }
}
