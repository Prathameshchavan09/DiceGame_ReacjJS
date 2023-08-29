import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelect from "./NumberSelect";
import DiceRoller from "./DiceRoller";
import Rules from "./Rules";
const GamePlay = ({ ScoreReset }) => {
  const [NumberSelected, setNumberSelected] = useState();
  const [FirstDice, setFirstDice] = useState(1);
  const [Score, setScore] = useState(0);
  const [Error, setError] = useState();
  const [ShowRules, setShowRules] = useState(false);

  const generateRandomNumbers = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const DiceRoled = () => {
    if (!NumberSelected) {
      setError("First Select the number");
      return;
    }
    const RandomDiceNumber = generateRandomNumbers(1, 7);
    setFirstDice((prev) => RandomDiceNumber);

    if (NumberSelected === RandomDiceNumber) {
      setScore((prev) => prev + RandomDiceNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setNumberSelected(undefined);
  };

  const ResetScore = () => {
    setScore(0);
  };

  const ShowDetailRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <NumberTotalSelectorContainer>
      <div className="NumberTotal">
        <TotalScore Score={Score} />
        <NumberSelect
          Error={Error}
          NumberSelected={NumberSelected}
          setNumberSelected={setNumberSelected}
        />
      </div>
      <DiceRoller FirstDice={FirstDice} DiceRoled={DiceRoled} />
      <div className="ResetDetailbutton">
        <Button onClick={ResetScore}>Reset</Button>
        <Button onClick={ShowDetailRules}>Show Details</Button>
      </div>

      {ShowRules && <Rules />}
    </NumberTotalSelectorContainer>
  );
};

export default GamePlay;

const NumberTotalSelectorContainer = styled.div`
  overflow: hidden;
  .NumberTotal {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 760px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 300px;
    }
  }

  .ResetDetailbutton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .ShowRules {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 140px;
  padding: 10px 20px;
  border-radius: 5px;
`;
