import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SpinnerOverlay = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const LogoImage = styled(Logo)`
  width: 70px;
  height: 70px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const SpinnerContainer = styled.div`
  width: 100px;
  height: 100px;

  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
