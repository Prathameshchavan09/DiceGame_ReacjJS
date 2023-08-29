import React from "react";
import styled from "styled-components";

const ShowRulesContainer = styled.div`
  background-color: yellow;
  width: 500px;
  display: flex;
  align-items: center;
  margin: 10px auto;

  .ContainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    row-gap: 20px;
  }
`;

const Rules = ({ ShowRuless }) => {
  return (
    <ShowRulesContainer>
      <div className="ContainContainer">
        <div>
          <h2>Games Rules</h2>
          <p>First select any number</p>
          <p>Roll the Dice</p>
          <p>Selected Number matches with Dice Number</p>
          <p>Total Score increase or decreases by 2 </p>
        </div>
      </div>
    </ShowRulesContainer>
  );
};

export default Rules;
