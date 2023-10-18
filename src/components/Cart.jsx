import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"
import { Link } from "react-router-dom";


//Tillfälligt bara för att testa kundvagnen
const Cart = () => {

    //value är innehållet i kundvagnen
    const value = useSelector( state => state.cart);
    //Behövs för tillgång till kundvagnen
    const dispatch = useDispatch();
    //Funktioner att använda för kundvagnen
    const add = () => dispatch(actions.add());
    const clear = () => dispatch(actions.clear());





    return (
        <div>
            {value.map((item, index) => (
        <div key={index} className="cart-item">
          <img
            src={item.Poster}
            alt="Cover"
            onClick={() => openAndSetLightBox()}
           /> <p className="cart-name">{item.Title}</p>
        </div>
      ))}
            Total cost: {value.length * 100}<br/>
            <button onClick={clear}>Empty cart</button>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>  
            
        </div>
    )
}

export default Cart;