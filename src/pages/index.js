import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { CiTimer } from "react-icons/ci";
import useWindowDimensions from "../components/useWindowDimensions";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Home() {
  const { width } = useWindowDimensions();
  const [option, setOption] = useState({
    options: {
      chart: {
        id: "data-example",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#A700FF", "#EF4444", "#3CD856"],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },

    series: [
      {
        name: "iOS",
        data: [31, 40, 28, 51, 42, 109, 100, 111, 90, 80, 75, 50],
      },
      {
        name: "Android",
        data: [11, 32, 45, 32, 34, 52, 41, 47, 60, 65, 70, 90],
      },
      {
        name: "Swop Pay",
        data: [100, 50, 69, 38, 23, 59, 65, 55, 52, 40, 20, 10],
      },
    ],
  });

  return (
    <>
      <div className="container">
        <div className="home-overview-panel">
          <p className="overview">
            <b>Monthly</b>
            <br />
            Overview
          </p>
          <p className="revenue">
            Monthly Revenue
            <br />
            <b>$14,000</b>
          </p>
          <p className="plus">+</p>
          <p className="expenses">
            Monthly Expenses
            <br />
            <b>-$4,000</b>
          </p>
          <p className="equal">=</p>
          <p className="profit">
            Monthly Profit
            <br />
            <b>$10,000</b>
          </p>
          <p className="top">
            Tap #
            <br />
            <b>5,000</b>
          </p>
        </div>
        <div className="home-overview-bottom-panel">
          <div className="overview-card revenue-crd">
            <Image
              src="/image/revenueicon.png"
              alt="revenueicon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>$14,000</h4>
            <p>Product Revenue</p>
            <span>+</span>
          </div>
          <div className="overview-card gas-crd">
            <Image
              src="/image/gasicon.png"
              alt="gasicon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>1004</h4>
            <p>Gas Subsidy Request</p>
            <span>+</span>
          </div>
          <div className="overview-card support-crd">
            <Image
              src="/image/supporticon.png"
              alt="supporticon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>112</h4>
            <p>Support request</p>
            <span>+</span>
          </div>
          <div className="overview-card refferal-crd">
            <Image
              src="/image/refferalicon.png"
              alt="refferalicon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>456</h4>
            <p>Refferal Payouts</p>
            <span>+</span>
          </div>
          <div className="overview-card unfulfill-crd">
            <Image
              src="/image/unfulfillicon.png"
              alt="unfulfillicon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>3245</h4>
            <p>Unfulfilled Orders</p>
            <span>+</span>
          </div>
          <div className="overview-card subscriber-crd">
            <Image
              src="/image/subscribericon.png"
              alt="subscribericon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>564</h4>
            <p>Subscribers</p>
            <span>+</span>
          </div>
          <div className="overview-card microsites-crd">
            <Image
              src="/image/micrositesicon.png"
              alt="micrositesicon"
              height={40}
              width={40}
              className="top-overview-card"
            />
            <h4>435</h4>
            <p>Microsites</p>
            <span>+</span>
          </div>
        </div>
        <div className="dashboard-charts">
          <div className="line-chart">
            <h3>User Growth</h3>
            <ReactApexChart
              options={option.options}
              series={option.series}
              type="line"
              width={
                width < 1549
                  ? width < 1249
                    ? width < 992
                      ? width < 768
                        ? width < 550
                          ? 300
                          : 500
                        : 700
                      : 750
                    : 575
                  : 450
              }
              height={260}
            />
          </div>
          <div className="area-chart">
            <h3>Free Vs Premium Customers</h3>
            <ReactApexChart
              options={option.options}
              series={option.series}
              type="area"
              width={
                width < 1549
                  ? width < 1249
                    ? width < 992
                      ? width < 768
                        ? width < 550
                          ? 300
                          : 500
                        : 700
                      : 750
                    : 360
                  : 360
              }
              height={260}
            />
          </div>
          <div className="sales-leader-board">
            <h3>Sales Leader Board</h3>
            <div className="sales-leader-board-inside">
              <div className="sales-data-head">
                <p className="number-col">#</p>
                <p className="name-col">Name</p>
                <div className="amount-col">
                  <p>Amount</p>
                </div>
                <p className="owed-col">Owed</p>
              </div>
              <div className="sales-data-body">
                <p className="number-col">01</p>
                <p className="name-col">Travis</p>
                <div className="amount-col">
                  <div style={{ backgroundColor: "#CDE7FF" }}>
                    <div style={{ backgroundColor: "#0095FF", width: "70%" }} />
                  </div>
                </div>
                <p className="owed-col">
                  <label
                    style={{
                      border: "1px solid #0095ff",
                      backgroundColor: "#f0f9ff",
                      color: "#0095ff",
                    }}
                  >
                    45%
                  </label>
                </p>
              </div>
              <div className="sales-data-body">
                <p className="number-col">02</p>
                <p className="name-col">Neel</p>
                <div className="amount-col">
                  <div style={{ backgroundColor: "#8CFAC7" }}>
                    <div style={{ backgroundColor: "#00E096", width: "70%" }} />
                  </div>
                </div>
                <p className="owed-col">
                  <label
                    style={{
                      border: "1px solid #00E096",
                      backgroundColor: "#F0FDF4",
                      color: "#00E096",
                    }}
                  >
                    45%
                  </label>
                </p>
              </div>
              <div className="sales-data-body">
                <p className="number-col">03</p>
                <p className="name-col">Sadit</p>
                <div className="amount-col">
                  <div style={{ backgroundColor: "#C5A8FF" }}>
                    <div style={{ backgroundColor: "#884DFF", width: "70%" }} />
                  </div>
                </div>
                <p className="owed-col">
                  <label
                    style={{
                      border: "1px solid #884DFF",
                      backgroundColor: "#FBF1FF",
                      color: "#884DFF",
                    }}
                  >
                    45%
                  </label>
                </p>
              </div>
              <div className="sales-data-body">
                <p className="number-col">04</p>
                <p className="name-col">Abdul</p>
                <div className="amount-col">
                  <div style={{ backgroundColor: "#FFD5A4" }}>
                    <div style={{ backgroundColor: "#FF8F0D", width: "70%" }} />
                  </div>
                </div>
                <p className="owed-col">
                  <label
                    style={{
                      border: "1px solid #FF8F0D",
                      backgroundColor: "#FFD5A4",
                      color: "#FF8F0D",
                    }}
                  >
                    45%
                  </label>
                </p>
              </div>
            </div>
          </div>
          <div className="bar-chart">
            <h3>Sales Goals</h3>
            <ReactApexChart
              options={option.options}
              series={option.series}
              type="bar"
              width={
                width < 1549
                  ? width < 1249
                    ? width < 992
                      ? width < 768
                        ? width < 550
                          ? 300
                          : 500
                        : 700
                      : 367
                    : 525
                  : 400
              }
              height={260}
            />
          </div>

          <div className="customer-support-board">
            <h3>Customer Support</h3>
            <div className="customer-support-board-inside">
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="customer-support-board">
            <h3>Customer Support</h3>
            <div className="customer-support-board-inside">
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
              <div className="customer-support-board-body">
                <Image
                  src={"/image/supportImage.png"}
                  alt="support"
                  height={45}
                  width={45}
                />
                <div className="customer-support-content">
                  <h4>Rehana</h4>
                  <p>Lorem ipsome generated...</p>
                </div>
                <div className="customer-support-time">
                  <p>14:00</p>
                  <CiTimer size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
