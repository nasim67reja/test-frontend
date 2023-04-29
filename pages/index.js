import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiOutlineArrowRight } from "react-icons/hi";
import homeImage1 from "../images/homeimage1.png";
import icon1 from "../images/iconmouse.png";
import icon2 from "../images/iconmusic.png";
import icon3 from "../images/iconvideo.png";
import icon4 from "../images/icongraph.png";
import cardImg1 from "../images/homeCard1.png";
import cardImg2 from "../images/homeCard2.png";
import cardImg3 from "../images/homeCard3.png";
import cardIcon1 from "../images/iconshareinfo.png";
import cardIcon2 from "../images/iconcapture.png";
import cardIcon3 from "../images/iconexport.png";
import cardIcon4 from "../images/icongofaster.png";
import number1 from "../images/number-icon1.png";
import number2 from "../images/number-icon2.png";
import number3 from "../images/number-icon3.png";
import Share from "../components/Share";
import { ProductData } from "../components/ProductData";
import Capture from "../components/Capture";
import Export from "../components/Export";
import Faster from "../components/Faster";
import { URL } from "../components/Reuses/URL";
import axios from "axios";
import Product from "../components/Reuses/Product";
import { useGetProductsQuery } from "../services/productApi";
import { useSelector } from "react-redux";

