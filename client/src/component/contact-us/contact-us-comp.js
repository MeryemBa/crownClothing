import React, { useState } from "react";
import FormInput from "../form-input/form-input-comp";
import CostumButton from "../costum-button/custom-buttom-comp";
import {addMesseges} from "../../firebase/firebase.utils";
import {TitleContainer,NameContainer,ContactConatiner,MessageArea,Message} from  "./contact-us.styles.js";

function ContactUs() {
   
    const [userInfo, setuserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message:"",
      });
      const [state,setState]=useState({state:null,message:null});
      const [loading, setLoading] = useState(false)
      const { firstName,lastName, email, message} = userInfo;
      function handelChange(e) {
        const { name, value } = e.target;
        setuserInfo({
          ...userInfo,
          [name]: value,
        });
      
      }
      async function handelSubmit(e) {
        e.preventDefault();
      
   
        try{
           setLoading(true);
        await  addMesseges(userInfo);
        setState({state:"SUCCES",
          message:<><h4>Thank you!</h4><p>Your message has been successfully sent. We will contact you very soon!</p></>})
  
       
        
       
        setTimeout(()=> {
          setuserInfo({
            firstName: "",
            lastName: "",
            email: "",
            message:"",
          });
          setState({state:null,message:""});
          setLoading(false);
        },5000)
        
        
    }catch{
      setState({state:"ERROR",
       message:<><h4>Sorry</h4><p>It seems that there is an error. Please try later.</p></>})
  
       setLoading(false);
         console.log("error");
    }
   
        
    }
    return (
        <ContactConatiner>
         {state.state &&<Message state={state.state==="ERROR"}>{state.message}</Message>}
            <TitleContainer>Contact Us</TitleContainer>
      <span>Feel free to contact us </span>
      <form onSubmit={handelSubmit}>
          <NameContainer>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handelChange}
          label="First Name"
          required
        />
         <FormInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={handelChange}
          label="Last Name"
          required
        />
        </NameContainer>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handelChange}
          label="Email"
          required
        />
        
        <MessageArea name="message" placeholder="Send us a message" value={message} onChange={handelChange} required />

        <CostumButton type="submit" style={{ marginLeft: "auto",}} disabled={loading}>Send</CostumButton>
      </form>
        </ContactConatiner>
    )
}

export default ContactUs
