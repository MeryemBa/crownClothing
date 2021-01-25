import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    outline: none;
  }
`;

const invertedButtonStyles = css`
  color: black;
  background-color: white;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const googleButtonStyles = css`
  background-color: #4285f4;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSingIn) {
    return googleButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};
export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  border: none;
  padding: 0 35px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${getButtonStyles}
`;
