import React from 'react';
import { FaqAnswer,FaqSubContainer, FaqQuation,Icon,Text } from './faq-items.styles';


function FAQItem({question,children}) {
    return (
        
      
           <FaqSubContainer>
           
           <FaqQuation><Text>{question}</Text><Icon> &#10095;</Icon></FaqQuation>
    <FaqAnswer>{children}</FaqAnswer>
    </FaqSubContainer>
      

       
    )
}

export default FAQItem
