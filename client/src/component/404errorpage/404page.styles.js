import styled from 'styled-components';
import lost from "../../assets/lost.jpg";

export const ErrorContainer = styled.div`
  height: 70vh;
  width: 100%;
  
  background-image:url(${lost});
  background-size: cover;
  background-position: center;
  position :relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
    &:before {
    content: '';
    height: 100%;
    width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
       
        background:rgba(0,0,0,0.2);
  }
 
  @media screen and (max-width: 800px) {
    
    justify-content: center;
    align-items: flex-end;
  }

`;



export const ErrorTextContainer = styled.div`
  width:40%;
  border:1px solid black;
  background-color: white;
  opacity: 0.9;
  padding: 15px 25px;
   & h1{
     
     font-size:50px;
   margin:0;
   }
   & h2{
    margin:0;
    font-size:30px;
    
  }
  & p{
     
    font-size:18px;
    line-height:2;
  }
  @media screen and (max-width: 800px) {
    
    width:90%;
    padding: 15px 10px;
    & h1{
     
      font-size:28px;
    margin:0;
    }
    & h2{
     margin:0;
     font-size:18px;
     
   }
   & p{
      
     font-size:14px;
     line-height:2;
   }

  }
 
`;