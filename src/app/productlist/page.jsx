import React from 'react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import OverlayList from '@/components/Overlay';
import FloatingButton from '@/components/FloatingButton';
const page = () => {
  return (
    <main className="pb-[50px]">
      <div className="container flex justify-center gap-[25px]">
        <div className="w-[300px]">
          <Filter />
        </div>
        <div className="w-[980px]">
          {/* <OverlayList items={[1,2,3]} /> */}
          <FloatingButton />
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default page;
