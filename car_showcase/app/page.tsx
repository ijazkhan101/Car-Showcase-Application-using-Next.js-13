import { CustomFilter, SearchBar ,CarCard} from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default  async function Home() {
  const allcars = await fetchCars();
  const isDataEmpty = !Array.isArray(allcars) || allcars.length<1 || !allcars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue </h1>
          <p>Explore the cars you might Like </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        { !isDataEmpty ? (
          <section>
           <div className="home__cars-wrapper">
            {allcars?.map((car) => (
              <CarCard car={car} />         
              ))}
           </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black"> Oops , no results</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