export default function Home() {
  const [features, setFeatures] = useState("share");

  // const Products = useSelector((state) => state?.products.allProducts) || {};
  // console.log(Products);
  const Products = useSelector((state) => state.products.allProducts);

  // const [isLoading, setIsLoading] = useState(true)

  // const loadingfunc = () => {
  //   setIsLoading(false)
  // }

  // setTimeout(loadingfunc, 1000)

  return (
    // isLoading === false ?
    <>
      <Navbar />
      <div className="container home-top-margin">
        <video
          controls={false}
          muted
          preload="auto"
          autoPlay
          loop
          playsInline
          id="video"
          unoptimized
        >
          <source src={"/banner.mp4"} type="video/mp4" />
        </video>
        <Link href="/" className="shop-now-btn">
          Shop Now <HiOutlineArrowRight size={20} />
        </Link>

        <div className="home-networking">
          <h2>Welcome to Swop</h2>
          <p className="hide-mobile-view">
            Swop offers a variety of services in our free app. While our app is
            free and provides a business or creator with essential
            <br />
            tools they need to grow and expand. We also offer a paid
            subscription that provides various add-ons
            <br />
            like token powered sites that will allow you to take your
            relationship
            <br />
            with your following to the next level.
          </p>
          <p className="hide-pc-view">
            Swop offers a variety of services in our free app. While our app is
            free and provides a business or creator with essential tools they
            need to grow and expand. We also offer a paid subscription that
            provides various add-ons like token powered sites that will allow
            you to take your relationship with your following to the next level.
          </p>
          <div className="home-networking-ber">
            <div className="networking-row">
              <div
                className={`networking-crd ${
                  features === "share" && "networking-active"
                }`}
                onClick={() => setFeatures("share")}
              >
                <Image src={cardIcon1} alt="no_image" height={56} width={56} />
                <p>Share Your Info</p>
              </div>
              <div
                className={`networking-crd ${
                  features === "capture" && "networking-active"
                }`}
                onClick={() => setFeatures("capture")}
              >
                <Image src={cardIcon2} alt="no_image" height={56} width={56} />
                <p>Capture Leads</p>
              </div>
              <div
                className={`networking-crd ${
                  features === "export" && "networking-active"
                }`}
                onClick={() => setFeatures("export")}
              >
                <Image src={cardIcon3} alt="no_image" height={56} width={56} />
                <p>Payments</p>
              </div>
              <div
                className={`networking-crd ${
                  features === "faster" && "networking-active"
                }`}
                onClick={() => setFeatures("faster")}
              >
                <Image src={cardIcon4} alt="no_image" height={56} width={56} />
                <p>Grow Faster</p>
              </div>
            </div>
          </div>
          <div className="features-content-container">
            {features === "share" && <Share />}
            {features === "capture" && <Capture />}
            {features === "export" && <Export />}
            {features === "faster" && <Faster />}
          </div>
        </div>

        <div className="creators-container">
          {/* <h2>Creators</h2> */}
          <Image src="/creators.png" alt="creators" height={80} width={264} />
          <p className="hide-mobile-view">
            Swop is a useful tool for content creators and musicians to share
            their work and connect with their audience. With Swop, they can
            build profiles,
            <br />
            use NFC and QR technology to share their profiles, and aggregate all
            their important information in one place.
            <br />
            Swop also provides analytics tools to help track the performance of
            their
            <br />
            profiles and understand their audience.
          </p>
          <p className="hide-pc-view">
            Swop is a useful tool for content creators and musicians to share
            their work and connect with their audience. With Swop, they can
            build profiles, use NFC and QR technology to share their profiles,
            and aggregate all their important information in one place. Swop
            also provides analytics tools to help track the performance of their
            profiles and understand their audience.
          </p>
        </div>

        <div className="home-background1">
          <div className="row-div">
            <div className="col-6">
              <div className="home-image1">
                <Image src={homeImage1} alt="no_image" />
              </div>
            </div>
            <div className="col-6">
              <div className="home-content1-outside">
                <div className="home-content1">
                  <div className="row-div">
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon1}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Track analytics</h5>
                        <p>
                          Track all your links and connections easily in your
                          personal dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon2}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Aggregate</h5>
                        <p>
                          Aggregate all your information like music and social
                          to stay organized and help showcase your content.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon3}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Grow</h5>
                        <p>
                          We provide tools like NFC and Custom QR codes to help
                          you bring your content from the digital to physical
                          world.
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-content1-card">
                        <Image
                          src={icon4}
                          alt="no_image"
                          height={70}
                          width={70}
                        />
                        <h5>Token Powered</h5>
                        <p>
                          Sell access to your exclusive content with our token
                          powered sites. Monetize your content and control it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-how-it-work">
          <h2>HOW ITS WORKS</h2>
          <p className="hide-mobile-view">
            Swop is free to download and very easy to get started. After making
            a profile and getting setup be
            <br />
            sure to order a NFC. Our technology is compatible with all current
            and most
            <br />
            modern models of smartphones. Never miss an opportunity
            <br />
            again with Swop.
          </p>
          <p className="hide-pc-view">
            Swop is free to download and very easy to get started. After making
            a profile and getting setup be sure to order a NFC. Our technology
            is compatible with all current and most modern models of
            smartphones. Never miss an opportunity again with Swop.
          </p>
          <div className="background-level" />
          <div className="row-div">
            <div className="col-4">
              <Image
                src={number1}
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image src={cardImg1} alt="no_image" width={360} height={540} />
                <h5>
                  Set up your <span>SWOP</span> profile
                </h5>
                <p>
                  After creating an account and setting up your wallet, create a
                  website in the builder. Building a website is easy with our
                  app, it provides a template to input all your important
                  information.
                </p>
              </div>
            </div>
            <div className="col-4">
              <Image
                src={number2}
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image src={cardImg2} alt="no_image" width={360} height={540} />
                <h5>
                  Active <span>NFC</span> device
                </h5>
                <p>
                  After ordering a NFC device and setting up your microsite,
                  press the activate button on your website builder and tap the
                  NFC to your phone to connect the NFC to your website.
                </p>
              </div>
            </div>
            <div className="col-4">
              <Image
                src={number3}
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image src={cardImg3} alt="no_image" width={360} height={540} />
                <h5>
                  Ready to <span>connect</span>
                </h5>
                <p>
                  Tap the NFC and hold from 1-4 seconds on anyone’s phone you
                  meet and your profile will pop up. The other person does NOT
                  need the swop app for the NFC to work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <video
          controls={false}
          muted
          preload="auto"
          autoPlay
          loop
          playsInline
          unoptimized
          id="bottom-video-position"
        >
          <source src={"/banner2.mp4"} type="video/mp4" />
        </video>
        <div className="subscribe-from">
          <input type="text" placeholder="Put email for beta invite" />
          <button>Submit</button>
        </div>

        <div className="home-product extra-margin">
          <h2>OUR PRODUCTS</h2>
          <p className="hide-mobile-view">
            All of our products come with a 30 day warranty where we will send
            you a new NFC no questions asked. NFC chips come in a variety
            <br />
            of shapes and sizes. Some share information faster than others.
            While other types store more data. Be sure to get
            <br />
            the NFC that fits your needs. We also offer custom printing, where
            we can apply your logo
            <br />
            or custom QR code directly to your NFC product.
          </p>
          <p className="hide-pc-view">
            All of our products come with a 30 day warranty where we will send
            you a new NFC no questions asked. NFC chips come in a variety of
            shapes and sizes. Some share information faster than others. While
            other types store more data. Be sure to get the NFC that fits your
            needs. We also offer custom printing, where we can apply your logo
            or custom QR code directly to your NFC product.
          </p>

          {/* 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 */}
          <div className="justify-grid">
            {Products &&
              Products.data
                .slice(0, 8)
                .map((item, index) => <Product key={index} item={item} />)}
          </div>

          <div className="product-seemore">
            <Link href="/shop">See more</Link>
          </div>
        </div>
      </div>
      <div className="container check_out_dapp_browser">
        <div className="row-div">
          <div className="col-6">
            <div className="check_out_dapp_content-out">
              <div className="check_out_dapp_content">
                <h2>
                  Explore the <span id="color-text-index">World</span> of Web3
                </h2>
                <p>
                  Check out all the dapps in the web3 world. Be sure to checkout
                  our tutorials to help educate and protect yourself while using
                  dapps. All dapps require a web3 browser to interact with them.
                  Download the Swop App and use the Web3 browser to get started.
                </p>
                <Link href="/">Get your Dapp</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="check_out_dapp_button">
              <div>
                <Link href="/">Explore All Dapps</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Dynamic
// export async function getStaticProps() {
//   try {
//     const res = await axios.get(`${URL}/api/v1/products`);
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
