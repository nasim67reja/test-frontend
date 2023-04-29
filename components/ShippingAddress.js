import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { VscLoading } from 'react-icons/vsc';
import { TextField } from './TextField';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

const ShippingAddress = ({
  shipping,
  setShipping,
  cssClasses,
  refCode,
  setRefCode,
  formAction,
}) => {
  const {
    email,
    address,
    address2,
    city,
    country,
    firstName,
    lastName,
    phoneNumber,
    state,
    zip,
  } = shipping;
  const [isClicked, setClicked] = useState(false);

  const handleCheckCupon = () => {
    setClicked(true);
    chackrefferelCode(refCode, cartDispatch);
  };

  const validate = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.number().required('Zip is required'),
  });
  const cartProduct = useSelector((state) => state.cart) || {};
  const totalAmount = cartProduct.cart.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    },
    0
  );

  return (
    <>
      <div class="container home-top-margin">
        <div className="container payment__container">
          <div className="lg:grid overflow-x-hidden grid-cols-3 flexing_reverse">
            <div className="col-span-2 contact_info_right_border">
              <Formik
                initialValues={{
                  email: '',
                  firstName: '',
                  lastName: '',
                  address: '',
                  address2: '',
                  city: '',
                  country: '',
                  state: '',
                  zip: '',
                  phoneNumber: '',
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  setShipping(values);
                }}
              >
                {(formik) => (
                  <div>
                    {/* <Link href="/">
                    <Image
                      src="/swopLogo.svg"
                      alt="swop-logo"
                      width={50}
                      height={50}
                      className="w-1/4 mx-auto mb-6 full_width_img"
                    />
                  </Link> */}

                    <div>
                      <h2 className="pb-4 section__title">
                        Contact Information
                      </h2>
                    </div>
                    <Form>
                      <TextField
                        label="Enter your email"
                        name="email"
                        type="email"
                        // value={formik.values.email}
                      />
                      <div>
                        <h2 className="py-4">Shipping address </h2>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <TextField
                          label="First Name"
                          name="firstName"
                          type="text"
                          // value={formik.values.firstName}
                        />
                        <TextField
                          label="Last Name"
                          name="lastName"
                          type="text"
                          // value={formik.values.lastName}
                        />
                      </div>
                      <div className="mb-4">
                        <TextField
                          label="Address"
                          name="address"
                          type="text"
                          // value={formik.values.address}
                        />
                      </div>
                      <div className="mb-4">
                        <TextField
                          label="Apartment, suite, etc. (optional)"
                          name="address2"
                          type="text"
                          // value={formik.values.address2}
                        />
                      </div>
                      <div className="mb-4">
                        <TextField
                          label="City"
                          name="city"
                          type="text"
                          // value={formik.values.city}
                        />
                      </div>

                      <div className="lg:grid lg:grid-cols-3 lg:gap-3">
                        <div className="mb-4">
                          <TextField
                            label="State"
                            name="state"
                            type="text"
                            // value={formik.values.state}
                          />
                        </div>
                        <div className="mb-4">
                          <TextField
                            label="Zip code"
                            name="zip"
                            type="text"
                            // value={formik.values.zip}
                          />
                        </div>
                        <div className="mb-4">
                          <TextField
                            label="Country"
                            name="country"
                            type="text"
                            // value={formik.values.country}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <TextField
                          label="Phone Number"
                          name="phoneNumber"
                          type="text"
                          // value={formik.values.phoneNumber}
                        />
                      </div>

                      <div className="mb-4 py-4">
                        <button
                          type="submit"
                          className="px-5 py-2 mr-3 text-white continue_shipping"
                        >
                          Continue to Shipping
                        </button>

                        <button>
                          <Link
                            href="/cart"
                            style={{
                              color: '#000000',
                              marginLeft: '10px',
                            }}
                          >
                            Return To Cart
                          </Link>
                        </button>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>

              {/* <div className="flex py-3 payment_footer__nav">
              <Link href="/refund-policy" className="">
                Refund Policy
              </Link>
              <Link href="/privacy" className="ml-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="ml-4">
                Terms of Use
              </Link>
            </div> */}
            </div>
            <div className="py-5 shipping_product_list">
              {/* <Link to="/">
              <img
                src={swopImage}
                alt="swoapImage"
                className="mx-auto mb-6 small_view_img"
              />
            </Link> */}
              <div className="order-summary__section--product-list">
                {cartProduct.cart.length > 0 &&
                  cartProduct.cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center py-4 rounded-md mb-4"
                    >
                      <div class="product-thumbnail">
                        <div class="product-thumbnail__wrapper">
                          <img
                            src={item.image}
                            alt={item.name}
                            class="product-thumbnail__image"
                          />
                        </div>
                        <span
                          class="product-thumbnail__quantity"
                          aria-hidden="true"
                        >
                          {item.quantity}
                        </span>
                      </div>
                      <div className="text-center sm:text-left">
                        <span class="product__description__name order-summary__emphasis">
                          {item.name}
                        </span>
                      </div>
                      <div className="product__description__price order-summary__emphasis skeleton-while-loading ml-auto">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="">
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
                {/* {data.referenceStatus.status === false ? (
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
              )} */}
                <hr className=" text-gray-400" />
                <div className="total_summary__section">
                  <div className="total_summary_price">
                    <span>Subtotal</span>
                    <span>${totalAmount}</span>

                    {/* {data.coupon &&
                  data.coupon.code_type === "coupon" &&
                  data.coupon.coupon_type === "Free Product" ? (
                    <span style={{ textDecoration: "line-through" }}>
                      ${orgPrice}
                    </span>
                  ) : (
                    <span>${totalPrice}</span>
                  )} */}
                  </div>
                  <div className="total_summary_price">
                    <span>Shipping</span>
                    <span style={{ textDecoration: 'line-through' }}>
                      $5.99
                    </span>
                    {/* {data.coupon &&
                  data.coupon.code_type === "coupon" &&
                  data.coupon.coupon_type === "Free Product" ? (
                    <span>$5.99</span>
                  ) : (
                    <span style={{ textDecoration: "line-through" }}>
                      $5.99
                    </span>
                  )} */}
                  </div>
                </div>
                <hr className=" text-gray-400" />
                <div className="total_summary_price pt-4">
                  <span className="payment-due-label__total">
                    Total
                  </span>
                  <span className="payment-due__price">
                    ${totalAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
