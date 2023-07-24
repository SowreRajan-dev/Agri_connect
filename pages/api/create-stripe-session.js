import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-03-02",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req.body.item.map((item) => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.NEXT_PUBLIC_URL}/paymentupdation`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      };
      const session = await stripe.checkout.sessions.create(params);

      res.json({ id: session.id });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "error",
        data: err,
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      status: "error",
      data: `Method ${req.method} not allowed`,
    });
  }
}
