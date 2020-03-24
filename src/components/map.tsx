import * as React from "react"
import * as MapBox from "mapbox-gl"

import { MapContext } from "./main"
/*

Fly to event callable from a high level component
click on event that sends a notification/trigger to the top level component
*/

export interface MapProps {
}

export function Map() {

    // private map: MapBox.Map | null = null

    const [map, setMap] = React.useState();
    React.useEffect(() => {
        setMap(new MapBox.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: { lng: 153.04370816437722, lat: -27.498025783712994 },
            zoom: 19,
            pitch: 45,
            antialias: true,
            accessToken: 'pk.eyJ1IjoiZ3JhYm9yZW5rbyIsImEiOiJjazdrenBmZmgwMXhjM2xvMDUxczB3bXdrIn0.TuJeI3ekW2M3_ArY0gMeVA'

        }))
        /* TODO add a prop/value for the hook to listen to, 
        and only create a new map if the map is falsy */
    }, [])
    console.log(map);

    // cleaner way to fetch context updates, we should use this to update the map
    const value = React.useContext(MapContext);

    function onClick() {
    map.flyTo({
        center: [
            value.lat,
            value.lng
        ]
    })
}

    console.log(MapContext, MapContext.Consumer)

    return (
                <div>
                    INSERT MAP
                    <button onClick={onClick}> fly to the sea </button>  
                <div id='map' style={{ width: '400px', height: '300px' }} />    
                </div>
    )
}

//////////////////////////