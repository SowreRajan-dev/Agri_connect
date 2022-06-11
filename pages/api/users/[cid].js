import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  if (method == "GET") {
    console.log("requested", req.query);
    const { cid } = req.query;
    if (cid) {
      try {
        const user = await prisma.user.findFirst({
          where: {
            id: cid,
          },
        });
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
          });
        } else {
          res.status(400).json({
            status: "error",
            message: "User not found",
          });
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({
          status: "error",
          data: err,
        });
      }
    }
  }
}
