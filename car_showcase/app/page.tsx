import { CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default  async function Home() {
  const allcars = await fetchCars();

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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
