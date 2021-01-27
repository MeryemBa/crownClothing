import React, { useState } from "react";
import FormInput from "../form-input/form-input-comp";
import { auth, signWithGoogle } from "../../firebase/firebase.utils";
import CostumButton from "../costum-button/custom-buttom-comp";

import {
  SignInButtonContainer,
  SignInConatiner,
  TitleConatiner,
} from "./sign-in.styles";

export default function SignIn() {
  const [userInfo, setuserInfo] = useState({ email: "", password: "" });
  const { email, password } = userInfo;
  function handelChange(e) {
    const { name, value } = e.target;
    setuserInfo({
      ...userInfo,
      [name]: value,
    });
  }
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setuserInfo({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("error sign in ", error.message);
    }
  }

  return (
    <SignInConatiner>
      <TitleConatiner>I already have an account</TitleConatiner>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handelChange}
          label="Email"
       
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handelChange}
          label="Password"
          required
        />
        <SignInButtonContainer>
          <CostumButton type="submit">sign in</CostumButton>

          <CostumButton
            type="button"
            isGoogleSingIn={true}
            onClick={signWithGoogle}
          >
            sign in with google
          </CostumButton>
        </SignInButtonContainer>
      </form>
    </SignInConatiner>
  );
}
