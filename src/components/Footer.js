import {pageLinks, socialLinks} from '../constants';

import {PageLinks, SocialLinks} from '../components'

const Footer = () => {
  return (
    <footer className="footer section">
      {/* page links */}
      <PageLinks
        parentClass="footer-links"
        itemClass="footer-link"
        pageLinks={pageLinks}
      />

      {/* Social Links */}
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLinks {...link} key={link.id} itemClass="nav-icon" />;
        })}
      </ul>

      <p className="copyright">
        Copyright &copy;| Foody Baba <span id='date'>{new Date().getFullYear()}</span>. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
