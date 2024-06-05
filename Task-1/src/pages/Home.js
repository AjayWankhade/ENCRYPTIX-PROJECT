import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font color="yellow"></font>
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <p>
          I am a Full Stack Developer, proficient in
          <span> JavaScript, React.js, TypeScript, Next.js,</span> and{" "}
          <span>Node.js.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
