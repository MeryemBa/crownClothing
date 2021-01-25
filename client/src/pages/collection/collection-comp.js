import React,{useState} from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../component/collection-item/collection-item-comp";
import Pagination from "../../component/pagination/pagination-comp";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

function Collection({ collection }) {
   
 const { title, items ,routeName}=collection;
 const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
 const paginate=(pageNumber)=>{setCurrentPage(pageNumber); window.scrollTo(0,0);};
  
  return (
  
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {currentItems.map((item) => (
          <CollectionItem key={item.id} item={item} routeName={routeName} />
        ))}
      </CollectionItemsContainer>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </CollectionPageContainer>
    
  
  );
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
