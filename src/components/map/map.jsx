
import './map.scss'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Pin from '../pin/pin';

function Map({items}){
  return (
    <MapContainer center={items.length === 1 ? [items[0].latitude, items[0].longitude] : [21.149850,79.080598]} zoom={5} scrollWheelZoom={false} className='map'>
  <TileLayer
    attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> contributors'
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=XRO7L6me2n2Rn2AN9kF7"
  />
  {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
</MapContainer>
  )
}

export default Map