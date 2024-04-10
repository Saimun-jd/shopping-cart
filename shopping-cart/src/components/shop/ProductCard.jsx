import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/productSlice';
import { addCart } from '../../redux/cartSlice';

const ProductCard = ({ id, imageUrl, productName, productCategory, price, quantity }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addToCart(id)); // remove from card
        dispatch(addCart({id, productName, productCategory, imageUrl, quantity: 1, price})); // add in cart
    }
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{productCategory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
        </div>
        <button className="lws-btnAddToCart" onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
