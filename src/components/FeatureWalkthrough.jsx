import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for step animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInPath = keyframes`
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 30px;
  justify-items: center;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #1e3a8a;
  margin-bottom: 20px;
  grid-column: 1 / 4;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

const StepContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StepText = styled.div`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StepLabel = styled.div`
  position: absolute;
  top: -50px;
  background: #d3d3d3; /* Greyish background */
  color: #333;
  padding: 5px;
  border-radius: 50%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
    top: -40px;
  }
`;

const ConnectorSVG = styled.svg`
  position: absolute;
  top: -70px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 150px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 90%;
    height: 130px;
  }
`;

const AnimatedPath = styled.path`
  fill: none;
  stroke: #a9a9a9; /* Greyish stroke for curvy arrows */
  stroke-width: 2;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${slideInPath} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.delay}s;
  marker-end: url(#arrowhead);

  @media (max-width: 768px) {
    stroke-width: 1.5;
  }
`;

const FeatureWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000); // Change step every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { image: "/fw1.png", text: "Step 1: Open Map", gridRow: 1, gridColumn: 1 }, // Google logo
    { image: "/fw2.png", text: "Step 2: Head to", gridRow: 1, gridColumn: 2 },
    { image: "/fw3.png", text: "Step 3: Set up", gridRow: 1, gridColumn: 3 },
    { image: "/fw4.png", text: "Step 4: Click to set alarm!", gridRow: 2, gridColumn: 1 },
    { image: "/fw5.png", text: "Step 5: Set the", gridRow: 2, gridColumn: 2 },
    { image: "/fw6.png", text: "Step 6: Done!", gridRow: 2, gridColumn: 3 },
  ];

  const getPathData = (index) => {
    const curveOffset = 60;
    const height = 120;
    if (index === 0 || index === 3) return ""; // No connector for first step of each row
    const startX = 50;
    const controlX = index % 3 === 0 ? startX + curveOffset : startX - curveOffset;
    return `M ${startX}%,0 Q ${controlX}%,${height / 2} ${startX}%,${height}`;
  };

  return (
    <Container>
      {/* <Title>Feature Walkthrough</Title> */}
      {steps.map((step, index) => (
        <StepContainer
          key={index}
          style={{ gridRow: step.gridRow, gridColumn: step.gridColumn }}
        >
          {index > 0 && index < 5 && index !== 3 && (
            <ConnectorSVG>
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#a9a9a9" />
                </marker>
              </defs>
              <AnimatedPath
                d={getPathData(index)}
                delay={index * 0.5}
                style={{ opacity: activeStep >= index ? 1 : 0 }}
              />
            </ConnectorSVG>
          )}
          <StepLabel>{step.text.split(":")[0]}</StepLabel>
          <StepImage src={step.image} alt={step.text} />
          <StepText>{step.text}</StepText>
        </StepContainer>
      ))}
    </Container>
  );
};

export default FeatureWalkthrough;