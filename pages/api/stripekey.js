const stripekey = process.env.TEST_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export default async function handler(req, res) {
  return res.status(200).json(stripekey);
}
