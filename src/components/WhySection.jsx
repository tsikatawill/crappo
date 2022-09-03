import { motion } from 'framer-motion';

import SectionImg from '../images/why-img.png';
import SectionOverlay2 from '../images/why-model-1.png';
import SectionOverlay3 from '../images/why-model-2.png';
import SectionOverlay1 from '../images/why-ribbon.png';
import { AnimateUpV, ScaleUpV } from '../variants';

export default function WhySection() {
  return (
    <section className="why">
      <div className="container py-10 grid md:grid-cols-2 items-center gap-10 overflow-hidden relative">
        <div className="image-wrapper row-start-2 md:row-start-1 max-w-lg mx-auto md:max-w-full md:mx-0">
          <motion.img
            variants={ScaleUpV}
            initial="initial"
            whileInView="animate"
            src={SectionImg}
            alt="why-img.png"
          />
        </div>

        <motion.div
          variants={AnimateUpV}
          initial="initial"
          whileInView="animate"
          className="text-wrapper"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">
            Why you should choose Crappo
          </h2>

          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
            commodi nemo sed aperiam vel debitis vero error voluptatum,
            aspernatur sequi!
          </p>

          <button className="btn">Learn more</button>
        </motion.div>

        <div className="overlays hidden md:block">
          <img
            src={SectionOverlay1}
            alt="overlay1"
            className="absolute bottom-0 left-0"
          />
          <img
            src={SectionOverlay2}
            alt="overlay2"
            className="absolute top-0 right-0"
          />
          <img
            src={SectionOverlay3}
            alt="overlay3"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
}
