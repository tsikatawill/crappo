import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../images/logo.svg';
import NavDrawer from './NavDrawer';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex justify-between py-3 items-center">
        <img src={Logo} alt="logo.svg" className="cursor-pointer" />

        <button
          className={`nav-toggle inline-flex md:hidden ease-in ${
            showMenu && 'fixed z-50 right-5 top-5'
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        <div className="nav-menu hidden md:flex gap-5 items-center">
          <Navlink text="Products" />
          <Navlink text="Features" />
          <Navlink text="About" />
          <Navlink text="Contact" />

          <div className="cta flex items-center gap-5">
            <Navlink text="Login" />
            <span className="text-slate-500">|</span>
            <button className="btn">Register</button>
          </div>
        </div>

        <NavDrawer showMenu={showMenu} onClose={() => setShowMenu(false)} />
      </div>
    </nav>
  );
}

export const Navlink = ({ text, link }) => (
  <a
    className="pb-1 cursor-pointer border-collapse hover:border-b-2 duration-150 ease-out  hover:border-blue-500"
    href={link}
  >
    {text}
  </a>
);

Navlink.defaultProps = {
  text: 'Nav link',
  href: '/#'
};
