
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExiste = cartItems.find((item) => (item.id=== cartItemToAdd.id && item.size===cartItemToAdd.size));
  if (itemExiste) {
  
    return cartItems.map((item) =>
     item.cartId === cartItemToAdd.cartId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const changeCartItemSize=(cartItems,itemToChange,newSize)=>{
const newItem={...itemToChange,cartId:`${itemToChange.id}-${newSize}`,size:newSize}

const itemExiste = cartItems.find((item) => (item.cartId=== newItem.cartId ));
if (itemExiste) {

  return cartItems.map((item) =>
   item.cartId === newItem.cartId
      ? { ...item, quantity: item.quantity + newItem.quantity }
      : item
  ).filter(item=> item.cartId !== itemToChange.cartId);
}
return cartItems.map((item) =>
     item.cartId === itemToChange.cartId
        ?newItem
        : item
    );
  
 
}; 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const itemExiste = cartItems.find((item) =>( item.cartId === cartItemToRemove.cartId));
  console.log(itemExiste);
  if (itemExiste.quantity === 1) {
    return cartItems.filter((item) => item.cartId !== cartItemToRemove.cartId);
  }

  return cartItems.map((item) =>
  item.cartId === cartItemToRemove.cartId
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};
