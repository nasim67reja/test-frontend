import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import dropdown from '../images/dropdown.png';
import cross from '../images/cross.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../services/productApi';

const Help = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  console.log('from line 17', data);

  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="help-container">
          <h1>HOW CAN WE HELP?</h1>
          <p>
            Sign up for text and support
            <br />
            Text ‘SWOP’ to <span>67839</span>
            <br />
            Email us:{' '}
            <a href="mailto:support@swopme.co">support@swopme.co</a>
          </p>
          <p id="help-paragraph">
            The NFC hype isn’t what it once was, but it’s still a
            handy feature you should take advantage of, or at least
            get to know. The NFC hype isn’t what it once was, but it’s
            still a handy feature you should take advantage of, or at
            least get to know.
          </p>
          <div className="help-youtube">
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/vyRSxivJuxU?autoplay=1&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=https://youtubeembedcode.com"
                frameBorder={0}
              />
              <p>How to Active SWOP</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/25dWRadEtko?autoplay=1&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=https://youtubeembedcode.com"
                frameBorder={0}
              />
              <p>How to connect SWOP an Iphone</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/_kBj2_tHC9E?autoplay=1&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=https://youtubeembedcode.com"
                frameBorder={0}
              />
              <p>How to SWOP connect an Android</p>
            </div>
            <div className="help-youtube-inside">
              <iframe
                src="https://www.youtube.com/embed/_ZHmqoHul80?autoplay=1&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=https://youtubeembedcode.com"
                frameBorder={0}
              />
              <p>How to Active SWOP</p>
            </div>
          </div>
          <div className="frequently-asked">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div className="troubleshoot">
              <h4>Troubleshooting SWOP</h4>
            </div>
            <div className="help-detail-title">
              <h4>General 💎</h4>
            </div>
            <div className="help-detail">
              <p>Not working on Iphone?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>Not working on Android?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>What is SWOP?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>Can i order custom SWOP?</p>
              <Image
                src={cross}
                alt="icon_image"
                height={14}
                width={14}
              />
            </div>
            <p className="help-detail-content">
              Absolutely! Email us at b2b@SWOPME.co to start a
              conversation with us! 📈
              <br />
              No! The other person does not need a SWOP or app to
              receive your SWOP profile. That's the beauty of SWOP ⚡️
              <br />s If their phone is on this list of compatible
              devices you can pop to their phone. If it is not, just
              use your SWOP QR code on your profile to share!
            </p>

            <div className="help-detail-title">
              <h4>Compatibility 🤝</h4>
            </div>
            <div className="help-detail">
              <p>Compatibility Phones</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>Will my SWOP work under my phone case?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>How to turn NFC on for an Android?</p>
              <Image
                src={cross}
                alt="icon_image"
                height={14}
                width={14}
              />
            </div>
            <p className="help-detail-content">
              Yes! SWOP will work through 99.9% of phone cases,
              including ones that hold credit cards. The only
              exception would be if your case has a layer of metal.
            </p>
            <div className="help-detail">
              <p>How can i get verified on SWOP?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>

            <div className="help-detail-title">
              <h4>Shipping ✈️</h4>
            </div>
            <div className="help-detail">
              <p>Do you ship worldwide?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>Will my SWOP work under my phone case?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>How to turn NFC on for an Android?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
            <div className="help-detail">
              <p>How can i get verified on SWOP?</p>
              <Image
                src={dropdown}
                alt="icon_image"
                height={11}
                width={18}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;
