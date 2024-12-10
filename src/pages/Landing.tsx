import { motion } from 'framer-motion';
import { data } from '../assets/constant';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const someRandomNumber = Math.floor(Math.random() * data.length);
  const [random, setRandom] = useState(someRandomNumber);
  const [show, setShow] = useState(true);
  const [lastRandom, setLastRandom] = useState(someRandomNumber);
  const navigate = useNavigate();
  useEffect(() => {
    const generateNewRandom = () => {
      let newRandom;
      do {
        newRandom = Math.floor(Math.random() * data.length);
      } while (newRandom === lastRandom);
      setLastRandom(newRandom);
      return newRandom;
    };

    const intervalId = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setRandom(generateNewRandom());
        setShow(true);
      }, 500);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [lastRandom]);

  return (
    <motion.div
      className="inspo-quote"
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quote">
        <FaQuoteLeft size="78px" />
        {data[random].quote}
        <FaQuoteRight size="78px" style={{ marginBottom: '-28px' }} />
      </div>
      <div className="source">
        <motion.button
          onClick={() => navigate('/all-quotes')}
          style={{ fontSize: '20px', backgroundColor: '#3e00a0' }}
        >
          View All Quotes
        </motion.button>
        <span>~&nbsp;{data[random].source}</span>
      </div>
    </motion.div>
  );
};
