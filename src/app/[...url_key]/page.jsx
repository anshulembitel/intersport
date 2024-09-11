import axios from 'axios';
import ProductDetail from '@/components/ProductDetail/ProductDetail';

const api = axios.create({
  baseURL: 'http://51.20.115.140/api',
});

async function fetchProduct(url_key) {
  try {
    const response = await api.get(`/products/${url_key}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function ProductPage({ params }) {
  const { url_key } = params;
  const product = await fetchProduct(url_key);
  const random = Math.floor(Math.random() * 2);
  return (
    <div className="pb-[30px]">
      <div className="container">
        <ProductDetail catdataSSR={product} random={random} />
      </div>
    </div>
  );
}
