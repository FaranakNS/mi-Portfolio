// 'use client';

// import { ReactNode, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from '../styles/GlobalStyles';
// import theme from '../styles/theme';

// import CaseStudies from '../component/CaseStudies';
// import HeroSection from '../component/HeroSection';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import TWO from '../component/TWOProject';

//   // Ensure this import

// export default function RootLayout({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.querySelector('.hero-section');
//       const caseStudies = document.querySelector('.case-studies');

//       if (window.scrollY > window.innerHeight / 2) {
//         heroSection?.classList.add('hidden');
//         caseStudies?.classList.add('visible');
//       } else {
//         heroSection?.classList.remove('hidden');
//         caseStudies?.classList.remove('visible');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider theme={theme}>
//           <GlobalStyle />
//           <Header />
         
//         <section id="home"/>
//           <HeroSection />

//           <section id="CaseStudies"/>
//           <CaseStudies />
          
//           <section id="Footer"/>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';

import Header from '../component/Header';
import Footer from '../component/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      const caseStudies = document.querySelector('.case-studies');

      if (window.scrollY > window.innerHeight / 2) {
        heroSection?.classList.add('hidden');
        caseStudies?.classList.add('visible');
      } else {
        heroSection?.classList.remove('hidden');
        caseStudies?.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

