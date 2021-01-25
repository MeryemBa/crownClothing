import styled from "styled-components";

const subColor = "grey";
const mainColor = "black";
export const GroupContainer = styled.div`
  position: relative;

  margin: 20px auto;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputConatiner = styled.input`
  font-size: 16px;
  position: relative;

  width: 99%;
  height: 100%;
  padding: 10px 0px 10px 5px;
  color: ${mainColor};
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({errorstate})=>errorstate?"#D92027": mainColor};
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus + label,
  &:valid + label, 
  &:not([value=""]) + label{
    top: -12px;
    font-size: 14px;
    color: ${subColor};
  }
  &:focus,
  &:valid {
    border-color: ${subColor};
  }
`;

export const FormInputLabel = styled.label`
  color: ${mainColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
