import React from 'react'
import imagen from './cart.png'
import './CartWidget.css'

export default function CartWidget( { cant }) {
  return (
    <div>
        <img src={imagen} alt='cart' className="imagenCart" /><span>{ cant }</span>
    </div>
  )
}
