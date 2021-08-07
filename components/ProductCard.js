import React from 'react';

function ProductCard(props) {
    const { id, title, price, images } = props.product;
    return (
        <div class="product-card">
            <div class="icons">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <a href={`/product/${id}`}>
                <img src={images[0]} alt="" />
                <div class="name">{title}</div>
                <div class="price">&#8377;{price}</div>
            </a>
        </div>
    );
}

export default ProductCard;
