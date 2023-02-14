import Button from "react-bootstrap/Button";

export const ButtonSectionFood = ({ textButton }) => {
  // console.log(props.textButton);

  return (
    <>
      <Button
        variant="outline-secondary"
        size="lg"
        style={{ width: "320px", height: "70px" }}
      >
        {textButton}
      </Button>
    </>
  );
};
