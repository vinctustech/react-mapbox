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

```javascript
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Map, MapProvider, Marker } from '@vinctus/react-mapbox'

const accessToken = '<Mapbox access token>'

ReactDOM.render(
    <React.StrictMode>
      <MapProvider>
        <Map
          style={{ height: '100vh' }}
          longitude={-73.597449290552}
          latitude={45.498740109868166}
          zoom={14}
          accessToken={accessToken}
        />
      </MapProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
```

Making Changes
--------------

Use the following steps to test and publish a new version of the
library.
1. after coding the desired changes, add some code to the test app (in the
   `test` folder) to test the changes.
1. type `tsc` (in the root of the repo) to compile the library to
   the `dist` folder.
1. type `cd test` and then `npm start` to run the test app
1. when ready to publish, return to the root of the repo, change the
   version number in the `package.json` (of the library, not of the test
   app)
1. type `npm publish` to publish the contents of the `dist` folder
   (created in step 2) only. Specifically, we don't want the test app
   to be published as part of the library
1. commit the changes

Testing
-------

There is a folder called `test` which contains a very simple test
application, which also serves as an example of how to use the library.
The `package.json` (of the test app) causes symlinks to be created for
the react dependencies and the `react-mapbox` library itself. This
means that the test application can be used to test changes to the
library immediately without having to do `npm publish` or `npm pack`,
and then `npm install` over and over. `npm install` only needs to be
typed once for it to work. The test app exercises many of
the features of the library in a very simple way. Here is a screenshot.

For the test app to work, you need to create a `.env` file in the
`test` folder with your Mapbox API key as follows:

```
REACT_APP_MAPBOX_API_KEY=<Mapbox API key>
```

You also need to type `npm i` just once in the `test` folder. For
subsequent changes to library code, just refresh the browser.

Here is how the test app should appear.

![](images/example.png)
