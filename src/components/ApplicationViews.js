import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider} from './locations/LocationProvider'
import { LocationList }from './locations/LocationList'

import { ProductProvider} from './Products/ProductProvider'
import { ProductList} from './Products/ProductList'



export const ApplicationViews = () => {
    return (
        <>
        <LocationProvider>
            <Route exact path="/">
                <LocationList /> 
            </Route>
        </LocationProvider>
        
        <LocationProvider>
            <Route exact path="/locations">
                <LocationList /> 
            </Route>
        </LocationProvider>
       

        <article className="Products">
        <ProductProvider>
            <Route exact path="/products">
                <ProductList />
            </Route>
        </ProductProvider>
        </article>  
        </>
    )
}