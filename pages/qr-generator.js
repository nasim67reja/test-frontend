import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import cardImg1 from '../images/cardfillupload.gif'
import cardImg2 from '../images/cardshipnfc.gif'
import cardImg3 from '../images/cardsfliptest.gif'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import logo from '../images/swopLogoWhite.png'
import phone from '../images/qrgeneratorphone.png'
import card1 from '../images/qr-genarator-card-image1.png'
import card2 from '../images/qr-genarator-card-image2.png'
import card3 from '../images/qr-genarator-card-image3.png'
import icon1 from '../images/wwwicon.png'
import icon2 from '../images/vcardicon.png'
import icon3 from '../images/socialicon.png'
import icon4 from '../images/docicon.png'
import icon5 from '../images/aticon.png'
import icon6 from '../images/wifiicon.png'
import icon7 from '../images/picicon.png'
import number1 from '../images/number-icon1.png'
import number2 from '../images/number-icon2.png'
import number3 from '../images/number-icon3.png'
import dropdown from '../images/dropdown.png'
import dropdownwhite from '../images/dropdownwhite.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const QrGenerator = () => {
  const appData = [
    {
      id: 2,
      image: 'qr-code-1.png',
    },
    {
      id: 3,
      image: 'qr-code-2.png',
    },
    {
      id: 4,
      image: 'qr-code-3.png',
    },
    {
      id: 5,
      image: 'qr-code-4.png',
    },
    {
      id: 1,
      image: 'qr-code-5.png',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="qr-code-penel">
          <div className="qr-top-container">
            <div className="qr-top-first">
              <div className="qr-top-first-inside">
                <div className="qr-top-icon">
                  <Image src={icon1} alt="icon_image" /> <p>Url</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon2} alt="icon_image" /> <p>Vcard</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon3} alt="icon_image" /> <p>Social</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon4} alt="icon_image" /> <p>Text</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon5} alt="icon_image" /> <p>Email</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon6} alt="icon_image" /> <p>Wifi</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon4} alt="icon_image" /> <p>Sms</p>
                </div>
                <div className="qr-top-icon">
                  <Image src={icon7} alt="icon_image" /> <p>Image</p>
                </div>
              </div>
              <div className="website-link">
                <input type="text" placeholder="Enter your website" />
                <p id="automatic-qr">(Your QR code generated automatically)</p>
              </div>
              <div className="upload-qr-logo">
                <input type="file" id="upload-logo" />{' '}
                <label>(JPG, PNG, JPEG)</label>
              </div>
            </div>
            <div className="center-icon">
              <div className="center-icon-border">
                <FaChevronRight color="#858585" />
              </div>
            </div>
            <div className="qr-top-second">
              <div className="qr-slider">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={false}
                  effect="coverflow"
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 10,
                    modifier: 3,
                    slideShadows: false,
                  }}
                  slidesPerView={4}
                  spaceBetween={20}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  initialSlide={0.9}
                  centeredSlides
                  style={{
                    width: '100%',
                    margin: 'auto',
                    padding: '10px',
                    justifyContent: 'center',
                  }}
                >
                  {appData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="qr-card">
                        <Image
                          src={`/${item.image}`}
                          alt="no_image"
                          width={300}
                          height={300}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="qr-frame">
                <h5>FRAME</h5>{' '}
                <Image
                  src={dropdownwhite}
                  alt="dropdown"
                  height={28}
                  width={28}
                />
              </div>
              <div className="qr-shape">
                <h5>SHAPE & COLOR</h5>{' '}
                <Image src={dropdown} alt="dropdown" height={11} width={11} />
              </div>
              <div className="qr-logo">
                <h5>LOGO</h5>{' '}
                <Image src={dropdown} alt="dropdown" height={11} width={11} />
              </div>
            </div>
          </div>
        </div>
        <div className="home-how-it-work">
          <h2>HOW TO CUSTOMIZE A NFC</h2>
          <p className="hide-mobile-view">
            Custom NFC business cards are a unique and innovative way to
            showcase your business, which uses Near Field Communication
            technology,
            <br />
            that enables the card to be scanned by an NFC-enabled device to
            access information like contact, website, social media
            <br />
            profiles, and more. These cards are customizable with branding and
            design elements to make them
            <br />
            distinct. They are useful for salespeople, business professionals,
            and networking.
          </p>
          <p className="hide-pc-view">
            Custom NFC business cards are a unique and innovative way to
            showcase your business, which uses Near Field Communication
            technology, that enables the card to be scanned by an NFC-enabled
            device to access information like contact, website, social media
            profiles, and more. These cards are customizable with branding and
            design elements to make them distinct. They are useful for
            salespeople, business professionals, and networking.
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
                  <h5>Upload logo for your profile</h5>
                  <p>
                    Personlize the look of your digital business card. Add all
                    of your contact information.
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
                  <h5>Confirm Design with our personal designer</h5>
                  <p>
                    Device is made simple so you can get to connecting faster
                    than ever before.
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
                  <h5>We Print and ship your NFC </h5>
                  <p>
                    With a single tap you'll be able to transfer your dot.
                    Profile and begin connecting with style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="qr-generator-bottom">
          <h2>SWOP SERVICE</h2>
          <p id="qr-space-between" className="hide-mobile-view">
            An NFC service for SWOP is a platform that allows businesses to use
            NFC technology to enhance their products and services by creating
            and
            <br />
            managing their own NFC tags and stickers. The service can be used
            for product information, loyalty programs, digital coupons,
            <br />
            and more. It also allows businesses to update and track the usage of
            the tags with analytics and reporting tools.
            <br />
            The service can be integrated with other business systems for
            improved customer experience.
          </p>
          <p id="qr-space-between" className="hide-pc-view">
            An NFC service for SWOP is a platform that allows businesses to use
            NFC technology to enhance their products and services by creating
            and managing their own NFC tags and stickers. The service can be
            used for product information, loyalty programs, digital coupons, and
            more. It also allows businesses to update and track the usage of the
            tags with analytics and reporting tools. The service can be
            integrated with other business systems for improved customer
            experience.
          </p>
          <div className="row-div qr-margin-top">
            <div className="col-6">
              <div className="qr-generator-background">
                <Image src={logo} alt="swop-image" height={48} width={230} />
                <label>
                  Instantly share everything with a One time purchase of a SWOP
                  device.
                </label>
                <div className="row-div qr-custom-margin">
                  <div className="qr-custom-div">
                    <Image
                      src={phone}
                      alt="phone_image"
                      height={703}
                      width={464}
                      id="phone_image"
                    />
                  </div>
                  <div className="qr-custom-div">
                    <p className="qr-generator-custom-text1">
                      <span>An Elegant place</span> to
                      <br />
                      share all of your
                      <br />
                      contct info.
                    </p>
                    <p className="qr-generator-custom-text2">
                      <span>Customize the QR for</span>
                      <br />
                      your profile with
                      <br />
                      <span id="rainbow-text">COLORFUL QR</span>
                    </p>
                    <p className="qr-generator-custom-text3">
                      Collect the leads to
                      <br />
                      up{' '}
                      <span>
                        simple form
                        <br />
                        and save.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 qr-justify">
              <div className="qr-generator-double qr-crd-1">
                <h4>One Card.</h4>
                <h6>A life full of connecting.</h6>
                <div className="qr-card-container">
                  <Image
                    src={card1}
                    alt="card_image"
                    className="qr_card-image image-first-qr"
                  />
                  <Image
                    src={card2}
                    alt="card_image"
                    className="qr_card-image"
                  />
                  <Image
                    src={card3}
                    alt="card_image"
                    className="qr_card-image image-last-qr"
                  />
                </div>
              </div>
              <div className="qr-generator-double qr-generator-double-bottom">
                <label>
                  Instantly share your contact info, Social accounts, Music,
                  Payment info & More...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default QrGenerator
