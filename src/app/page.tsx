"use client"
import { Navbar } from "@/components/component/navbar";
import { SectionHero } from "@/components/component/section-hero";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../app/style/style.effect.css"
import technologiesData, { IconData } from "@/data/tecno";
import { AboutUs } from "@/components/component/about-us";
import { AboutUsTwo } from "@/components/component/about-us-two";

export default function Home() {
  return (
    <main className="flex gap-20 flex-col w-full max-w-[1440px] mx-auto">
      <Navbar />
      <SectionHero />
      <div className="w-full max-w-[800px] mx-auto ">
        <div className="w-full max-w-[700px]">

        <Swiper
          id='devs-swiper'
          modules={[Autoplay]}
          freeMode={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={60}
          speed={3400}
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
      </div>
      <AboutUsTwo/>
    </main>
  );
}
