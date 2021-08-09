import React from 'react'
import './KandyKorner.css'

import { LocationProvider } from './locations/LocationProvider'
import { LocationList } from './locations/LocationList'
// import { Location } from './locations/Location'

import { ProductProvider } from './Products/ProductProvider'
import { ProductList } from './Products/ProductList'

export const KandyKorner = () => {
   return (
   <>
    <h1>Kandy Korner</h1>
    <small>Welcome to the 300 Monkey dr location!</small><br/>
    <small>-- Visit our <a href="#">2695 Adams Avenue</a> location!</small>

    <address>
        <div></div>
    </address>

    <h2>Locations</h2>
    <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        {/* <Location /> */}
    </article>

    <h2>Products</h2>
    <article className="Products">
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </article>
   </>
   )
}