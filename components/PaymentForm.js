import { useState, useEffect } from "react";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./../context/cartContext/CartProvider";
// import StatusMessages, { useMessages } from "./../custom-hooks/StatusMessages";
// import { Link } from "react-router-dom";
// import swopImage from "../images/shipping_color_icon.svg";
// import { chackrefferelCode } from "../context/cartContext/cartActions";
// import SubmitButton from "../components/SubmitButton";
// import payment_1 from "../images/visa_card.png";
// import payment_2 from "../images/master_card.png";
// import payment_3 from "../images/amex_card.png";
// import payment_4 from "../images/discover_card.png";
// import ReactTooltip from "react-tooltip";
// import { FaLock } from "react-icons/fa";
// import { VscLoading } from "react-icons/vsc";

const PaymentForm = ({
  shipping,
  setShipping,
  cssClasses,
  totalPrice,
  refCode,
  setRefCode,
  totalQty,
}) => {
  // const [cardItems] = useCart();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [secret, setSecret] = useState(null);
  // const elements = useElements();
  // const stripe = useStripe();
  // const [data, cartDispatch] = useCart();
  // const [messages, addMessage] = useMessages();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isClicked, setClicked] = useState(false);

  const [orgPrice] = useState(totalPrice);

  // if (data.coupon) {
  //   if (
  //     data.coupon.code_type === "coupon" &&
  //     data.coupon.coupon_type === "Free Product"
  //   ) {
  //     totalPrice = 5.99;
  //   } else if (
  //     data.coupon.code_type === "coupon" &&
  //     data.coupon.coupon_type === "Percentage"
  //   ) {
  //     totalPrice = (
  //       totalPrice -
  //       (totalPrice * data.coupon.percentage) / 100
  //     ).toFixed(2);
  //   }
  // }

  const handleCheckCupon = () => {
    setClicked(true);
    chackrefferelCode(refCode, cartDispatch);
  };

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Roboto, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "14px",
        "::placeholder": {
          color: "#606060",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  // const items = cardItems.items.map((item) => ({
  //   id: item._id,
  //   name: item.name,
  //   price: item.price,
  //   quantity: item.qty,
  //   customDesign: item.customDesign,
  // }));

  useEffect(() => {
    if (shipping) {
      setName(`${shipping.firstName} ${shipping.lastName}`);
      setEmail(shipping.email);
      setAddress(shipping.address);
      const body = {
        cartItems: items,
        shipping: {
          name: `${shipping.firstName} ${shipping.lastName}`,
          address: {
            line1: shipping.address,
          },
        },
        description: "payment intend for swop",
        receipt_email: shipping.email,
        totalPrice: Math.round(totalPrice * 100),
        refCode: "",
        referenceStatus: "",
      };
      const customerChackout = async () => {
        try {
          const response = await axios.post(
            "https://swopbackend.herokuapp.com/payment",
            //'http://192.168.0.181:5000/payment',
            // 'http://localhost:5000/payment',
            body
          );
          setSecret(response.data.clientSecret);
        } catch (error) {
          addMessage(
            "Failed to create payment intend please check your internet connection or reload the application"
          );
        }
      };
      customerChackout();
    }
    // eslint-disable-next-line
  }, [shipping, totalPrice]);

  const cardHandleChange = (event) => {
    const { error } = event;
    setError(error ? error.message : null);
  };
  const handleCheckout = async () => {
    addMessage("Processing Payment");
    setProcessing(true);
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

    if (stripeError) {
      addMessage(`${stripeError.message}`);
      setProcessing(false);
      return;
    } else {
      addMessage(`status: ${paymentIntent.status}`);
      const {
        address,
        city,
        country,
        email,
        firstName,
        lastName,
        phoneNumber,
        state,
        zip,
      } = shipping;
      const saveDataToDB = async () => {
        // if (cardItems.referenceStatus.status) {
        //   items[0].quantity = items[0].quantity + 1;
        // }

        const dataToSave = {
          items: items,
          email,
          firstName,
          lastName,
          refCode: refCode,
          totalQuantity: totalQty,
          orgPrice,
          totalPrice: totalPrice,
          addressCustomer: {
            address,
            city,
            country,
            state,
            zip,
            phoneNumber,
          },
          codeIsValid: data.referenceStatus.status,
          couponCode: data.coupon,
        };

        if (cardItems.referenceStatus.status) {
          saveDataToDB.refCode = refCode;
        }

        try {
          // addMessage('Saving payment details to database...')
          const res = await axios.post(
            "https://swopbackend.herokuapp.com/product/update",
            //'http://192.168.0.181:5000/product/update',
            // 'http://localhost:5000/product/update',
            dataToSave
          );
          if (res.status === 200) {
            cardItems.referenceStatus.status = false;
            data.coupon = null;
            addMessage("Done");
            navigate("/payment/success");
            // setTimeout(() => navigate('/payment/success'), 1500)
          }
        } catch (error) {
          addMessage("Something wrong please feel free contact with us");
        }
      };
      saveDataToDB();
    }
  };

  return (
    <div className={`${cssClasses}`}>
      <div className="container payment__container">
        <div className="lg:grid overflow-hidden grid-cols-3 flexing_reverse">
          <div className="col-span-2 contact_info_right_border">
            <div className="py-3">
              {/* <Link to="/">
                <img
                  src={swopImage}
                  alt="swoapImage"
                  className="w-1/4 mx-auto mb-6 full_width_img"
                />
              </Link> */}
              <div className="step__sections">
                <div className="section">
                  <div className="content-box">
                    <div
                      role="table"
                      className="content-box__row content-box__row--tight-spacing-vertical"
                    >
                      <div role="row" className="review-block">
                        <div className="review-block__inner">
                          <div role="rowheader" className="review-block__label">
                            Name
                          </div>
                          <div role="cell" className="review-block__content">
                            <bdo dir="ltr">{name}</bdo>
                          </div>
                        </div>
                        <div role="cell" className="review-block__link">
                          <button
                            className="link"
                            onClick={() => setShipping(false)}
                          >
                            <span aria-hidden="true">Change</span>
                          </button>
                        </div>
                      </div>
                      <div role="row" className="review-block">
                        <div className="review-block__inner">
                          <div role="rowheader" className="review-block__label">
                            Email
                          </div>
                          <div role="cell" className="review-block__content">
                            <bdo dir="ltr">{email}</bdo>
                          </div>
                        </div>
                        <div role="cell" className="review-block__link">
                          <button
                            className="link"
                            onClick={() => setShipping(false)}
                          >
                            <span aria-hidden="true">Change</span>
                          </button>
                        </div>
                      </div>
                      <div role="row" className="review-block">
                        <div className="review-block__inner">
                          <div role="rowheader" className="review-block__label">
                            Ship to
                          </div>
                          <div role="cell" className="review-block__content">
                            <address className="address address--tight">
                              {address}
                            </address>
                          </div>
                        </div>
                        <div role="cell" className="review-block__link">
                          <button
                            className="link"
                            onClick={() => setShipping(false)}
                          >
                            <span aria-hidden="true">Change</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section section--shipping-method">
                <div className="section__header">
                  <h2>Payment</h2>
                  <p>All transactions are secure and encrypted.</p>
                </div>
                <div className="payment_container">
                  <div className="payment_gateway_style">
                    <div className="payment-method-wrapper ">
                      <label class="credit__text">Credit Card</label>
                      {/* <div className="payment__label__accessory">
                        <div className="payment_icon">
                          <img src={payment_1} alt="swoapImage" className="" />
                        </div>
                        <div className="payment_icon">
                          <img src={payment_2} alt="swoapImage" className="" />
                        </div>
                        <div className="payment_icon">
                          <img src={payment_3} alt="swoapImage" className="" />
                        </div>
                        <div className="payment_icon">
                          <img src={payment_4} alt="swoapImage" className="" />
                        </div>
                      </div> */}
                    </div>
                    <div className="payment_input_content">
                      <div className="payment_card_number">
                        <CardNumberElement
                          onChange={cardHandleChange}
                          options={cardStyle}
                          className="card-element mb-2"
                        />
                        <div className="lockIcon">
                          {/* <FaLock data-tip="All transactions are secure and encrypted." /> */}
                          {/* <ReactTooltip /> */}
                        </div>
                      </div>
                      <div
                        style={{
                          margin: "18px 0px",
                        }}
                      >
                        <CardExpiryElement
                          onChange={cardHandleChange}
                          options={cardStyle}
                          className="card-element mb-2"
                        />
                      </div>
                      <div>
                        <CardCvcElement
                          onChange={cardHandleChange}
                          options={cardStyle}
                          className="card-element"
                        />
                      </div>
                    </div>
                    <div className="payment__btn">
                      {/* <SubmitButton
                        disabled={processing || !stripe}
                        onClick={() => handleCheckout()}
                      >
                        {processing ? "Processing..." : `Pay $${totalPrice}`}
                      </SubmitButton> */}
                    </div>
                  </div>
                </div>
                {/* <div className=" max-w-md mx-auto mt-20 text-center">
                  <h4 className="text-lg my-4">Enter Here Payment Details</h4>
                  <div>
                    <CardNumberElement
                      onChange={cardHandleChange}
                      options={cardStyle}
                      className="card-element mb-2"
                    />
                  </div>
                  <div>
                    <CardExpiryElement
                      onChange={cardHandleChange}
                      options={cardStyle}
                      className="card-element mb-2"
                    />
                  </div>
                  <div>
                    <CardCvcElement
                      onChange={cardHandleChange}
                      options={cardStyle}
                      className="card-element mb-2"
                    />
                  </div>
                  <div>
                  <SubmitButton disabled={processing || !stripe}
                      onClick={() => handleCheckout()}>
                    {processing ? "Processing..." : `Pay $${totalPrice}`}
                  </SubmitButton>
                  </div>
                  <div className="mb-2">
                    {error && <p className="text-red-500">{error}</p>}
                  </div>
                </div> */}
                {/* {messages.length > 0 && (
                  <div className=" max-w-md mx-auto my-10 text-center">
                    <StatusMessages messages={messages} />
                  </div>
                  
                )} */}
              </div>
            </div>
            <div className="flex py-3 payment_footer__nav">
              <Link href="/refund-policy" className="">
                Refund Policy
              </Link>
              <Link href="/privacy" className="ml-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="ml-4">
                Terms of Use
              </Link>
            </div>
          </div>
          {/* <div className="py-5 shipping_product_list">
<Link href="/">
  <img
    src={swopImage}
    alt="swoapImage"
    className="w-1/4 mx-auto mb-6 small_view_img"
  />
</Link>
<div className="order-summary__section--product-list">
  {data.items.map((item) => (
    <div
      key={item._id}
      className="flex items-center py-4 rounded-md mb-4"
    >
      <img
        src={item.imageUrl[0]}
        alt={item.name}
        className="w-24 h-24 mr-2"
      />

      <div class="product-thumbnail">
        <div class="product-thumbnail__wrapper">
          <img
            class="product-thumbnail__image"
            src={
              item.customDesign.length > 0
                ? item.customDesign[0]
                : item.imageUrl[0]
            }
          />
        </div>
        <span
          class="product-thumbnail__quantity"
          aria-hidden="true"
        >
          1
        </span>
      </div>
      <div className="text-center sm:text-left">
        <span class="product__description__name order-summary__emphasis">
          {item.name}
        </span>
        <span class="product__description__variant order-summary__small-text">
          Black
        </span>
      </div>
      <div className="product__description__price order-summary__emphasis skeleton-while-loading ml-auto">
        ${(item.price * item.qty).toFixed(2)}
      </div>
    </div>
  ))}
</div>

<div className="">
  {data.referenceStatus.status === false ? (
    <div className="my-5">
      <div className="flex">
        <input
          type="text"
          placeholder="Discount Code"
          className="shipping_input_box w-full  rounded-md py-2"
          value={refCode}
          onChange={(e) => setRefCode(e.target.value)}
        />
        <button
          className="field__input-btn btn btn--disabled"
          onClick={handleCheckCupon}
          disabled={!refCode}
        >
          Apply
        </button>
      </div>
      {data.referenceStatus.attempt > 0 &&
      data.referenceStatus.status === false &&
      data.referenceStatus.loading === false ? (
        <p className="invalid_code flex justify-center">
          Discount Code Not Valid
        </p>
      ) : isClicked ? (
        <VscLoading className="animate-spin loading_anim" />
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <div className="get_discount">
      <p>Discount Code Applied</p>
      {data.coupon && data.coupon.code_type === "referral" && (
        <p>
          Congratulation! you will get a free NFC with your order
        </p>
      )}
    </div>
  )}
  <div className="flex mb-4">
    <input
      type="text"
      placeholder="Discount Code"
      className="shipping_input_box w-full  rounded-md py-2 mb-2"
      value={refCode}
      onChange={e => setRefCode(e.target.value)}
    />
    <button
      className="field__input-btn btn btn--disabled mb-2"
      onClick={handleCheckCupon}
      disabled={!refCode}
    >
      Apply
    </button>
  </div>
  <hr className=" text-gray-400" />
  <div className="total_summary__section">
    <div className="total_summary_price">
      <span>Subtotal</span>
      {data.coupon &&
      data.coupon.code_type === "coupon" &&
      data.coupon.coupon_type === "Free Product" ? (
        <span style={{ textDecoration: "line-through" }}>
          ${orgPrice}
        </span>
      ) : (
        <span>${totalPrice}</span>
      )}
    </div>
    <div className="total_summary_price">
      <span>Shipping</span>
      {data.coupon &&
      data.coupon.code_type === "coupon" &&
      data.coupon.coupon_type === "Free Product" ? (
        <span>$5.99</span>
      ) : (
        <span style={{ textDecoration: "line-through" }}>
          $5.99
        </span>
      )}
    </div>
  </div>
  <hr className=" text-gray-400" />
  <div className="total_summary_price pt-4">
    <span className="payment-due-label__total">Total</span>
    <span className="payment-due__price">${totalPrice}</span>
  </div>
</div>
</div>  */}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
