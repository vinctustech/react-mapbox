Map
===

*Map* is the React component that wraps a Mapbox GL JS [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/).

Map Object
----------

The *Map* object can be accessed via a [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) or the [useMap](api/usemap) hook. The Mapbox Map instance is returned in either case provided access to instance members.

Props
-----

accessToken: string
antialias?: true
children?: ReactNode
fallback?: ReactNode
id?: string
longitude: number
latitude: number
logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
maxPitch?: number
mapStyle?: string
onLoad?: (e: import('mapbox-gl').MapboxEvent) => void
onDragEnd?: (e: ViewStateChangeEvent) => void
onMoveEnd?: (e: ViewStateChangeEvent) => void
onZoomEnd?: (e: ViewStateChangeEvent) => void
ref?: RefAttributes<mapboxgl.Map | null>
style?: CSSProperties
zoom: number
