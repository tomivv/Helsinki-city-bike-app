import React from 'react';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import './List.css';
import Pagination from '../pagination/Pagination';

interface props {
  listItems: object[],
  listHeader: string[]
}

function List({ listItems, listHeader }: props) {
  return (
    <div className='list'>
      <ListHeader listHeaderValues={listHeader} />
      <div className='list-body'>
        {listItems.map(item => (
          <ListItem itemValues={item} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default List;