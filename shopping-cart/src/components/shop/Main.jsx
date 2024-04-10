import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductInputForm from "./ProductInput";
import {useSelector} from 'react-redux';

const Main = () => {
	const products = useSelector((state) => state.product);

	return (
		<>
			<Navbar />
			<main className="py-16">
				<div className="productWrapper">
					<div className="productContainer" id="lws-productContainer">
                        {
                            products.map(product => (
                                product.quantity>0 &&
                                (<ProductCard
                                    id={product.id}
                                    productName={product.productName}
                                    productCategory={product.productCategory}
                                    imageUrl={product.imageUrl}
                                    price={product.price}
                                    quantity={product.quantity}
                                    key={product.id}
                                />)
                            ))
                        }
					</div>
					<ProductInputForm />
				</div>
			</main>
		</>
	);
};

export default Main;
