import * as React from "react";

import { Map } from "./map";

export const FlyToEvent = new Event('FlyToEvent');
export const MapContext = React.createContext({ lat: -27.498025783712994, lng: 53.04370816437722 });

export interface MainProps {
}

export class Main extends React.Component<MainProps, {}> {
    constructor(props: MainProps) {
      super(props);
    }
    handleFlyTo(location: any) {
      // 
      // FlyToEvent.di
    }



    /* interface ideas:
      have a list of locations with coorinates and allow users to input its latitude and longitude in context
    */


    render() {

      var thing: string | null = "fgfsd"
      if (thing != null)  {
        thing + "sfd"
      }

      return (
        <MapContext.Provider value={{ lat: -27.498025783712994, lng: 53.04370816437722 }}>
          <Map />
          <button onClick={ this.handleFlyTo.bind(this, { lng: 153.0437, lat: -27.497925 }) }>Fly To Library</button>
          <button onClick={ this.handleFlyTo.bind(this, { lat: -27.495646, lng: 153.048425 }) }>Fly To Park</button>
        </MapContext.Provider>
      );
    }
  }

