import React from 'react';

function ProductCard() {
    return (
        <div class="product-card">
            <div class="icons">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <a href="/product/{prod.id}">
                <img src="{ prod.images[0] }" alt="" />
                <div class="name">{prod.title}</div>
                <div class="price">&#8377;{prod.price}</div>
            </a>
        </div>
    );
}

export default ProductCard;
