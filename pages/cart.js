import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { cartActions } from '../store/cartSlice';
import Image from 'next/image';
import useWindowDimensions from '../components/useWindowDimensions';

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const removeProductHandler = () => {
    dispatch(cartActions.removeItem(data));
  };
  const decreaseHandler = () => {
    dispatch(cartActions.decreaseItem(data));
  };

  const Products =
    useSelector((state) => state?.products.allProducts) || {};
  const [singleProduct] = Products.data.filter(
    (el) => el.name === data.name
  );

  const increaseHandler = () => {
    // console.log(data.quantity);
    if (singleProduct.quantity > data.quantity)
      dispatch(cartActions.increaseItem(data));
  };

  return (
    <div className="mb-12">
      <div className="py-6 flex justify-around">
        {/* <img src={data.image} alt={data.name} /> */}
        <img
          src={data?.image}
          alt={data?.name}
          width={192}
          height={192}
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="font-bold text-3xl">{data.name}</h3>
          <span className="font-bold text-xl text-gray-500">
            ${data.price}
          </span>
          <div className="border border-gray-400 flex w-max justify-between h-10">
            <button
              className="border-r border-gray-400 bg-gray-200 hover:bg-gray-300 w-10 flex justify-center items-center"
              onClick={decreaseHandler}
            >
              <AiOutlineMinus />
            </button>
            <input
              className="border-r border-gray-400 w-12 text-center"
              value={data.quantity}
            />
            <button
              className={`w-10 flex justify-center items-center font-bold bg-gray-200 hover:bg-gray-300 ${
                singleProduct.quantity > data.quantity
                  ? ''
                  : 'not-allowed'
              }`}
              onClick={increaseHandler}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <p className=" text-gray-500 font-semibold">
            <span className="text-lg font-semibold">Total: </span> $
            {(data.price * data.quantity).toFixed(2)}
          </p>
        </div>
        <div>
          <button
            className="font-semibold"
            onClick={removeProductHandler}
          >
            Remove <span className="text-xl">x</span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

const Cart = () => {
  const { width } = useWindowDimensions();
  const item = useSelector((state) => state.cart);

  const totalAmount = item.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <h1
          style={{
            // paddingTop: "20vh",
            fontSize: '36px',
            marginBottom: '1rem',
            marginTop: '3rem',
            fontWeight: '500',
          }}
        >
          Shopping Cart
        </h1>
        <hr style={{ color: '#D1D5DB' }} />
        {item.cart.length < 1 ? (
          <div className="empty-box center">
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginTop: '1.25rem',
                  textAlign: 'center',
                }}
              >
                Your Cart is empty
              </h3>
              <div className="center">
                <button className="viewAll-btn">
                  <Link href="/shop">Visit All Products</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${width < 992 ? 'mb-6' : 'items'}`}>
            <div>
              {item.cart.map((el, i) => (
                <Item key={i} data={el} />
              ))}
            </div>
            <div className="checkout mt-6">
              <div className="flex justify-between">
                <p className="font-semibold">Sub Total</p>
                <p className="font-semibold">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <Link href="/payment">
                  <button className="btn btn-checkout">
                    checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
