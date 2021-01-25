import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;

  background-color: #efefef;
  padding: 20px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    padding: 10px;
    padding-bottom: 50px;
    display: block;
  }
`;
export const SupportContainer = styled.div`
  padding: 0 10px;

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 800px) {
    margin: 30px 0;
  }
`;
