import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px;
  width: 90rem;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <Logo>Logo</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#CaseStudies">Services</NavLink>
        <NavLink href="#Footer">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
