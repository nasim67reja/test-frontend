import Parent from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";

const Orders = () => {
  return (
    <>
      {/* <Parent> */}
      <div className="container">
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

export default Orders;
