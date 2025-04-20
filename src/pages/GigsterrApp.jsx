import React from "react";
import styled from "styled-components";
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';

const GigsterrApp = () => {
  return (
    <>
    <Navbar/>
    <Container>
      {/* Main App Overview */}
      <AppSection>
        <LeftContent>
          <AppTitle>Gigsterr App</AppTitle>
          <TagContainer>
            <Tag>UX Design</Tag>
            <Tag>Visual Design</Tag>
            <Tag>Brand Identity</Tag>
          </TagContainer>
          <Description>
            Gigsterr is a one of a kind app providing a plethora of musicians
            available to be booked for events.
          </Description>
          <Description>
            This app lets managers browse through thousands of professional
            musicians across multiple locations and genres. Gigsterr is free to
            use for Managers, while charging either an annual subscription fee
            or commission per gig from musicians.
          </Description>
        </LeftContent>
        <RightContent>
          <AppImage src="/mobileHand.png" alt="App Preview" />
        </RightContent>
      </AppSection>

      {/* Problem & Solution Section */}
      <ProblemSolutionContainer>
        <Card>
          <CardHeading>
          <Icon src="/question.png" alt="Problem Icon" />
          <CardTitle>The Problem</CardTitle>
          </CardHeading>
          <CardDescription>
            Event managers need performing musicians for events. However, the
            current process of hiring musicians is manual and tedious.
          </CardDescription>
          <CardDescription>
            Managers rely on their network to contact musicians. Even musicians
            face several issues, such as not finding enough opportunities and
            getting ghosted after gigs.
          </CardDescription>
        </Card>
        <Card>
          <CardHeading>
          <Icon src="/idea.png" alt="Solution Icon" />
          <CardTitle>Design Solution</CardTitle>
          </CardHeading>
          <CardDescription>
            I conducted primary research to find what can be done to make the
            hiring process more streamlined.
          </CardDescription>
          <CardDescription>
            I have designed an app that reduces manual searching and contacting
            steps while also helping musicians stay on top of the game.
          </CardDescription>
        </Card>
      </ProblemSolutionContainer>

      {/* Persona Overview Section */}
      <PersonaBox>
      <PersonaTitle>Persona Overview</PersonaTitle>
      <PersonaContainer>
        <Persona>
          <ProfileImage src="/himanshu.png" alt="Sankalp" />
          <PersonaName>Sankalp</PersonaName>
          <PersonaInfo>Event Manager | 34 | Pune</PersonaInfo>
          <PersonaText>
          Sankalp is a buzzing event manager who mostly manages events for high profile clients. His job consists of providing high quality venues, food and beverages, musicians and artists, etc.
          </PersonaText>
          <SubHeading>Goals:</SubHeading>
          <List>
            <li>To provide a wide range of reliable musicians.</li>
            <li>To book musicians in advance for events.</li>
          </List>
          <SubHeading>Frustrations:</SubHeading>
          <List>
            <li>Musicians don't declare availability in time.</li>
            <li>No unified platform to explore musicians.</li>
          </List>
        </Persona>
        <Divider />
        <Persona>
          <ProfileImage src="/himanshu.png" alt="Himanshu" />
          <PersonaName>Himanshu</PersonaName>
          <PersonaInfo>Performing Musician | 39 | Pune</PersonaInfo>
          <PersonaText>
          Himanshu is a professional flautist based out of Pune. He performs live at events and restaurants. Altough he has been performing for a long time, he still finds it difficult to find good gigs to perform at.
          </PersonaText>
          <SubHeading>Goals:</SubHeading>
          <List>
            <li>To find good gigs to perform at.</li>
            <li>To have a schedule of booked dates accessible.</li>
          </List>
          <SubHeading>Frustrations:</SubHeading>
          <List>
            <li>Event managers delay payments.</li>
            <li>Forgetting monthly schedules.</li>
          </List>
        </Persona>
      </PersonaContainer>
      </PersonaBox>

      <Section>
        <ImageContainer>
          <FlowImage src="/userFlow.png" alt="User Flow dig" />
        </ImageContainer>
      </Section>

      {/* Wireframes Section */}
      <Section>
        <Title>Wireframes</Title>
        <WireframeImage src="/wireframe.png" alt="Hand-drawn Wireframes" />
        <WireframeGrid>
          <SmallWireframe src="/wireframe1.png" alt="Wireframe 2" />
          <SmallWireframe src="/wireframe2.png" alt="Wireframe 3" />
          <SmallWireframe src="/wireframe3.png" alt="Wireframe 4" />
        </WireframeGrid>
      </Section>

      <PageContainer>
      {/* Logo Section */}
      <LogoContainer>
        <SectionTitle>Logo Design</SectionTitle>
        <LogoImage src="/Gigsterr-main-logo.png" alt="Logo" />
      </LogoContainer>

      {/* Visual Mockups Section */}
      <MockupsContainer>
        <SectionTitle>Visual Design Mockups</SectionTitle>
        <MockupsImages>
          <MockupImage src="/mobile-left1.png" alt="Mockup 1" />
          <MockupImage src="/mobile-left2.png" alt="Mockup 2" />
          <MockupImage src="/mobile-center.png" alt="Mockup 3" />
          <MockupImage src="/mobile-right2.png" alt="Mockup 4" />
          <MockupImage src="/mobile-right1.png" alt="Mockup 5" />
        </MockupsImages>
        <PrototypeButton>View Prototype</PrototypeButton>
      </MockupsContainer>

      {/* Future Roadmap & Scope Section */}
      <RoadmapContainer>
        <SectionTitle>Future Roadmap & Scope</SectionTitle>
        <RoadmapItems>
          <RoadmapItem>
            <RoadmapIcon src="/dollar.png" alt="Business Model" />
            <RoadmapText>Refining Business Model</RoadmapText>
          </RoadmapItem>
          <RoadmapItem>
            <RoadmapIcon src="/shield.png" alt="Scam Prevention" />
            <RoadmapText>Scam Prevention Methods</RoadmapText>
          </RoadmapItem>
          <RoadmapItem>
            <RoadmapIcon src="/diamond.png" alt="Premium Profiles" />
            <RoadmapText>Premium Profiles & Ranking</RoadmapText>
          </RoadmapItem>
        </RoadmapItems>
      </RoadmapContainer>
    </PageContainer>
    </Container>
    </>
  );
};

