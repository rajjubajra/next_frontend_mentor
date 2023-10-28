'use client';
import {useState, useEffect} from 'react';
import data from './data.json';
import CountryListing from './CountyListing'; 
import Loading from '../loading';

function CountriesApi() {

  //console.log(data);

  const [search, setSearch] = useState('');
  console.log("Search", search);

  const [listing, setListing] = useState([]);
  const [regionNames, setRegionNames] = useState([]);
  console.log(regionNames);


  /** SELECTING REGIONS */
  useEffect(()=> {
    const continents = Object.groupBy(data, ({region}) => region);
    const regions = Object.keys(continents);
    setRegionNames(regions);
  },[])



  const [selectedOption, setSelectedOption] = useState('');
  console.log("selected option",selectedOption)

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }



  /** SEARCH AND REGION SELECTION LISTING UPDATE */
  useEffect(()=> {

    if(selectedOption === "" || search === ""){
      setListing(data)
    }

    if(selectedOption !== ""){
      let result = data.filter(o => o.region.toLowerCase().includes(selectedOption.toLocaleLowerCase()))
      console.log("SELECTION OPTION: ",result);
      setListing(result);
    }

    if(search !== ""){
      let search_res = data.filter(o => o.name.toLowerCase().includes(search.toLocaleLowerCase()))
      console.log("SEARCH RESULT: ",search_res);
      setListing(search_res);
    }

  },[search, selectedOption])


  if(!listing) return <Loading />

  return (
    <div className='mx-5'>
      {/** SEARCH AND DROPDOWN FIELD */}
      <div className='w-full md:flex justify-between'>
          <div className='my-10 md:mx-10 flex justify-center'>
            <input 
            className='px-4 py-2 md:w-96 placeholder:font-light placeholder:text-xs shadow-sm'
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search for country...'/>
          </div>
          <div className='my-10 mx-10'>
              <select 
                className="font-light p-4 text-sm"
                valule={selectedOption} onChange={handleOptionChange}
                name="region">
                  <option value="">Filter by region</option>
                {
                    regionNames?.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                  })
                }
              </select>
          </div>
      </div>


      {/** List of All Countries */}
      <div>
        <CountryListing data={listing} />
      </div>
    </div>
  )
}

export default CountriesApi