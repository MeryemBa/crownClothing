import React from 'react'
import FAQItem from "../../component/faq-item/faq-item-comp"
import {FaqPageContainer,Title,SubContainer,FaqContainer} from "./faq.styles";

function FAQPage() {
    return (
        <FaqPageContainer>
            <Title>POPULAR FAQS</Title>
            <SubContainer>
            <div> {
                data.map((item,index)=>
                index%2===0 &&<FaqContainer key={index}><FAQItem  question={item.question} ><p>{item.answer}</p></FAQItem></FaqContainer>
                
                )
            }
            </div>
            <div> {
                data.map((item,index)=>
                index%2===1 &&<FaqContainer key={index}><FAQItem  question={item.question} ><p>{item.answer}</p></FAQItem></FaqContainer>
                
                )
            }
            </div>

            </SubContainer>
            
          
        </FaqPageContainer>
    )
}

export default FAQPage
const data=[
    {
    question:"When Will My Order Ship?",
    answer:"Orders are usually processed and shipped within 3 working days of purchase. How Long Does Shipping Take? Shipping times vary as we do ship worldwide from different fulfillment centers based on your location. Average shipping time is about 7 to 10 working days."
    },
    {
    question:"How Do I Cancel An Order?",
    answer:"We are only able to cancel orders within the first 12 hours after the order is placed. After that the order has most likely been processed and is preparing for shipment or has been shipped. Once this takes effect, it's out of our hands. We apologize for any inconvenience this may cause, but we pride ourselves on prompt service and this includes getting your orders out as fast as possible."
    },
    {
    question:"What Is Your Return Policy?",
    answer:"If there’s something wrong with your order (defective product, incorrect order, damaged order etc.), please contact us within 7 days from receiving your order and we’ll be happy to assist you reviewing the case and if it is approved we will be sending a replacement. Please do not return anything before we review the case, our customer service team will review the request and will send further instructions. Our store reserves the right to deny any return request. You will be responsible for paying for your own shipping costs for returning your item."
    },
    {
    question:"What Methods of Payment Do You Accept?",
    answer:"For know we only accept Credit Card (Visa, MasterCard), Debit Card we will update our payment methode soon"
    }
    
    
    ]