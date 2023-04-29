import Image from 'next/image'
import React from 'react'
import icon1 from '../images/crm_icon.png'
import icon2 from '../images/teams_icon.png'
import icon3 from '../images/apps_icon.png'
import shareImage from '../images/exportcomponent.png'
const Export = () => {
  return (
    <>
      <div className="row-div reverse-direction index">
        <div className="col-6 index-div">
          <div className="alignment-crd">
            <h3>Payments</h3>
            <p>
              Our app provides a simple to use template for anyone in the world
              to build a microsite, digital business card, traditional website,
              even a token powered site. We provide several payment rails for
              you to integrate with these sites including Debit Cards, Apple
              Pay, and cryptocurrency like ethereum, polygon and USDC.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon1} alt="no_image" />{' '}
              <h5>Apple Pay/ Debit Card</h5>
            </div>
            <p>
              To easily accept payments from a debit card or Apple Pay on their
              website, a user can connect their Stripe account and integrate it
              into their website. This allows them to sell products and generate
              revenue from their website by securely accepting payments from
              customers.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon2} alt="no_image" /> <h5>Crypto</h5>
            </div>
            <p>
              We provide a simple to use interface on our app where users can
              create a wallet that will attach to their website so they can take
              payments from anyone in the world using crypto.
            </p>
            <br />
            <div className="flex-div">
              <Image src={icon3} alt="no_image" /> <h5>Non Custodial</h5>
            </div>
            <p>
              All of our wallets are non custodial so that we can build a truly
              decentralized global economy. While we do offer traditional
              payment integration on our sites, non custodial wallets offer a
              more inclusive and less invasive way by allowing anyone to be
              their own bank.
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

export default Export
