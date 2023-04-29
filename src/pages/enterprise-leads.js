import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const EnterpriseLeads = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          {" "}
          <div className="enterprise-leads-top-panel">
            <input type="text" placeholder="🔎︎ Search here..." />
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
          </div>
          <div className="table">
            <div className="table-head">
              <p className="enterprise-id">ID</p>
              <p className="enterprise-name">Name</p>
              <p className="enterprise-jobTittle">Job Tittle</p>
              <p className="enterprise-email">Email</p>
              <p className="enterprise-number">Phone Number</p>
              <p className="enterprise-walletAddress">Wallet Address</p>
              <p className="enterprise-website">Website</p>
            </div>
            <div className="table-body">
              <p className="enterprise-id">#10001</p>
              <div className="enterprise-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="enterprise-jobTittle">Doctor</p>
              <p className="enterprise-email">hamidul3@gmail.com</p>
              <p className="enterprise-number">+1 863 567-6765</p>
              <p className="enterprise-walletAddress">01xhnjs..kjdjld</p>
              <p className="enterprise-website">www.trip-law.com</p>
            </div>
            <div className="table-body">
              <p className="enterprise-id">#10001</p>
              <div className="enterprise-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="enterprise-jobTittle">Doctor</p>
              <p className="enterprise-email">hamidul3@gmail.com</p>
              <p className="enterprise-number">+1 863 567-6765</p>
              <p className="enterprise-walletAddress">01xhnjs..kjdjld</p>
              <p className="enterprise-website">www.trip-law.com</p>
            </div>
            <div className="table-body">
              <p className="enterprise-id">#10001</p>
              <div className="enterprise-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="enterprise-jobTittle">Doctor</p>
              <p className="enterprise-email">hamidul3@gmail.com</p>
              <p className="enterprise-number">+1 863 567-6765</p>
              <p className="enterprise-walletAddress">01xhnjs..kjdjld</p>
              <p className="enterprise-website">www.trip-law.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseLeads;
