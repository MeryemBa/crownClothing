

export const searchCollection = (collections, query) => {
   const    NewCollections = Object.keys(collections).map((key) => collections[key]);
      return NewCollections.map(({routeName,id,items}) =>{
            
              let newItems=items.filter(item=>item.name.toLowerCase().includes(query) || item.color.toLowerCase().includes(query))
            return {routeName,id,items:newItems};
      }).filter(collection=> collection.items.length!==0)
       
  }