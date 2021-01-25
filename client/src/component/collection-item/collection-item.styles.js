import styled from "styled-components";
import CustomButton from "../costum-button/custom-buttom-comp";
import Image from "../lazy-imag/lazy-imag-com";
import { Link} from 'react-router-dom';

export const CollectionItemContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  margin: 0 5px;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
  @media screen and (max-width: 480px) {
   height:35vh;
   &:hover {
   
    button {
      display: none;
     
    }
  }
  }
`;
export const BackgroundImage = styled(Image)`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-color:#cdd0cb;
 
 
  
`;
export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 250px;

  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  & span:nth-child(1) {
    width: 90%;
    margin-bottom: 15px;
  }

  & span:nth-child(2) {
    width: 10%;
  }
`;
