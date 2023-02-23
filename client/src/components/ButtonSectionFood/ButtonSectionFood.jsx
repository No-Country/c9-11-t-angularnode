import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const ButtonSectionFood = ({ textButton }) => {
  // console.log(props.textButton);

  const product = `products/${textButton}`;

  return (
    <>
      <Link to={product}>
        <Button
          variant="outline-secondary"
          size="lg"
          style={{
            width: "320px",
            height: "70px",
            backgroundColor: "var(--second)",
            color: "black",
            border: "1px solid var(--primary)",
          }}
        >
          {textButton}
        </Button>
      </Link>
    </>
  );
};
