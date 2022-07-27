import React from 'react';

interface props {
  listHeaderValues: string[]
}

function ListItem({ listHeaderValues }: props) {
  return (
    <div className='list-header'>
      {listHeaderValues.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default ListItem;