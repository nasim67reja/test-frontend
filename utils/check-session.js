import stripe from 'stripe';

const stripeClient = stripe(
  'sk_test_51CpoOsFpRI0ybYRgJm91k866U0x02FoyJO7v4GjQ3L4IBKeskCeR3cdbGY7DHKWiltKicl4ExmwOQ5KAXGPNoB2o000wsvl7mm'
);

export function checkoutSession(sessionId) {
  return stripeClient.checkout.sessions.retrieve(sessionId, {
    expand: ['payment_intent'],
  });
}
