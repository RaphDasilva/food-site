import { links } from './utilts/data';
import logo from './utilts/images/logo.png';

const Navbar = () => {
  return (
    <div className='nav-bar'>
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
  );
};
export default Navbar;
