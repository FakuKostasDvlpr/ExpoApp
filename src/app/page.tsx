"use client"
import { Navbar } from "@/components/component/navbar";
import { SectionHero } from "@/components/component/section-hero";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import technologiesData, { IconData } from "@/data/tecno";


export default function Home() {
  return (
    <main className="flex gap-10 flex-col w-full max-w-[1440px] mx-auto">
      <Navbar />
      <SectionHero />
      <div>
        <div className="text-white text-center">
          <h1 className="italic text-gray-300">Confian en nosotros:</h1>
        </div>
      </div>
      <div className="w-full max-w-[700px] mx-auto flex-wrap">
        <Swiper
          id='devs-swiper'
          modules={[Autoplay]}
          freeMode={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          speed={1400}
          direction={'horizontal'}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        >
          {technologiesData.map((icon: IconData, index: number) => (
            <SwiperSlide key={index} className=''>
              {<icon.component />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </main>
  );
}
