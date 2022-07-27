import React from 'react';
import { IJourney } from '../../interfaces/journeys';

interface props {
  itemValues: IJourney
}

function ListItem({ itemValues }: props) {
  return (
    <div className='list-item'>
      <p>{itemValues.departure_station}</p>
      <p>{itemValues.return_station}</p>
      <p>{(itemValues.distance / 1000).toFixed(2)} km</p>
      <p>{(itemValues.duration / 60).toFixed(2)} min</p>
    </div>
  );
}

export default ListItem;