import { useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Products.module.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {});
    return (
        <Layout>
            <link rel="stylesheet" href="/css/app.css" />

            <div class="products">
                <h2>Newest Products</h2>

                <div class="cards-container"></div>
            </div>
        </Layout>
    );
}
