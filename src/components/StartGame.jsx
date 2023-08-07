import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20%;
  height: 100%;
  margin: 0 auto;
  max-width: 1180px;
  display: flex;
  align-items: center;

  justify-content: center;

  .Content h1 {
    font-size: 89px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  padding: 20px 40px;
  text-align: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  margin-left: 130px;
  margin-bottom: 100px;
`;

const StartGame = ({ GameStarted }) => {
  return (
    <Container>
      <div>
        <img src="/images/DiceLogo.png"></img>
      </div>
      <div className="Content">
        <h1>Dice Game</h1>
        <Button onClick={GameStarted}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;
