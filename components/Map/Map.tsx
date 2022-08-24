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

export const Map = ({ mapStyles, className }: { mapStyles: google.maps.MapTypeStyle[]; className?: string }) => {
  return <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ''} render={render(mapStyles, className)} />
}

const render = (mapStyles: google.maps.MapTypeStyle[], className?: string) => {
  return (status: StatusType): ReactElement => {
    if (status === STATUS.LOADING) {
      return <div className={styles.loading}>読み込み中...</div>
    }
    if (status === STATUS.FAILURE) {
      return <div className={styles.failure}>読み込みに失敗しました</div>
    }
    return (
      <MapBody center={MAP_CENTER} zoom={MAP_ZOOM} mapStyles={mapStyles} className={className}>
        <Marker position={new google.maps.LatLng(MAP_CENTER.lat, MAP_CENTER.lng)} />
      </MapBody>
    )
  }
}

const MapBody = ({
  center,
  zoom,
  mapStyles,
  className,
  children,
}: {
  center: Center
  zoom: Zoom
  mapStyles: google.maps.MapTypeStyle[]
  className?: string
  children: ReactNode
}) => {
  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom, disableDefaultUI: true, styles: mapStyles }))
    }
  }, [ref, map])
  return (
    <>
      <div ref={ref} className={className || styles.map} />
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
