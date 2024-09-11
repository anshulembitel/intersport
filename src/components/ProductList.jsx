'use client';
import React, { useState, useEffect, Suspense, useRef } from 'react';
import Image from 'next/image';
import productImage from '../../public/images/product-image.webp';
import Link from 'next/link';
import { FavoriteIcon } from './Icons/FavoriteIcon';
import ModelRender from './ModelRender';
import { Loader } from '@react-three/drei';
import { colors } from '@/utils/colors';
import { Canvas } from '@react-three/fiber';

const ProductList = () => {
  const [productListItem, setProductListItem] = useState([]);
  const sections = ['hoodie', 'nikeShoe'];
  const random = Math.floor(Math.random() * 2);

  const [bodyColor, setBodyColor] = useState(colors[sections[random]][0]);
  const [activeProductId, setActiveProductId] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const canvasRef = useRef();

  useEffect(() => {
    fetch('http://51.20.115.140/api/getProducts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductListItem(data);
      });
  }, []);

  const handleProductClick = (productId) => {
    setActiveProductId((prevId) => (prevId === productId ? null : productId));
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[#1f2533] font-bold text-[18px] my-[30px]">Mens Tops & Tees</h2>
        <div className="flex">
          <button
            onClick={() => handleViewChange('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-primaryColor text-white' : ''}`}
          >
            Grid
          </button>
          <button
            onClick={() => handleViewChange('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-primaryColor text-white' : ''}`}
          >
            List
          </button>
        </div>
        <div className="">
          <label htmlFor="sort" className="text-gray-800">
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="bg-white border border-gray-300 rounded px-[10px] py-[5px] ml-[10px]"
          >
            <option value="Best selling">Best selling</option>
            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
            <option value="price">Price, low to high</option>
            <option value="price">Price, high to low</option>
          </select>
        </div>
      </div>
      <ul className="flex flex-wrap gap-[25px] productlist-container">
        {productListItem?.data?.items.map((product) => {
            let interval;
          return (<>
            {viewMode === 'grid' && (
              <li key={product.name} className="product-list-item bg-white">
                <div className="border-2 border-zinc-50 rounded w-[298px] relative">
                  <span
                    onClick={() => handleProductClick(product.productId)}
                    className={`absolute top-[10px] right-[6px] z-[9] inline-block w-[35px] h-[35px] favorite-icon cursor-pointer
                    ${activeProductId === product.productId ? 'active' : ''}`}
                  >
                    <FavoriteIcon />
                  </span>
                  <div className="product-card p-[20px] relative">
                    <Link href={`/${product?.productId}`}>
                      <Image
                        src={
                          currentImageIndex?.[product.productId]
                            ? product?.imageGallery?.[currentImageIndex[product.productId]]
                            : product?.thumbnail
                        }
                        onMouseEnter={() => {
                        
                          if (product?.imageGallery?.length > 1) {
                            interval = setInterval(() => {
                              setCurrentImageIndex((prevIndex) => {
                                return {
                                  ...prevIndex,
                                  [product.productId]:
                                    ((prevIndex[product.productId] || 0) + 1) % product?.imageGallery?.length,
                                };
                              });
                            }, 1500); // Change image every 1 second (adjust as needed)
                          }
                          return () => clearInterval(interval);
                        }}
                        onMouseLeave={() => {
                          setCurrentImageIndex((prevIndex) => {
                            return {
                              ...prevIndex,
                              [product.productId]: null,
                            };
                          });
                        }}
                        alt={product.name}
                        width={225}
                        height={225}
                        className="w-full h-[220px]"
                      />
                      {/* <Suspense fallback={<Loader />}>
                <Canvas
                  dpr={[1, 2]}
                  resize={{ scroll: false }}
                  //   width={window.innerWidth}
                  //   height={window.innerHeight}
                  ref={canvasRef}
                >
                  <ModelRender color={bodyColor} random={random} />
                </Canvas>
              </Suspense> */}
                    </Link>
                  </div>
                  <div className="pt-0 p-[20px]">
                    <Link href={`/${product?.productId}`}>
                      <h4 className="h-[48px] product-name text-[15px] text-gray-800 font-semibold">{product.name}</h4>
                    </Link>
                    <p className="font-semibold text-[14px]">{product.price}</p>
                  </div>
                </div>
              </li>
            )}
            {viewMode === 'list' && (
              <li key={product.name} className="product-list-item bg-white w-full">
                <div className="border-2 border-zinc-50 rounded relative flex">
                  <span
                    onClick={() => handleProductClick(product.productId)}
                    className={`absolute top-[10px] right-[6px] z-[9] inline-block w-[35px] h-[35px] favorite-icon cursor-pointer
                    ${activeProductId === product.productId ? 'active' : ''}`}
                  >
                    <FavoriteIcon />
                  </span>
                  <div className="product-card p-[20px] relative w-[30%]">
                    <Link href={`/${product?.productId}`}>
                      <Image
                        src={product?.thumbnail}
                        alt={product.name}
                        width={225}
                        height={225}
                        className="w-full h-[220px]"
                      />
                    </Link>
                  </div>
                  <div className="p-[20px] w-[70%]">
                    <Link href={`/${product?.productId}`}>
                      <h4 className="h-[48px] product-name text-[15px] text-gray-800 font-semibold">{product.name}</h4>
                    </Link>
                    <p className="font-semibold text-[14px]">{product.description}</p>
                  </div>
                </div>
              </li>
            )}
          </>)
})}
      </ul>
    </>
  );
};

export default ProductList;
