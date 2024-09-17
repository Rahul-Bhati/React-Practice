import React from 'react'
import { useSelector } from 'react-redux';
import { removeItem, clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeItem());
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <>
            <div className="w-6/12 mx-auto flex justify-between items-center font-bold text-2xl">Cart <button onClick={handleClearCart}>Clear</button></div>
            {cartItems.length === 0 ? <h1 className="text-2xl font-bold text-center">Cart is empty</h1> :

                cartItems.map((item, index) => {
                    return (
                        <div key={index} className="pb-2 w-6/12 mx-auto">
                            <div className="flex justify-between pt-4 p-4">
                                <div className="p-2 w-9/12">
                                    <h3 className="font-bold">{item}</h3>
                                    <p className="font-thin">A rich and creamy Indian delicacy, bursting with flavors and cooked to perfection.</p>
                                    <span>{19000 / 100} ₹</span>
                                </div>
                                <div className="h-auto w-3/12 rounded-lg object-fill relative">
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/vw47vue5l6ykx6tl4zwk" className="rounded-lg object-cover relative" />
                                    <button className="bg-green-400 text-white px-4 py-2 rounded-lg absolute bottom-0 left-5 font-bold" onClick={handleRemove}>remove</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )

                })
            }
        </>
    )
}

export default Cart