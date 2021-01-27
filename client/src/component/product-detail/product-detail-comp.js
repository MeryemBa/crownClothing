import React,{useState} from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import { selectItemForDetails } from "../../redux/shop/shop-selector";
import FAQItem from '../faq-item/faq-item-comp';
import Size from "../size-selector/size-selector-comp";



import {DetailContainer,ProductImage,ProductDetails,SizeContainer,CostomButtonDetails,DetailsContainer,ErrorMessage} from "./product-detail.styles";


function ProductDetail({item,addItem}) {
    const {imageUrl,name,price,id,color,size}=item;

    const [pickedSize,setPickedSize]=useState(null);
    const [errorMessage,setErrorMessage]=useState(null);
    

 const handelSubmite=(e)=>{
    e.preventDefault()
    
    if(!!size &&!pickedSize){
        setErrorMessage("Please Select your size ")
        return;
      
    }
    
 const itemToAdd={...item,cartId:`${id}-${pickedSize}`,size:pickedSize,sizeOptions:size};
 addItem(itemToAdd)

 }
 
    return (
        <DetailContainer>
          
            <ProductImage >
                <img
                src={imageUrl}
                alt={name}
                 />
            </ProductImage>
           <ProductDetails>

    <h1>{name}</h1>
           <h3>{`Price: ${price}$`}</h3>
           <span>Color:{color}</span>
        
           
            <form onSubmit={handelSubmite}>

            { size!==undefined &&    <SizeContainer>
                <h3>Size</h3> 
           <Size name="size"  handelChange={(e)=>{setPickedSize(e.target.value);setErrorMessage(null)}} defaultMessage="Please Select your Size" options={size} />
            </SizeContainer>}
            <ErrorMessage>{errorMessage?errorMessage:null }</ErrorMessage>
            
         <CostomButtonDetails type="submit">Add to bag</CostomButtonDetails>
         </form>
         <DetailsContainer>
             <FAQItem question={"Details"} >
                 <ul>
                     <li>FPhasellus sed libero et enim dictum congue.</li>
                     <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                 </ul>
        </FAQItem>
      
           
         </DetailsContainer>

           </ProductDetails>
            
        </DetailContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItemForDetails (ownProps.match.params.collectionId,ownProps.match.params.itemId)(state),
  });
  const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
  });
  export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);