import Image from 'next/image'
import React from 'react'
import icon1 from '../images/intelligence_icon.png'
import icon2 from '../images/engagement_img.png'
import icon3 from '../images/support_icon.png'
import shareImage from '../images/fastercomponent.png'
const Faster = () => {
  return (
    <>
      <div className="row-div reverse-direction index">
        <div className="col-6 index-div">
          <div className="alignment-crd">
            <h3>Grow Faster</h3>
            <p>
              We provide anyone looking to grow their network a simple to use
              platform to interact, accept payments, and move important data to
              allow them to scale in a increasingly global society
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" /> <h5>From A to Z</h5>
            </div>
            <p>
              Our app provides everything someone would need to jumpstart their
              business or network. We provide a free app that users can build
              websites, hosting, data analytics, customer retention, and even
              payments.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>Simple</h5>
            </div>
            <p>
              We make it very simple to get started. Have a website and
              storefront up and running in less than 10 minutes.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>24/7 Support</h5>
            </div>
            <p>
              We stand by our products and offer a 30 day warranty on any
              products ordered through our website. We also provide 24/7
              customer support to walk you through any questions you may have
              while using swop!
            </p>
          </div>
        </div>
        <div className="col-6 index-div">
          <div className="share-image-fit">
            <Image src={shareImage} alt="no_image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Faster
