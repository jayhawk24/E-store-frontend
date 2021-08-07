import { useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Products.module.css';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('products');
            const data = await response.json();
            setProducts(data);
        };
        getProducts();
    }, []);
    return (
        <Layout>
            <link rel="stylesheet" href="/css/app.css" />

            <div class="products">
                <h2>Newest Products</h2>

                <div class="cards-container">
                    {products.map((product) => {
                        <ProductCard product={product} />;
                    })}
                </div>
            </div>
        </Layout>
    );
}
