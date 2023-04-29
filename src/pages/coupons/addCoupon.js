import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { URL } from "@/components/Reuse";

const AddCoupon = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [expires, setExpires] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);

  const [discountType, setDiscountType] = useState("%");
  const [amountOff, setAmountOff] = useState("");
  const [description, setDescription] = useState("");
  const [spentMinimum, setSpentMinimum] = useState("");
  const [image, setImage] = useState(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleExpiresChange = (event) => {
    setExpires(event.target.value);
  };

  const handleFreeShippingChange = (event) => {
    setFreeShipping(event.target.value === "yes");
  };

  const handleDiscountTypeChange = (event) => {
    console.log(discountType);
    setDiscountType(event.target.value);
  };

  const handleAmountOffChange = (event) => {
    setAmountOff(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSpentMinimumChange = (event) => {
    setSpentMinimum(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const couponData = {
      name,
      promoCode: name.replace(/\s+/g, "").toLowerCase(),
      expires,
      freeShipping,
      minimumPurchaseAmount: spentMinimum,
      description,
    };

    if (!freeShipping) {
      couponData.discountType = `${
        discountType === "%" ? "percentage" : "amount"
      }`;
      if (discountType === "%") couponData.percentageOff = amountOff;
      else couponData.amountOff = amountOff;
    }

    try {
      await axios.post(`${URL}/api/v1/coupon`, couponData, {
        withCredentials: true,
      });
      router.push("/coupons");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="promocode-card">
          <div className="promocode-background">
            <Image
              src="/image/promo-code.png"
              alt="promo-code"
              height={262}
              width={434}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="promocode-bottom">
              <div className="promocode-inside">
                <p>Name:</p>
                <input
                  type="text"
                  placeholder="Enter coupon name."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <p>Coupon:</p>
                <input
                  type="text"
                  placeholder="Enter coupon code."
                  value={name.replace(/\s+/g, "").toLowerCase()}
                  onChange={() => {}}
                />

                <p>Expires:</p>
                <input
                  type="date"
                  value={expires}
                  onChange={handleExpiresChange}
                />

                <p>Free shipping:</p>

                <input
                  type="radio"
                  name="shipping-type"
                  value="yes"
                  checked={freeShipping}
                  onChange={handleFreeShippingChange}
                />

                <label>Yes</label>

                <input
                  type="radio"
                  name="shipping-type"
                  value="no"
                  checked={!freeShipping}
                  onChange={handleFreeShippingChange}
                />

                <label>No</label>

                {!freeShipping && (
                  <>
                    <div>
                      <p>Discount Type:</p>
                      <input
                        type="radio"
                        name="discount-type"
                        value="%"
                        checked={discountType === "%"}
                        onChange={handleDiscountTypeChange}
                      />
                      <label>Percent (%)</label>
                      <input
                        type="radio"
                        name="discount-type"
                        value="$"
                        checked={discountType === "$"}
                        onChange={handleDiscountTypeChange}
                      />
                      <label>Amount ($)</label>
                    </div>
                    <p>Amount Off:</p>
                    <input
                      type="number"
                      value={amountOff}
                      onChange={handleAmountOffChange}
                      placeholder="Enter amount."
                    />
                  </>
                )}
              </div>
              <div className="promocode-inside">
                <p>Description:</p>
                <textarea
                  rows="9"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Write your description....."
                ></textarea>

                <p>Spent minimum amount:</p>
                <input
                  type="number"
                  value={spentMinimum}
                  onChange={handleSpentMinimumChange}
                  placeholder="Enter amount"
                />

                <p>Image:</p>
                <input type="file" />
              </div>
              <button>Save</button>
              {/* <button>Delete</button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoupon;
