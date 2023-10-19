import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"
import { Link } from 'react-router-dom';


const NavBar = () => {

   //value är innehållet i kundvagnen
 const value = useSelector( state => state.cart);

  return (
    <div id='navBar'>
      <Link to="/">
        <button id='homeButton'>Home</button>
      </Link>
      <Link to="/cart">
        <button id='cartButton'>Cart ({value.length})</button>
      </Link>
    </div>
  )
}

export default NavBar