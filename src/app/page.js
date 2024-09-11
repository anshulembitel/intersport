import ProductList from '@/components/ProductList';
import Filter from '@/components/Filter';

export default function Home() {
  return (
    <main className="pb-[50px]">
      <div className="container flex justify-center gap-[25px]">
        <div className="w-[300px]">
          <Filter />
        </div>
        <div className="w-[980px]">
          <ProductList />
        </div>
      </div>
    </main>
  );
}
