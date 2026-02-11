import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Celebration() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
   

    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="celebration-wrapper">
      <Confetti
        width={size.width}
        height={size.height}
        recycle={true}
        numberOfPieces={250}
      />

      <motion.div
        className="celebration-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="celebration-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          You Just Made My Heart The Happiest ❤️
        </motion.h1>

        <motion.p
          className="celebration-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Thank you for choosing me.
          <br />
          I promise to keep choosing you,
          <br />
          every single day. 💞
        </motion.p>

       <motion.div
  className="love-line"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.2, duration: 1 }}
>
  After all these years, you’re still my favourite place 💞
</motion.div>

<motion.div
  className="valentine-line"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 3.2, duration: 1 }}
>
  Happy Valentine’s Day, <br/>My Love ❤️
</motion.div>

      </motion.div>
    </div>
  );
}
