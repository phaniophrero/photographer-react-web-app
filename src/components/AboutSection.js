import React from "react";
import { Link } from "react-router-dom";
import photographer1 from "../img/phtographer4.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography events. We got your
          covered with our professional team on it.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          // initial="hidden"
          // animate="show"
          src={photographer1}
          alt="photographer taking shots"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
