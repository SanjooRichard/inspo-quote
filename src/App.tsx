import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./assets/constant";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function App() {
  const someRandomNumber = Math.floor(Math.random() * data.length);
  const [random, setRandom] = useState(someRandomNumber);
  const [show, setShow] = useState(true);
  const [lastRandom, setLastRandom] = useState(someRandomNumber);

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
    <div id="grad" style={{ height: "100vh", width: "100vw" }}>
      <motion.div
        className="inspo-quote"
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="quote">
          <FaQuoteLeft size="78px" />
          {data[random].quote}
          <FaQuoteRight size="78px" style={{ marginBottom: "-28px" }} />
        </div>
        <div className="source">~&nbsp;{data[random].source}</div>
      </motion.div>
    </div>
  );
}

export default App;
