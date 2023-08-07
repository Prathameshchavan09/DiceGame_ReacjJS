import React, { useState } from "react";
import styled from "styled-components";


const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  .DiceImages {
    cursor: pointer;
  }
`;

const DiceRoller = ({ FirstDice, DiceRoled }) => {
  return (
    <DiceContainer>
      <div className="DiceImages" onClick={DiceRoled}>
        <img src={`images/dice_${FirstDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default DiceRoller;
