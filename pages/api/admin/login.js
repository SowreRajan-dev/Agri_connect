import { prisma } from "../login";

export default async function handler(req, res) {
  const { method } = req;
  if (method == "POST") {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const admin = await prisma.admin.findFirst({
          where: {
            email,
            hashed_password: password,
          },
        });
        if (admin) {
          res.status(200).json({
            status: "success",
            data: admin,
          });
        } else {
          res.status(400).json({
            status: "error",
            message: "Invalid email or password",
          });
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({
          status: "error",
          data: err,
        });
      }
    } else {
      res.status(400).json({
        status: "error",
        message: "Please enter email and password",
      });
    }
  }
}
