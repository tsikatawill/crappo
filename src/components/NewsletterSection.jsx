import { motion } from 'framer-motion';

import { ScaleUpV } from '../variants';

export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="container py-10">
        <motion.div
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="rounded-lg bg-blue-500 p-10 grid  grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="left space-y-5">
            <h3 className="font-semibold text-xl">Start Mining now</h3>
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
              <button className="px-3 py-2 bg-white text-black rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
