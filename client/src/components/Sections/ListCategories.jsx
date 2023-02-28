import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

export const ListCategories = ({data_sections}) => {
  return (
    <>
    {data_sections.map((category, index) => {
        return (

        <Link to={`${category.id}`} style={{textDecoration:'none',color:'#000'}}> 
          <Card
            
            className="card_products"
            style={{
                width: "20rem!important",
                border: "1px solid var(--primary)",
                backgroundColor: "var(--second)",
              }}
            key={index}
          >
            <Card.Body>
              <Card.Title
                style={{
                 
                  justifyContent: "left",
                 
                 
                }}
                              >
                {category.name}
              </Card.Title>
            </Card.Body>
          </Card>
            </Link>
        );
      })}
      </>
  )
}
