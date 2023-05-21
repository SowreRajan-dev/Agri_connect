import { prisma } from "../login";

async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    const {
      email,
      username,
      password,
      confirmedPassword,
      phonenumber,
      street,
      area,
      city,
      country,
      state,
      pincode,
      addressline1,
      addressline2,
    } = req.body;
    if (email && password) {
      if (password === confirmedPassword) {
        try {
          const admin = await prisma.admin.create({
            data: {
              email,
              user_name: username,
              hashed_password: password,
              created_at: new Date(),
              mobile: phonenumber,
              updated_at: new Date(),
              address: {
                create: {
                  area,
                  city,
                  country,
                  state,
                  pincode,
                  street,
                  addressline1,
                  addressline2,
                },
              },
            },
          });
          res.status(200).json({
            status: "success",
            data: admin,
          });
        } catch (err) {
          console.log(err);
          res.status(400).json({
            status: "error",
            data: err,
          });
        }
      } else {
        res.json({
          status: "error",
          message: "Password and Confirm Password does not match",
        });
      }
    } else {
      res.status(400).json({
        message: "Please enter Email and Password fields",
      });
    }
  }
}

export default handler;
