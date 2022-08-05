import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../../components/box/Box';

interface IStation {
  name: string,
  address: string,
  city: string,
}

interface IFetch {
  stationDetails: IStation,
  stationCounts: {
    departures: string,
    returned: string
  }
}

function Station() {

  const { id } = useParams();

  const [station, setStation] = useState<IFetch>({stationCounts: { departures: '', returned: ''}, stationDetails: {name:'', address: '', city: ''}});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/stations/station/${id}`)
    .then((response) => response.json())
    .then((data: IFetch) => {
      setStation(data);
    });
  }, [id]);

  if (station.stationDetails.name === '') {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    )
  }
  
  return (
    <div className='container'>
      <h1 className='title'>{station.stationDetails.name}</h1>
      <h2 className='sub-title'>{station.stationDetails.address}{station.stationDetails.city !== ' ' && ', '}{station.stationDetails.city}</h2>
      <div className='box-container'>
        <Box title='Journeus started' body={station.stationCounts.departures} />
        <Box title='Journeys ended' body={station.stationCounts.returned} />
      </div>
    </div>
  );
}

export default Station;