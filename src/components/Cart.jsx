import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"


//Tillfälligt bara för att testa kundvagnen
const Cart = () => {

    //value är innehållet i kundvagnen
    const value = useSelector( state => state.cart);
    //Behövs för tillgång till kundvagnen
    const dispatch = useDispatch();
    //Funktioner att använda för kundvagnen
    const add = () => dispatch(actions.add("Movie"));
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