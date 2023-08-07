import React from "react";
import styled from "styled-components";

const ScoreCounter = styled.div`
  text-align: center;
  max-width: 200px;
  margin-top: -80px;

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
