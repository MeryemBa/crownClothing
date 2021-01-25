import React from "react";

import SignIn from "../../component/sign-in/sign-in-comp";
import { SignContainer } from "./sign-in-sign-up.styles";
import SignUp from "../../component/sign-up/sign-up-comp";
export default function SignInSignUp() {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  );
}
