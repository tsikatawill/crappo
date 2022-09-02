import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import defaultIcon from '../images/ReactLogo.svg';
import BTCImg from '../images/bitcon.png';
import ETHImg from '../images/ethereum.png';
import LTCImg from '../images/litecoin.png';
import { AnimateDownV, ScaleUpV, StaggerContainer } from '../variants';

export default function CryptoCurrencySection() {
  const [selectedCard, setSelectedCard] = useState('BTC');
  const CryptoItems = [
    {
      icon: BTCImg,
      name: 'Bitcoin',
      symbol: 'BTC',
      description:
        'Digital currency in which a record of transactions is maintained.'
    },
    {
      icon: ETHImg,
      name: 'Ethereum',
      symbol: 'ETH',
      description:
        'Blockchain technology to create and run decentralized digital applications.'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      description:
        'Cryptocurrency that enables instant payments to anyone in the world.',
      icon: LTCImg
    }
  ];

  const handleSelect = (symbol) => {
    setSelectedCard(symbol);
  };

  return (
    <section className="crypto-section bg-slate-100 text-black relative before:bg-slate-100 before:block before:w-full before:-top-24 before:-z-10 before:h-32 before:absolute">
      <div className="container py-10 space-y-10">
        <motion.h2
          variants={ScaleUpV}
          initial="initial"
          whileInView="animate"
          className="capitalize text-center font-semibold text-lg"
        >
          Trade secureley and market the high growth crypto currencies
        </motion.h2>

        <motion.div
          variants={StaggerContainer}
          initial="initial"
          animate="animate"
          className="crypto-cards grid grid-cols-1 md:grid-cols-3 gap-10 text-black max-w-screen-lg mx-auto"
        >
          {CryptoItems.map((item, index) => (
            <CryptoCard
              key={index}
              {...item}
              selected={selectedCard}
              onSelect={() => handleSelect(item.symbol)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const CryptoCard = ({
  icon,
  name,
  symbol,
  description,
  selected,
  onSelect
}) => {
  const check = () => {
    return selected === symbol;
  };

  const picked = check();

  return (
    <motion.div
      variants={AnimateDownV()}
      className={`crypto-card ${
        picked ? 'bg-secondary duration-700 text-white' : 'bg-white'
      } rounded-lg min-h-96 py-10 px-6 text-center space-y-5`}
      onClick={onSelect}
    >
      <motion.img
        initial={{ rotate: -360 }}
        whileHover={{
          rotate: 360,
          transition: { duration: 0.8, ease: 'linear' }
        }}
        src={icon}
        alt="crypto.png"
        className="mx-auto mb-10"
      />

      <p className="text-2xl font-semibold">
        {name} <sup className="text-slate-600 text-sm">{symbol}</sup>
      </p>

      <p>{description}</p>

      <button
        className={`${
          picked
            ? 'flex items-center gap-2 mx-auto bg-blue-600 text-white'
            : 'border-2 border-blue-600'
        } rounded-full  p-3`}
      >
        {picked && <span>Start mining</span>}
        <FaChevronRight />
      </button>
    </motion.div>
  );
};

CryptoCard.defaultProps = {
  icon: defaultIcon,
  name: 'Crypto',
  symbol: 'CRT',
  onSelect: () => {},
  selected: false,
  description:
    'Digital currency in which a record of transactions is maintained.'
};
