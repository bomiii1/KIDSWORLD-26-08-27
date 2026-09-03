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
  const popularAttractions = AttractionsData.filter(
    (item) => item.popular === true,
  );

  return (
    <section className="mt-[100px] px-5 sm:mt-[80px] sm:px-10 md:px-12 lg:mt-[100px] lg:px-[80px] xl:px-[150px]">
      <div className="mx-auto max-w-[1600px]">
        {/* 타이틀 */}
        <div className="flex items-end justify-between gap-[20px]">
          <div>
            <div className="flex items-center gap-[8px]">
              <h2 className="font-['Jua'] text-[36px] leading-none text-[#292929] sm:text-[40px] lg:text-[46px]">
                인기시설
              </h2>

              <img
                src={flagIcon}
                alt="깃발아이콘"
                className="w-[30px] sm:w-[34px] lg:w-[38px]"
              />
            </div>

            <p className="mt-[8px] text-[16px] font-bold text-[#E53935] sm:text-[18px]">
              지금 인기 시설들을 만나보세요!
            </p>
          </div>

          <Link
            to="/facilities"
            className="group flex shrink-0 items-center gap-[8px] text-[16px] font-medium text-[#292929]/70 transition-colors duration-300 hover:text-[#E53935] sm:text-[18px]"
          >
            전체보기
            <ArrowUpRight className="h-[19px] w-[19px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
          </Link>
        </div>

        {/* 슬라이드 */}
        <div className="relative mt-[35px]">
          {/* 이전 버튼 */}
          <button
            type="button"
            aria-label="이전 인기시설"
            className="section2-prev absolute left-[-45px] top-1/2 z-20 hidden h-[42px] w-[42px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#292929]/10 bg-white text-[#292929] transition-all duration-300 hover:border-[#E53935]/30 hover:text-[#E53935] lg:flex xl:left-[-55px]"
          >
            <ArrowLeft className="h-[24px] w-[24px]" />
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
            slidesPerView={1.7}
            slidesPerGroup={1}
            spaceBetween={14}
            breakpoints={{
              480: {
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
          >
            {popularAttractions.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <Link
                  to={`/facilities/attractions/${item.id}`}
                  className="group block h-full overflow-hidden rounded-[16px] border border-[#292929]/10 bg-white transition-all duration-300 hover:border-[#292929]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                >
                  {/* 이미지 */}
                  <div className="h-[150px] overflow-hidden bg-[#EEEEEE] sm:h-[230px] md:h-[240px] lg:h-[260px]">
                    {item.AttractionImg ? (
                      <img
                        src={item.AttractionImg}
                        alt={item.AttractionName}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-[16px] font-medium text-[#292929]/40">
                          이미지 준비중
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 정보 */}
                  <div className="flex items-center justify-between gap-[12px] px-[20px] py-[20px]">
                    <div className="min-w-0">
                      <p className="text-[16px] font-bold text-[#5E9F45]">
                        {item.category}
                      </p>

                      <p className="mt-[4px] truncate text-[18px] font-bold text-[#292929] transition-colors duration-300 group-hover:text-[#E53935]">
                        {item.AttractionName}
                      </p>
                    </div>

                    <ArrowUpRight className="h-[20px] w-[20px] shrink-0 text-[#292929]/35 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#E53935]" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 다음 버튼 */}
          <button
            type="button"
            aria-label="다음 인기시설"
            className="section2-next absolute right-[-45px] top-1/2 z-20 hidden h-[42px] w-[42px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#292929]/10 bg-white text-[#292929] transition-all duration-300 hover:border-[#E53935]/30 hover:text-[#E53935] lg:flex xl:right-[-55px]"
          >
            <ArrowRight className="h-[24px] w-[24px]" />
          </button>
        </div>

        {/* 페이지네이션 */}
        <div className="section2-pagination mt-[30px] flex justify-center" />
      </div>
    </section>
  );
}
