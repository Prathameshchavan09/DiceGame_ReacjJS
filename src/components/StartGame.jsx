import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 70px;
  }
`;

const Button = styled.button`
  padding: 20px 40px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 20px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const StartGame = ({ GameStarted }) => {
  return (
    <Container>
      <Logo src="/images/DiceLogo.png" alt="Dice Logo" />
      <Content>
        <h1>Dice Game</h1>
        <Button onClick={GameStarted}>PLAY NOW</Button>
      </Content>
    </Container>
  );
};

export default StartGame;
