import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiOutlineArrowRight } from "react-icons/hi";
import tokenimage from "../images/abouttoken.png";
import image2 from "../images/aboutshare.png";
import image3 from "../images/aboutqrcode.png";
import image4 from "../images/aboutanalytics.png";
import cardImg1 from "../images/cardfillupload.gif";
import cardImg2 from "../images/cardshipnfc.gif";
import cardImg3 from "../images/cardsfliptest.gif";
import features1 from "../images/aboutfeatures1.gif";
import features2 from "../images/aboutfeatures2.gif";
import features3 from "../images/aboutfeatures3.gif";
import features4 from "../images/aboutfeatures4.gif";
import number1 from "../images/number-icon1.png";
import number2 from "../images/number-icon2.png";
import number3 from "../images/number-icon3.png";
import roadmap from "../images/aboutroadmap.png";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const About = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar />
      <div className="container home-top-margin">
        <video
          controls={false}
          muted
          preload="auto"
          autoPlay
          loop
          playsInline
          unoptimized
        >
          <source src={"/bannerAbout.mp4"} type="video/mp4" />
        </video>
        <Link href="/" className="shop-now-btn">
          Shop Now <HiOutlineArrowRight size={20} />
        </Link>

        <div className="about-futuristic">
          <h2>PREMIUM FEATURES</h2>
          <p className="hide-mobile-view">
            Our app is completely free to download and includes all the
            necessary tools to create and launch a website. We also offer a
            variety of
            <br />
            premium features such as token powered sites, custom QR codes,
            complimentary NFC for a one-year subscription
            <br />
            and advanced analytics. These features can help take your website to
            the next
            <br />
            level and make it easier to share with the world.
          </p>
          <p className="hide-pc-view">
            Our app is completely free to download and includes all the
            necessary tools to create and launch a website. We also offer a
            variety of premium features such as token powered sites, custom QR
            codes, complimentary NFC for a one-year subscription and advanced
            analytics. These features can help take your website to the next
            level and make it easier to share with the world.
          </p>
        </div>
        <div className="about-mid-container">
          <div className="row-div">
            <div className="col-6">
              <div className="about-card">
                <Image src={tokenimage} alt="token_image" />
                <h5>Token Powered Websites</h5>
                <p>
                  Token powered websites allow you to monetize your content in a
                  new and unique way. By creating gated websites that can only
                  be accessed with your own non-fungible token (NFT) or other
                  digital token, you can create a new way for users to connect
                  with and support your work. This can provide a new source of
                  revenue for your content and give you more control over how it
                  is shared and accessed. With token powered websites, you can
                  create a truly immersive and interactive experience for your
                  audience.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image2} alt="no_image" height={554} width={437} />
                <h5>Complimentary NFC</h5>
                <p>
                  As a special bonus for our customers, we offer a complimentary
                  NFC chip to those who sign up for a one-year in-app
                  subscription. This NFC chip will be mailed directly to you and
                  can be used to share all of the information and content that
                  you upload to your Swop website. With this NFC chip, you can
                  easily share your website and all of its contents with others
                  by simply tapping your device against another NFC-enabled
                  device. This is a convenient and quick way to share your work
                  and connect with your audience.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image3} alt="no_image" height={554} width={437} />
                <h5>Customized QR</h5>
                <p>
                  As a premium member, you can customize your Quick Response
                  (QR) code with your own logo and colors. Our QR codes are
                  dynamic, meaning they will automatically update as your
                  content changes. This is an advantage over traditional static
                  QR codes, which do not update and may become outdated. Our
                  customizable and dynamic QR codes provide an effective way to
                  share your content and connect with your audience.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="about-card">
                <Image src={image4} alt="no_image" height={554} width={437} />
                <h5>Analytics</h5>
                <p>
                  Our analytics feature provides insights into the performance
                  of your website, including leads generated, connections made,
                  revenue generated, and popular links. This information can
                  help you optimize your website and better engage with your
                  audience. Easily export all of your data and leads to your CRM
                  with the click of a button. Get a in depth breakdown of which
                  links are being clicked for each one of your mircosites.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-how-it-work">
          <h2>Order a Customized NFC</h2>
          <p className="hide-mobile-view">
            To order a Customized NFC with your companies name or logo just go
            to our product page and select
            <br />
            the custom product you would like, then just upload the proper
            information
            <br />
            and checkout, we will send you a mockup and confirm your
            <br />
            design then print and ship!
          </p>
          <p className="hide-pc-view">
            To order a Customized NFC with your companies name or logo just go
            to our product page and select the custom product you would like,
            then just upload the proper information and checkout, we will send
            you a mockup and confirm your design then print and ship!
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
              <div className="card-how-it2">
                <Image
                  src={cardImg1}
                  alt="no_image"
                  width={800}
                  height={600}
                  unoptimized
                />
                <div className="card-how-it2-inside">
                  <h5>Upload Logo Upon Checkout</h5>
                  <p>
                    To customize a product with your own logo or text, select a
                    custom product from our shop and upload your design. Then,
                    proceed to checkout to complete your order. It's easy to
                    create a personalized NFC.
                  </p>
                </div>
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
              <div className="card-how-it2">
                <Image
                  src={cardImg2}
                  alt="no_image"
                  width={800}
                  height={600}
                  unoptimized
                />
                <div className="card-how-it2-inside">
                  <h5>Confirm your design</h5>
                  <p>
                    Once you have completed the checkout process and uploaded
                    the necessary files, we will send you a mockup of your
                    custom NFC for you to review and confirm. This mockup will
                    give you an idea of what your final product will look like
                    period.
                  </p>
                </div>
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
              <div className="card-how-it2">
                <Image
                  src={cardImg3}
                  alt="no_image"
                  width={800}
                  height={600}
                  unoptimized
                />
                <div className="card-how-it2-inside">
                  <h5>We Print and Ship</h5>
                  <p>
                    After you have reviewed and confirmed the mockup of your
                    custom NFC, we will begin printing your order. Our
                    production process typically takes 4-10 business days. For a
                    discount on bulk orders, please get in touch with us
                    directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-features">
          <h2>SWOP FREE FEATURES</h2>
          <p className="hide-mobile-view features-top-content">
            At Swop, we aim to make it easy and free for you to get started and
            grow your network in the digital economy. We offer a variety of
            complimentary
            <br />
            tools to help you succeed, such as the ability to connect your
            website to your Stripe account to sell products or services, a
            complimentary
            <br />
            lead generator form embedded in all websites, complimentary hosting
            for your website, and a non-custodial wallet address
            <br />
            that you can attach to your websites. These tools can help you
            expand your reach and monetize your online presence.
          </p>
          <p className="hide-pc-view text-center">
            At Swop, we aim to make it easy and free for you to get started and
            grow your network in the digital economy. We offer a variety of
            complimentary tools to help you succeed, such as the ability to
            connect your website to your Stripe account to sell products or
            services, a complimentary lead generator form embedded in all
            websites, complimentary hosting for your website, and a
            non-custodial wallet address that you can attach to your websites.
            These tools can help you expand your reach and monetize your online
            presence.
          </p>
          <div className="row-div">
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features1}
                  alt="no_image"
                  height={548}
                  width={421}
                  unoptimized
                />
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Payments</h4>
                <p>
                  Our service allows you to accept debit/credit card and Apple
                  Pay payments directly on your website and customize the
                  payment experience to match your brand. You can even program
                  your NFC to take payments and route customers to an invoice
                  for payment when the NFC is tapped. This makes it easy for you
                  to sell products or services online and streamline the payment
                  process for your customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row-div reverse-direction">
            <div className="col-6">
              <div className="features-card-content">
                <h4>Leads</h4>
                <p>
                  The lead generator form embedded in every Swop public profile
                  is a useful tool for helping you keep your customer database
                  organized and easily export it to your Customer Relationship
                  Management (CRM) system. By using the lead generator form, you
                  can collect information about your customers, such as their
                  name, email address, and contact information. This information
                  can be stored in your customer database and used to keep track
                  of your leads and customers. When you need to export this
                  information to your CRM system, you can easily do so by
                  downloading the data from your Swops account. This can help
                  you keep your customer database up to date and organized,
                  making it easier to manage your relationships with your
                  customers.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features2}
                  alt="no_image"
                  height={548}
                  width={421}
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="row-div">
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features3}
                  alt="no_image"
                  height={548}
                  width={421}
                  unoptimized
                />
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-content">
                <h4>Hosting</h4>
                <p>
                  We offer free hosting for every Swop profile, which is a
                  high-speed virtual private server (VPS) designed to ensure
                  fast loading times. This means that when someone visits your
                  Swops profile, they will be able to access your content
                  quickly and smoothly, without experiencing any delays or
                  lagging. Having a fast-loading website is important for a
                  number of reasons, including improving the user experience,
                  reducing bounce rates, and increasing the chances that people
                  will engage with your content. By offering free hosting on a
                  high-speed VPS, we aim to help you create a smooth and
                  enjoyable experience for your visitors.
                </p>
              </div>
            </div>
          </div>
          <div className="row-div reverse-direction">
            <div className="col-6">
              <div className="features-card-content">
                <h4>Non Custodial Banking</h4>
                <p>
                  Non-custodial wallets provide an open financial infrastructure
                  that anyone can participate in, enabling users to make
                  borderless payments and interact in a more efficient digital
                  economy. Attached to a user's profile, these wallets allow for
                  easy access and management of digital assets. Non-custodial
                  wallets offer benefits such as greater control and ownership
                  of assets, increased security and privacy, and faster and more
                  affordable transactions. Through the use of a non-custodial
                  wallet, users can fully engage in the digital economy.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="features-card-image">
                <Image
                  src={features4}
                  alt="no_image"
                  height={548}
                  width={421}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-roadmap">
          <h2>PRODUCT ROADMAP</h2>
          <p className="hide-mobile-view">
            Swops' product roadmap infographic provides an overview of the
            company's plans for future development and growth. The roadmap
            outlines
            <br />
            the key features and milestones that the company aims to achieve in
            the coming months and years. The infographic is a helpful tool
            <br />
            for stakeholders and users to stay informed about the direction and
            progress of the company. It can help users understand
            <br />
            what to expect in terms of new features and updates, and it can
            provide insight into the company's long-term
            <br />
            vision and goals. Overall, the product roadmap infographic is a
            valuable resource for anyone
            <br />
            interested in staying up-to-date on the latest developments at
            Swops.
          </p>
          <p className="hide-pc-view">
            Swops' product roadmap infographic provides an overview of the
            company's plans for future development and growth. The roadmap
            outlines the key features and milestones that the company aims to
            achieve in the coming months and years. The infographic is a helpful
            tool for stakeholders and users to stay informed about the direction
            and progress of the company. It can help users understand what to
            expect in terms of new features and updates, and it can provide
            insight into the company's long-term vision and goals. Overall, the
            product roadmap infographic is a valuable resource for anyone
            interested in staying up-to-date on the latest developments at
            Swops.
          </p>
          <Image src={roadmap} alt="no_image" height={291} width={1406} />
          <div className="roadmap-content">
            <div className="roadmap-1">
              <h5>
                NFC
                <br />
                Login/3FA
              </h5>
              <p className="hide-mobile-view">
                Features like 3FA which utilize our NFC technology that will
                allow users to securely store their private key on an air-gapped
                NFC chip. Our NFC technology will also act as a tangible
                gatekeeper to push transactions through by tapping their phone
                and allow transaction to process while also enhancing security
                and user experience.
              </p>
            </div>
            <div className="roadmap-2">
              <h5>
                Swop Pay
                <br />
                Dapp
              </h5>
              <p className="hide-mobile-view">
                Swop Pay offers a revolutionary solution for businesses,
                providing a user-friendly POS interface, global reach, and
                secure decentralized transactions, enabling them to expand their
                customer base and increase efficiency. It will be open source
                and for the community to help grow the crypto ecosystem. Coming
                to a web3 Browser near you late Q2.
              </p>
            </div>
            <div className="roadmap-3">
              <h5>
                Mint Machine
                <br />
                Dapp
              </h5>
              <p className="hide-mobile-view">
                Mint Machine DApp is a user-friendly blockchain tool that allows
                easy minting of unique NFTs or tokens. It provides a template
                for creating custom tokens for various purposes like coupons,
                loyalty tokens, access tokens, or even a currency for content
                purchase. This will be built optimized for our SWOP blockchain
                and one of our first DApps.
              </p>
            </div>
            <div className="roadmap-4">
              <h5>
                Testnet
                <br />
                Launch
              </h5>
              <p className="hide-mobile-view">
                A blockchain optimized for digital interactions, built on the
                Ethereum Virtual Machine (EVM) specifically for the SWOP
                ecosystem. It will improve customer experience with fast and
                secure transactions, using token as gas to access the
                ecosystem's tools and infrastructure. Users will be able to
                stake tokens and earn rewards from gas fees on the SWOP chain.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
