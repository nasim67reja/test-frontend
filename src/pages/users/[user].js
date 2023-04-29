import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
// import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const User = () => {
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
            <a href="www.swopme.com/Travis">www.swopme.com/Travis</a>
          </div>
        </div>
        <div className="user-bottom">
          <div className="user-bottom-left">
            <p>
              Email:
              <br />
              traviskaterherron@gmail.com
            </p>
            <p>
              Phone:
              <br />
              +1 (860) 126763
            </p>
            <p>
              Premium Subscriber?
              <br />
              No{" "}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>{" "}
              Yes
            </p>
            <p>
              Received Gas Subsidy?
              <br />
              No{" "}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>{" "}
              Yes
              <br />
              <input type="text" placeholder="TXID" className="user-txid" />
              <button className="user-txid-btn">Save</button>
            </p>
            <p>
              Public Ethereum Address:
              <br />
              {_id}
            </p>
            <p>
              Associated NFC Serial No:
              <br />
              100023423429
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
              Sign Up Date:
              <br />
              1/1/2023
            </p>
            <p>
              Username:
              <br />
              $Travis
            </p>
            <p>
              Referral Code:
              <br />
              XCDFVCD
            </p>
            <p>
              Date of birth:
              <br />
              12-7-2002
            </p>
            <p>
              Address 1:
              <br />
              360 N Graham St
            </p>
            <p>
              Address 2:
              <br />
              Apt 305
            </p>
            <p>State/Providence: NC</p>
            <p>Country: USA</p>
            <p>Zipcode: 890263</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
