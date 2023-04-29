import EmailSupport from "@/components/EmailSupport";
import LiveSupport from "@/components/LiveSupport";
import ProblemSolve from "@/components/ProblemSolve";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineGraphicEq, MdOutlineEmail } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

const Supports = () => {
  const [page, setPage] = useState("live-support");

  return (
    <>
      <div className="container">
        <div className="support-top-btn">
          <div
            className="support-live-support"
            onClick={() => setPage("live-support")}
          >
            <MdOutlineGraphicEq size={20} />
            <p>Live Support</p>
          </div>
          <div
            className="support-email-support"
            onClick={() => setPage("email-support")}
          >
            <MdOutlineEmail size={20} />
            <p>Email Support</p>
          </div>
          <div
            className="support-problem-solve"
            onClick={() => setPage("problem-solve")}
          >
            <VscTools size={20} />
            <p>Problem Solve</p>
          </div>
        </div>
        <div className="support-top-btn">
          <div className="support-border-out">
            <div
              className={`${
                page === "live-support" && "div-boder-color-change"
              }`}
            />
          </div>
          <div className="support-border-out">
            <div
              className={`${
                page === "email-support" && "div-boder-color-change"
              }`}
            />
          </div>
          <div className="support-border-out">
            <div
              className={`${
                page === "problem-solve" && "div-boder-color-change"
              }`}
            />
          </div>
        </div>
        {page === "live-support" && <LiveSupport />}
        {page === "email-support" && <EmailSupport />}
        {page === "problem-solve" && <ProblemSolve />}
      </div>
    </>
  );
};

export default Supports;
