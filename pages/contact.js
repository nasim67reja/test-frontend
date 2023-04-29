import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import contact from '../images/contact.png'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="contact-top">
          <h2>HAVE SOME QUESTIONS?</h2>
          <p>
            The NFC hype isn’t what it once was, but it’s still a handy feature
            you should take advantage of, or at least get to know. The NFC hype
            isn’t
          </p>

          <div className="row-div">
            <div className="col-6">
              <div className="contact-image">
                <Image
                  src={contact}
                  height={312}
                  width={318}
                  alt="contact_image"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="contact-content">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="What’s your email?" required />
                <textarea
                  rows="4"
                  placeholder="Your questions........"
                  required
                />
                <button type="submit">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
