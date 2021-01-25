import styled,{keyframes} from "styled-components";
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
export const ContactConatiner = styled.div`
  display: flex;
  flex-direction: column;
   
  padding: 15px 20px;
  
  width:500px;
  
   
`;
export const Message=styled.div`
width:100%;
padding:15px 5px;
text-align:center;
background-color:${({state})=>state?"#D92027":"#325947"};
color:#fff;
animation:${sweep} 0.3s ease-in-out;

`;
export const TitleContainer = styled.h2`
  margin: 10px 0;
`;
export const NameContainer=styled.div`
display: flex;
width:100%;
justify-content:space-between;
& > div{
    width:45%;
    margin:20px 0;
}

`;
export const MessageArea=styled.textarea`
width:100%;
height:100px;

margin:5px 5px 20px 5px;



`