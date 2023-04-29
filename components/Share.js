import Image from 'next/image'
import React from 'react'
import icon1 from '../images/icontap.png'
import icon2 from '../images/iconscan.png'
import icon3 from '../images/iconplane.png'
import shareImage from '../images/sharecomponent.png'

const Share = () => {
  return (
    <>
      <div className="row-div reverse-direction index">
        <div className="col-6 index-div">
          <div className="alignment-crd">
            <h3>Share Anything Instantly</h3>
            <p>
              There are several ways to quickly share your personal information,
              such as contact details, social media profiles, websites, payment
              apps, files, and videos with others. These methods include tapping
              your phone with NFC, scanning a QR code, or sending the
              information through a messaging app, email, or file-sharing
              service. You can also use apps specifically designed for sharing,
              such as payment apps or social media apps. Remember to protect
              your privacy and only share your information with trusted
              individuals.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" /> <h5>NFC Technology</h5>
            </div>
            <p>
              Near Field Communication (NFC) is a way for two devices, like
              smartphones, to talk to each other when they are close together.
              To do this, you just need to tap the two devices together. Then,
              they will share information with each other automatically. This is
              a quick and easy way to share things like contact information or
              pictures.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>QR Scan</h5>
            </div>
            <p>
              Swops is an app that lets you create and customize your own Quick
              Response (QR) codes for free. These codes can be scanned with a
              smartphone or QR code reader to access websites or other digital
              destinations. With Swops, it's easy to share information and
              direct customers where they need to be.. Try it out today!
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>Share</h5>
            </div>
            <p>
              There are many ways to share your swop website and digital
              business card, such as through text message, email, Airdrop, email
              signature or Zoom background.
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

export default Share
