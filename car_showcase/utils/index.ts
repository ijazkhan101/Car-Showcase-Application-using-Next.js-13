export {};

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "bd55e85bfemsh3f50730f5da61a6p1f69a8jsn037900a680af",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
