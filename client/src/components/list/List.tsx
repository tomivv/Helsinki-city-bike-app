import React from 'react';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import './List.css';

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
    </div>
  )
}

export default List;