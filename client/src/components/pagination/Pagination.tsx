import React, { useContext } from 'react';
import { PaginationContext } from '../../context/paginationContext';

function Pagination() {
  const { back, next, index } = useContext(PaginationContext);

  function handlePrevious() {
    back();
  }

  function handleNext() {
    next();
  }

  return (
    <div className='flex space-between mt-1'>
      {index === 0 ? <button className='btn btn-lg' disabled >Previous</button> : <button className='btn btn-lg' onClick={handlePrevious}>Previous</button>}
      <button className='btn btn-lg' onClick={handleNext}>Next</button>
    </div>
  );
}

export default Pagination;