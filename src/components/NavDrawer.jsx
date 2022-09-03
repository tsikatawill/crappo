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
          className="nav-drawer top-0 left-0 w-full h-screen bg-accent fixed block md:hidden z-40"
          onClick={onClose}
        >
          <div className="flex flex-col justify-center gap-8 items-center text-2xl overflow-y-auto h-full py-10">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

NavDrawer.defaultProps = {
  showMenu: false
};
