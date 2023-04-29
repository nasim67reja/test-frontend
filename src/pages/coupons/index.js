import { URL, convertDateFormate } from "@/components/Reuse";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";

const Cupons = () => {
  const [coupons, setCoupons] = useState();

  const fetchCoupons = useCallback(async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/coupon/all`, {
        withCredentials: true,
      });
      setCoupons(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  return (
    <>
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
            <button type="submit">
              Export <BiDownload size={20} />
            </button>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="cupon-cupon">Cupon</p>
              <p className="cupon-name">Name</p>
              <p className="cupon-promocode">Promocode</p>
              <p className="cupon-amount">Amount</p>
              <p className="cupon-minAmount">Minimum Amount</p>
              <p className="cupon-exDate">Expire Date</p>
              <p className="cupon-view">View</p>
            </div>

            {coupons &&
              coupons.data.map((el) => (
                <div key={el._id} className="table-body">
                  <div className="cupon-cupon">
                    <Image
                      src="/image/cupon.png"
                      alt="cupon_image"
                      height={93}
                      width={52}
                    />
                  </div>
                  <div className="cupon-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>{el.name}</p>
                  </div>
                  <p className="cupon-promocode">{el.promoCode}</p>
                  <p className="cupon-amount">$80</p>
                  <p className="cupon-minAmount">${el.minimumPurchaseAmount}</p>
                  <p className="cupon-exDate">
                    {/* 7/11/2022 */}
                    {convertDateFormate(el.expires)}
                  </p>
                  <p className="cupon-view">
                    <Link href="/cupons/cupon?_id=1dsd21hg21871178631">
                      <HiOutlineEye size={20} color={"#5197ca"} />
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="add-product" style={{ marginTop: "3rem" }}>
          <Link href="/coupons/addCoupon">Add Coupon</Link>
        </div>
      </div>
    </>
  );
};

export default Cupons;
