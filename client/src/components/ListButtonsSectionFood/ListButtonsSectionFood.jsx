import { ButtonSectionFood } from "../ButtonSectionFood/ButtonSectionFood";
import "./ListButtonsSectionFood.css";

const categories = ["Bebidas", "Comida", "Postres", "Extras"];

export const ListButtonsSectionFood = () => {
  return (
    <section>
      <div className="list-buttons-section">
        {categories.map((category, index) => (
          <ButtonSectionFood textButton={category} key={index} />
        ))}
      </div>
    </section>
  );
};
