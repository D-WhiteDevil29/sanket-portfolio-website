import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const ProblemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #fff;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  color: #092A5B;
  margin-bottom: 1rem;
  font-family: Ubuntu;
font-weight: 500;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;

`;
const ShortTitle = styled.h2`
  color: #5D5D63;
  margin-bottom: 1rem;
  font-family: Lato;
font-weight: 400;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;


`;

const LogoImage = styled.img`
  width: 241px;
  margin-bottom: 2rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  margin-top: 4rem; /* Space for arrows */
`;

const Step = styled(motion.div)`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: #F6F5F8;
  color: #092A5B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-weight: 700;
  color: #092A5B;
  margin-bottom: 0.5rem;
  font-family: Lato;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  display: flex;
  width: 250px;
  font-family: Lato;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #525252;
  line-height: 1.5;
`;

const ArrowContainer = styled.svg`
  position: absolute;
  top: -120%;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ProblemComponent = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Steps data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const steps = [
    {
      number: 1,
      title: "Bitmap used in a logo",
      description:
        "The logo consisted of a bitmap image. This led to numerous issues while using it across multiple touch-points and sizes.",
    },
    {
      number: 2,
      title: "Inconsistent custom typeface",
      description:
        "Having a custom typeface gives a logo a good appeal but in the context of healthcare domain, this just wasn’t working out.",
    },
    {
      number: 3,
      title: "Red, really?",
      description:
        "Red colour is avoided in health related brands since it is associated with danger and negativity.",
    },
    {
      number: 4,
      title: "Shadow",
      description:
        "Shadows look good, but using one in a logo causes several difficulties, especially in printing.",
    },
  ];

  // Intersection Observer to detect when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate steps one by one when the component is visible
  useEffect(() => {
    if (isVisible) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, index]);
        }, index * 1000); // Delay each step by 1 second
      });
    }
  }, [isVisible, steps]);

  // Arrow animation variants
  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <ProblemSection ref={sectionRef}>
      <Title>The Problem</Title>
      <ShortTitle>Old Logo</ShortTitle>
      <LogoImage src="/imax-logo.png" alt="Old Logo" />
      <StepsContainer>
        {/* Arrows */}
        <ArrowContainer>
          {steps.map((_, index) => (
            <AnimatePresence key={index}>
              {visibleSteps.includes(index) && (
                <motion.path
                  d={
                    index === 0
                      ? "M600 150 L300 250" // Step 1 (leftmost)
                      : index === 1
                      ? "M600 150 L500 250" // Step 2
                      : index === 2
                      ? "M600 150 L700 250" // Step 3
                      : "M600 150 L900 250" // Step 4 (rightmost)
                  }
                  stroke="#092A5B"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
            </AnimatePresence>
          ))}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#092A5B" />
            </marker>
          </defs>
        </ArrowContainer>

        {/* Steps */}
        {steps.map((step, index) => (
          <AnimatePresence key={index}>
            {visibleSteps.includes(index) && (
              <Step
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Step>
            )}
          </AnimatePresence>
        ))}
      </StepsContainer>
    </ProblemSection>
  );
};

export default ProblemComponent;