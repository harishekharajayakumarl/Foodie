import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import cart from "../components/images/cart.png";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="text-center m-4 p-4">
            <div className="text-right">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 && (
                    <>
                        <img src={cart} alt="Empty Cart" className="mx-auto w-48 h-48 mb-4" />
                        <h1>Your cart is empty. Add items to cart!</h1>
                    </>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
