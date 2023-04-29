import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import { FaChartPie } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { BsCoin, BsBoundingBox } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPeopleOutline, IoTicketOutline } from "react-icons/io5";
import { VscSignOut, VscReferences } from "react-icons/vsc";
import { useRouter } from "next/router";
import SignOut from "@/firebase/auth/signout";
import Cookies from "js-cookie";

const Sidebar = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const handleSignOut = () => {
    Cookies.remove("jwt");
    router.push("/login");

    // try {
    //   await SignOut();
    //   router.push("/login");
    // } catch (error) {
    //   router.push("/");

    //   console.log(error.message);
    // }
  };

  return (
    <div className="sidebar">
      <ul className="sideber-menu">
        <li>
          <Link href="/">
            {width < 992 ? (
              <Image
                src="/image/iconSwop.png"
                alt="swop-logo"
                className="sidebar-logo"
                height={32}
                width={32}
              />
            ) : (
              <Image
                src="/image/swoplogo.png"
                alt="swop-logo"
                className="sidebar-logo"
                height={30}
                width={132}
              />
            )}
          </Link>
        </li>
        <li className={`${router.pathname === "/" && "active-menu"}`}>
          <Link href="/">
            <FaChartPie size={20} />
            Dashboard
          </Link>
        </li>
        <li
          className={`${
            (router.pathname === "/users" ||
              router.pathname === "/users/[user]") &&
            "active-menu"
          }`}
        >
          <Link href="/users">
            <FiBarChart2 size={20} />
            Users
          </Link>
        </li>
        <li
          className={`${
            (router.pathname === "/orders" ||
              router.pathname == "/orders/[order]") &&
            "active-menu"
          }`}
        >
          <Link href="/orders">
            <AiOutlineShoppingCart size={20} />
            Orders
          </Link>
        </li>
        <li
          // className={`${
          //   router.pathname === "/products" ||
          //   router.pathname === "/products/[product]" ||
          //   (router.pathname === "/products/addProducts" && "active-menu")
          // }`}
          className={`${
            router.pathname.startsWith("/products") && "active-menu"
          }`}
        >
          <Link href="/products">
            <HiOutlineShoppingBag size={20} />
            Products
          </Link>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/coupons") && "active-menu"
          }`}
        >
          <Link href="/coupons">
            <IoTicketOutline size={20} /> Coupons
          </Link>
        </li>

        <li
          className={`${router.pathname === "/block-chain" && "active-menu"}`}
        >
          <Link href="#">
            <BsBoundingBox size={20} />
            BlockChain
          </Link>
        </li>
        <li
          className={`${
            (router.pathname === "/referrals" ||
              router.pathname === "/referrals/[referral]") &&
            "active-menu"
          }`}
        >
          <Link href="/referrals">
            <VscReferences size={20} /> Referrals
          </Link>
        </li>
        <li className={`${router.pathname === "/supports" && "active-menu"}`}>
          <Link href="/supports">
            <BiSupport size={20} />
            Supports
          </Link>
        </li>
        <li className={`${router.pathname === "/financials" && "active-menu"}`}>
          <Link href="/financials">
            <BsCoin size={20} />
            Financials
          </Link>
        </li>
        <li
          className={`${
            router.pathname === "/enterprise-leads" && "active-menu"
          }`}
        >
          <Link href="/enterprise-leads">
            <MdOutlineLeaderboard size={20} />
            Enterprises Leads
          </Link>
        </li>
        <li
          className={`${router.pathname === "/subscribers" && "active-menu"}`}
        >
          <Link href="/subscribers">
            <IoPeopleOutline size={20} />
            Subscribers
          </Link>
        </li>
        <li onClick={handleSignOut} style={{ display: "flex", gap: "10px" }}>
          <VscSignOut size={20} />
          <label style={{ cursor: "pointer" }}> Sign Out</label>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
