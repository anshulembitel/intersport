import Filter from '@/components/Filter';
import Banner from '@/components/Banner';
import RecentlyViewedProducts from '@/components/RecentlyViewedProductsList';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main className="bg-blue-50 pb-[50px]">
      <div className="container flex justify-center gap-[25px]">
        <div className='mt-6 flex justify-center items-center w-full'>
          <Banner />
        </div>
      </div>
      <div>
        <RecentlyViewedProducts />
      </div>
      <FloatingButton />
    </main>
  );
}
