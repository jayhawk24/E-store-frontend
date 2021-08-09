import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Products.module.css';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('api/products');
            if (response) setProducts(response.data);
        };
        getProducts();
    }, []);
    return (
        <Layout>
            <link rel="stylesheet" href="/css/app.css" />
            <div className="products">
                <h2>Newest Products</h2>
                <div className="cards-container">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
