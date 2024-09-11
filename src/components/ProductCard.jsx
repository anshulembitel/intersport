import React from 'react';
import { FavoriteIcon } from './Icons/FavoriteIcon';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtom } from 'jotai';
import { listAtom } from '@/atoms/list';
import { wishlistAtom } from '@/atoms/wishlist';
const ProductCard = ({ product, activeProductId, handleProductClick }) => {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [list, setList] = useAtom(listAtom);
  const handleProductClickHandler = () => {
    let viewedList = localStorage.getItem('recentlyViewed');
    if (viewedList) {
      viewedList = JSON.parse(viewedList);
      const isProductViewed = viewedList.some((item) => item.productId === product.productId);
      if (!isProductViewed) {
        viewedList.push(product);
      }
    } else {
      viewedList = [product];
    }
    localStorage.setItem('recentlyViewed', JSON.stringify(viewedList));
  };
  const selectList = () => {
    setList((prevProducts) => {
      const exists = prevProducts.some((item) => item.productId === product.productId);
      if (exists) {
        // Remove the product if it's already in the wishlist
        return prevProducts.filter((item) => item.productId !== product.productId);
      } else {
        // Add the product if it's not in the wishlist
        return [...prevProducts, product];
      }
    });
  };
  const activeListId = list.find((item) => item.productId === product.productId);
  const wishlistId = wishlist.find((item) => item.productId === product.productId);

  return (
    <li key={product.name} className="product-list-item">
      <div className="border-2 border-zinc-50 rounded-xl bg-white shadow-lg w-[298px] relative transition-all duration-500">
        <div className="absolute top-3 left-3 z-10 cursor-pointer " onClick={selectList}>
          <input checked={activeListId?.productId} type="checkbox" className='bg-primaryColor w-5 h-5 text-primaryColor'/>
        </div>
        <span
          onClick={() => handleProductClick(product)}
          className={`absolute top-[10px] right-[6px] z-[9] inline-block w-[35px] h-[35px] favorite-icon cursor-pointer
                    ${wishlistId?.productId ? 'active' : ''}`}
        >
          <FavoriteIcon />
        </span>
        <div className="product-card p-[20px] relative" onClick={() => handleProductClickHandler()}>
          <Link href={`/${product?.productId}`}>
            <Image
              src={product?.thumbnail}
              alt={product.name}
              width={225}
              height={225}
              className="w-full h-[220px] rounded-xl"
            />
          </Link>
        </div>
        <div className="pt-0 p-[20px]">
          <Link href={`/${product?.productId}`}>
            <h4 className="h-[48px] product-name text-[15px] text-gray-700 font-semibold">{product.name}</h4>
          </Link>
          <p className="font-semibold text-[14px]">{product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
