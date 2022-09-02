import { motion } from 'framer-motion';
import { FaChartBar, FaUsers, FaWifi } from 'react-icons/fa';

import { AnimateUpV } from '../variants';

export default function DemographicsSection() {
  return (
    <section className="demographics">
      <div className="container py-10 flex flex-col gap-10 items-center md:items-start md:gap-0 md:flex-row justify-between">
        <DemoItem
          icon={<FaChartBar size={30} />}
          value="$30B"
          description="Digital currency exchange"
        />
        <DemoItem
          icon={<FaWifi size={30} />}
          value="190+"
          description="Countries around the world"
        />
        <DemoItem
          icon={<FaUsers size={30} />}
          value="$10M"
          description="Trusted wallet investors"
        />
      </div>
    </section>
  );
}

const DemoItem = ({ icon, value, description }) => (
  <motion.div
    variants={AnimateUpV}
    initial="initial"
    whileInView="animate"
    className="flex gap-5"
  >
    <div className="icon w-14 h-14 rounded-full bg-slate-500 text-blue-700 grid place-content-center text-2xl font-bold">
      {icon}
    </div>

    <div className="text">
      <p className="number text-2xl font-bold">{value}</p>
      <p className="capitalize text-xs">{description}</p>
    </div>
  </motion.div>
);

DemoItem.defaultProps = {
  icon: 'ico',
  value: '$30',
  description: 'Some vividly inacurrate description'
};
