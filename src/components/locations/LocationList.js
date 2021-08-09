import React , {useEffect, useContext} from 'react'
import { LocationContext } from './LocationProvider'
import './Location.css'

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {getLocations()}, [])

    return (
        <section className="locations">
            {
            locations.map(location => {
                return (
                    <div className="location" id={`location--${location.id}`} key={location.id}>
                        <div className="location_address">
                            <h3>Address:</h3> 
                            {location.address}
                        </div>
                        <div className="location_squareFootage">
                            <h3>Square footage:</h3> 
                            {location.squareFootage}
                        </div>
                        <div className="location_handicapAccessible">
                            <h3>Handicap accessible:</h3>
                            {location.handicapAccessible ? "Yes" : "No"}
                        </div>
                    </div>
                )
            })
            }
        </section>
    )
}