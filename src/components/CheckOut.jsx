import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { actions } from "../features/cart"
import { useDispatch, useSelector } from "react-redux"
import { totalCost } from './Cart';


const CheckOut = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const value = useSelector( state => state.cart);
    const dispatch = useDispatch();
    const [payment, setPayment] = useState('Card');
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [postage, setPostage] = useState('postnord')
    const clear = () => dispatch(actions.clear());
    const [orderInfo, setOrderInfo] = useState(null);


    const handleSubmit = (e) => {

        e.preventDefault();
        setOrderInfo({
          name,
          address,
          payment,
          postage,
          totalCost: totalCost(value)
        });
        setOrderSubmitted(true);
        clear();
        
    };

    return (
        <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-movies">
            {value.map((item, index) => (
        <div key={index} className="cart-item">
          <img
            src={item.Poster}
            alt="Cover"
            onClick={() => openAndSetLightBox()}
           /> <p className="cart-name">{item.Title}</p>
        </div>
      ))}
        </div>
        {orderSubmitted ? (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Name: {orderInfo.name}</p>
          <p>Address: {orderInfo.address}</p>
          <p>Payment Method: {orderInfo.payment}</p>
          <p>Form of delivery: {orderInfo.postage}</p>
          <p>Price: {orderInfo.totalCost}</p>
          <p>Thanks</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <h2 className="checkout-cost">Total cost: {totalCost(value)}</h2>
         <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         </div>
         <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
         </div>
         <div className="form-group" >
            <h3>Payment Method:</h3>
            <label>
                <input
                type="radio"
                name="paymentMethod"
                value="Card"
                checked={payment === 'Card'}
                onChange={() => setPayment('Card')}
                />
                Card
            </label>
            <label>
                <input
                type="radio"
                name="paymentMethod"
                value="Applepay"
                checked={payment === 'Applepay'}
                onChange={() => setPayment('Applepay')}
                />
                Apple pay
            </label>
            <label>
                <input
                type="radio"
                name="paymentMethod"
                value="Klarna"
                checked={payment === 'Klarna'}
                onChange={() => setPayment('Klarna')}
                />
                Klarna
            </label>
            <h3>Form of delivery:</h3>
            <label>
                <input
                type="radio"
                name="Postage"
                value="postnord"
                checked={postage === 'postnord'}
                onChange={() => setPostage('postnord')}
                />
                Postnord
            </label>
            <label>
                <input
                type="radio"
                name="Postage"
                value="pickup"
                checked={postage === 'pickup'}
                onChange={() => setPostage('pickup')}
                />
                Pick up
            </label>


         </div>
          <button type="submit">Submit Order</button>
        </form>
      )}
    </div>   
    );
  };

export default CheckOut;