import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const Referral = () => {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <>
      <div className="container">
        <div className="user-top-banner">
          <button>
            Export <BiDownload size={20} />
          </button>
          <div className="user-top-banner-inside">
            <Image
              src="/image/travisbig.png"
              alt="user_image"
              height={177}
              width={177}
            />
            <p>Travis Herron</p>
            <a href="www.swopme.co/Travis">www.swopme.com/Travis</a>
          </div>
        </div>
        <div className="user-bottom">
          <div className="user-bottom-left">
            <p>
              Phone:
              <br />
              +1 (860) 126763
            </p>
            <p>
              Website:
              <br />
              www.swopme.com
            </p>
            <p>
              City:
              <br />
              Caifornia
            </p>
            <p>
              Zipcode:
              <br />
              890263
            </p>
            <p>
              Swop sign up date:
              <br />
              890263
            </p>
            <p>
              Referral link:
              <br />
              www.swopme.co/referral/swop10
            </p>
            <p>
              Crypto addresses attached to profile:
              <br />
              {_id}
            </p>
            <p>
              Programmed NFC Serial Number:
              <br />
              100029
            </p>
            <div>
              <label>Order history:</label>
              <br />
              <div className="user-order-img-container">
                <div className="user-order-img">
                  <Image
                    src="/image/product1.png"
                    alt="product_image"
                    height={556}
                    width={556}
                  />
                  <span>2</span>
                  <p>Swop Gold NFC</p>
                </div>
                <div className="user-order-img">
                  <Image
                    src="/image/product2.png"
                    alt="product_image"
                    height={556}
                    width={556}
                  />
                  <span>2</span>
                  <p>Swop Black NFC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="user-bottom-right">
            <p>
              Email:
              <br />
              traviskaterherron@gmail.com
            </p>
            <p>
              Date of birth:
              <br />
              12-7-2002
            </p>
            <p>
              State/Providence:
              <br />
              Caifornia, USA
            </p>
            <p>
              Country:
              <br />
              Unitade State
            </p>
            <p>
              Swop microsites:
              <br />
              Yes
            </p>
            <p>
              Amount Paid:
              <br />
              50$
            </p>
            <p>
              Joined Date:
              <br />
              1-13-2022
            </p>
            <p>
              Payment Type:
              <br />
              Stripe
            </p>
            <p>
              Amount Owed:
              <br />
              10$
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referral;
