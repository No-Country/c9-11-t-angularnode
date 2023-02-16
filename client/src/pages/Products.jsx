import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const data_products = [
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
  {
    name: "Large",
    price: 580,
    description: "Large Pizza with 4 toppings and 2 drinks",
  },
];

export const Products = () => {
  const { category } = useParams();

  return (
    <main
      style={{
        display: "grid",
        placeContent: "center",
        gap: "1rem",
        padding: "1rem 0 ",
      }}
    >
      {data_products.map((product) => {
        return (
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {product.name} <span>${product.price}</span>
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </main>
  );
};
