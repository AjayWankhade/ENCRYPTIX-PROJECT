import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              An enthusiastic engineer with 1.8 years of experience in Full
              stack development ,specializing in both Front-end & Back-end
              Technology
            </p>
            <p>
              <font> A talented and creative Web Developer</font> with an eye
              for detail looking for an opportunity in a reputed company. Worked
              on various Projects ,Technology in which i had work on incudes -
              ReactJS,NodeJs,JavaScript and NextJS
            </p>

            <p>
              My vision is to be at a Mastery level no matter what I do.Now
              almost everything is becoming better than ever.I have habit of
              giving my 100% in things what i love the most .{" "}
            </p>
            <div style={{ border: "2px solid white", padding: "10px" }}>
              <p>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </p>
            </div>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
