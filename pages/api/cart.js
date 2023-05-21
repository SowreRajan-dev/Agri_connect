import { cart_status } from "@prisma/client";
import { prisma } from "./login";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, productId, quantity, price } = req.body;
    try {
      const cart = await prisma.cart.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          price,
          quantity,

          status: cart_status.draft,
          product: {
            connect: {
              id: productId,
            },
          },
        },
      });
      res.status(200).json({
        status: "success",
        data: cart,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.status(405).json({
      status: "error",
      data: "Method not allowed",
    });
  }
}

export default handler;
