import React from "react";
import styled from "styled-components";

const ScoreCounter = styled.div`
  position: relative;
  text-align: center;
  max-width: 200px;
  margin-top: -50px;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    margin-top: -20px;
    width: 100%;
    
  }

  h1 {
    font-size: 100px;
    font-weight: 900;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    margin-top: -60px;
  }
`;

const TotalScore = ({ Score }) => {
  return (
    <ScoreCounter>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreCounter>
  );
};

export default TotalScore;
