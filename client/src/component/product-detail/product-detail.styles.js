import styled,{keyframes} from "styled-components";
import CustomButton from "../costum-button/custom-buttom-comp";




export const DetailContainer=styled.div`
display:flex;

justify-content:center;
align-items:flex-start;

padding:25px 100px;


min-height:90vh;
@media screen and (max-width: 800px) {
    flex-direction:column;
    padding:0px;
    align-items:center;

}

`;
export const ProductImage=styled.div`

width:512px;

height:654px;
margin-right:50px;


&>img{
    width:100%;
    height:100%;
  
}
@media screen and (max-width: 800px) {
    width:70%;
    margin:0 0 15px 0;

}
@media screen and (max-width: 700px) {
    width:100%;
  

}

`;
export const ProductDetails=styled.div`

padding:20px  0;
width:35%;
min-height:600px;
background-color:#fff;
& span{
    text-transform: capitalize;
}
@media screen and (max-width: 1125px) {
    width:50%;
  

}

@media screen and (max-width: 700px) {
    width:100%;
    padding:20px 5px;
    margin:0;
   

}
@media screen and (max-width: 480px) {
    width:100%;
    
    margin:0;
   

}

`;
export const SizeContainer=styled.div`
width:80%;
margin:15px 0;
@media screen and (max-width: 400px) {
    width:100%;   
}

`;
export const CostomButtonDetails=styled(CustomButton)`
width:80%;
margin-top:20px;
@media screen and (max-width: 400px) {
    width:100%;
   
}

`
export const DetailsContainer=styled.div`
width:80%;

margin-top:15px;
@media screen and (max-width: 800px) {
    width:100%;
    

}
`

const sweep=keyframes`
    from{
        opacity:0;
        transition:translateX(-100%);
       
    }
    to{
        opacity:1;
        transition:translateX(100%);
    }

`;
export const ErrorMessage=styled.p`
&:empty{
    display:none;
}
color:red;

animation:${sweep} 0.3s ease-in-out;

`;