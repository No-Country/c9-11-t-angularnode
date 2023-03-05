import CarouselCutom from "../../components/carousel/CarouselCustom.jsx";
import { ListButtonsSectionFood } from "../../components/ListButtonsSectionFood/ListButtonsSectionFood.jsx";
import "./Home.css";

export const Home = () => {
  return (
    <main className="main">
      <CarouselCutom />
      <ListButtonsSectionFood />
    </main>
  );
};
