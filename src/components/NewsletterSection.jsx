import { motion } from 'framer-motion';

import { ScaleUpV } from '../variants';

export default function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="container py-10 md:py-20">
        <motion.div
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="newsletter-card rounded-lg p-5 pb-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="left space-y-5">
            <h3 className="font-semibold text-xl">Start Mining Now</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit, nihil
              labore aliquam error of some more lorem.
            </p>
          </div>

          <div className="right">
            <form className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter message"
                className="w-full bg-transparent placeholder:text-slate-100 text-white border-white focus:outline-none focus:bg-blue-400 focus:px-2 duration-200 py-2 border-b-2"
              />
              <button className="px-3 py-2 bg-white text-black rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="overlay"></div>
      </div>
    </section>
  );
}
