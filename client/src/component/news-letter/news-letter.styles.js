import styled,{keyframes} from "styled-components";

const sweep=keyframes`
    from{
        opacity:0;
        margin-top:-10px;
    }
    to{
        opacity:1;
        margin-top:0;
    }

`;

export const NewsLetterContainer = styled.div`
  padding: 0 10px;
  display: block;
  p {
    margin: 0;
  }
 button{
   width:100%;
   &:hover{
     background-color:transparent;
   }
 }
  @media screen and (max-width: 800px) {
   & form {
      width: 40%;
    }
  }
  @media screen and (max-width: 480px) {
    & form {
       width: 75%;
     }
   }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const ErrorContainer=styled.p`
color:${({state})=>state==="ERROR"?"#D92027":"#325947"};
padding:5px 0;
transition:all 0.3s ease-in-out;
animation:${sweep} 0.3s ease-in-out ;
`;
