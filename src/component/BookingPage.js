import React from "react";
import styled from "styled-components";
import Link from "next/link";

const BookingContainer = styled.div`
  background-color: #f9ede9;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BookingCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StepNumber = styled.div`
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const StepTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const AppointmentOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const OptionDetails = styled.div`
  flex-grow: 1;
`;

const OptionTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const OptionDuration = styled.p`
  margin: 5px 0 0 0;
  color: #666;
`;

const BookButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const LoginLink = styled.a`
  color: black;
  text-decoration: none;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const BookingPage = () => {
  return (
    <BookingContainer>
      <BookingCard>
        <LoginLink href="#">Log in</LoginLink>
        <Section>
          <SectionHeader>
            <StepNumber>1</StepNumber>
            <StepTitle>Choose Appointment</StepTitle>
          </SectionHeader>
          <AppointmentOption>
            <OptionDetails>
              <OptionTitle>Strategies, Solutions, and Support</OptionTitle>
              <OptionDuration>1 hour</OptionDuration>
            </OptionDetails>
            <BookButton>Book</BookButton>
          </AppointmentOption>
          <AppointmentOption>
            <OptionDetails>
              <OptionTitle>Site Critique</OptionTitle>
              <OptionDuration>30 minutes</OptionDuration>
            </OptionDetails>
            <BookButton>Book</BookButton>
          </AppointmentOption>
          <AppointmentOption>
            <OptionDetails>
              <OptionTitle>1:1 Consultation (Free)</OptionTitle>
              <OptionDuration>30 minutes</OptionDuration>
            </OptionDetails>
            <BookButton>Book</BookButton>
          </AppointmentOption>
        </Section>
        <Section>
          <SectionHeader>
            <StepNumber>2</StepNumber>
            <StepTitle>Your Information</StepTitle>
          </SectionHeader>
          {/* Add form inputs for user information here */}
        </Section>
        <Section>
          <SectionHeader>
            <StepNumber>3</StepNumber>
            <StepTitle>Confirmation</StepTitle>
          </SectionHeader>
          {/* Add confirmation details here */}
        </Section>
      </BookingCard>
    </BookingContainer>
  );
};

export default BookingPage;
