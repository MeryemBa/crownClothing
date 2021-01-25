import React, { useState } from "react";
import FormInput from "../form-input/form-input-comp";
import CostumButton from "../costum-button/custom-buttom-comp";
import { NewsLetterContainer, Title,ErrorContainer } from "./news-letter.styles";
import axios from "axios";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("START");
  const [Message, setMessage] = useState(null);
  const handelChange = (e) => {
    setEmail(e.target.value);
  };
  const sendingData =async ()=>{
    await axios({
      url: "newsletter",
      
      method: "post",
      data: {
        email:email 
      },
    }).then((response) => {
     
      setState("SUCCESS");
      setMessage("You have been successfully added to our list.")
      setTimeout(()=> {
        setEmail("");
        setState("START")
        setMessage(null);
      },3000)
       

        
       
      })
      .catch((error) => {
        setState("ERROR");
        console.log(error.response)
        setMessage(error.response.data.message);
        
      });
  }
  const handelSubmit =  (e) => {

    e.preventDefault();
    if(!email || e.target.email.validity.typeMismatch){
      setState("ERROR");
      setMessage("Please enter a valid email address");
      return;
    }

    setState("LOADING");
    setMessage(null);

    sendingData();
    
  };

  return (
    <NewsLetterContainer>
      <Title>News Letter</Title>
      <p>Sign up to hear when new products are announced!</p>
      <form onSubmit={handelSubmit} noValidate>
        
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Enter your email address"
          onChange={handelChange}
           required
           errorstate={state==="ERROR"}
           styles={{width:"50%"}}
        />
        
        {(state === "ERROR" ||state === "SUCCESS") && (
          <ErrorContainer state={state}>{Message}</ErrorContainer>
        )}
        <CostumButton  type="submit" disabled={state === "LOADING"}>subscribe</CostumButton>
       
      </form>
    </NewsLetterContainer>
  );
}

export default NewsLetter;
