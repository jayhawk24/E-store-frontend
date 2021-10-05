import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import http from '../../components/utils/http';
import axios from 'axios';
// import UserContext from '../../components/UserContext';

function Product() {
    const router = useRouter();
    const pid = router.query.pid;
    console.log(router.query.pid);

    const [product, setProduct] = useState({});
    // const [currentUser, setCurrentUser] = useContext(UserContext);

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(
                `${process.env.API_URL}product/${pid}`
            );
            if (response) setProduct(response.data);
        };
        getProduct();
    }, []);

    return (
        <div>
            <section className="head">
                <div className="category">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    {product.category && (
                        <span>/ {product.category.title} /</span>
                    )}
                </div>
                <div className="delivery">
                    <i className="fa fa-truck" aria-hidden="true"></i>
                    Standard Shipment.
                    <br />
                    Free within 3-6 business days.
                </div>
            </section>

            <div className="mcontainer">
                <div className="product-display">
                    {product.images?.map((url) => (
                        <div>
                            <img src={url} alt="" />

                            {/* if( currentUser && currentUser.username==='admin@gmail.com') */}

                            <div className="admin">
                                <a href="/product/{product.id}/edit?_method=PATCH">
                                    <button className="btn-main">Edit</button>
                                </a>
                                <form
                                    action="/product/{<%}= product.id %>?_method=DELETE"
                                    method="POST"
                                >
                                    <input
                                        type="submit"
                                        className="btn-main"
                                        value="Delete"
                                    />
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-wrap">
                <div className="product-details">
                    <h4>{product.title}</h4>
                    <p className="price">&#8377;{product.price}</p>
                    <p className="description">{product.description}</p>
                    <label htmlFor="quantity">Quantity: </label>
                    <div className="qty">
                        <input
                            type="number"
                            name="quantity"
                            value="1"
                            min="1"
                            max="10"
                        />
                        <form
                            action="/user/<%= product._id%>/cart"
                            method="post"
                        >
                            <button type="submit" className="btn btn-main">
                                Add To Cart
                            </button>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </form>
                    </div>
                </div>
                <div className="reviews-wrap">
                    <div className="reviews-form">
                        <h4 className="mt-5">Leave a Review</h4>
                        <form
                            className="mb-5 row g-3 needs-validation"
                            action="/product/<%= product.id %>/review"
                            method="post"
                            noValidate
                        >
                            <div className="mb-3 col-6">
                                <fieldset className="starability-basic">
                                    <input
                                        type="radio"
                                        id="no-rate"
                                        className="input-no-rate"
                                        name="rating"
                                        value="1"
                                        checked
                                        aria-label="No rating."
                                    />
                                    <input
                                        type="radio"
                                        id="first-rate1"
                                        name="rating"
                                        value="1"
                                    />
                                    <label
                                        htmlFor="first-rate1"
                                        title="Terrible"
                                    >
                                        1 star
                                    </label>
                                    <input
                                        type="radio"
                                        id="first-rate2"
                                        name="rating"
                                        value="2"
                                    />
                                    <label
                                        htmlFor="first-rate2"
                                        title="Not good"
                                    >
                                        2 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="first-rate3"
                                        name="rating"
                                        value="3"
                                    />
                                    <label
                                        htmlFor="first-rate3"
                                        title="Average"
                                    >
                                        3 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="first-rate4"
                                        name="rating"
                                        value="4"
                                    />
                                    <label
                                        htmlFor="first-rate4"
                                        title="Very good"
                                    >
                                        4 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="first-rate5"
                                        name="rating"
                                        value="5"
                                    />
                                    <label
                                        htmlFor="first-rate5"
                                        title="Amazing"
                                    >
                                        5 stars
                                    </label>
                                </fieldset>
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="review" className="form-label">
                                    Comment{' '}
                                </label>
                                <input
                                    type="text"
                                    name="review"
                                    placeholder="Review"
                                    className="form-control"
                                    id="review"
                                />
                            </div>
                            <br />
                            <input
                                type="submit"
                                value="Submit"
                                className="mb-3 ml-3 btn btn-secondary col-3"
                            />
                        </form>
                    </div>
                    <div className="reviews">
                        <div className="card mb-5">
                            <div className="card-header">Reviews</div>
                            {product.reviews?.map((comment) => (
                                <blockquote className="blockquote ml-3 mb-3">
                                    <div className="row mr-2">
                                        <p className="col-6">
                                            {' '}
                                            {comment.review}
                                        </p>
                                        <p
                                            className="starability-result text-right rating"
                                            data-rating={comment.rating}
                                        >
                                            Rated: 3 stars
                                        </p>
                                    </div>
                                    <div className="blockquote-footer">
                                        <cite title="Source Title">
                                            {comment.user}
                                        </cite>
                                    </div>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
