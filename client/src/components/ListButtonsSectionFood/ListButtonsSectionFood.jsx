import { ButtonSectionFood } from "../ButtonSectionFood/ButtonSectionFood";
import "./ListButtonsSectionFood.css";

const sections = ["Bebidas", "Comida", "Postres", "Extras"];

export const ListButtonsSectionFood = () => {
  return (
    <section>
      <div className="list-buttons-section">
        {sections.map((section, index) => (
          <ButtonSectionFood textButton={section} key={index} />
        ))}
      </div>
    </section>
  );
};
