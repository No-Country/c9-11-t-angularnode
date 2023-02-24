import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useListProducts } from '../../hooks/useListProducts'
import Table from 'react-bootstrap/Table';
import './ListProducts.css'

export const ListProducts = () => {

const { isAuthenticated } = useAuth();
const { products } = useListProducts();



  return ( isAuthenticated &&
    <div className="admin_product_list">
        <div className='list_products_title'>
            <h5> Productos</h5>
        </div>

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
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.isActive? "SI" : "NO" }</td>
                        <td>{product.categoryId}</td>
                        <td>{product.imageUrl}</td>
                    </tr>
                ))}
            </tbody>
        </Table>


    </div>

  )
}
