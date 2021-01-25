import React from 'react';
import {PaginationContainer,ListContainer,PageNumberButton} from "./pagination.styles"

       
       
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <ListContainer >
        {pageNumbers.map(number => (
          <li key={number} >
            <PageNumberButton active={number===currentPage} onClick={() => paginate(number)}  >
              {number}
            </PageNumberButton>
          </li>
        ))}
      </ListContainer>
    </PaginationContainer>
  );
};

export default Pagination;