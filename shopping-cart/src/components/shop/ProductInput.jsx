import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../../redux/productSlice";

// imageUrl, productName, productCategory, price, quantity

const ProductInputForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();

    const onSubmit = (data) => {
        const {imageUrl, productName, productCategory, price, quantity} = data;
        dispatch(addProduct({productName, productCategory, imageUrl, price: parseInt(price), quantity: parseInt(quantity)}));
    }

	return (
		<div className="formContainer">
			<h4 className="formTitle">Add New Product</h4>
			<form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-2">
					<label htmlFor="lws-inputName">Product Name</label>
					<input
						className="addProductInput"
						id="lws-inputName"
						type="text"
						required
						{...register("productName")}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="lws-inputCategory">Category</label>
					<input
						className="addProductInput"
						id="lws-inputCategory"
						type="text"
						required
                        {...register("productCategory")}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="lws-inputImage">Image Url</label>
					<input
						className="addProductInput"
						id="lws-inputImage"
						type="text"
						required
                        {...register("imageUrl")}
					/>
				</div>
				<div className="grid grid-cols-2 gap-8 pb-4">
					<div className="space-y-2">
						<label htmlFor="ws-inputPrice">Price</label>
						<input
							className="addProductInput"
							type="number"
							id="lws-inputPrice"
							required
                            {...register("price")}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="lws-inputQuantity">Quantity</label>
						<input
							className="addProductInput"
							type="number"
							id="lws-inputQuantity"
							required
                            {...register("quantity")}
						/>
					</div>
				</div>
				<button type="submit" id="lws-inputSubmit" className="submit">
					Add Product
				</button>
			</form>
		</div>
	);
};

export default ProductInputForm;
