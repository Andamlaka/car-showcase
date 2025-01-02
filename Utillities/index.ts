
export async function fetchCars(){
    const headers = {
        'x-rapidapi-key': '4ff0da26f4msh0422bc0a64e4733p1fe625jsndad512db6c34',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
      });
const result = await response;
return result;
}