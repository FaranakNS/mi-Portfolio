import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  text-align: center;
  padding: 50px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  div {
    flex: 1;
    padding: 20px;
  }
`;

const FooterIcon = styled.a`
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  animation: ${bounce} 2s infinite;
  color: white;
  text-decoration: none;

  svg {
    width: 40px;
    height: 40px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1em;
`;

const ContactInfo = styled.div`
  text-align: left;
  p {
    margin: 5px 0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <ContactInfo>
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </ContactInfo>
        </div>

        <div>
          <FooterIcon
            href="https://www.linkedin.com/in/faranak-nasoori"
            target="_blank"
          >
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20.5h-2.75v-11h2.75v11zm-1.375-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.375 12.25h-2.75v-5.5c0-1.28-.022-2.925-1.784-2.925-1.786 0-2.062 1.396-2.062 2.834v5.591h-2.75v-11h2.625v1.5h.036c.366-.692 1.258-1.416 2.592-1.416 2.769 0 3.281 1.822 3.281 4.187v6.729z" />
            </svg>
          </FooterIcon>
          <FooterText>Follow us on LinkedIn</FooterText>
        </div>

        <div>
          <FooterIcon href="/FaranakNasoori-Resume.pdf" download>
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16h-4v-4h-2v4H8v-6h8v6zm-3-7V3.5L18.5 10H13z" />
            </svg>
          </FooterIcon>
          <FooterText>Download My Resume</FooterText>
        </div>

        <div>
          <FooterIcon href="https://www.canadalearningcode.ca/">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </FooterIcon>
          <FooterText>
            Community Volunteer
            <br />
            Helping people find their way in the tech industry
          </FooterText>
        </div>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
// // Footer component
// const Footer = () => {
//     return (
//       <FooterContainer>
//         <FooterContent>
//           <div>
//             <FooterIcon href="https://www.linkedin.com/in/faranak-nasoori" target="_blank">
//               <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20.5h-2.75v-11h2.75v11zm-1.375-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.375 12.25h-2.75v-5.5c0-1.28-.022-2.925-1.784-2.925-1.786 0-2.062 1.396-2.062 2.834v5.591h-2.75v-11h2.625v1.5h.036c.366-.692 1.258-1.416 2.592-1.416 2.769 0 3.281 1.822 3.281 4.187v6.729z"/>
//               </svg>
//             </FooterIcon>
//             <FooterText>Over 3 Websites Made<br />For 3 happy clients</FooterText>
//           </div>

//           <div>
//             <FooterIcon href="/FaranakNasoori-Resume.pdf" download>
//               <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16h-4v-4h-2v4H8v-6h8v6zm-3-7V3.5L18.5 10H13z"/>
//               </svg>
//             </FooterIcon>
//             <FooterText>1+ Years of software development Experience<br />Across web, mobile, and teaching software</FooterText>
//           </div>

//           <div>
//             <FooterIcon href="https://www.canadalearningcode.ca/">
//               <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//               </svg>
//             </FooterIcon>
//             <FooterText>Community Volunteer<br />Helping people find their way in the tech industry</FooterText>
//           </div>
//         </FooterContent>
//       </FooterContainer>
//     );
//   };
