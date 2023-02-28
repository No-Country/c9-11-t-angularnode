import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppContext } from "../context/AppContext";
import { ErrorBox } from "../components/ErrorBox/ErrorBox";
import Skeleton from "../ui/Skeleton/Skeleton";
import { ProductDetail } from "../components/Products/ProductDetail";


export const Products = () => {
  const { categoryId } = useParams();
  const [data_products, setDataProducts] = useState([]);
  const { dispatch, state:{isLoading}} = useAppContext();
  const [categoryName, setCategoryName] = useState("");

  const getProductsByCategory = async () => {

    try {

      dispatch({ type: "SET_LOADING", payload: true })
      const resp = await axios.get(`${import.meta.env.VITE_API_URL}/products?categoryId=${categoryId}`);
      setDataProducts(resp.data.rows);
      if (resp.data.rows[0]) {
        setCategoryName(resp.data.rows[0].category.name)
      } else {
        setCategoryName("NO_DATA")
      }

      dispatch({ type: "SET_LOADING", payload: false })

    } catch (err) {
      console.log(err)
      toast.error("Error al obtener productos")
    }
  }

  useEffect(() => {
    getProductsByCategory()
  }, [categoryId])

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

        {categoryName != "NO_DATA" ? categoryName : "Error"}
      </Badge>

      

      { data_products.length > 0 ? data_products.map((product, index) => {
        return (
          <ProductDetail key={index} product={product} />
        );
      }) : isLoading? <Skeleton/> : <ErrorBox errorMessage={"No hay productos disponibles para esta categoría"} />}



    </main>
  );
};
