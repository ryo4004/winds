import { useState, useRef, useEffect, Children, isValidElement, cloneElement } from 'react'
import type { ReactElement, FC, ReactNode } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

import styles from './Map.module.scss'

const STATUS = {
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
} as const

type StatusType = typeof STATUS[keyof typeof STATUS]

type Center = { lat: number; lng: number }
type Zoom = number

const MAP_CENTER: Center = { lat: 37.464904, lng: 138.829251 }
const MAP_ZOOM: Zoom = 16

export const Map = () => {
  return <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ''} render={render} />
}

const render = (status: StatusType): ReactElement => {
  if (status === STATUS.LOADING) {
    return <h3>{status}</h3>
  }
  if (status === STATUS.FAILURE) {
    return <h3>{status}</h3>
  }
  return (
    <MapBody center={MAP_CENTER} zoom={MAP_ZOOM}>
      <Marker position={new google.maps.LatLng(MAP_CENTER.lat, MAP_CENTER.lng)} />
    </MapBody>
  )
}

const MapBody = ({ center, zoom, children }: { center: Center; zoom: Zoom; children: ReactNode }) => {
  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }))
    }
  }, [ref, map])
  return (
    <>
      <div ref={ref} className={styles.map} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}

const Marker: FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}
