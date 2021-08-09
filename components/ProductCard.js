import React from 'react';

function ProductCard({ product }) {
    const { _id, title, price, images } = product;
    return (
        <div className="product-card">
            <div className="icons">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <a href={`/product/${_id}`}>
                <img src={images[0]} alt="" />
                <div className="name">{title}</div>
                <div className="price">&#8377;{price}</div>
            </a>
        </div>
    );
}

export default ProductCard;
