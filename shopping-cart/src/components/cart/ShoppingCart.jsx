import { useState } from "react";
import CartItem from "./CartItem";
import BillDetails from "./BillDetails";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Alert from "../Alert";

const ShoppingCart = () => {
	const cartItems = useSelector((state) => state.cart);
    const total_order = cartItems.reduce((total, item) => total += item.quantity, 0);

	return (
		<>
			<Navbar quantity={total_order}/>
			<main className="py-16">
				<div className="container 2xl:px-8 px-2 mx-auto">
					<h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
					<div className="cartListContainer">
						<div className="space-y-6">
                            {cartItems.length > 0?
                                cartItems.map(item => (
									item.quantity > 0 &&
                                    (<CartItem key={item.id} id={item.id} productName={item.productName} imageUrl={item.imageUrl} productCategory={item.productCategory} price={item.price} quantity={item.quantity}/>)
                                )): (<h1>No Orders yet</h1>)
                            }
						</div>
						<div>
							<BillDetails showPopup setShowPopup/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default ShoppingCart;
