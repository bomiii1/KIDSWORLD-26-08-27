import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import flagIcon from "../../../img/flag_icon.png";
import { AttractionsData } from "../../../data/attractions";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section2() {
  return (
    <section className="mt-[70px] px-5 sm:mt-[80px] sm:px-10 md:px-12 lg:mt-[100px] lg:px-[80px] xl:px-[150px]">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-[8px]">
            <h1 className="font-['Jua'] text-[34px] text-[#292929] sm:text-[38px] lg:text-[42px]">
              인기시설
            </h1>

            <img
              src={flagIcon}
              alt="깃발아이콘"
              className="w-[28px] sm:w-[32px] lg:w-[36px]"
            />
          </div>

          <p className="mt-[5px] text-[14px] font-bold text-[#E53935] sm:text-[15px] lg:text-[16px]">
            지금 인기 시설들을 만나보세요 !
          </p>
        </div>

        <Link
          to="/facilities"
          className="group flex items-center gap-[8px] text-[14px] transition-colors duration-300 hover:text-[#E53935] sm:text-[15px] lg:text-[16px]"
        >
          <span className="font-medium">전체보기</span>

          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
        </Link>
      </div>

      <div className="relative mt-[30px] sm:mt-[35px]">
        <button
          type="button"
          className="section2-prev absolute left-[-45px] top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer items-center justify-center transition-all duration-300 hover:text-[#E53935] lg:flex xl:left-[-55px]"
        >
          <ArrowLeft className="h-[28px] w-[28px]" />
        </button>

        <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    prevEl: ".section2-prev",
    nextEl: ".section2-next",
  }}
  pagination={{
    el: ".section2-pagination",
    clickable: true,
  }}
  slidesPerView={2}
  slidesPerGroup={2}
  spaceBetween={12}
  breakpoints={{
    // 태블릿
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 18,
    },

    // PC
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  }}
>
  {AttractionsData.slice(0, 12).map((item) => (
    <SwiperSlide key={item.id}>
      <Link
        to={`/facilities/${item.id}`}
        className="group block overflow-hidden rounded-[16px] border border-[#292929]/15 bg-white"
      >
        <div className="h-[180px] overflow-hidden sm:h-[220px] md:h-[240px] lg:h-[260px]">
          {item.AttractionImg ? (
            <img
              src={item.AttractionImg}
              alt={item.AttractionName}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#D9D9D9]">
              <span className="text-[12px] text-[#292929]/40 sm:text-[13px]">
                이미지 준비중
              </span>
            </div>
          )}
        </div>

        <div className="py-[14px] text-center sm:py-[16px] lg:py-[18px]">
          <p className="text-[14px] font-bold text-[#292929] transition-colors duration-300 group-hover:text-[#F5A623] sm:text-[15px] lg:text-[16px]">
            {item.AttractionName}
          </p>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>
        <button
          type="button"
          className="section2-next absolute right-[-45px] top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer items-center justify-center transition-all duration-300 hover:text-[#E53935] lg:flex xl:right-[-55px]"
        >
          <ArrowRight className="h-[28px] w-[28px]" />
        </button>
      </div>

      <div className="section2-pagination mt-[30px] flex justify-center"></div>
    </section>
  );
}