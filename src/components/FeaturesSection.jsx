import { motion } from 'framer-motion';

import Feature1 from '../images/feature-1-img.png';
import Feature2 from '../images/feature-2-img.png';
import Feature3 from '../images/feature-3-img.png';
import FeatureOverlay1 from '../images/features-circle-1.png';
import FeatureOverlay2 from '../images/features-circle-2.png';
import { ScaleUpV } from '../variants';

export default function FeaturesSection() {
  return (
    <section className="features">
      <div className="container py-10 md:py-20 relative">
        <motion.h2
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="capitalize text-center font-semibold text-2xl md:text-3xl max-w-3xl mx-auto"
        >
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </motion.h2>

        <div className="features space-y-10 mt-10">
          <Feature image={Feature1} title="Invest smart" />
          <Feature image={Feature2} title="Detailed statistics" variant />
          <Feature
            image={Feature3}
            title="Grow your profit and track your investments"
          />
        </div>

        <div className="overlays hidden md:block">
          <img
            src={FeatureOverlay1}
            alt="feature1"
            className="absolute -top-20   -z-10"
          />
          <img
            src={FeatureOverlay2}
            alt="feature2"
            className="absolute bottom-0 right-0 -z-10"
          />
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, image, variant }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      className="text-wrapper space-y-5"
    >
      <h3 className="text-xl md:text-2xl font-semibold capitalize">{title}</h3>

      <p className="text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        adipisci commodi facilis quo maxime velit.
      </p>

      <motion.button
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5, ease: 'easeIn' }
        }}
        className="btn text-xs md:text-sm"
      >
        Learn more
      </motion.button>
    </motion.div>

    <div
      className={`image-wrapper ${variant && 'md:col-start-1 md:row-start-1'}`}
    >
      <motion.img
        variants={ScaleUpV}
        initial="initial"
        whileInView="animate"
        src={image}
        alt={title + '.jpg'}
      />
    </div>
  </div>
);
