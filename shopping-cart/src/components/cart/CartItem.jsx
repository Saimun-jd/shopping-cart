import { useDispatch, useSelector } from "react-redux";
import {
	decrementItem,
	incrementItem,
	removeFromCart,
} from "../../redux/cartSlice";
import { decrementOrder, incrementOrder } from "../../redux/productSlice";
import Alert from "../Alert";
import { useEffect, useState } from "react";

const CartItem = ({
	id,
	productName,
	imageUrl,
	productCategory,
	price,
	quantity,
}) => {
	const [showStockout, setStockOut] = useState(false);
	const stocks = useSelector((state) => state.product);

	const dispatch = useDispatch();
	var item = stocks.find((item) => item.id === id);
	const stock = item.quantity;

	useEffect(() => {
      const timeout = setTimeout(() => {
        setStockOut(false);
      }, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [showStockout]);

	const handleClick = (action) => {
		if (action.type === "increment") {
			if (stock > 0) {
				dispatch(incrementItem(id));
				dispatch(incrementOrder(id));
			}
      if(stock === 0) setStockOut(true);

		} else if (action.type === "decrement") {
			dispatch(decrementItem(id));
			dispatch(decrementOrder({ id, value: 1 }));
		} else {
			dispatch(removeFromCart(id));
			dispatch(decrementOrder({ id, value: quantity }));
		}
	};

	return (
		<>
		<div>
			<div className="cartCard">
				<div className="flex items-center col-span-6 space-x-6">
					<img
						className="lws-cartImage"
						src={imageUrl}
						alt="product"
					/>

					<div className="space-y-2">
						<h4 className="lws-cartName">{productName}</h4>
						<p className="lws-cartCategory">{productCategory}</p>
						<p>
							BDT <span className="lws-cartPrice">{price}</span>
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
					<div className="flex items-center space-x-4">
						<button
							className="lws-incrementQuantity"
							onClick={() => handleClick({ type: "increment" })}
						>
							<i className="text-lg fa-solid fa-plus"></i>
						</button>
						<span className="lws-cartQuantity">{quantity}</span>
						<button
							className="lws-decrementQuantity"
							onClick={() => handleClick({ type: "decrement" })}
						>
							<i className="text-lg fa-solid fa-minus"></i>
						</button>
					</div>
					<p className="text-lg font-bold">
						BDT{" "}
						<span className="lws-calculatedPrice">
							{quantity * price}
						</span>
					</p>
				</div>

				<div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
					<button
						className="lws-removeFromCart"
						onClick={() => handleClick({ type: "remove" })}
					>
						<i className="text-lg text-red-400 fa-solid fa-trash"></i>
					</button>
				</div>
			</div>
			{showStockout && <Alert />}
		</div>
		</>
	);
};

export default CartItem;
