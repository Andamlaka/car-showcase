'use-client';

import { Hero, SearchBar } from '@/components'
import { CustomFilter } from '@/components'
import { fetchCars } from '@/Utillities'
import { CarCard } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import {ShowMore} from '@/components'

export default async function Home({ searchParams }) {
  // Make sure searchParams is properly awaited
  const { manufacturer, year, fuel, limit, model } = await searchParams;

  const allCars = await fetchCars({
    manufacturer: manufacturer || '',
    year: year || 2025,
    fuel: fuel || '',
    limit: limit || 12,
    model: model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x paddding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-3xl overflow-hidden font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10)>
                allCars.length
              }
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
  );
}
