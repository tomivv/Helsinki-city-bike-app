import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import { filterStations } from '../../helpers/helper';
import { IStation } from '../../interfaces/station';
import './StationSearch.css';

function StationSearch() {

  const [search, setSearch] = useState('');
  const [stations, setStations] = useState([]);
  const [list, setList] = useState<IStation[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/stations/`)
    .then((response) => response.json())
    .then((data: any) => {
      setStations(data);
    });
  }, []);

  function handleInputChange(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    setSearch(e.target.value);
    setList(filterStations(stations, e.target.value));
  }

  return (
    <div className='container'>
      <div className='search-input'>
        <label aria-readonly className='label-hidden'>Search</label>
        <input type="text" name="search" id="search" className='input-text-lg' placeholder='Station name, address, city' value={search} onChange={handleInputChange} />
      </div>
      {list.length > 0 ? <List listHeader={Object.keys(stations[0])} listItems={list} isLink={true}/> : <div></div>}
    </div>
  );
}

export default StationSearch;