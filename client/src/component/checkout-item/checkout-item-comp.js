import React,{useState} from "react";
import { connect } from "react-redux";
import { addItem, removeItem, clearItem , changeItemSize} from "../../redux/cart/cart-action";
import Size from "../size-selector/size-selector-comp";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextConatiner,
  SizeConatiner,
  QuantityContainer,
  RemoveButtonContainer,
  SmallButton,
} from "./checkout-item.styles";

function CheckoutItem({ item, addItem, clearItem, removeItem , changeItemSize}) {
  const { name, imageUrl, price, quantity,size ,sizeOptions} = item;

const [newSize,setnewSize]=useState(size);
const [showButton,setButtonVisibility]=useState(false);
console.table(newSize);
const handelClick=()=>{
  if(item.size===newSize){
    setButtonVisibility(!showButton);
    return;
  }
  changeItemSize(item,newSize);
  setButtonVisibility(!showButton);
}
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextConatiner>{name}</TextConatiner>
    <SizeConatiner >
    {!size?<span>Unisize</span>: 
    <Size  handelChange={(e)=>{setnewSize(e.target.value);setButtonVisibility(!showButton)}}options={sizeOptions} selected={size}/>}
      {showButton
      &&(
      <div>
        <SmallButton  onClick={()=>setButtonVisibility(!showButton)} inverted>Cancel</SmallButton>
      <SmallButton onClick={handelClick}>update</SmallButton>
      
      </div>
      )}
      </SizeConatiner>
      <QuantityContainer>
        <span  role="button" aria-label="decrease item quantity"  onClick={() => removeItem(item)}> &#10094;</span>

        <span>{quantity}</span>

        <span  role="button" aria-label="increase item quantity" onClick={() => addItem(item)}> &#10095;</span>
      </QuantityContainer>
      <TextConatiner>{price}$</TextConatiner>
      <RemoveButtonContainer role="button"  aria-label="remove item from cart" onClick={() => clearItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  changeItemSize:(item,newSize)=>dispatch(changeItemSize(item,newSize))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
