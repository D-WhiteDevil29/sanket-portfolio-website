import { useState } from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import gigsterrLogo from "/home-gigsterr.png";
import googleMapsLogo from "/home-gmap.png";
import imaxLogo from "/home-imax.jpg";
import vectorCharacters from "/home-vector-project.jpg";
import { IoIosArrowUp } from "react-icons/io";
import { ScrollToTopButton } from "./ActivityPage";


const Container = styled.div`
  background-color: transparent;
  color: #333;
  min-height: 100vh;
  padding: 0px 16px;
  max-width: 900px;
  margin: 0 auto;
  position: relative; /* Ensure positioning context for ProjectsContainer */

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
  width: 100vw; /* Full screen width */
  height: 100vh; /* Full screen height */
  position: relative;
  background: #F6F5F8;
  margin-left: calc(-50vw + 50%); /* Adjust for Container's max-width */
  margin-right: calc(-50vw + 50%); /* Adjust for Container's max-width */
  margin-bottom: 0; /* Remove margin-bottom to allow overlap */
  padding: 0; /* Remove any padding to eliminate upper space */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
    justify-content: center; /* Center vertically on mobile */
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding: 0; /* Remove padding on mobile */
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; /* Center text inside TitleContainer */
  margin-bottom: 0; /* Remove margin-bottom to avoid extra spacing */
  width: 50%; /* Take half the width for centering content */
  justify-content: center; /* Center content vertically within TitleContainer */
  align-items: center; /* Center content horizontally within TitleContainer */
  height: 100%; /* Full height of the Header */

  @media (max-width: 768px) {
    margin-bottom: 0; /* Remove margin-bottom on mobile */
    width: 100%; /* Full width on mobile */
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #092A5B;
  letter-spacing: 10px;
  text-transform: normal;
  text-shadow: 
    10px 6px 14px rgba(31, 32, 48, 0.15), /* First shadow */
    -10px -10px 16px rgba(255, 255, 255, 1); /* Second shadow */
  margin-bottom: 3rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 64px;
    letter-spacing: 4px;
  }
`;
const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #092A5B;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4B5563;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center; /* Center links horizontally */

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
`;

const LinkItem = styled.a`
  width: 120px;
  height: 32px;
  color: #092A5B;
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 4px 8px;
  border: 2px solid #092A5B;
  border-radius: 22px;
  box-shadow: 6px 6px 14px 0px rgba(82, 82, 82, 0.10);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  cursor: pointer;

  &:hover {
    box-shadow: 6px 6px 14px 0px rgba(82, 82, 82, 0.20);
    scale: 1.05;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

const LinkItemActive = styled.a`
  width: 120px;
  height: 32px;
  color: #FFF;
  background-color: #092A5B;
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 22px;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    transition: right 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: #092A5B;
    border: 2px solid #092A5B;
    cursor: pointer;
  }

  &:hover::before {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;


/* Navigation Bar */
const NavContainer = styled.div`
  margin-left: 100px; /* Wider space between TitleContainer and NavContainer */
  height: 50vh; /* Half the screen height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center links vertically */
  align-items: center; /* Align links to the right */
  flex: 1; /* Allow NavContainer to take remaining space */
  max-width: 50%; /* Limit to half the width to balance with TitleContainer */

  @media (max-width: 768px) {
    position: absolute;
    width: 180px;
    height: 300px;
    top: 0; /* Align to the top */
    right: 20px;
    margin-left: 0; /* Remove margin on mobile */
    max-width: none; /* Remove width constraint on mobile */
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; /* Wide spacing between links */
  align-items: start; /* Align navigation links to the right */
  justify-content: center; /* Center links vertically within the 50vh height */

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    right: 0;
    top: 40px;
    background: white;
    padding: 12px 24px;
    border-radius: 6px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    gap: 12px; /* Smaller gap on mobile */
    height: auto; /* Remove height constraint on mobile */
    justify-content: flex-start; /* Stack links normally on mobile */
  }
`;

/* Styled Link for React Router */
const StyledLink = styled(Link)`
  font-size: 21px;
  color: ${(props) => (props.active ? '#092A5B' : '#525252')};
  font-weight: 400;
  font-family: lato, sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  min-height: 30px; /* Ensure a minimum height for the pseudo-element to work with */

  &::before {
    content: "";
    width: ${(props) => (props.active ? "5px" : "0")};
    height: 100%;
    background-color: #092A5B;
    position: absolute;
    left: -12px;
    /* Clip-path for trapezoid shape: taller left, shorter right */
    clip-path: polygon(
      0 0,              /* Top-left */
      100% 10%,         /* Top-right (shortened) */
      100% 90%,         /* Bottom-right (shortened) */
      0 100%            /* Bottom-left */
    );
    transition: width 0.3s ease, clip-path 0.3s ease;
  }

  // &:hover::before {
  //   width: 8px;
  //   /* Adjust clip-path for wider bar, maintaining the taper */
  //   clip-path: polygon(
  //     0 0,
  //     100% 5%,          /* Tighter taper on hover */
  //     100% 95%,         /* Tighter taper on hover */
  //     0 100%
  //   );
  // }
`;

/* Hamburger Menu */
const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 6px;
    right: -8px;
  }

  div {
    width: 35px;
    height: 3px;
    background-color: #092A5B;
    margin: 5px 0;
    transition: 0.4s;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  top: -150px; /* Overlap the header by 100px from the bottom */
  z-index: 1; /* Ensure it appears above the header */

  @media (max-width: 768px) {
    top: -50px; /* Reduce overlap on mobile */
  }
`;

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const projects = [
    {
      title: "Gigsterr App",
      description:
        "Designing a platform for event managers to easily book musicians for events.",
      tags: ["UX Design", "Visual Design", "Brand Identity"],
      image: gigsterrLogo,
      imageBg: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      link: "/work/gigsterr"
    },
    {
      title: "Google Maps Alarm System",
      description:
        "A feature design that'd ensure a safer and reliable user experience for Google Maps.",
      tags: ["UX Design", "Visual Design"],
      image: googleMapsLogo,
      imageBg: "#000000",
      link: "/work/google-maps-alarm-system"
    },
    {
      title: "I-Max Optics",
      description: "Redesigning brand identity for a Pune-based eyewear store.",
      tags: ["Brand Identity", "Promotion"],
      image: imaxLogo,
      imageBg: "#14b8a6",
      link: "/work/i-max-optics"
    },
    {
      title: "Vector Character Design",
      description:
        "A series of vector illustrations I created as a part of my personal work.",
      tags: ["Creative Visualization", "Illustration"],
      image: vectorCharacters,
      imageBg: "#f59e0b",
      link: "/work/vector-characters-design"
    },
  ];

  // Array of Nav Links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who Am I", path: "/who-am-i" },
    { name: "Work", path: "/work/gigsterr" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <Header>
          <TitleContainer>
            <Title>Portfolio</Title>
            <div style={{ textAlign: "start"}}>
            <Subtitle>Sanket Choukate</Subtitle>
            <Description>Designer | Thinker | Problem Solver</Description>
            </div>
            <Links>
              <LinkItemActive href="/work/gigsterr">My Work</LinkItemActive>
              <LinkItem href="/contact">Get In Touch</LinkItem>
            </Links>
          </TitleContainer>

          {/* Navigation with Hamburger Menu */}
          <NavContainer>
            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
              <div></div>
              <div></div>
              <div></div>
            </Hamburger>
            <NavLinks open={menuOpen}>
              {navItems.map(({ name, path }) => (
                <StyledLink
                  key={name}
                  to={path}
                  active={activeLink == name ? 1 : 0}
                  onClick={() => {
                    setActiveLink(name);
                    setMenuOpen(false);
                  }}
                >
                  {name}
                </StyledLink>
              ))}
            </NavLinks>
          </NavContainer>
        </Header>

        {/* Projects Section */}
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsContainer>

        <ScrollToTopButton onClick={scrollToTop}>
            <IoIosArrowUp />
        </ScrollToTopButton>
      </Container>
    </>
  );
};

export default Home;