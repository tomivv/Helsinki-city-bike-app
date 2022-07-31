import React from 'react';
import { capitalizeFirstLetter } from '../../helpers/helper';

interface props {
  listHeaderValues: string[]
}

function ListItem({ listHeaderValues }: props) {
  return (
    <div className='list-header'>
      {listHeaderValues.map(item => (
        <p>{capitalizeFirstLetter(item).replace('_', ' ')}</p>
      ))}
    </div>
  );
}

export default ListItem;