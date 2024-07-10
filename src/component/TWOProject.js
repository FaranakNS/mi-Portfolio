"use client";

import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  font-family: "Arial, sans-serif";
  color: #333;
  padding: 20px;
`;

const Header = styled.div`
  background-color: #f9ede9;
  padding: 50px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.125em;
  margin: 20px 0;
  line-height: 1.5;
  color: #333;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const InfoItem = styled.div`
  font-size: 1em;
  text-align: left;
`;

const InfoTitle = styled.strong`
  display: block;
  font-size: 1em;
  margin-bottom: 5px;
`;

const ImageSection = styled.div`
  margin-top: 40px;
`;

const MainImageContainer = styled.div`
  background-color: #ef7e61;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubImageSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubImageContainer = styled.div`
  flex: 1;
  background-color: #ef7e61;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const VideoStyled = styled.video`
  max-width: 100%;
  border-radius: 10px;
`;

const TestimonialSection = styled.div`
  background-color: #000080; /* Navy background color */
  color: #fff;
  padding: 50px;
  border-radius: 20px;
  margin-top: 40px;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin: 0;
`;

const Author = styled.p`
  margin-top: 20px;
  font-size: 1em;
  font-style: italic;
`;

const TWOProject = () => {
  return (
    <ProjectContainer>
      <Header>
        <Title>Collette Noll Interior Design</Title>
        <Description>
          Concept and creation of interior designer Collette Nolls website, with
          focus on her variety of client-forward services and recent successful
          collaborations.
        </Description>
        <InfoSection>
          <InfoItem>
            <InfoTitle>Client</InfoTitle>
            Collette Noll
          </InfoItem>
          <InfoItem>
            <InfoTitle>Year</InfoTitle>
            2024
          </InfoItem>
        </InfoSection>
      </Header>
      <ImageSection>
        <MainImageContainer>
          <Image src="/path-to-your-main-image.jpg" alt="Main Image" />
        </MainImageContainer>
        <SubImageSection>
          <SubImageContainer>
            <Image
              src="/path-to-your-first-sub-image.jpg"
              alt="First Sub Image"
            />
          </SubImageContainer>
          <SubImageContainer>
            <VideoStyled controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </VideoStyled>
          </SubImageContainer>
        </SubImageSection>
      </ImageSection>
      <TestimonialSection>
        <TestimonialText>
          Adri is so patient and thoughtful. She helped me highlight my work in
          a way that makes me so proud of my unique approach to design.
        </TestimonialText>
        <Author>— Collette Noll</Author>
      </TestimonialSection>
    </ProjectContainer>
  );
};

export default TWOProject;
