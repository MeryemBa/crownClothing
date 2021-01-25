import styled,{keyframes} from "styled-components";

export const SignUpConatiner = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
  width: 380px;
`;
export const TitleContainer = styled.h2`
  margin: 10px 0;
`;
const sweep=keyframes`
from{
  opacity:0;
  transform:translateY(-100%);
}
to{
  opacity:1;
  transform:translateY(0);
}

`;
export const Message=styled.div`
width:100%;
padding:15px 5px;
text-align:center;
background-color:${({state})=>state?"#D92027":"#325947"};
color:#fff;
animation:${sweep} 0.3s ease-in-out;

`;
