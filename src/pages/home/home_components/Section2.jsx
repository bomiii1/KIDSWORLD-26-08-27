import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { AttractionsData } from "../../../data/attractions";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section2() {
  const popularAttractions = AttractionsData.filter(
    (item) => item.popular === true,
  );

  return (
    <section className="overflow-hidden bg-white px-5 pb-[80px] pt-[45px] sm:px-[30px] sm:pb-[100px] sm:pt-[55px] md:px-[50px] lg:px-[80px] lg:pb-[120px] lg:pt-[60px] xl:px-[150px]">
      {/* 제목 */}
      <div className="flex items-end justify-between gap-5">
        <div>
          
            <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[44px] lg:text-[52px]">
              인기시설
            </h2>
       

          <p className="mt-2 text-[14px] font-bold text-[#FF6B81] sm:text-[16px] lg:text-[18px]">
            인기 있는 놀이시설을 만나보세요!
          </p>
        </div>

        <Link
          to="/facilities"
          className="group flex shrink-0 items-center gap-2 text-[14px] font-medium text-[#292929]/70 transition-colors hover:text-[#FF6B81] sm:text-[16px] lg:text-[18px]"
        >
          전체보기

          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      {/* 슬라이드 */}
      <div className="relative mt-[40px] sm:mt-[50px]">
        {/* 이전 버튼 */}
        <button
          type="button"
          aria-label="이전 인기시설"
          className="section2-prev absolute left-[-48px] top-[43%] z-20 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full border border-[#292929]/15 bg-white text-[#292929] shadow-sm transition-colors hover:border-[#FF6B81] hover:text-[#FF6B81] lg:flex xl:left-[-58px]"
        >
          <ArrowLeft className="h-6 w-6" />
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
          speed={500}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={12}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
          }}
          className="[--swiper-theme-color:#FF6B81]"
        >
          {popularAttractions.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={`/facilities/attractions/${item.id}`}
                className="group block"
              >
                {/* 시설 이미지 */}
                <div className="aspect-[4/4.3] overflow-hidden rounded-[14px] bg-[#EEEEEE]">
                  {item.AttractionImg ? (
                    <img
                      src={item.AttractionImg}
                      alt={item.AttractionName}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-[14px] font-medium text-[#292929]/45 lg:text-[16px]">
                        이미지 준비중
                      </span>
                    </div>
                  )}
                </div>

                {/* 시설 이름 */}
                <h3 className="mt-3 break-keep text-center text-[14px] font-medium text-[#292929] transition-colors group-hover:text-[#FF6B81] sm:text-[16px] lg:mt-4 lg:text-[18px]">
                  {item.AttractionName}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 다음 버튼 */}
        <button
          type="button"
          aria-label="다음 인기시설"
          className="section2-next absolute right-[-48px] top-[43%] z-20 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full border border-[#292929]/15 bg-white text-[#292929] shadow-sm transition-colors hover:border-[#FF6B81] hover:text-[#FF6B81] lg:flex xl:right-[-58px]"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* 페이지 표시 */}
      <div className="section2-pagination mt-8 flex justify-center" />
    </section>
  );
}