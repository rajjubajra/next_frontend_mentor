import Image from 'next/image';
import Link from 'next/link';

function CountryListing({data}) {
  console.log(data)
  return (
    <div className='flex gap-10 flex-wrap justify-center'>
      {
        data && data.length && data?.map((item, i) => {
          return <Link href={`/countries_api/${item.alpha3Code}`}
            key={i} className="w-60 h-80 bg-white shadow-sm">
            <Image 
            className='w-60 h-36'
            src={item.flags.svg} width={200} height={100} alt="flags" />
            <div className='p-5'>
            <h3 className='font-bold' >{item.name}</h3>
            <div className='my-5 text-xs'>
              <ul>
                <li>Population: <span className='font-light'>{item.population}</span></li>
                <li>Region: <span className='font-light'>{item.region}</span></li>
                <li>Capital: <span className='font-light'> {item.capital}</span></li>
              </ul>
            </div>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default CountryListing
