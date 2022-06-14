Map
===

*Map* is the React component that wraps a Mapbox GL JS [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/).

Map Object
----------

The *Map* object can be accessed via a [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) or the [useMap](api/usemap) hook. The Mapbox Map instance is returned in either case provided access to instance members.

Props
-----

### General

#### `accessToken` string

#### `fallback` ReactNode

#### `id` string

Map container id.

#### `ref` RefAttributes<mapboxgl.Map | null>

### Layout

#### `style` CSSProperties

### Camera Props

#### `longitude` number

#### `latitude` number

#### `zoom` number

### Styling

#### `antialias` boolean (optional)

#### `logoPosition` 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

#### `maxPitch` number

#### `mapStyle` string

### Callbacks

#### `onLoad` (e: import('mapbox-gl').MapboxEvent) => void

#### `onDragEnd` (e: ViewStateChangeEvent) => void

#### `onMoveEnd` (e: ViewStateChangeEvent) => void

#### `onZoomEnd` (e: ViewStateChangeEvent) => void
