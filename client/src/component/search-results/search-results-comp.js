import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionForSearch} from "../../redux/shop/shop-selector";
import CollectionItem from "../collection-item/collection-item-comp";
import {searchItem} from "../../redux/shop/shop-action";

import {SearchPageContainer,SearchItemsContainer,SearchMessage} from "./search-results.styles";

function SearchPage({searchItems,searchItem,query}) {

  useEffect(() => {
   
    searchItem(query.toLowerCase())
  }, [query,searchItem])

    return (

        
            <SearchPageContainer>
            
            { searchItems.length? 
             <SearchItemsContainer>
                {searchItems.map(({items,routeName})=>
                 items.map((item) => (
                  <CollectionItem key={item.id} item={item} routeName={routeName} />
                )))}
              </SearchItemsContainer>
                :
                <SearchMessage>
                <h1>No Item Match.</h1>

                <p>Try Jacket, T-shirt, Red.</p>

                </SearchMessage>
                
                
                }
                 
              
                
              
            </SearchPageContainer>
          
    )
}

const mapStateToProps = createStructuredSelector({
  searchItems: selectCollectionForSearch,
  });
const mapDispatchToProps = (dispatch) => ({
    searchItem: (query) => dispatch(searchItem(query)),
 
});

  
 

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)

