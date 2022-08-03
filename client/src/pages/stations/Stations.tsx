import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import './Stations.css';

function Stations() {

  const [items, setItems] = useState<object[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/stations/10/0`)
    .then((response) => response.json())
    .then((data: object[]) => setItems(data))
  }, []);

  if (items.length <= 0) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    )
  }
  console.log(items);
  
  return (
    <div className='container'>
      <List listHeader={Object.keys(items[0])} listItems={items} />
    </div>
  );
}

export default Stations;