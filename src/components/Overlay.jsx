'use client';
import { listAtom } from '@/atoms/list';
import { wishlistAtom } from '@/atoms/wishlist';
import { useAtom } from 'jotai';
import React from 'react';

const OverlayList = ({ items, onClose }) => {
  const [list, setWishlist] = useAtom(listAtom);

  return (
    <div className="z-30 fixed bottom-10 right-10 h-[60%] w-[400px] bg-white shadow-lg border-r border-gray-200 transition-transform transform translate-x-0 ease-in-out duration-300">
      <div className="relative h-full p-4 ">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4 text-blue-500">Selected List</h2>
        <ul className="space-y-2 overflow-scroll relative h-full pb-20">
          {list.map((item, index) => {
            if (index > 3) return null;
            return (
              <li
                key={index}
                className="p-3 bg-blue-100 border border-blue-200 rounded-md shadow-sm hover:bg-blue-200 transition ease-in-out duration-150"
              >
                {item.name}
              </li>
            );
          })}
          {list.length > 4 && <li className='absolute bottom-21 w-full text-center left-0'>View More</li>}
          <li className=" absolute bottom-10 w-full text-center left-0 p-3 bg-primary border border-blue-200 rounded-md shadow-sm hover:bg-blue-200 transition ease-in-out duration-150">
            Download
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverlayList;
