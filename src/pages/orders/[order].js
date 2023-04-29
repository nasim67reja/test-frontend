import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";
import Parent from "@/components/Layout";

const Order = () => {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <>
      {/* <Parent> */}
      <div className="container">
        <div className="order-top-content">
          <div className="order-top-content-left">
            <p>
              Customer Name:
              <br />
              <b>Sadit Afnaf</b>
            </p>
            <p>
              Customer Number:
              <br />
              <b>+8801318470354</b>
            </p>
            <p>
              Customer Address:
              <br />
              <b>Aftabnogor, Dhaka, Bangladesh</b>
            </p>
            <p>
              Date/Time:
              <br />
              <b>24 Aug, 2022</b>
            </p>
            <p>
              Customer id:
              <br />
              <b>1x49skhAGhabn</b>
            </p>
            <p>
              Currency:
              <br />
              <b>USD</b>
            </p>
          </div>
          <div className="order-top-content-right">
            <p>
              <b>*Order 1234</b>
            </p>
            <p>
              Product Name:
              <br />
              <b>JBL Headphone</b>
            </p>
            <p>
              Quantity:
              <br />
              <b>3</b>
            </p>
            <p>
              Price:
              <br />
              <b>$76.89</b>
            </p>
            <p>
              Order Description:
              <br />
              <span>
                Swop’s Flat Rectangle NFC’s are designed to be durable and
                simple to use. The Flat is great to put under any phone
                case(non-metal) Users can download our app.
              </span>
            </p>
            <p>
              Tracking Info:
              <br />
              <b>{_id}</b>
            </p>
            <p>
              Shipped: No{" "}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>{" "}
              Yes
            </p>
          </div>
          <div className="order-btn-container">
            <button type="submit">Submit</button>
            <button type="submit">Download CRM</button>
          </div>
        </div>
        <div className="card">
          <div className="filter">
            <p>Filter</p>
            <select>
              <option>Date</option>
            </select>
            <select>
              <option>Name</option>
            </select>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="order-no">Order No</p>
              <p className="order-customer">Customer</p>
              <p className="order-product">Product</p>
              <p className="order-price">Price</p>
              <p className="order-date">Delivery Date</p>
              <p className="order-status">Delivery Status</p>
              <p className="order-view">View</p>
            </div>
            <div className="table-body">
              <p className="order-no">1009701</p>
              <div className="order-customer table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="order-product">Black NFC Card</p>
              <p className="order-price">$24.99</p>
              <p className="order-date">7/11/2022</p>
              <p className="order-status">
                <span style={{ backgroundColor: "#ffa800" }}>Processing</span>
              </p>
              <p className="order-view">
                <Link href="/orders/order?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="order-no">1009701</p>
              <div className="order-customer table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="order-product">Black NFC Card</p>
              <p className="order-price">$24.99</p>
              <p className="order-date">7/11/2022</p>
              <p className="order-status">
                <span style={{ backgroundColor: "#2ac53a" }}>Complete</span>
              </p>
              <p className="order-view">
                <Link href="/orders/order?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="order-no">1009701</p>
              <div className="order-customer table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="order-product">Black NFC Card</p>
              <p className="order-price">$24.99</p>
              <p className="order-date">7/11/2022</p>
              <p className="order-status">
                <span style={{ backgroundColor: "#ff4f4f" }}>Cancel</span>
              </p>
              <p className="order-view">
                <Link href="/orders/order?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Parent> */}
    </>
  );
};

export default Order;
