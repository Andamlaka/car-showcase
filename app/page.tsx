'use client'
import { useEffect, useState } from 'react'
import { Hero, SearchBar } from '@/components'
import { CustomFilter } from '@/components'
import { fetchCars } from '@/Utillities'
import { CarCard } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { ShowMore } from '@/components'

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //search State
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  //filter state
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

  //limit state
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        model: model || '',
        limit: limit || 10,
        fuel: fuel || '',
      })
      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [manufacturer, model, year, fuel, limit])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x paddding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-3xl overflow-hidden font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar 
             setModel={setModel}
             setManufacturer={setManufacturer}
          />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}
             setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} 
            setFilter={setYear}/>
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>
            {
              loading && (
                <div className="mt-16 w-full flex-center">
                  <img src="/public/loader.svg" alt="loader"
                  width={50}
                  height={50}
                  className='object-contain' />
                </div>
              )
            }
            <ShowMore
              pageNumber={Math.ceil(limit / 10)}
              isNext={limit < allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}

