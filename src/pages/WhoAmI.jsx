import styled from "styled-components";
import Navbar from "../components/Navbar";
import Button from '../components/Button.jsx';
import { ScrollToTopButton } from "./ActivityPage.jsx";
import { IoIosArrowUp } from "react-icons/io";

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  padding-bottom: 5rem;
`;

const ProfileSection = styled.div`
  display: flex;
  padding: 150px 0 270px 0;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  background: #F6F5F8;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem; /* Reduced gap on mobile for better spacing */
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const Divider = styled.div`
  width: 4px; 
  height: 200px;
  background-color:  #FFDA7E;
  margin: 0; 

  @media (max-width: 768px) {
    width: 50px; 
    height: 4px; 
    margin: 8px 0; 
  }
`;

const AboutText = styled.div`
  width: 339px;
  height: 250px;
  max-width: 339px;
  padding: 12px;
  color: #525252;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const Text = styled.div`
  font-size: 16px;
  color: #555;

  & p {
    margin: 0 0 16px 0; /* Adds a one-line gap between paragraphs */
  }

  & p:last-child {
    margin-bottom: 0; /* Removes margin from the last paragraph to avoid extra space */
  }
`;

const Heading = styled.h2`
  color: #092A5B;
  text-align: right;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  width: 52px;
  line-height: normal;
  margin: 0; /* Reset margin for better positioning */

  @media (max-width: 768px) {
    margin: 0 0 8px 0; /* Add some spacing below on mobile */
  }
`;

const HeadingDown = styled.h2`
  color: #092A5B;
  width: 260px;
  height: 28px;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 auto; /* Ensure centering with margin */

  @media (max-width: 768px) {
    margin: 0 auto 8px; /* Ensure centering and add spacing below on mobile */
  }
`;
const CardsContainerHeading = styled.h2`
  color: #092A5B;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 28px;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 4rem auto; /* Ensure centering with margin */

  @media (max-width: 768px) {
    top: -12%;
    margin: 0 auto; /* Ensure centering and add spacing below on mobile */
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 80%;
  justify-content: center;
  margin: -190px auto 4rem auto; // This overlaps half of the 380px card height
  z-index: 2;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center; /* Center cards horizontally in column layout */
  }
`;

const Card = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 310px;
  height: 380px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    flex: none; /* Prevent stretching on mobile */
    width: 310px; /* Maintain fixed width for consistency */
  }
`;

const CardImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px; /* Slightly increased to give padding around the image */
  height: 82px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &::before {
    content: "";
    width: 80px;
    height: 80px;
    background-color: #FFDA7E;
    border-radius: 50%;
    position: absolute;
    top: -20px;
    right: -40px;
    z-index: 0;
  }

  & img {
    width: 100px;
    height: 100px;
    position: relative;
    z-index: 1;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: #092A5B;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 10px 0;
  font-family: 'Ubuntu', sans-serif;
`;

const CardText = styled.p`
  color: #525252;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2rem;
`;

const CatchUpSection = styled.div`
  text-align: center;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensure all children are centered */
  }
`;

const Box = styled.div`
  text-align: center;
  width: 100%;
  background: #fff;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensure all children are centered */
  }
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 50px;
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 1.5rem auto;
  gap: 8px;
  font-family: ubuntu, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #4A4A4A;
`;

const PhoneIcon = styled.img`
  width: 20px;
  height: 20px;
`;


const WhoAmI = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <Container>
        {/* Profile Section */}
        <ProfileSection>
          <ProfileImage src="/profile.png" alt="Profile" />
          <Heading>Who Am I</Heading>
          <Divider />
          <AboutText>
            <Text>
              <p>I’m a multidisciplinary designer, thinker and a passionate problem solver. I believe in meticulous strategy & its well-planned execution.</p>
              <p>I prefer working on UX design and brand identity design projects, with a huge interest in human behaviour and psychology.</p>
              <p>I also started creating short-form learning content for my current employer, becoming their 1st learning influencer.</p>
            </Text>
          </AboutText>
        </ProfileSection>

        {/* Cards */}
        <Box>
        <CardsContainerHeading>What I Do</CardsContainerHeading>
        <CardsContainer>
          <Card>
            <CardImage>
              <img src="/whoAmI-ux.png" alt="UX Design" />
            </CardImage>
            <CardTitle>UX Design</CardTitle>
            <CardText>
              I deliver end to end design solutions whether we are talking about apps that help users and businesses alike, or websites that stand out in crowd.
            </CardText>
            <Button>View Project</Button>
          </Card>

          <Card>
            <CardImage>
              <img src="/whoAmI-brand.png" alt="Brand Design" />
            </CardImage>
            <CardTitle>Brand Identity</CardTitle>
            <CardText>
              I am extremely passionate about building brands that create a solid statement right off the bat. Brand identity design has always been my first love.
            </CardText>
            <Button>View Project</Button>
          </Card>

          <Card>
            <CardImage>
              <img src="/whoAmI-guitar.png" alt="Music" />
            </CardImage>
            <CardTitle>Music!</CardTitle>
            <CardText>
              Yes, you read it right! Apart from being a designer, I also have a band called BayBaak, where I play guitar. We perform at events, fests, bars and clubs.
            </CardText>
            <Button>Let's Jam!</Button>
          </Card>
        </CardsContainer>

        {/* Let's Catch Up Section */}
        <CatchUpSection>
          <HeadingDown>Let's Catch Up!</HeadingDown>
          <ContactIcons>
            <Icon src="/icon-linkedIn.png" />
            <Icon src="/icon-gmail.png" />
            <Icon src="/icon-insta.png" />
          </ContactIcons>
          <PhoneContainer>
            <PhoneIcon src="/icon-call.svg" alt="Phone Icon" />
            <span>+91 9145 491042</span>
          </PhoneContainer>
          <Button>View Resume</Button>
        </CatchUpSection>
        </Box>

        <ScrollToTopButton onClick={scrollToTop}>
            <IoIosArrowUp />
        </ScrollToTopButton>
      </Container>
    </>
  );
};

export default WhoAmI;