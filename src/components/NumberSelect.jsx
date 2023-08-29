import styled from "styled-components";

const NumberButtons = styled.div`
  background-color: ${(props) => (props.isNumberSelected ? "black" : "white")};
  color: ${(props) => (props.isNumberSelected ? "white" : "black")};
  padding: 30px 35px;
  place-items: center;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 800;

  @media (max-width: 760px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

const NumberSelectedContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  p {
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 760px) {
      align-items: center;
      margin-left: 23px;
      
    }
  }

  .Error {
    color: red;
  }

  @media (max-width: 760px) {
    align-items: flex-start;
    text-align: center;
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