export default GigsterrApp;

/* Styled Components */
const Container = styled.div`
  width: 100%;
  padding: 150px 0;
  position: relative;
  background-color: #fff;
`;

// App Overview Section
const AppSection = styled.div`
  display: flex;
  position: relative;
  margin: 2rem auto;
  width: 820px;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #F6F5F8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const LeftContent = styled.div`
  width: 55%;
`;

const RightContent = styled.div`
  width: 40%;
`;

const AppTitle = styled.h2`
  color: #092A5B;
  font-family: Ubuntu;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  padding: 3px 15px;
  border-radius: 22px;
  margin: 1rem 0;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
  border: 1px solid #525252;

`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #525252;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AppImage = styled.img`
  width: 274px;
  position: absolute;
  top: -22%;
  right: 0;
  height: 370px;
  border-radius: 15px;
`;

// Problem & Solution Section
const ProblemSolutionContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: center;
  gap: 4rem;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 30%;
  position: relative;
  padding-bottom: 20px;
  background-color: ${(props) => props.bgColor || "#fff"};
  border-radius: 22px;
  box-shadow: 6px 6px 20px 0px rgba(82, 82, 82, 0.10);
`;

const Icon = styled.img`
  position: absolute;
  top: -25px;
  left: 10%;
  width: 102px;
  height: 102px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.bgColor || "#F6F5F8"};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 2rem;
`;


const CardTitle = styled.h3`
  font-size: 20px;
  color: #222;
  margin-top: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #525252;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px 30px;
`;

// Persona Section
const PersonaTitle = styled.h2`
  font-size: 28px;
  color: #1d1d42;
  margin-top: 12rem;
`;

const PersonaBox = styled.div`
  display: flex;
  background: #F6F5F8;
  flex-direction: column;
  margin-top: 220px;
  align-items: center;
  width: 100%;
  height: 700px;
  justify-content: center;
`;
const PersonaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border-radius: 15px;
`;

const Persona = styled.div`
  width: 45%;
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

const PersonaName = styled.h3`
  font-size: 20px;
  color: #222;
`;

const PersonaInfo = styled.p`
  font-size: 14px;
  color: #555;
`;

const PersonaText = styled.p`
  font-size: 14px;
  color: #444;
`;

const SubHeading = styled.h4`
  font-size: 16px;
  color: #1d1d42;
  margin-top: 15px;
`;

const List = styled.ul`
  font-size: 14px;
  color: #444;
`;

const Divider = styled.div`
  width: 2px;
  background: #ddd;
  height: 100%;
`;

const Section = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #092A5B;
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const FlowImage = styled.img`
  width: 90%;
  // max-width: 900px;
  object-fit: contain;
  border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WireframeImage = styled.img`
  width: 90%;
  // max-width: 1000px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WireframeGrid = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
`;

const SmallWireframe = styled.img`
  width: 30%;
  max-width: 300px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;



const PageContainer = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  padding: 30px;
  margin-top: 50px;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  color: #092A5B;
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const LogoImage = styled.img`
  width: 225px;
  margin-top: 5px;
`;

const MockupsContainer = styled.div`
  margin-bottom: 50px;
`;

const MockupsImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const MockupImage = styled.img`
  width: 180px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const PrototypeButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  margin-top: 20px;
  text-decoration: underline;
  width: fit-content;
  height: 32px;
  background-color: #092A5B;
  // text-decoration: none;
  text-align: center;
  font-family: Lato, sans-serif;
  font-style: normal;
  line-height: normal;
  padding: 4px 8px;
  border-radius: 22px;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: right 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: #092A5B;
    border: 2px solid #092A5B;
    cursor: pointer;
  }

  &:hover:before {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

const RoadmapContainer = styled.div`
  margin-top: 60px;
`;

const RoadmapItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  text-align: center;
  margin-top: 40px;
`;

const RoadmapItem = styled.div`
  max-width: 140px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative; /* Create a positioning context for the circle */

  &::before {
    content: "";
    width: 36px; /* Slightly smaller than the icon to create a border effect */
    height: 36px;
    background-color: #092A5B;; /* Light yellow color for the circle */
    border-radius: 50%; /* Make it circular */
    position: absolute;
    top: 0px; /* Move it slightly up */
    right: 30px; /* Move it slightly to the right (adjusted based on icon width) */
    z-index: 1; /* Place it behind the icon */
  }
`;

const RoadmapIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
  position: relative; /* Ensure the icon can be layered */
  z-index: 2; /* Place the icon above the circle */
`;

const RoadmapText = styled.p`
  color: #525252;
  text-align: center;
  width: 184px;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;