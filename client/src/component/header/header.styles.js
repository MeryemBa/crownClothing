import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";

export const HeaderConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 5px 15px;
  height: 70px;
  width: 100%;
  margin-bottom: 37px;
  
  @media screen and (max-width: 800px) {
    padding: 10px 0;
    height: 60px;
    margin-bottom: 20px;
   
    overflow: hidden;
  }
  @media screen and (max-width: 480px) {
   padding-right:25px;
  }
`;

export const AppLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    display:flex;
    justify-content:center;
    padding:0;
 
   
  }
`;
export const AppOptionsContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  height: 100%;
 
  @media screen and (max-width: 800px) {
    width: 15%;
    padding: 0;
    margin-right:15px;
    display: flex;
    justify-content: center;
  
    
  }
`;


const sec=keyframes`

  from {
    width: 0;
  }
  
  to {
    width: 100%;
  }


`;

export const OptionContainer = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  position:relative;
&:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  width: 0px;
  content: '';
  background: #000;
  
}
&:hover:after{
  animation: ${sec} 0.3s ease forwards ;
}
& svg{

  width: 24px;
  height: 24px;
}

  @media screen and (max-width: 800px) {
    font-size: 30px;
    margin: 25px auto;
    &:hover:after{
      animation:unset ;
    }
  }

`;
export const Menu = styled.div`
display: flex;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 997;
    background-color: #fff;
   
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: all 0.3s linear;
  }
`;
export const ToggelButton = styled.div`
  display: none;
  width: 15%;
  height: 40px;

 align-self:flex-start;
 
  z-index: 999;
 

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0 2px;
    position:${({ open }) => (open && "fixed")};
  }
  div {
    width: 30px;
    height: 1.5px;
    background-color: #000;
    border-radius: 10px;
    transform-origin: 1px;

    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(45deg)translate(-5.5px,0px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      margin:5px 0;
      transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg)translate(-5.5px,0px)" : "rotate(0)"};
    }
  }
`;
