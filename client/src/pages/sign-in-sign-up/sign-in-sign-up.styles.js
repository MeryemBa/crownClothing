import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 850px;
  margin: 20px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
