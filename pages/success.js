import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { checkoutSession } from '../utils/check-session';
import stripe from 'stripe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Success from '../images/success.png';
import Link from 'next/link';
import { URL } from '../components/Reuses/URL';
const stripeClient = stripe(
  'sk_test_51CpoOsFpRI0ybYRgJm91k866U0x02FoyJO7v4GjQ3L4IBKeskCeR3cdbGY7DHKWiltKicl4ExmwOQ5KAXGPNoB2o000wsvl7mm'
);
const ThankYouPage = () => {
  const router = useRouter();
  const [sessioninfo, setSessioninfo] = useState({});
  const { session_id } = router.query;

  useEffect(() => {
    async function getSession() {
      const infos = await stripeClient.checkout.sessions.retrieve(
        session_id,
        {
          expand: ['payment_intent'],
        }
      );
      const response = await axios.put(`${URL}/api/v1/order`, infos);
      setSessioninfo(infos);
    }
    getSession();
  }, [session_id]);

  // const updateOrder = async (infos) => {
  //   try {
  //     const response = await axios.put(`${URL}/api/v1/order`, infos, {
  //       withCredentials: true,
  //     });
  //     console.log('res', response);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  return (
    <div>
      <Navbar />
      <div class="container home-top-margin">
        <div className="my-10">
          <div className="flex justify-center">
            <Image
              src={Success}
              alt="Success Image"
              width={448}
              height={448}
            />
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-[#6C32DE] text-3xl font-semibold">
              Order Confirmed
            </h1>
            <div>
              <p className="text-gray-800 font-medium">
                Your order is confirmed. You will receive an order
              </p>
              <p className="text-gray-800 font-medium text-center">
                confirmation email shortly.
              </p>
            </div>

            <Link href="/shop">
              <button className="text-white continue_shipping">
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
