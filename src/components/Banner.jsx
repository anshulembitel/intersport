'use client';
import Image from 'next/image';
import bannerImage from '../../public/images/IS-Running-Website-Banner-0824-01-Mobile.webp';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/productlist');
  };
  return (
    <div className="relative" onClick={() => handleNavigate()}>
      <Image src={bannerImage} className="w-full md:h-[490px] rounded-xl cursor-pointer shadow-lg" alt="Banner" />
    </div>
  );
};
export default Banner;
