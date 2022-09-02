import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

import HeroImg from '../images/hero-img.png';
import { AnimateDownV, AnimateRightV, AnimateUpV, ScaleUpV } from '../variants';

export default function Hero() {
  return (
    <div className="hero">
      <div className="container grid gap-10 md:grid-cols-2 items-center py-10">
        <div className="text-wrapper max-w-sm mx-auto md:max-w-full md:mx-0">
          <motion.div
            variants={AnimateDownV(0.5, -50)}
            initial="initial"
            whileInView="animate"
            className="promo w-fit rounded-full bg-slate-600 p-1 pr-3 space-x-4 whitespace-nowrap text-xs flex items-center"
          >
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8 }
              }}
              className="rounded-full bg-white px-2 text-black"
            >
              70% SAVE
            </motion.p>
            <span>For the best Black Friday deals</span>
          </motion.div>

          <motion.div
            variants={AnimateUpV}
            initial="initial"
            whileInView="animate"
            className="my-7 mb:my-10 space-y-2 md:space-y-5"
          >
            <h1 className="text-2xl md:text-5xl font-semibold">
              Fastest & Secure Platform To Invest In Crypto
            </h1>

            <p className="text-xs">
              Buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
              transactions.
            </p>
          </motion.div>

          <motion.div
            variants={AnimateDownV(0.8, -30)}
            initial="initial"
            whileInView="animate"
            className="btn w-fit flex items-center gap-5 cursor-pointer text-sm"
          >
            <p>Try For FREE</p>

            <motion.p
              variants={AnimateRightV}
              initial="initial"
              whileInView="animate"
              className="h-5 w-5 rounded-full grid place-content-center bg-white text-black"
            >
              <FaChevronRight size="10" />
            </motion.p>
          </motion.div>
        </div>

        <div className="image-wrapper max-w-lg mx-auto md:max-w-full md:mx-0">
          <motion.img
            variants={ScaleUpV}
            initial="initial"
            whileInView="animate"
            src={HeroImg}
            alt="hero-img.png"
            className="w-full lg:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
