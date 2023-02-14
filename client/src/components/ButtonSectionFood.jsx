import Button from "react-bootstrap/Button";

export const ButtonSectionFood = (props) => {
  // console.log(props.textButton);
  return (
    <>
      <Button variant="outline-secondary">{props.textButton}</Button>
    </>
  );
};
