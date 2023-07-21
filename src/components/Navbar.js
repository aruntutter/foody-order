import logo from "../images/logo.jpg";

import { pageLinks, socialLinks } from "../constants";

import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* page links */}
        <PageLinks
          parentClass="nav-links"
          itemClass="nav-link"
          pageLinks={pageLinks}
        />
        {/* NavLinks */}
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
