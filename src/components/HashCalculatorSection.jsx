import { motion } from "framer-motion";
import { AnimateUpV, ScaleUpV } from "../variants";

export default function HashCalculatorSection() {
  return (
    <section className="hash-calculator">
      <div className="container py-10">
        <motion.div
          variants={AnimateUpV}
          initial="initial"
          whileInView="animate"
          className="section-head text-center mb-5 space-y-3"
        >
          <h2 className="font-semibold text-lg">
            How much can you earn with us{" "}
          </h2>
          <p className="text-xs md:text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            esse.
          </p>
        </motion.div>

        <motion.div
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="calculator max-w-3xl mx-auto bg-white rounded-lg p-5 md:p-8 space-y-5 md:space-y-8 text-black shadow-md shadow-slate-200"
        >
          <form className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Enter your hash rate"
              className="border-b-2 border-slate-600 focus:outline-none text-black py-2 flex-grow"
            />

            <select className="bg-slate-300 text-black w-32 p-2">
              <option disabled>Select unit...</option>
              <option>TH/s</option>
              <option>H/s</option>
              <option>KH/s</option>
              <option>MH/s</option>
              <option>GH/s</option>
            </select>

            <button className="btn w-fit">Calculate</button>
          </form>

          <div className="text">
            <p className="uppercase text-blue-600">Estimated 24 hour revenue</p>

            <p className="text-2xl font-bold my-5">
              0.055 130 59 ETH <span className="text-blue-600">($1275)</span>
            </p>

            <p>
              Revenue will change based on mining dificulty and Ethereum price.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
