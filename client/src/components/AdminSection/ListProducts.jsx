import { useListProducts } from '../../hooks/useListProducts'
import Table from 'react-bootstrap/Table';
import './ListProducts.css'
import { ListAndSelectCategory } from './ListAndSelectCategory';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

export const ListProducts = () => {


const { products, setCategory } = useListProducts();



  return (
    <div className="admin_product_list">
        <div className='list_products_title'>
            <h5> Productos</h5>
        </div>

    <ListAndSelectCategory setCategory={setCategory} />


        <Table className="products_admin_table" responsive>
            <thead className="table_head_admin">
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Habilitado</th>
                    <th>Categoría</th>
                    <th>Imagen</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.isActive? <CheckCircleOutlineIcon sx={{color:'var(--primary)'}}/> : <ClearIcon sx={{color:'var(--primary)'}}/> }</td>
                        <td>{product.category.name}</td>
                        <td> <img src={product.imageUrl} alt={product.id} width={80} /></td>
                        
                        <td> <h2><EditIcon sx={{color:'var(--primary)',border:'1px solid',borderRadius:'15%'}}/></h2></td>
                        <td> <h2><VisibilityIcon sx={{color:'var(--primary)',border:'1px solid',borderRadius:'15%'}}/></h2></td>
                        <td> <h2><DeleteIcon sx={{color:'var(--primary)',border:'1px solid',borderRadius:'15%'}}/></h2></td> 
                    </tr>
                ))}
            </tbody>
        </Table>


    </div>

  )
}
