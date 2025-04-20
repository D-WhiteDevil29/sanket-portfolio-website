import { useEffect, useState } from "react";
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
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
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
  border-bottom: none;
  padding-bottom: 5px;
  color: black;

  &:hover {
    color: #1e3a8a;
  }

  &.active {
    color: #1e3a8a !important;
    font-weight: bold !important;
    border-bottom: 2px solid #1e3a8a !important;
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
  top: 60px;
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

  useEffect(() => {
    const workActiveStatus = location.pathname.startsWith("/work");
    setIsWorkActive(workActiveStatus);
  }, [location.pathname]);

  const whiteBackgroundRoutes = ["/who-am-i"];
  const whiteBackground = whiteBackgroundRoutes.includes(location.pathname);

  return (
    <Nav whiteBackground={whiteBackground}>
      <NavContainer>
        <Logo src="/profile.png" alt="Avatar" />
        <NavLinks>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/who-am-i">Who Am I</StyledNavLink>
          <WorkLinkWrapper>
            <StyledNavLink
              to="/work"
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
