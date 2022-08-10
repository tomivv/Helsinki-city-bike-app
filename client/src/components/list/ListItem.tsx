import React from 'react';
import { Link } from 'react-router-dom';
import { objectToListItemForm } from '../../helpers/helper';

interface props {
  itemValues: {
    id?: number
  },
  isLink: boolean
}

function ListItem({ itemValues, isLink }: props) {

  const items: string[] = objectToListItemForm(itemValues);

  if(isLink) {
    return (
      <Link to={`/station/${itemValues.id}`} className='list-item list-a'>
        <div className='list-item'>
          {items.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </Link>
    );
  }
  
  return (
    <div className='list-item'>
      {items.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default ListItem;