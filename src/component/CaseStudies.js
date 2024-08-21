"use client";
import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const CaseStudiesContainer = styled.div`
  background: #fef3ef;
  padding: 50px;
  min-height: 85vh;
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
  color: #fff;
  padding: 20px;
  border-radius: 20px;
  width: 30%;
  box-sizing: border-box;
  text-align: left;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    font-size: 1em;
    margin-bottom: auto;
    color: #fff;
  }

  .link {
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
    background: rgba(0, 0, 0, 0.5);
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
        <CaseStudyCard bgImage="/coding.webp">
          <h3>TWO</h3>
          <p>
            A social media app that lets users create polls, vote, and discuss a
            range of topics. Designed with a focus on simplicity and user
            engagement to enhance community interaction.
          </p>
          <Link href="/two-project">
            <span className="link">View Project</span>
          </Link>
        </CaseStudyCard>
        <CaseStudyCard bgImage="/images/sofia-pazari.jpg">
          <h3>Sofia Pazari Home Goods</h3>
          <p>
            Website and packaging design for independent maker Sofia Pazari
            marketplace of original beauty, lifestyle, and home goods.
          </p>
          <Link href="#">
            <span className="link">View Project</span>
          </Link>
        </CaseStudyCard>
        <CaseStudyCard bgImage="/images/sauce-slice.jpg">
          <h3>Sauce & Slice Pizzeria</h3>
          <p>
            Brand identity development and website redesign for family-owned and
            longstanding Brooklyn-based pizzeria Sauce & Slice.
          </p>
          <Link href="#">
            <span className="link">View Project</span>
          </Link>
        </CaseStudyCard>
      </CaseStudiesWrapper>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
