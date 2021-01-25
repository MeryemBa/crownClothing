import styled from "styled-components";
export const UserDropdownContainer = styled.div`
  position: absolute;
  width: 240px;

  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100px;
  right: 80px;
  z-index: 100;
  @media screen and (max-width: 800px) {
    width: 75vw;
    max-width: 280px;
    right: 25px;
    top: 90px;
 
  }
  @media screen and (max-width: 280px) {
    width: 95vw;
    max-width: 280px;
    right: 5px;
   
  }
`;
export const DisplayName=styled.span`
font-weight:600;
`;
export const UserOptioncontainer=styled.div`
width:100%;
height:25px;
padding:20px 15px;
display: flex;
align-items: center;
white-space: pre-wrap;
&:nth-child(2){
    cursor:pointer;
}
`;