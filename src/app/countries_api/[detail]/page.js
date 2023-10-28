'use client';
import {useState, useEffect} from 'react';
import data from '../data.json';
import Link from 'next/link';
import Image from 'next/image';

function CountryDetail({params}) {

  console.log(params);

  const [country, setCountry] = useState([]);
  console.log(country);

  useEffect(()=> {
    let result = data.find((item => item.alpha3Code === params.detail))
    setCountry(result)
  },[params])

  const borderCountries = (code) => {
    let des = data?.find((item) => item?.alpha3Code === code )
    return <span className='px-2 py-1 border mx-1'>{des.name}</span>
  }



  return (
    <div className='mt-5'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-center'>
          <div>
          <Link className='px-3 py-1 text-xs border' href="/countries_api">Back</Link>
          <Image 
          className='md:w-96 md:h-60 mt-20'
          src={country?.flags?.svg} width={200} height={100} alt="flag" />
          </div>
        </div>
        <div>
          <h2 className='font-bold mt-32 mb-8 text-lg'>{country?.name}</h2>
          <div className='w-full flex flex-wrap text-sm'>
            <div className='md:w-1/2'>
              <ul>
                <li>Native Name: {country?.nativeName}</li>
                <li>Population: {country?.population}</li>
                <li>Region: {country?.region}</li>
                <li>Subregion: {country?.subregion}</li>
                <li>Capital: {country?.capital}</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <ul>
                <li>Top Level Domain: {country?.topLevelDomain}</li>
                <li>Currencies: {country?.currencies?.length && country?.currencies[0]?.code} </li>
                <li>Languages: {
                  country?.languages?.length && country?.languages?.map((lng,i) => {
                      return <span key={i}>{lng.name},</span>
                  })
                }</li>
              </ul>
            </div>
          </div>
          <div className='my-10 text-sm'>
            <div className='md:flex'>
              <div className='w-56'>
                Border Countries:
              </div>
              <div className='flex flex-wrap gap-2'>
              { country?.borders?.length &&
                  country?.borders?.map((item,i)=> {
                  return borderCountries(item);})
              }
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
