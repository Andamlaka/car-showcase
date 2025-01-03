'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomeButtton from './CustomeButton'
import { calculateCarRent, generateCarImageUrl } from '@/Utillities'
import CarDetails from './CarDetails'
interface CarCarProps {
  car: CarProps
}
const CarCard = ({ car }: CarCarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car
  const [isOpen, setIsOpen] = useState(false)
  const CarRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>

        {CarRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div
          className="flex group-hover:invisible w-full
         justify-between text-gray"
        >
          <div
            className="flex flex-col justify-center
             items-center gap-2"
          >
            <Image
              src="/public/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div
            className="flex flex-col justify-center
             items-center gap-2"
          >
            <Image src="/public/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div
            className="flex flex-col justify-center
             items-center gap-2"
          >
            <Image src="/public/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomeButtton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] overflow-hidden leading-[17px] font-bold"
            rightIcon="/public/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} car={car} closeModel={() => setIsOpen(false)} />
    </div>
  )
}

export default CarCard
