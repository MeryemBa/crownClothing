import React, { useState } from "react";
import FormInput from "../form-input/form-input-comp";
import CostumButton from "../costum-button/custom-buttom-comp";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";
import { SignUpConatiner, TitleContainer,Message } from "./sign-up.styles";

export default function SignUp() {
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordValidation: "",
  });
  const [state,setState]=useState({state:null,message:null});
  const [loading, setLoading] = useState(false);
  const { name, email, password, passwordValidation } = userInfo;
  function handelChange(e) {
    const { name, value } = e.target;
    setuserInfo({
      ...userInfo,
      [name]: value,
    });
  
  }
  async function handelSubmit(e) {
    e.preventDefault();
    if (password !== passwordValidation) {
      
      setState({state:"ERROR",
      message:<><p> Passwords dont match. Please try again.</p></>});
      return;
    }
    try {
      setLoading(true);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName: name });
      
      

     
        setuserInfo({
          name: "",
          email: "",
          password: "",
          passwordValidation: "",
        });
        setState({state:null,message:""});
        setLoading(false);
     

    } catch (error) {
      setState({state:"ERROR",
      message:<><h4>Sorry</h4><p>{error.message}</p></>})
 
      setLoading(false);
      console.log("error crating user", error.message);
    }
  }
  return (
    <SignUpConatiner>
       {state.state &&<Message state={state.state==="ERROR"}>{state.message}</Message>}
      <TitleContainer>I do not have a account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handelChange}
          label="Name"
          required
        />
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
        <FormInput
          type="password"
          name="passwordValidation"
          value={passwordValidation}
          onChange={handelChange}
          label="Confirm Password"
          required
        />

        <CostumButton disabled={loading} type="submit">sign up</CostumButton>
      </form>
    </SignUpConatiner>
  );
}
