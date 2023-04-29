import Parent from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import Link from "next/link";
import { productsActions } from "@/store/allProducts";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { URL, truncateString } from "@/components/Reuse";
import { useGetProductsQuery } from "services/productApi";

// axios.defaults.withCredentials = true;

const Products = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.allProducts);

  // useEffect(() => {
  //   dispatch(productsActions.storeProducts(data));
  // }, [data]);
  // console.log(data);
  // console.log(error);
  // console.log(Products);

  // console.log(data.data.data, error);

  const test = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://sowp-new-backend.herokuapp.com/api/v1/product/all`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      dispatch(productsActions.storeProducts(data));
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    test();
  }, [test]);

  // if (isError) return <div>Something is wrong</div>;
  return (
    <>
      <div className="container">
        <div className="justify-grid">
          {/* Dynamic */}
          {Products?.data.map((el, i) => (
            <div key={i} className="product-card">
              <Link href={`/products/${el._id}`}>
                <img
                  src={el.imageUrls[0]}
                  alt={el.name}
                  // height={40}
                  // width={40}
                />
              </Link>
              <h5>{el.name}</h5>
              <p>{truncateString(el.description, 70)}</p>
              <div className="product-price">
                <label className="left">${el.price.$numberDecimal}</label>
                <label className="right">QTY: {el.quantity}</label>
              </div>
            </div>
          ))}
          {/* <div>dummy data</div> */}
        </div>
        <div className="add-product">
          <Link href="/products/add">Add products</Link>
        </div>
      </div>
    </>
  );
};

// Dynamic
// export async function getStaticProps() {
//   try {
//     const res = await axios.get(`https://sowp-new-backend.herokuapp.com/api/v1/product/all`, {
//       withCredentials: true,
//     });
//     const data = res.data;

//     return {
//       props: {
//         data,
//         error: null,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: [],
//         error: {
//           message: error.message,
//         },
//       },
//     };
//   }
// }

export default Products;

{
  /* <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product2.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>

          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product3.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product4.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product5.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product6.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product1.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product2.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product3.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product4.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product5.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product6.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div> */
}
