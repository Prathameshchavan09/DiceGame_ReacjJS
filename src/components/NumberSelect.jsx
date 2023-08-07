import styled from "styled-components";
import { useState } from "react";

const NumberButtons = styled.div`
  background-color: ${(props) => (props.isNumberSelected ? "black" : "white")};
  color: ${(props) => (props.isNumberSelected ? "white" : "black")};
  padding: 30px 35px;
  height: 20px;
  width: 20px;
  display: grid;
  place-items: center;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 800;
`;

const NumberSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 60px;

  .flex {
    display: flex;

    gap: 34px;
  }

  p {
    display: flex;
    font-size: 24px;
    font-weight: 700px;
  }

  .Error {
    color: red;
  }
`;

const NumberSelect = ({ Error, NumberSelected, setNumberSelected }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  console.log(NumberSelected);

  return (
    <NumberSelectedContainer>
      <p className="Error">{Error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <NumberButtons
            isNumberSelected={NumberSelected === value}
            onClick={() => setNumberSelected(value)}
            key={i}
          >
            {value}
          </NumberButtons>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectedContainer>
  );
};

export default NumberSelect;
