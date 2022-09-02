export const NavbarDrawerV = {
  hidden: { x: "100vw" },
  show: { x: 0, transition: { duration: 1 } },
};

export const AnimateDownV = (duration = 0.8, yOffset = -100) => {
  return {
    initial: { y: yOffset, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration } },
  };
};

export const AnimateUpV = {
  initial: { y: 100 },
  animate: { y: 0, transition: { duration: 1 } },
};

export const AnimateRightV = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const AnimateLeftV = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const ScaleUpV = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

export const StaggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
