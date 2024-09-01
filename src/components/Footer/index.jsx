import { useRef, useState } from "react";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin, BsFillEnvelopeFill, BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendMsgToStc } from '../../config/mongodb.jsx';
import SuccessAlert from "../SuccessAlert";
import './style.css';

function FooterComponent() {

  const [errMsg, setErrMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const btnRef = useRef(null);

  const sendMsg = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    if (btnRef.current.disabled) return setSuccessMsg("Message sending...");

    btnRef.current.disabled = true;

    const res = await sendMsgToStc(e.target[0].value, e.target[1].value, e.target[2].value);

    if (res?.msg) {
      setSuccessMsg("Message sent successfull");
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      btnRef.current.disabled = false;
    } else {
      setErrMsg(res?.errMsg || "Something went wrong!");
      btnRef.current.disabled = false;
    };
  };

  return (
    <div className="footer-main-container">
      <div className="connect-me-container">

        <span>
          <h1>Connect with Stc.</h1>
          <br />
          <br />
          <p><FaMapMarkerAlt className="icons" /><a target="_blank" href="https://maps.app.goo.gl/D2VrNv7m5KEdSWyL9" className="mail-txt">Shop # 10, crystal plaza, opt KMC work shop nishter Rd, old haji camp, Karachi, PK</a> </p>
          <br />
          <p><BsTelephone className="icons" /> <a className="mail-txt" href="tel:+922132766643">+92-21-32766643</a></p>
          <br />
          <p><BsFillEnvelopeFill className="icons" /> <a className="mail-txt" href="mailto:info@steeltradingco.shop">info@steeltradingco.shop</a></p>
          <br />
          <div className="social-media-icons-container">
            <a target="_blank" href="https://www.linkedin.com/company/steel-trading-co/">
              <BsLinkedin className="social-media-icons" />
            </a>
          </div>
        </span>

      </div>

      <div className="contact-me-container">

        <span>
          <h1><hr /> Contact Stc.</h1>
          <br />

          <form onSubmit={sendMsg}>
            <input className="name-inp" required placeholder="Name" type="text" />
            <br />

            <input className="email-inp" required placeholder="Email" type="email" />
            <br />

            <textarea minLength={8} className="msg-inp" required placeholder="Message" ></textarea>
            <br />
            <button className="sbt-btn" ref={btnRef} type="submit">Send Message</button>

          </form>

        </span>
        {successMsg && <SuccessAlert txt={successMsg} isErrMsg={false} />}
        {errMsg && <SuccessAlert txt={errMsg} isErrMsg={true} />}
      </div>

    </div>
  );
};

export default FooterComponent;
