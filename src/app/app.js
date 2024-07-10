// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import GlobalStyle from "./GlobalStyles";
// import theme from "./theme";
// import HeroSection from "./components/HeroSection";
// import CaseStudies from "./components/CaseStudies";
// import ContactForm from "./components/ContactForm";
// import Header from "./components/Header";

// function App() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.querySelector(".hero-section");
//       const caseStudies = document.querySelector(".case-studies");

//       if (window.scrollY > window.innerHeight / 2) {
//         heroSection?.classList.add("hidden");
//         caseStudies?.classList.add("visible");
//       } else {
//         heroSection?.classList.remove("hidden");
//         caseStudies?.classList.remove("visible");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <CaseStudies />
//               </>
//             }
//           />
//           <Route path="/ContactForm" element={<ContactForm />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
// pages/_app.js
"use client";

import HeroSection from "../components/HeroSection";
import CaseStudies from "../components/CaseStudies";
import TwoProjectPage from "./two-project/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CaseStudies />
      <TwoProjectPage />
    </div>
  );
}
