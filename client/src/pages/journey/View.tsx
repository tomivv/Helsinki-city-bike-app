import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import { PaginationProvider } from '../../context/paginationContext';
import usePagination from '../../hooks/usePagination';
import './View.css';

function View() {

  const [items, setItems] = useState<object[]>([]);
  const { next, back, index } = usePagination();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/journeys/10/${index}`)
    .then((response) => response.json())
    .then((data: object[]) => setItems(data))
  }, [index]);

  if (items.length <= 0) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    )
  }
  
  return (
    <div className='container'>
      <PaginationProvider value={{next, back, index, items}}>
        <List listHeader={Object.keys(items[0])} listItems={items} isLink={false} />
      </PaginationProvider>
    </div>
  );
}

export default View;