import {LOGO_URL} from '../utils/constant';

const Header = () => {
  return (
    <div className="header-component">
      {/* <Title /> This is Component compositions one component to another */}
      <img
        className="logo"
        src={LOGO_URL}
        alt="Restaurant Logo"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
