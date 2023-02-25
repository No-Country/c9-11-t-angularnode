import { useEffect, useState } from "react"
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const ListAndSelectCategory = ({setCategory}) => {

const [categories, setCategories] = useState([]);

const getCategories = async () => {
    try {
        const response = await axios.get(`${apiUrl}/categories`)
        setCategories(response.data.rows);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getCategories()
}, [])

  return (<>
  
   <select className="form-select" aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>
    <option selected value={'default'}>Elegir categoria</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>{category.name}</option>
    ))}
  </select></>
  )
}
