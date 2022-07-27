import React from 'react';
import { IJourney } from '../../interfaces/journeys';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

interface props {
  listItems: IJourney[],
  listHeader: string[]
}

function List({ listItems, listHeader }: props) {
  return (
    <>
    <ListHeader listHeaderValues={listHeader} />
    <div className='list-body'>
      {listItems.map(item => (
        <ListItem itemValues={item} />
      ))}
    </div>
    </>
  )
}

export default List;