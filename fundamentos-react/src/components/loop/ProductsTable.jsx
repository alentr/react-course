import './ProductsTable.css';

import products from "../../data/products";

function getRows() {
    return products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
}

const ProductsTable = () => {
    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;