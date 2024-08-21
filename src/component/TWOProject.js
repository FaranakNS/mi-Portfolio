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
        <Title>The World's Opinion (TWO) Project</Title>
        <Description>
          Developed a unique social media platform that allows users to create
          polls, cast votes, and engage in discussions on various topics. Our
          goal was to create an intuitive and engaging user experience,
          fostering community interaction and decision-making.
        </Description>
        <div>
          <h2>Technical Focus</h2>
          Designed and implemented a robust backend infrastructure to support
          real-time voting and discussions, with a strong focus on
          authentication and user sign-up to ensure that each user has their own
          account. Leveraged modern frameworks to create a responsive and
          user-friendly interface, providing seamless interactions across all
          devices.
        </div>
        <div>
          <h2>Challenges</h2>
          Tackled challenges related to data synchronization, scaling the
          platform for a growing user base, and maintaining high performance
          during peak usage.
        </div>

        <InfoSection>
          <InfoItem>
            <InfoTitle>Client</InfoTitle>
            The Vice President of United Way of Alberta Capital Region
          </InfoItem>
          <InfoItem>
            <InfoTitle>Github</InfoTitle>
            <a href="https://github.com/FaranakNS/TWO">
              <img
                src="/githubicon.jpg"
                alt="Project Screenshot"
                style={{
                  width: "45px",
                  height: "45px",
                  display: "inline-block",
                }}
              />
            </a>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Year</InfoTitle>
            2023
          </InfoItem>
        </InfoSection>
      </Header>

      <ImageSection>
        <MainImageContainer>
          <Image src="/TWOPROJ.png" alt="Main Image" />
        </MainImageContainer>
        <SubImageSection>
          <SubImageContainer>
            <Image src="/TWO2PROJ.jpg" alt="First Sub Image" />
          </SubImageContainer>
          <SubImageContainer>
            <VideoStyled controls>
              <source src="/TWO.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </VideoStyled>
          </SubImageContainer>
        </SubImageSection>
      </ImageSection>
      <TestimonialSection>
        <TestimonialText>
          The platform has had a significant impact on the people of Alberta by
          providing a space where individuals can freely share their opinions on
          a wide range of topics, from politics to entertainment. By enabling
          users to create and participate in polls, the platform fosters civic
          engagement and encourages community involvement in decision-making
          processes
        </TestimonialText>
      </TestimonialSection>
    </ProjectContainer>
  );
};

export default TWOProject;
