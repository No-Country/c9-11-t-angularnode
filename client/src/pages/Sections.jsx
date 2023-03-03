import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import { ListCategories } from "../components/Sections/ListCategories";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppContext } from "../context/AppContext";
import { ErrorBox } from "../components/ErrorBox/ErrorBox";
import  Skeleton  from "../ui/Skeleton/Skeleton";




export const Sections = () => {
  const { section } = useParams();
  const [data_sections, setDataSections] = useState([]);
  const { dispatch, state:{isLoading} } = useAppContext();

  const section_parse = (section) => {
    switch (section) {
      case "Bebidas":
        return "DRINKS";
      case "Comida":
        return "FOODS";
      case "Postres":
        return "DESSERTS";
      case "Extras":
        return "EXTRAS";
      default:
        return "DRINKS";
    }
  };

  const getCategoryBySection = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true })
      const resp = await axios.get(`${import.meta.env.VITE_API_URL}/categories/section/${section_parse(section)}`)
      setDataSections(resp.data.rows)
      dispatch({ type: "SET_LOADING", payload: false })
    } catch (err) {
      console.log(err)
      dispatch({ type: "SET_LOADING", payload: false })
      toast.error("Error al obtener categorías")
    }
  }



  useEffect(() => {
    getCategoryBySection()
  }, [section])
  

  return (
    <main
      style={{
        display: "grid",
        placeContent: "center",
        gap: "1.2rem",
        padding: "1rem 0 ",
        marginBottom: "2rem",
      }}
    >
      <Badge
        style={{
          display: "grid",
          placeContent: "center",
          backgroundColor: "#E38B29",
          width: "7.5rem",
          height: "2rem",
          fontWeight: "200",
          fontSize: "1rem"
        }}
        bg="#E38B29"
        text="white"
      >
        {section.toUpperCase()}
      </Badge>



     {(data_sections.length > 0) ? <ListCategories data_sections={data_sections} /> : isLoading? <Skeleton/> : <ErrorBox errorMessage={"No hay datos"}/>}

    </main>
  );
}

