const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      id: 1,
      linkUrl: "shop/hats",
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/crown-db-8527e.appspot.com/o/hat.webp?alt=media&token=b096541f-d5fa-4ea4-8c0e-dac9b790f8fc"
    },
    {
      title: "jackets",
      id: 2,
      linkUrl: "shop/jackets",
      imageUrl:"https://firebasestorage.googleapis.com/v0/b/crown-db-8527e.appspot.com/o/jacket.webp?alt=media&token=e80d4ea4-dc3b-4cda-95b3-c7f3773c12b5"
    },
    {
      title: "sneakers",
     
      id: 3,
      linkUrl: "shop/sneakers",
     imageUrl:"https://firebasestorage.googleapis.com/v0/b/crown-db-8527e.appspot.com/o/sneakers.webp?alt=media&token=603bd06a-b2a1-492c-b251-d099b5eaf5b2"
    },
    {
      title: "womens",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    imageUrl:"https://firebasestorage.googleapis.com/v0/b/crown-db-8527e.appspot.com/o/women.webp?alt=media&token=a6275662-d5e4-4740-bd90-68b1a7f0a7c7"
  
  },
    {
      title: "mens",
       size: "large",
      id: 5,
      linkUrl: "shop/mens",
      imageUrl:"https://firebasestorage.googleapis.com/v0/b/crown-db-8527e.appspot.com/o/man.webp?alt=media&token=3ea6df3c-0fd2-4fa0-bfb0-72321f8375f6"
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
