import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import cliff from "../img/cliff.jpg";
import montserrat from "../img/montserrat.jpg";
import wood from "../img/wood.jpg";
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  lineAnim2,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <ImgContainer>
          <motion.h2 variants={fade}>The Cliff</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-cliff">
            <Hide>
              <motion.img
                variants={photoAnim}
                src={cliff}
                alt="man standing on cliff"
              />
            </Hide>
          </Link>
        </ImgContainer>
        <DescContainer variants={fade}>
          <h3>Breathe fresh air from mountains</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            praesentium voluptatibus cum, at ad sit non deleniti officia
            exercitationem natus?
          </p>
          <Link to="/work/the-cliff">
            <button>See More</button>
          </Link>
        </DescContainer>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <ImgContainer>
          <h2 variants={fade}>Montserrat</h2>
          <motion.div variants={lineAnim2} className="line"></motion.div>
          <Link to="/work/montserrat">
            <img
              variants={photoAnim}
              src={montserrat}
              alt="montserrat with lights"
            />
          </Link>
        </ImgContainer>
        <DescContainer>
          <h3>This is a beautiful place</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            ea vitae repellendus fuga placeat laudantium!
          </p>
          <Link to="/work/montserrat">
            <button>See More</button>
          </Link>
        </DescContainer>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <ImgContainer>
          <h2>The Wood</h2>
          <motion.div variants={lineAnim2} className="line"></motion.div>
          <Link to="/work/the-wood">
            <img variants={photoAnim} src={wood} alt="city in the woods" />
          </Link>
        </ImgContainer>
        <DescContainer>
          <h3>Peaceful place to live</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            praesentium voluptatibus cum, at ad sit non deleniti officia
            exercitationem natus?
          </p>
          <Link to="/work/the-wood">
            <button>See More</button>
          </Link>
        </DescContainer>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #4a78bd;
  }
  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
`;

const ImgContainer = styled(motion.div)`
  flex: 2;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DescContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  flex: 1;
  padding: 4rem 0rem 0rem 0rem;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

const Movie = styled(motion.div)`
  display: flex;
  padding-bottom: 5rem;
  .line {
    height: 0.4rem;
    width: 40%;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 70%;
    height: 50vh;
    object-fit: cover;
    border-radius: 1.2rem;
    /* padding: 0rem 2rem; */
    @media (max-width: 1200px) {
      display: flex;
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #b281e9;

  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #8b81e6;
`;

const Frame3 = styled(Frame1)`
  background: #45ade9;
`;

const Frame4 = styled(Frame1)`
  background: #a2f7c8;
`;

export default OurWork;
