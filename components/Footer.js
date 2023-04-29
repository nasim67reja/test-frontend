import Image from "next/image";
import footerSwop from "../images/swopfooter.png";
import footerQrCode from "../images/footerQrCode.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { URL } from "./Reuses/URL";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // http://localhost:8000/api/v1/subscriber

    try {
      const response = await axios.post(`${URL}/api/v1/subscriber`, { email });
      console.log("Subscribed successfully!", response.data);
      setShowSuccessMessage(true);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // disappear the success message after 3s
  useEffect(() => {
    let timeoutId;
    if (showSuccessMessage) {
      timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showSuccessMessage]);

  return (
    <>
      <div className="footer">
        <div className="footer-out container">
          <div className="footer-top">
            <div className="footer-same">
              <Image
                src={footerSwop}
                alt="footer-logo"
                height={42}
                id="footerSwop-logo"
              />
              <div className="footer-first-content" id="footer-link-bottom">
                <h4>
                  Scan to
                  <br />
                  get swop
                </h4>{" "}
                <Image src={footerQrCode} alt="footer-logo" height={80} />
              </div>
            </div>
            <div className="footer-same">
              <h4>Shop</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/">Custom product </Link>
                <Link href="/">Cards </Link>
                <Link href="/">Metal Cards </Link>
                <Link href="/">Swop XL </Link>
                <Link href="/">Swop Band </Link>
              </div>
            </div>
            <div className="footer-same">
              <h4>Company</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/">Swop Pro </Link>
                <Link href="/">Ambassador </Link>
                <Link href="/">Distributor </Link>
                <Link href="/help">Help Center </Link>
                <Link href="/carrer">Carrer </Link>
              </div>
            </div>
            <div className="footer-same">
              <h4>Legal</h4>
              <div className="footer-link" id="footer-link-bottom">
                <Link href="/privacy-policy">Privacy Policy </Link>
                <Link href="/terms-of-use">Terms Of Use </Link>
                <Link href="/refund-policy">Refund Policy </Link>
              </div>
            </div>
            <div className="footer-inform-content">
              <h4>By subscribing we inform about our new update</h4>
              {/* <div className="footer-link"> */}
              <form onSubmit={handleSubmit} className="footer-link">
                <input
                  type="email"
                  className="subscribing-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit" className="subscribing-btn">
                  Subscribe
                </button>
                {showSuccessMessage && (
                  <p className="text-green-600 ">Thanks for subscribing! ✔</p>
                )}
              </form>
              {/* </div> */}
            </div>
          </div>
          <div className="footer-mid">
            <Link href="/help">Help Center </Link>
            <Link href="/return-policy">Returns </Link>
            <Link href="/contact">Contact </Link>
            <Link href="/">News </Link>
          </div>
          <div className="footer-bottom">
            <label>© {new Date().getFullYear()}-Copywrite by swopme.co</label>
            <div className="icon-footer">
              <a href="https://www.facebook.com/swopmeapp" target="blank">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/swopme.app/" target="blank">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCohnJ2WcoSIEaLbk9jqqoeg"
                target="blank"
              >
                <FaYoutube size={20} />
              </a>
              <a href="https://twitter.com/swopmeapp" target="blank">
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/swop-technologies/"
                target="blank"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
