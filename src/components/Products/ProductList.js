import React , {useContext, useEffect} from 'react'
import { ProductContext } from './ProductProvider'
import './Product.css'

export const ProductList = () =>{
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {getProducts()}, [])

    return (
        <section className="products">
            {
            products.map(product => {
                return (
                    <div className="product" id={`product--${product.id}`} key={product.id}>
                        <div className="product_name">
                            <h3>Product Name:</h3>
                            {product.name}
                        </div>
                        <div className="product_price">
                            <h3>Product Price:</h3>
                            {product.price}
                        </div>
                        <div className="product_type">
                            <h3>Product Type:</h3>
                            {product.productType.type}
                        </div>
                    </div>
                )
            })
            } 
        </section>
    )
}




