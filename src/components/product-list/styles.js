import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    background: black;
    color: white;
    border-radius: 10px;
    width: fit-content;
    height: auto;
    margin: 10px 0;
    @media screen and (min-width: 800px) {
      display: flex;

      flex-direction: row;
    }
  }
`;

export const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 200px;
    margin: 0 1rem 1rem 1rem;
    border-radius: 10px;
    padding: 0.5rem;
  }
`;
