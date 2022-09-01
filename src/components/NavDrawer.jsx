import { motion, AnimatePresence } from "framer-motion";
import { NavbarDrawerV } from "../variants";
import { Navlink } from "./Navbar";

export default function NavDrawer({ showMenu, onClose }) {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          variants={NavbarDrawerV}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="nav-drawer flex flex-col md:hidden justify-center top-0 left-0 w-full h-screen bg-accent absolute gap-8 items-center text-2xl"
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
  showMenu: false,
};
