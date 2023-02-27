import { useProducts } from '../../../hooks/useProducts'
import Table from 'react-bootstrap/Table';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import './ListProducts.css'
import { ListAndSelectCategory } from '../ListAndSelectCategory';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteProduct from './DeleteProduct';
import ChangeVisibility from './ChangeVisibility';
import EditProduct from './EditProduct';
import AddNewProduct from './AddNewProduct';
import { useAppContext } from '../../../context/AppContext';
import { useMemo } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { Grid } from '@mui/material';
import { SearchBar } from './SearchBar';
export const ListProducts = () => {
    useCategories();
    const { state: { isLoading } } = useAppContext();
    const { products, setCategory, setPage } = useProducts();


    const memoizedProducts = useMemo(() => products, [products]);

    return (
        <>

            <div className="admin_product_list">


                <div className='list_products_title'>
                    <h5> <ProductionQuantityLimitsIcon color="warning"/> Productos</h5>
                </div>

                <ListAndSelectCategory setCategory={setCategory} />

                <Grid sx={{ display: 'flex', flexDirection: 'row', background: 'var(--second)', padding: 0, marginTop: 3, border: 'solid 1px var(--primary)', borderRadius: "4px 4px 0px 0px" }}>
                    <SearchBar /> <AddNewProduct />
                </Grid>
                <Table className="products_admin_table" responsive>
                    <thead className="table_head_admin">
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Descuento</th>
                            <th>Habilitado</th>
                            <th>Categoría</th>

                            <th>Opciones</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>
                        {memoizedProducts.length ? memoizedProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>${product.discount}</td>
                                <td>{product.isActive ? <CheckCircleOutlineIcon sx={{ color: 'var(--primary)' }} /> : <ClearIcon sx={{ color: 'var(--primary)' }} />}</td>
                                <td>{product.category.name}</td>


                                <td> <EditProduct product={product} /> </td>
                                <td> <ChangeVisibility product={product} /></td>
                                <td> <DeleteProduct product={product} /> </td>
                            </tr>
                        )) : isLoading ? <tr><td colSpan={10}>Cargando...</td> </tr> : <tr><td colSpan={10}>No hay productos</td></tr>}
                    </tbody>
                </Table>



            </div>
        </>

    )
}
