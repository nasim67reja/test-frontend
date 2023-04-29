import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";

const Refferals = () => {
  return (
    <>
      <div className="container">
        <div className="refferal-card-container">
          <div className="refferal-card card-referral">
            <h5>Total Referrals</h5>
            <Image
              src="/image/referral.png"
              alt="card_image"
              height={113}
              width={113}
            />
            <h2>20k+</h2>
          </div>
          <div className="refferal-card card-paidout">
            <h5>Total Paid Out</h5>
            <Image
              src="/image/paidout.png"
              alt="card_image"
              height={113}
              width={113}
            />
            <h2>$23k+</h2>
          </div>
          <div className="refferal-card card-payout">
            <h5>Payouts Remaing</h5>
            <Image
              src="/image/payout.png"
              alt="card_image"
              height={113}
              width={113}
            />
            <h2>57+</h2>
          </div>
          <div className="refferal-card card-shohan">
            <h5>Top Monthly Earner</h5>
            <Image
              src="/image/shohan.png"
              alt="card_image"
              height={113}
              width={113}
            />
            <h2>1k+</h2>
          </div>
        </div>
        <div className="card">
          <div className="refferal-top-panel">
            <h3>Referral Users</h3>
            <input type="text" placeholder="🔎︎ Search here..." />
            <div className="filter">
              <p> Filter</p>
              <select>
                <option>Date</option>
              </select>
              <select>
                <option>Name</option>
              </select>
            </div>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="refferal-user">User</p>
              <p className="refferal-id">Referral ID</p>
              <p className="refferal-joinDate">Joined Date</p>
              <p className="refferal-paymentType">Payment Type</p>
              <p className="refferal-amountPaid">Amount Paid</p>
              <p className="refferal-amountOwed">Amount Owed</p>
              <p className="refferal-view">View</p>
            </div>
            <div className="table-body">
              <div className="refferal-user table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="refferal-id">8hg4xcvv</p>
              <p className="refferal-joinDate">1/4/2022</p>
              <p className="refferal-paymentType">Stripe</p>
              <p className="refferal-amountPaid">57$</p>
              <p className="refferal-amountOwed">57$</p>
              <p className="refferal-view">
                <Link href="/referrals/referral?_id=624cd765a5d835001615a6d3">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <div className="refferal-user table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="refferal-id">8hg4xcvv</p>
              <p className="refferal-joinDate">1/4/2022</p>
              <p className="refferal-paymentType">Stripe</p>
              <p className="refferal-amountPaid">57$</p>
              <p className="refferal-amountOwed">57$</p>
              <p className="refferal-view">
                <Link href="/referrals/referral?_id=624cd765a5d835001615a6d3">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <div className="refferal-user table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="refferal-id">8hg4xcvv</p>
              <p className="refferal-joinDate">1/4/2022</p>
              <p className="refferal-paymentType">Stripe</p>
              <p className="refferal-amountPaid">57$</p>
              <p className="refferal-amountOwed">57$</p>
              <p className="refferal-view">
                <Link href="/referrals/referral?_id=624cd765a5d835001615a6d3">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refferals;
