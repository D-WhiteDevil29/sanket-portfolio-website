import React from "react";
import styled from "styled-components";
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';
import FeatureWalkthrough from "../components/FeatureWalkthrough.jsx";

const GoogleMaps = () => {
    return (
        <>
            <Navbar />
            <Container>
                {/* Main App Overview */}
                <AppSection>
                    <LeftContent>
                        <AppTitle>Google Maps Alarm System</AppTitle>
                        <TagContainer>
                            <Tag>UX Design</Tag>
                            <Tag>Visual Design</Tag>
                        </TagContainer>
                        <Description>
                            Users can set an alarm for a specific location while traveling
                            and set the distance from the location, at which the alarm
                            will be triggered.
                        </Description>
                        <Description>
                            The alarm will remind the users to get off or halt at their preferred location, preventing them from traveling past
                            their destination.
                        </Description>
                    </LeftContent>
                    <RightContent>
                        <AppImage src="/gmas-img.png" alt="App Preview" />
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
                            As a traveler, it is possible to doze off on a
                            bus or train while traveling and travel past
                            your destination in sleep.
                        </CardDescription>
                        <CardDescription>
                            This may cause serious issues especially
                            while traveling to remote locations or
                            traveling without any information of the area.
                        </CardDescription>
                    </Card>
                    <Card>
                        <CardHeading>
                            <Icon src="/idea.png" alt="Solution Icon" />
                            <CardTitle>Design Solution</CardTitle>
                        </CardHeading>
                        <CardDescription>
                            I added a small yet effective feature in Google Maps that allows users to set an alarm for
                            their destination, which lets the users know that they need to get off their bus/train a
                            bit earlier.
                        </CardDescription>
                        <CardDescription>
                            The alarm can be configured based on the distance and can be linked to smart devices
                            as well.
                        </CardDescription>
                    </Card>
                </ProblemSolutionContainer>

                <PageContainer>
                    {/* Feature Walkthrough Section */}
                    <FeatureWalkthroughSection>
                        <FeatureWalkthroughTitle>Feature Walkthrough</FeatureWalkthroughTitle>
                        <FeatureWalkthrough />
                    </FeatureWalkthroughSection>

                    {/* Future Roadmap & Scope Section */}
                    <RoadmapContainer>
                        <SectionTitle>Future Roadmap & Scope</SectionTitle>
                        <RoadmapItems>
                            <RoadmapItem>
                                <RoadmapIcon src="/lens.png" alt="real world testing" />
                                <RoadmapText>Real-world user testing</RoadmapText>
                            </RoadmapItem>
                            <RoadmapItem>
                                <RoadmapIcon src="/book.png" alt="Tutorial" />
                                <RoadmapText>Feature tutorial needed</RoadmapText>
                            </RoadmapItem>
                            <RoadmapItem>
                                <RoadmapIcon src="/watch.png" alt="Smart devices connectivity" />
                                <RoadmapText>Smart devices connectivity</RoadmapText>
                            </RoadmapItem>
                        </RoadmapItems>
                    </RoadmapContainer>
                </PageContainer>
            </Container>
        </>
    );
};

export default GoogleMaps;

/* Styled Components */
const Container = styled.div`
  width: 100%;
  padding: 150px 0;
  position: relative;
  background-color: #fff;
  overflow: hidden;
`;

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

const ProblemSolutionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4rem;
  margin-top: 80px;
  position: relative;
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

const PageContainer = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  padding: 30px;
  margin-top: 100px;
  background-color: #ffffff;
`;

const FeatureWalkthroughSection = styled.div`
  margin-bottom: 40px;
`;

const FeatureWalkthroughTitle = styled.h2`
  color: #092A5B;
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 48px;
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
  position: relative;

  &::before {
    content: "";
    width: 36px;
    height: 36px;
    background-color: #092A5B;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: 30px;
    z-index: 1;
  }
`;

const RoadmapIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
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

const SectionTitle = styled.h2`
  color: #092A5B;
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`; // Added missing SectionTitle