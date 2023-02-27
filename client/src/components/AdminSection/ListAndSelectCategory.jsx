import { Select, MenuItem,InputLabel,FormControl } from "@mui/material";
import { useAppContext } from "../../context/AppContext";

export const ListAndSelectCategory = ({setCategory}) => {

  const { state: { categories } } = useAppContext();

  return (<>
  <FormControl fullWidth>
   <InputLabel color={'warning'}>Filtrar Categoría</InputLabel>
   <Select label="Filtrar Categoria" color={'warning'} onChange={(e)=>setCategory(e.target.value)}>
    <MenuItem  value={'default'}>Todos</MenuItem>
    {categories.map((category) => (
      <MenuItem  key={category.id} value={category.id}>{category.name}</MenuItem>
    ))}
  </Select>
  </FormControl></>
  )
}
