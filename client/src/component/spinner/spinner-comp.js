import React from 'react';
import {
    Container,
    SpinnerContainer,
    SpinnerOverlay,
    LogoImage,
  } from "./spinner.styles";

function Spinner() {
    return (
        <Container>
        <SpinnerOverlay>
          <LogoImage />
          <SpinnerContainer />
        </SpinnerOverlay>
      </Container>
    )
}

export default Spinner;
