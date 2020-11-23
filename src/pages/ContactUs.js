import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, photoAnim, fade } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
// Image
import photographer from "../img/phtographer.jpg";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get it touch.</motion.h2>
        </Hide>
      </Title>
      <MainContent>
        <ContainerSocial>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Social Media</h2>
            </Social>
            <SocialList variants={titleAnim}>
              <a href="https://github.com/phaniophrero?tab=repositories">
                Github
              </a>
              <a href="https://www.linkedin.com/in/alexandru-stefanel-niculae-7a5221184/">
                Linkedin
              </a>
              <a href="https://www.instagram.com/phaniophrero/">Instagram</a>
            </SocialList>
          </Hide>
        </ContainerSocial>
        <ImageContainer>
          <motion.div className="hide-img">
            <motion.div variants={fade} className="square-shape"></motion.div>
            <Image variants={photoAnim}>
              <motion.img src={photographer} alt="photographer" />
            </Image>
          </motion.div>
        </ImageContainer>
      </MainContent>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #f0f0f0;
  min-height: 80vh;
  overflow-y: hidden;
  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const MainContent = styled(motion.div)`
  display: flex;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #dfdfdf;
  @media (max-width: 1200px) {
    margin-top: 4rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #949494;
`;

const ContainerSocial = styled(motion.div)`
  flex: 1;
  flex-basis: 25rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const SocialList = styled(motion.div)`
  display: flex;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #dfdfdf;
    padding: 0.5rem 0rem;
    margin-left: 4rem;
    transition: color 0.5s ease;
    &:hover {
      color: #8385ff;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  flex-basis: 25rem;
  position: relative;
  /* .hide-img {
    overflow: hidden;
  } */
  .square-shape {
    height: 40vh;
    width: 40vh;
    border: 0.2rem solid #8385ff;
    border-radius: 1.6rem;
    position: absolute;
    top: 18%;
    right: 19%;
    z-index: 3;
  }
`;

const Image = styled(motion.div)`
  width: 80%;
  position: absolute;
  z-index: 10;
  left: 5%;
  top: 0%;
  img {
    width: 90%;
    height: 40vh;
    object-fit: cover;
    border-radius: 1.2rem;
  }
`;

export default ContactUs;
