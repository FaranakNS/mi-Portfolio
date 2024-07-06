import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   
  }

  body {
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
  }

  .hidden {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  .visible {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }

  .hero-section {
    height: 100vh;
  }

  .case-studies {
    opacity: 0;
    transition: opacity 0.5s ease-out;
    min-height: 100vh; /* Ensure it takes up full viewport height */
  }

  .case-studies.visible {
    opacity: 1;
  }

  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: transparent;
    color: white;
    transition: background 0.5s ease;
    z-index: 1000;
  }

  header.scrolled {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default GlobalStyle;
