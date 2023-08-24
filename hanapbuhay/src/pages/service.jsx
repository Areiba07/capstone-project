import Categories from "../components/categories";
import Carousel from "../components/carousel";
import SearchComponent from "../components/search";

export default function Services() {
    return (
      <>
        <div className="justify-center"><SearchComponent /></div>
        <Carousel />
        <Categories/>
      </>
    );
  }