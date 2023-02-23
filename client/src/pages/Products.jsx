import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
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

  // useEffect(() => {
  //   axios
  // }, [])

  return (
    <main
      style={{
        display: "grid",
        placeContent: "center",
        gap: "1rem",
        padding: "1rem 0 ",
        marginBottom: "2rem",
      }}
    >
      <Badge
        style={{
          display: "grid",
          placeContent: "center",
          backgroundColor: "#E38B29",
          width: "6.938rem",
          height: "1.875rem",
        }}
        bg="#E38B29"
        text="white"
      >
        {category}
      </Badge>

      {data_products.map((product, index) => {
        return (
          <Card
            style={{
              width: "20rem",
              border: "1px solid var(--primary)",
              backgroundColor: "var(--second)",
            }}
            key={index}
          >
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {product.name} <span>${product.price}</span>
              </Card.Title>
              <Card.Text style={{ fontSize: "12px", fontWeight: 300 }}>
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </main>
  );
};
