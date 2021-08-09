import React , {createContext, useState} from 'react'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () =>{
        return fetch("http://localhost:8008/products?_expand=productType")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = (productPbj) =>{
        return fetch("http://localhost:8008/products",{
            method: "Post",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productPbj)
        })
        .then(getProducts)
    }

    return (
        <ProductContext.Provider value={{products, getProducts, addProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}