import React from 'react';
import { objectToListItemForm } from '../../helpers/helper';

interface props {
  itemValues: object
}

function ListItem({ itemValues }: props) {

  const items: string[] = objectToListItemForm(itemValues);

  return (
    <div className='list-item'>

      {items.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default ListItem;