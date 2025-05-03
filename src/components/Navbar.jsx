import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// Styled Components
const Nav = styled.nav`
  background: ${(props) => (props.whiteBackground ? "#FFFFFF" : "#F6F5F8")};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 66px; /* Set navbar height to 66px */
`;

const NavContainer = styled.div`
  margin: auto;
  padding: 13px 2rem; /* Adjusted padding to fit within 66px height */
  display: flex;
  gap: 1.5rem;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  height: 40px; /* Reduced height to fit within 66px navbar */
  border-radius: 50%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: normal;
  padding-bottom: 5px;
  color: black;
  display: inline-flex;
  align-items: center;
  height: 100%;

  &:hover {
    color: #1e3a8a;
  }

  &.active {
    color: #1e3a8a !important;
    font-weight: bold !important;
  }
`;

const Highlighter = styled.div`
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 20px;
  background-color: #1e3a8a;
  clip-path: polygon(
    10% 0,
    90% 0,
    100% 100%,
    0 100%
  );
  transition: left 0.3s ease, transform 0.3s ease;
   @media (max-width: 768px) {
    display: none;
  }
`;

const WorkLinkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .dropdown {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 300px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e6f0fa;
    color: #1e3a8a;
  }

  &.active {
    color: #1e3a8a;
    font-weight: bold;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
  position: absolute;
  width: 100%;
  left: 0;
  top: 66px; /* Adjusted to match new navbar height */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileWorkButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#1E3A8A" : "black")};
  background: none;
  border: none;
  text-align: left;
  padding: 0;
`;

const MobileSubMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1.5rem;
`;

const MobileSubLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: black;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #1e3a8a;
  }

  &.active {
    color: #1e3a8a;
    font-weight: bold;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWorkActive, setIsWorkActive] = useState(false);
  const [workSubMenuOpen, setWorkSubMenuOpen] = useState(false);
  const location = useLocation();

  const homeRef = useRef(null);
  const whoAmIRef = useRef(null);
  const workRef = useRef(null);
  const highlighterRef = useRef(null);

  const [highlighterStyle, setHighlighterStyle] = useState({
    left: 0,
    transform: "translateX(-50%)",
    opacity: 0,
  });

  useEffect(() => {
    const workActiveStatus = location.pathname.startsWith("/work");
    setIsWorkActive(workActiveStatus);

    let activeRef;
    if (location.pathname === "/") {
      activeRef = homeRef;
    } else if (location.pathname === "/who-am-i") {
      activeRef = whoAmIRef;
    } else if (workActiveStatus) {
      activeRef = workRef;
    }

    if (activeRef && activeRef.current && highlighterRef.current) {
      const linkRect = activeRef.current.getBoundingClientRect();
      const navRect = activeRef.current.closest("nav").getBoundingClientRect();
      const leftPosition = (linkRect.left - navRect.left) + (linkRect.width / 2);

      setHighlighterStyle({
        left: `${leftPosition}px`,
        transform: "translateX(-50%)",
        opacity: 1,
      });
    } else {
      setHighlighterStyle({ ...highlighterStyle, opacity: 0 });
    }
  }, [location.pathname]);

  const whiteBackgroundRoutes = ["/who-am-i"];
  const whiteBackground = whiteBackgroundRoutes.includes(location.pathname);

  return (
    <Nav whiteBackground={whiteBackground}>
      <NavContainer>
        <Logo src="/bg-logo.png" alt="Avatar" />
        <NavLinks>
          <StyledNavLink to="/" end ref={homeRef}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/who-am-i" ref={whoAmIRef}>
            Who Am I
          </StyledNavLink>
          <WorkLinkWrapper>
            <StyledNavLink
              to="/work"
              ref={workRef}
              className={({ isActive }) =>
                isActive || isWorkActive ? "active" : ""
              }
            >
              Work
            </StyledNavLink>
            <Dropdown className="dropdown">
              <DropdownLink to="/work/gigsterr">Gigsterr</DropdownLink>
              <DropdownLink to="/work/google-maps-alarm-system">
                Google Maps Alarm System
              </DropdownLink>
              <DropdownLink to="/work/i-max-optics">I Max Optics</DropdownLink>
              <DropdownLink to="/work/vector-characters-design">
                Vector Characters Design
              </DropdownLink>
              <DropdownLink to="/work/my-activities">
                My Activities
              </DropdownLink>
            </Dropdown>
          </WorkLinkWrapper>
        </NavLinks>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </MobileMenuButton>
        <Highlighter ref={highlighterRef} style={highlighterStyle} />
      </NavContainer>
      <MobileMenu open={menuOpen}>
        <StyledNavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/who-am-i" onClick={() => setMenuOpen(false)}>
          Who Am I
        </StyledNavLink>
        <MobileWorkButton
          active={isWorkActive}
          onClick={() => setWorkSubMenuOpen(!workSubMenuOpen)}
        >
          Work
        </MobileWorkButton>
        <MobileSubMenu open={workSubMenuOpen}>
          <MobileSubLink to="/work/gigsterr" onClick={() => setMenuOpen(false)}>
            Gigsterr Project
          </MobileSubLink>
          <MobileSubLink
            to="/work/google-maps-alarm"
            onClick={() => setMenuOpen(false)}
          >
            Google Maps Alarm System
          </MobileSubLink>
          <MobileSubLink
            to="/work/i-max-optics"
            onClick={() => setMenuOpen(false)}
          >
            I Max Optics
          </MobileSubLink>
          <MobileSubLink
            to="/work/vector-characters-design"
            onClick={() => setMenuOpen(false)}
          >
            Vector Characters Design
          </MobileSubLink>
          <MobileSubLink
            to="/work/my-activities"
            onClick={() => setMenuOpen(false)}
          >
            My Activities
          </MobileSubLink>
        </MobileSubMenu>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;