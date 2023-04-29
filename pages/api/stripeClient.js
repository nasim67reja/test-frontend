const stripekey = process.env.TEST_STRIPE_SECRET_KEY;
export default async function handler(req, res) {
  return res.status(200).json(stripekey);
}
