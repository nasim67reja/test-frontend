import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

const Financials = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="table">
            <div className="table-head">
              <p className="financial-amount">Aggregates Amounts</p>
              <p className="financial-revenue">Revenue</p>
              <p className="financial-assets">Assets</p>
              <p className="financial-profit">Profit</p>
              <p className="financial-acqCost">Customer Acquistion Cost</p>
              <p className="financial-costCustomer">Cost Per Customer</p>
              <p className="financial-projection">Projections</p>
            </div>
            <div className="table-body">
              <p className="financial-amount">40$</p>
              <p className="financial-revenue">40%</p>
              <p className="financial-assets">3</p>
              <p className="financial-profit">40$</p>
              <p className="financial-acqCost">40$</p>
              <p className="financial-costCustomer">40$</p>
              <p className="financial-projection">40%</p>
            </div>
            <div className="table-body">
              <p className="financial-amount">40$</p>
              <p className="financial-revenue">40%</p>
              <p className="financial-assets">3</p>
              <p className="financial-profit">40$</p>
              <p className="financial-acqCost">40$</p>
              <p className="financial-costCustomer">40$</p>
              <p className="financial-projection">40%</p>
            </div>
            <div className="table-body">
              <p className="financial-amount">40$</p>
              <p className="financial-revenue">40%</p>
              <p className="financial-assets">3</p>
              <p className="financial-profit">40$</p>
              <p className="financial-acqCost">40$</p>
              <p className="financial-costCustomer">40$</p>
              <p className="financial-projection">40%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financials;
