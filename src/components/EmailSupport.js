import Image from "next/image";
import { CiTimer } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";

const EmailSupport = () => {
  return (
    <>
      <div className="support-container">
        <div className="support-container-left">
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
          <div className="support-container-card">
            <Image
              src="/image/supportImage.png"
              alt="chat-person"
              height={35}
              width={35}
            />
            <div className="support-container-name-detail">
              <h5>Name</h5>
              <p>Project bootstrapped with</p>
            </div>
            <div className="support-container-time">
              <p>14:00</p>
              <CiTimer size={20} />
            </div>
          </div>
        </div>
        <div className="support-container-right">
          <div className="chatbox">
            <div className="mailbox-top-bar">
              <div>
                <Image
                  src="/image/iconTick.png"
                  alt="chat-person"
                  height={35}
                  width={35}
                />
              </div>
              <BsThreeDotsVertical size={30} />
            </div>
            <div className="chatbox-middle">
              <h3>Having problems - help #1007</h3>
              <h4>Reily Mosana</h4>
              <p>reily_mosana@gmail.com</p>
              <p>
                Swop’s Flat Rectangle NFC’s are designed to be durable and
                simple to use. The Flat is great to put under any phone
                case(non-metal) Users can download our app to program any of our
                NFC’s with the click of a button. This will attach your profile
                to the NFC for easy sharing. You just tap the NFC on any
                compatible phone to share your digital business card, microsite,
                crypto address, the possibilities are endless. Use the swop app
                to.
              </p>
              <div className="support-button-container">
                <button type="submit" className="support-button">
                  Reply
                </button>
                <button type="submit" className="support-button">
                  Forward
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSupport;
