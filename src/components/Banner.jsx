import Image from 'next/image';
import bannerImage from '../../public/images/IS-Running-Website-Banner-0824-01-Mobile.webp';

const Banner = () => {
  return (
    <div className="relative">
      <Image src={bannerImage} className="md:w-full md:h-[350px]" alt="Banner" />
    </div>
  );
};
export default Banner;
