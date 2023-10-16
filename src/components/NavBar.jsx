import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"


const NavBar = () => {

   //value är innehållet i kundvagnen
 const value = useSelector( state => state.cart);

  return (
    <div id='navBar'>
    <button id='cartButton'>Cart ({value.length})</button>
    </div>
  )
}

export default NavBar