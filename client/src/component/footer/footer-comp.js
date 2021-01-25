import React from "react";
import NewsLetter from "../news-letter/news-letter-comp";

import { FooterContainer, SupportContainer } from "./footer.styles";
import { Title } from "../news-letter/news-letter.styles";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <FooterContainer>
      <SupportContainer>
        <Title>SUPPORT</Title>
        <ul>
          <li><Link to={"/faq"}>FAQ</Link></li>
          <li><Link to="/contactUs">Contact us</Link></li>
        </ul>
      </SupportContainer>
      <NewsLetter />
    </FooterContainer>
  );
}

export default Footer;
