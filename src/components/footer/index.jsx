import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="container-footer" id="footer">
      <a href="https://wa.me/6289634477394" target="_blank">
        <div className="icon">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "#0eed46", fontSize: "40px" }}
          />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/sakinah2004/" target="_blank">
        <div className="icon">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#0b53da", fontSize: "40px" }}
          />
        </div>
      </a>
      <a href="https://www.instagram.com/saaknh/" target="_blank">
        <div className="icon">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#eb0d57", fontSize: "40px" }}
          />
        </div>
      </a>
    </div>
  );
}
