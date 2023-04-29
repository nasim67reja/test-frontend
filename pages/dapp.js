import Image from 'next/image'
import useWindowDimensions from '../components/useWindowDimensions'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import searchicon from '../images/dappsearch.png'
import swop from '../images/swopLogo.png'
import monkey from '../images/dappmonkey.png'
import opensea from '../images/opensea.png'
import explorer from '../images/dappexplorer.png'
import news from '../images/dappnews.png'
import mint from '../images/dappmint.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DApp = () => {
  const { width } = useWindowDimensions()
  SwiperCore.use([Autoplay])
  const sliderData = [
    {
      title: 'Uniswap',
      image: 'dappSliderimg1.png',
      icon_app: 'iconapp3.png',
      sub_title: 'Kart Racing',
    },
    {
      title: 'Ethereum',
      image: 'dappSliderimg2.png',
      icon_app: 'iconapp2.png',
      sub_title: 'BlockBet',
    },
    {
      title: 'Polygon',
      image: 'dappSliderimg3.png',
      icon_app: 'iconapp3.png',
      sub_title: 'Metamask',
    },
  ]
  const categories = [
    {
      image: 'category_payment.png',
      title: 'Payment',
    },
    {
      image: 'category_games.png',
      title: 'Games',
    },
    {
      image: 'category_defi.png',
      title: 'Defi',
    },
    {
      image: 'category_tools.png',
      title: 'Tools',
    },
    {
      image: 'category_music.png',
      title: 'Music',
    },
  ]
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="side-ber">
        <div className="top-side-ber">
          <Image src={swop} alt="swop_logo" />
          <ul>
            <li style={{ color: '#000' }}>DApp Store</li>
            <li>Explorer</li>
            <li>Prices</li>
            <li>Accounting</li>
            <li>Swop Pay</li>
            <li>Mint Machine</li>
            <li>Purchase</li>
          </ul>
        </div>
        <div className="bottom-side-ber">
          <div className="bottom-side-ber-travis">
            <Image
              src="/tarvisImg.png"
              alt="travis_image"
              height={50}
              width={50}
            />
            <div className="bottom-side-ber-travis-name">
              <h4>Travis Herron</h4>
              <label>$travis_herron</label>
            </div>
          </div>
          <Image
            src="/side-ber-qr.png"
            alt="qr-code"
            height={100}
            width={100}
          />
        </div>
      </div> */}
      <div className="container">
        <div className="d-app-search">
          <Image src={searchicon} alt="no_image" height={37} width={37} />
          <input type="text" placeholder="Search app" />
        </div>
        <div className="dapp-slider">
          <h2>Trending</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={false}
            effect="coverflow"
            autoplay={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            slidesPerView={width < 767 ? 1.5 : 2.6}
            spaceBetween={35}
            pagination={{
              dynamicBullets: true,
            }}
            initialSlide={1.6}
            style={{
              width: '100%',
              margin: 'auto',
              padding: '30px',
              justifyContent: 'center',
            }}
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="dapp-slider-card">
                  <Image
                    src={`/${item.image}`}
                    alt="no_image"
                    height={324}
                    width={548}
                    className="main_img"
                  />
                  <div className="dapp-card-content">
                    <Image src={`/${item.icon_app}`} width={60} height={60} />
                    <div className="dapp-card-content-inside">
                      <h4>{item.sub_title}</h4>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="dapp-viewed">
          <div className="heading-dapp">
            <h2>Previously Viewed</h2> <label>See all</label>
          </div>

          <div className="dapp-bottom">
            <div className="dapp-bottom1">
              <Image
                src={`/uniswap.png`}
                alt="no_image"
                height={184}
                width={184}
              />
              <h4>Uniswap</h4>
            </div>
            <div className="dapp-bottom1">
              <Image
                src={`/aave.png`}
                alt="no_image"
                height={184}
                width={184}
              />
              <h4>Aave</h4>
            </div>
            <div className="dapp-bottom1">
              <Image
                src={`/openSea.png`}
                alt="no_image"
                height={184}
                width={184}
              />
              <h4>Open Sea</h4>
            </div>
            <div className="dapp-bottom1">
              <Image
                src={`/swoppay.png`}
                alt="no_image"
                height={184}
                width={184}
              />
              <h4>Swop pay</h4>
            </div>
            <div className="dapp-bottom1">
              <Image
                src={`/dyDx.png`}
                alt="no_image"
                height={184}
                width={184}
              />
              <h4>DyDx</h4>
            </div>
            <div className="dapp-bottom1">
              <Image
                src={`/bigCross.png`}
                alt="no_image"
                height={184}
                width={184}
              />
            </div>
          </div>
        </div>
        <div className="dapp-categories">
          <div className="heading-dapp">
            <h2>Top Categories</h2> <label>See all</label>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={false}
            effect="coverflow"
            autoplay={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            slidesPerView={width < 767 ? 1.5 : 5}
            spaceBetween={35}
            pagination={{
              dynamicBullets: true,
            }}
            initialSlide={1.6}
            style={{
              width: '100%',
              margin: 'auto',
              padding: '30px',
              justifyContent: 'center',
            }}
          >
            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="dapp-slider-card">
                  <Image
                    src={`/${item.image}`}
                    alt="no_image"
                    height={324}
                    width={548}
                    className="main_img"
                  />
                  <h6>{item.title}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default DApp
