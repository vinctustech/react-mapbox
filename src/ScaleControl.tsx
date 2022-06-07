import { FC, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { useMap } from './Map'
import { ControlPosition } from './types'

export type ScaleControlProps = {
  position?: ControlPosition
}

export const ScaleControl: FC<ScaleControlProps> = ({ position = 'top-right', ...options }) => {
  const { map } = useMap()
  const optionsString = JSON.stringify(options)

  useEffect(() => {
    const control = new mapboxgl.ScaleControl()

    if (map) {
      map.addControl(control, position)
    }

    return () => {
      map?.removeControl(control)
    }
  }, [position, optionsString, map])

  return null
}
