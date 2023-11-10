import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { links } from './utilts/data';
import logo from './utilts/images/logo.png';

const Footer = () => {
  return (
    <footer className='footer-section' id='contact'>
      <div className='footer-container'>
        <div className='footer-text'>
          <h2>Terms and conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className='social-icon'>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div>
          <div className='footer-nav-bar'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <ul className='nav-links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <p>&copy;{new Date().getFullYear()} TessyFood | All right reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
