import React from "react";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ampount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
          ></motion.div>
          {/* text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, ampount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I am a Master Student at EPFL</h3>
            <p className="mb-6">
              As a passionate{" "}
              <span className="text-accent font-bold">Data Science </span>
              master's student with a keen interest in{" "}
              <span className="text-accent font-bold">
                Recommender Systems{" "}
              </span>
              and their potential to create impactful solutions . My enthusiasm
              for developing innovative data science applications stems from my
              deep belief in using technology for{" "}
              <span className="text-accent font-bold">meaningful purposes</span>
              . Beyond academics, I enjoy developing websites, merging my
              interests in{" "}
              <span className="text-accent font-bold">web development </span>{" "}
              with data science to create{" "}
              <span className="text-accent font-bold">
                user-friendly experiences
              </span>
              . Moreover, I love being an active member of the{" "}
              <span className="text-accent font-bold">
                {" "}
                student association committee{" "}
              </span>
              , where I get to learn valuable skills in{" "}
              <span className="text-accent font-bold">
                team management{" "}
              </span>and{" "}
              <span className="text-accent font-bold">organization</span>.
            </p>

            {/*} <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={5} /> : null}
                </div>
                <div className="='font-primary text-sm tracking-{2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}
                  k+
                </div>
                <div className="='font-primary text-sm tracking-{2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={5} /> : null}
                  k+
                </div>
                <div className="='font-primary text-sm tracking-{2px]">
                  Satisfied
                  <br /> Clients
                </div>
              </div>
  </div>
            <div className="flex gap-x-8 items-center">
              <motion.button className="btn btn-lg">Contact me</motion.button>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My Portfolio
              </a>
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
