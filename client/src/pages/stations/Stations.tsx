import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import { PaginationProvider } from '../../context/paginationContext';
import usePagination from '../../hooks/usePagination';
import './Stations.css';

function Stations() {
  const [items, setItems] = useState<object[]>([]);

  const { next, back, index } = usePagination();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/stations/10/${index}`)
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
        <List listHeader={Object.keys(items[0])} listItems={items} isLink={true} />
      </PaginationProvider>
    </div>
  );
}

export default Stations;