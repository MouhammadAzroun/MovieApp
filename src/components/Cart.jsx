import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"



const Cart = () => {

    //Behövs för tillgång till kundvagnen
    const value = useSelector( state => state.cart);
    const dispatch = useDispatch();
    //Funktioner att använda för kundvagnen
    const add = () => dispatch(actions.add("movie"));
    const clear = () => dispatch(actions.clear());





    return (
        <div>
            Cart: {value}<br/>
            <button onClick={add}>Add movie</button>
            <button onClick={clear}>Clear cart</button>
        </div>
    )
}

export default Cart;