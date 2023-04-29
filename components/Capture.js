import Image from 'next/image'
import React from 'react'
import icon1 from '../images/card_icon.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/info_icon.png'
import shareImage from '../images/capturecomponent.png'
const Capture = () => {
  return (
    <>
      <div className="row-div reverse-direction index">
        <div className="col-6 index-div">
          <div className="alignment-crd">
            <h3>Capture Leads</h3>
            <p>
              Easily Capture leads with our simple to use Swop microsites.
              Customers can fill our a form directly from the profile you keep
              in the app, and all the leads generated pull directly to your in
              app dashboard where you can easily Export
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" />{' '}
              <h5>Connect with Websites</h5>
            </div>
            <p>
              Easily follow and connect with people in your ecosystem. When you
              connect with a swop profile you can store all their information in
              your dashboard where you can later reconnect.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" />{' '}
              <h5>Scale with lead Capture</h5>
            </div>
            <p>
              Automate and scale your sales by capturing leads with your swop
              profile and using the information for marketing to help increase
              your sales or network.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>Stay Organize</h5>
            </div>
            <p>
              All the leads generated from your profile appear in a simple to
              use dashboard where you can save their important information. You
              can also easily export it as a spreadsheet or import to your
              companies CRM.
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

export default Capture
