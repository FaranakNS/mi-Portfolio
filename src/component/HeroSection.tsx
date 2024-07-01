// 'use client';

// import { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const HeroContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 50px;
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: #fef3ef; /* Match the background color */
// `;

// const TextSection = styled.div`
//   max-width: 50%;
// `;

// const Title = styled.h1`
//   font-size: 3em;
//   color: white;
//   background-color: ${({ theme }) => theme.colors.primary};
//   padding: 10px;
//   display: inline-block;
// `;

// const Subtitle = styled.p`
//   font-size: 1.2em;
//   margin: 20px 0;
// `;

// const CTAButton = styled.button`
//   padding: 10px 20px;
//   font-size: 1em;
//   color: white;
//   background-color: ${({ theme }) => theme.colors.secondary};
//   border: none;
//   border-radius: 25px;
//   cursor: pointer;
// `;

// const ImageSection = styled.div`
//   img {
//     border-radius: 20px;
//     max-width: 100%;
//     height: auto;
//   }
// `;

// const HeroSection = () => {
//   const [text, setText] = useState('');
//   const fullText = "Hey, I'm Faranak.";

//  useEffect(() => {
//   let currentIndex = 0;
//   let typingInterval = setInterval(() => {
//     if (currentIndex < fullText.length) {
//       setText(prev => prev + fullText[currentIndex]);
//       currentIndex++;
//     }

//     // Check if the end of the string has been reached
//     if (currentIndex >= fullText.length) {
//       clearInterval(typingInterval); // Stop adding text

//       // Clear the text after a delay and restart typing
//       setTimeout(() => {
//         setText(''); // Clear the text
//         currentIndex = 0; // Reset index
//         // Restart the interval
//         typingInterval = setInterval(() => {
//           if (currentIndex < fullText.length) {
//             setText(prev => prev + fullText[currentIndex]);
//             currentIndex++;
//           }
//           if (currentIndex >= fullText.length) {
//             clearInterval(typingInterval); // Ensure the interval is cleared at the end
//           }
//         }, 100);
//       }, 2000);
//     }
//   }, 100);

//   // Cleanup function to clear interval if the component unmounts
//   return () => {
//     clearInterval(typingInterval);
//   };
// }, []);

//   return (
//     <HeroContainer>
//       <TextSection>
//         <Title>{text}</Title>
//         <Subtitle>
//           I help small businesses and entrepreneurs build meaningful digital experiences.
//         </Subtitle>
//         <CTAButton>Work with Me</CTAButton>
//       </TextSection>
//       <ImageSection>
//         <img src="/farah-pic.jpg" alt="Faranak" />
//       </ImageSection>
//     </HeroContainer>
//   );
// };
'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fef3ef; /* Match the background color */
`;

const TextSection = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  display: inline-block;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const ImageSection = styled.div`
  img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
  }
`;

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "HHeey, I'm Faranak.";

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const typeText = () => {
      if (currentIndex < fullText.length-1) {
        setText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText('');
          currentIndex = 0;
          typingInterval = setInterval(typeText, 100);
        }, 2000); // Wait for 2 seconds before restarting
      }
    };

    typingInterval = setInterval(typeText, 100);

    // Cleanup function to clear interval if the component unmounts
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <HeroContainer>
      <TextSection>
        <Title>{text}</Title>
        <Subtitle>
          I help small businesses and entrepreneurs build meaningful digital experiences.
        </Subtitle>
        <CTAButton>Work with Me</CTAButton>
      </TextSection>
      <ImageSection>
        <img src="/farah-pic.jpg" alt="Faranak" />
      </ImageSection>
    </HeroContainer>
  );
};

export default HeroSection;
