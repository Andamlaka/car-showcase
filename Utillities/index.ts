import { CarProps } from '@/types';

export async function fetchCars() {
    const headers = {
      'x-rapidapi-key': '4ff0da26f4msh0422bc0a64e4733p1fe625jsndad512db6c34',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
  
    try {
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json(); // Parse JSON response
      return result;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
  export const calculateCarRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05;
    
    const mileageRate = city_mpg * mileageFactor;   
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
  };
  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', "img");
    url.searchParams.append('make', make || 'unknown');
    url.searchParams.append('modelFamily', model?.split(" ")[0] || model || 'unknown');
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', year ? `${year}` : '2020');
    url.searchParams.append('angle', angle || 'front');
  
    return url.toString();
  };
  

  