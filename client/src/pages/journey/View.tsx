import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import { IJourney } from '../../interfaces/journeys';
import './View.css';

function View() {

  const [items, setItems] = useState<IJourney[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/journeys/10/0`)
    .then((response) => response.json())
    .then((data: IJourney[]) => setItems(data))
  }, []);

  return (
    <div className='container'>
      <List listHeader={['Departure station', 'Return station', 'Distance', 'Duration']} listItems={items} />
    </div>
  );
}

export default View;