import styled from "styled-components";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const SearchItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & .collection-item {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export const SearchMessage=styled.div`
width:100%;
height:50vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

& p{
  color: #a6a4a4;
  text-transform: capitalize;
}
`;