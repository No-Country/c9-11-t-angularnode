import { useCategories } from '../../../hooks/useCategories';
import Table from 'react-bootstrap/Table';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { SearchBar } from '../products/SearchBar';
import { Grid } from '@mui/material';
import AddNewCategory from './AddNewCategory';
import { useAppContext } from '../../../context/AppContext';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';
import translateSectionName from '../../../helpers/translateSectionName';
import '../products/ListProducts.css';

export const ListCategories = () => {
  useCategories();
  const { state: { isLoading, categories } } = useAppContext();

  return (
    <>
      <div className="admin_product_list">
        <div className='list_products_title'>
          <h5> <ProductionQuantityLimitsIcon color="warning"/> Categorías</h5>
        </div>

        <Grid sx={{ display: 'flex', flexDirection: 'row', background: 'var(--second)', padding: 0, marginTop: 3, border: 'solid 1px var(--primary)', borderRadius: "4px 4px 0px 0px" }}>
          <SearchBar /> <AddNewCategory />
        </Grid>

        <Table className="products_admin_table" responsive>
          <thead className="table_head_admin">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Sección</th>

              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {categories.length ? categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{translateSectionName(category.section)}</td>

                <td> <EditCategory category={ category } /> </td>
                <td> <DeleteCategory category={ category } /> </td>
              </tr>
            )) : isLoading ? <tr><td colSpan={10}>Cargando...</td> </tr> : <tr><td colSpan={10}>No hay productos</td></tr>}
          </tbody>
        </Table>
      </div>
    </>
  )
}