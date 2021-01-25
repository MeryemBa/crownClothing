
import styled from "styled-components";
import close from "../../assets/close.svg";

export const SearchContainer=styled.form`
width:25%;
height:50%;
display:flex;
padding:0;
margin-left:15px;
position:relative;
outline:none;

@media screen and (max-width: 850px) {
    border:unset;
    width:100%;
    height:50%;
    align-items:center;
    justify-content:center;
    position:fixed;
    background-color:#fff;
    top:0;
    left:-15px;
    z-index:1000;
    display:flex;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-120%)")};
    transition: all 0.3s linear;
    -webkit-box-shadow: 2px 10px 21px -3px #CECECE; 
box-shadow: 2px 10px 21px -3px #CECECE;
    & .close{
        position: inherit;
        top:15px;
        right:5px;
        margin:0;
    }
}


`;
export const IconContainer=styled.div`
width:45px;
height:45px;
margin-right:15px;
display:none;
align-items:center;
& svg{
    width:24px;
    height:24px;
    cursor:pointer;
    strock-width:0;
    &  path{
        fill:#000;
        
       
    }
}
@media screen and (max-width: 850px) {
    display:flex;
}

`
export const SearchButton=styled.button`
width:36px;
height:100%;
padding:5px 10px;
background-color:#000;
color:#fff;
border:none;
outline:none;
display:flex;
justify-content:center;
align-items:center;

& svg{
  
    width:24px;
    height:24px;
    cursor:pointer;
    strock-width:0;
    &  path{
        fill:#fff;
        
       
    }
}

&:hover{
    background-color:rgb(0,0,0,0.8);
}
@media screen and (max-width: 850px) {
    width:45px;
height:45px;
    
   
}

`;
export const SearchInputContainer=styled.input`
width:100%;
height:100%;
background-color:transparent;
color:#000;
border: 1px solid rgba(0,0,0,0.1);
outline:none;
padding:0;
padding-left:12px;
padding-right:6px;
&:focus,
&:valid{
    background-color:transparent;
}

    &::-webkit-search-decoration{
    -webkit-appearance: none;
}
    &::-webkit-search-cancel-button{
   -webkit-appearance: none;
    height: 0.8em;
    width: 0.8em;
     background: url(${close}) no-repeat 50% 50%;
    background-size: contain;
    cursor:pointer;}

    @media screen and (max-width: 850px) {
        width:80%;
        height:45px;
        border-color: #000;
    }

`;
