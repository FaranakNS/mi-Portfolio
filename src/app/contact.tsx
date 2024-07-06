// pages/contact.js
import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import theme from "../styles/theme";
import ContactForm from "../component/ContactForm";
import Header from "../component/header";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContactForm />
    </ThemeProvider>
  );
}
