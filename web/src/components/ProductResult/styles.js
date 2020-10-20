import styled from "styled-components";

export const ContainerBody = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Container = styled.div`
  width: 90%;
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .buy {
    p {
      font-size: 18px;
    }

    button {
      font-size: 16px;
    }
    display: grid;
    grid-template-rows: 1fr;
  }
`;
