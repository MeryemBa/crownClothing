import styled,{ css } from "styled-components";
const activestyle=css`
text-decoration:underline;
font-weight:bold;

`;
export const PaginationContainer=styled.nav`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin:25px 0;

`
export const ListContainer=styled.ul`
width:100%;
min-width:25%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;

& li{
    padding:4px 5px;
}


`;

const getActiveStyle=(props)=>{
    if(props.active){
        return activestyle;
    }
    return;
}
export const PageNumberButton=styled.button`
    border: none;
    outline: none;
    min-width: 25px;
    height: 25px;
    font-size:14px;
    background-color: transparent;
    color: #000;
    margin:0 5px;
    vertical-align: middle;
    text-align: center;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
    ${getActiveStyle}
   
     
}

`;