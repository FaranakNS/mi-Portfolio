import React from "react";
import styled from "styled-components";

const CaseStudiesContainer = styled.div`
  background: #f0f0f0;
  padding: 50px;
  min-height: 100vh;
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
  background: #1a1a5c;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  box-sizing: border-box;
  text-align: left;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    text-decoration: underline;
    font-size: 1em;

    &:hover {
      text-decoration: none;
    }
  }
`;

const CaseStudies = () => {
  return (
    <CaseStudiesContainer className="case-studies">
      <CaseStudyHeader>Case Studies</CaseStudyHeader>
      <CaseStudiesWrapper>
        <CaseStudyCard>
          <h3>Collette Noll Interior Design</h3>
          <p>
            Concept and creation of interior designer Collette Noll's website...
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
        <CaseStudyCard>
          <h3>Sofia Pazari Home Goods</h3>
          <p>
            Website and packaging design for independent maker Sofia Pazari...
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
        <CaseStudyCard>
          <h3>Sauce & Slice Pizzeria</h3>
          <p>
            Brand identity development and website redesign for family-owned...
          </p>
          <a href="#">View Project</a>
        </CaseStudyCard>
      </CaseStudiesWrapper>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
