import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { NavbarDrawerV } from '../variants';
import { Navlink } from './Navbar';

export default function NavDrawer({ showMenu, onClose }) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (showMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          variants={NavbarDrawerV}
          initial="hidden"
          animate="show"
          exit="exit"
          className="nav-drawer flex flex-col md:hidden justify-center top-0 left-0 w-full h-screen bg-accent fixed gap-8 items-center z-40. text-2xl"
          onClick={onClose}
        >
          <Navlink text="Products" />
          <Navlink text="Features" />
          <Navlink text="About" />
          <Navlink text="Contact" />

          <div className="cta flex items-center gap-5">
            <Navlink text="Login" />
            <span className="text-slate-500">|</span>
            <button className="btn">Register</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

NavDrawer.defaultProps = {
  showMenu: false
};
