import { motion } from 'framer-motion';

import Feature1 from '../images/feature-1-img.png';
import Feature2 from '../images/feature-2-img.png';
import Feature3 from '../images/feature-3-img.png';
import { ScaleUpV } from '../variants';

export default function FeaturesSection() {
  return (
    <section className="features">
      <div className="container py-10">
        <motion.h2
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="capitalize text-center font-semibold text-lg"
        >
          Trade secureley and market the high growth crypto currencies
        </motion.h2>

        <div className="features space-y-10 mt-10">
          <Feature image={Feature1} title="Invest smart" />
          <Feature image={Feature2} title="Detailed statistics" variant />
          <Feature
            image={Feature3}
            title="Grow your profit and track your investments"
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
      <h3 className="text-xl font-semibold capitalize">{title}</h3>

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
