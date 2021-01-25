import React from 'react';
import aboutImage from "../../assets/about.webp";
import {AbouteContainer,Title,Paraghraphe} from "./about.styles";


function AboutPage() {
    return (
        <AbouteContainer>
           
            <img src={aboutImage} alt="fashon" />
 <Title>Who we are.</Title>
 <Paraghraphe>
 Crown Clothing is your global online store that delivers latest fashion apparel for you! Thousands of products in different styles 
 are waiting for you!

We value all our customers that's way you will find our professional customer service team  
always here to help you. Your satisfaction is our top priority! 

Moreover, you can easily get your order anywhere in the world thanks to our worldwide shipping service!</Paraghraphe>
<Title>Our philosophie.</Title>
            <Paraghraphe>
We believe in a world where you have total freedom to be you,
 without judgement. To experiment. To express yourself. 
 To be brave and grab life as the extraordinary adventure it is. 
 So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are,
 where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</Paraghraphe>
            
        </AbouteContainer>

    );
}

export default AboutPage;
