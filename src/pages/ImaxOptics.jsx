import Navbar from "../components/Navbar";
import styled from "styled-components";
import Button from "../components/Button.jsx";
import ProblemComponent from "../components/ProblemComponent.jsx";

const IMaxOptics = () => {
  return (
    <>
      <Navbar />
      <Container>
        <AppSection>
          <LeftContent>
            <AppTitle>I-Max Optics</AppTitle>
            <TagContainer>
              <Tag>Branding</Tag>
              <Tag>Logo Design</Tag>
            </TagContainer>
            <Description>
              This project involved rebranding I Max Optics, a healthcare-related
              brand, by addressing issues with the existing logo and creating a
              new, modern design.
            </Description>
            <Description>
              The goal was to create a logo that is scalable, consistent, and
              appropriate for the healthcare domain.
            </Description>
          </LeftContent>
          <RightContent></RightContent>
        </AppSection>

        {/* Problem Component */}
        <ProblemComponent />

        <LogoExploration>
          <SectionTitle>Logo Explorations</SectionTitle>
          <MockupImage src="/mockup.png" alt="Logo Explorations" />
        </LogoExploration>

        <SectionTitle>Design Solution</SectionTitle>
        <DesignSolutionSection>
          <SolutionContainer>
            <ColorSwatches>
              <LeftStack>
                <LeftSwatch style={{ background: "#138F9F" }}>
                  <div>Primary Colour</div>
                  <div>#138F9F</div>
                </LeftSwatch>
                <LeftSwatch style={{ background: "#04647A" }}>
                  <div>Secondary Colour</div>
                  <div>#04647A</div>
                </LeftSwatch>
              </LeftStack>
              <RightStack>
                <RightSwatch style={{ background: "#FFF" }} isWhite>
                  <div>White</div>
                  <div>#FFF</div>
                </RightSwatch>
                <RightSwatch style={{ background: "#5D5D63" }}>
                  <div>Grey</div>
                  <div>#5D5D63</div>
                </RightSwatch>
              </RightStack>
            </ColorSwatches>
            <NewLogoContainer>
              <NewLogoText>New Logo & Icon</NewLogoText>
              <NewLogoImage src="/Frame.png" alt="New Logo & Icon" />
              <NewIconImage src="/frame-icon.png" alt="New Icon" />
            </NewLogoContainer>
          </SolutionContainer>
        </DesignSolutionSection>

        {/* Branding Touchpoints Section */}
        <BrandingTouchpointsSection>
          <LargeImage src="/branding-touchpoints.png" alt="Branding Touchpoints" />
          <SmallTitle>Branding Touchpoints</SmallTitle>
        </BrandingTouchpointsSection>

        {/* Social Media Section */}
        <SocialMediaSection>
          <SocialMediaGrid>
            <SocialMediaItem>
              <SocialMediaImage src="/offer1.png" alt="Social Media 1" />
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaImage src="/offer2.png" alt="Social Media 2" />
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaImage src="/offer3.png" alt="Social Media 3" />
            </SocialMediaItem>
          </SocialMediaGrid>
          <SmallTitle>Social Media</SmallTitle>
        </SocialMediaSection>
      </Container>
    </>
  );
};

export default IMaxOptics;

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
  width: 370px;
  position: absolute;
  top: -22%;
  right: 0;
  height: 370px;
  border-radius: 15px;
`;

const LogoExploration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 820px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

// Styled Components for DesignSolution
const DesignSolutionSection = styled.div`
  display: flex;
  justify-content: center;
  min-height: 410px;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #F0F4F8;
  width: 100%;
  margin: 3rem auto 0 auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const SectionTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #092A5B;
  margin-bottom: 2rem;
`;

const MockupImage = styled.img`
  width: 650px;
  margin-bottom: 2rem;
  // border-radius: 10px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SolutionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  align-items: center;
  gap: 0; /* No gap between stacks */

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ColorSwatches = styled.div`
  display: flex;
  width: 100%;
  max-width: 820px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0; /* No gap between swatches in the stack */
`;

const RightStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0; /* No gap between swatches in the stack */
`;

const ColorSwatch = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isWhite ? "#092A5B" : "#fff")};
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

const LeftSwatch = styled(ColorSwatch)`
  width: 280px;
`;

const RightSwatch = styled(ColorSwatch)`
  width: 175px;
`;

const NewLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NewLogoText = styled.p`
  font-size: 1rem;
  color: #092A5B;
  font-family: Lato;
  font-weight: 400;
`;

const NewLogoImage = styled.img`
  max-width: 296px;
`;

const NewIconImage = styled.img`
  max-width: 106px;
`;

// New Styled Components for Branding Touchpoints and Social Media
const BrandingTouchpointsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const LargeImage = styled.img`
  width: 100%;
  max-width: 1060px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SocialMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 2rem;
  max-width: 1060px;;
  margin: 0 auto 3rem auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const SocialMediaGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialMediaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const SocialMediaImage = styled.img`
  width: 100%;
  max-width: 330px;
  max-height: 330px;
  // border-radius: 10px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;


const SmallTitle = styled.p`
font-family: Lato;
margin-top: 1rem;
color:#5D5D63;
font-weight: 400;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
`;
