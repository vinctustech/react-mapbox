Getting Started
===============

Installation
------------

Using *react-mapbox* requires [React.js](https://reactjs.org/) >= 17.  The [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) library must also be installed.

```
npm install mapbox-gl @vinctus/react-mapbox
```

Example
-------

Here's a basic example.

```tsx
import React, { FC } from 'react'
import { Map, MapProvider, Marker } from '@vinctus/react-mapbox'

const accessToken = <Mapbox access token>

const App: FC = () => {
  return (
    <MapProvider>
      <Map
        style={{ height: '100vh' }}
        longitude={-73.597449290552}
        latitude={45.498740109868166}
        zoom={14}
        accessToken={accessToken}
      >
        <Marker longitude={-73.597449290552} latitude={45.498740109868166} />
      </Map>
    </MapProvider>
  )
}

export default App
```
