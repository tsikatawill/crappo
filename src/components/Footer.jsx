import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';

import Bitcoin from '../images/bitcoin.png';
import Logo from '../images/logo.svg';
import Mastercard from '../images/mastercard.png';
import Visa from '../images/visa.png';
import { AnimateUpV } from '../variants';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.footer
      variants={AnimateUpV}
      initial="initial"
      whileInView="animate"
      className="py-10 space-y-10"
    >
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-4 text-center md:text-left">
        <div className="logo mx-auto md:mx-0">
          <img src={Logo} alt="logo" />
        </div>

        <LinksGroup
          title="Quick links"
          links={['Home', 'Products', 'About', 'Features', 'Contact']}
        />

        <LinksGroup
          title="Resource links"
          links={[
            'Download whitepaper',
            'Smart token',
            'Blockchain explore',
            'Crypto API',
            'Interest'
          ]}
        />

        <div className="payment-options space-y-5">
          <h3 className="font-semibold">We accept following payment options</h3>

          <div className="options grid grid-cols-3 gap-3">
            <img src={Visa} alt="Visa.png" />
            <img src={Mastercard} alt="Mastercard.png" />
            <img src={Bitcoin} alt="Bitcoin.png" />
          </div>
        </div>
      </div>

      <div className="sub-footer flex md:flex-row flex-col justify-between items-center space-y-5 md:space-y-0 md:gap-0 container">
        <p className="copyright">&copy; {year} CRAPPO. All rights reserved.</p>

        <div className="socials flex gap-2 text-2xl cursor-pointer">
          <FaYoutube />
          <FaWhatsapp />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </motion.footer>
  );
}

const LinksGroup = ({ title, links }) => (
  <div className="space-y-5">
    <div className="h3 text-lg font-semibold capitalize">{title}</div>

    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index} className="capitalize">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

LinksGroup.defaultProps = {
  title: 'Some title',
  links: ['Link 1', 'Link 2']
};
