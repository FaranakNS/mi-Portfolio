import React from "react";
import styled from "styled-components";

const CaseStudiesContainer = styled.div`
  background: #f0f0f0;
  padding: 50px;
  min-height: 200vh;
  text-align: center;
`;

const CaseStudyHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const CaseStudiesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const CaseStudyCard = styled.div`
  background: ${(props) => `url(${props.bgImage}) no-repeat center center`};
  background-size: cover;
  color: #fff; /* Adjust the text color to be white */
  padding: 20px;
  border-radius: 20px; /* More rounded corners */
  width: 30%;
  box-sizing: border-box;
  text-align: left;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow */
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #fff; /* Title color */
  }

  p {
    font-size: 1em;
    margin-bottom: auto;
    color: #fff; /* Paragraph color */
  }

  a {
    color: #fff;
    text-decoration: underline;
    font-size: 1em;
    align-self: flex-end;

    &:hover {
      text-decoration: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); /* Overlay to make text readable */
    border-radius: 20px;
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const CaseStudies = () => {
  return (
    <CaseStudiesContainer>
      <CaseStudyHeader>Case Studies</CaseStudyHeader>
      <CaseStudiesWrapper>
        <CaseStudyCard bgImage="/farah-pic.jpg">
          {" "}
          {/* Example background image */}
          <h3>Collette Noll Interior Design</h3>
          <p>
            Concept and creation of interior designer Collette Nolls website,
            with focus on her variety of client-forward services and recent
            successful collaborations.
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
        <CaseStudyCard bgImage="/images/sofia-pazari.jpg">
          {" "}
          {/* Example background image */}
          <h3>Sofia Pazari Home Goods</h3>
          <p>
            Website and packaging design for independent maker Sofia Pazari's
            marketplace of original beauty, lifestyle, and home goods.
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
        <CaseStudyCard bgImage="/images/sauce-slice.jpg">
          {" "}
          {/* Example background image */}
          <h3>Sauce & Slice Pizzeria</h3>
          <p>
            Brand identity development and website redesign for family-owned and
            longstanding Brooklyn-based pizzeria Sauce & Slice.
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
      </CaseStudiesWrapper>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
