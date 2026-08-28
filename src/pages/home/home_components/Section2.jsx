import { ArrowLeft, ArrowRight, FlagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section2() {
  return (
    <section className="px-[150px] mt-[100px]">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-[8px]">
            <h1 className="font-['Jua'] text-[42px]">인기시설</h1>
            <FlagIcon className="w-[32px] h-[32px]" />
          </div>

          <p className="mt-[5px] text-[16px] font-bold text-[#E53935]">
            지금 인기 시설들을 만나보세요 !
          </p>
        </div>

        <Link
          to={"/facilities"}
          className="group flex items-center gap-[10px] text-[13px]"
        >
          <span>전체보기</span>

          <ArrowRight className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-[5px]" />
        </Link>
      </div>

      <div className="relative mt-[35px]">
        <button className="absolute top-1/2 left-[-55px] -translate-y-1/2">
          <ArrowLeft className="w-[28px] h-[28px] text-[#292929]/50" />
        </button>

        <div className="grid grid-cols-4 gap-[20px]">
          <div className="group overflow-hidden rounded-[16px] border border-[#292929]/15 bg-white">
            <div className="h-[260px] overflow-hidden">
              <img
                src=""
                alt="암벽 체험"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-[18px] text-center">
              <p className="text-[16px] font-bold">암벽 체험</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[16px] border border-[#292929]/15 bg-white">
            <div className="h-[260px] overflow-hidden">
              <img
                src=""
                alt="DDR 체험"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-[18px] text-center">
              <p className="text-[16px] font-bold">DDR 체험</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[16px] border border-[#F5A623]/40 bg-white">
            <div className="h-[260px] overflow-hidden">
              <img
                src=""
                alt="암벽 체험"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-[18px] text-center">
              <p className="text-[16px] font-bold text-[#F5A623]">암벽 체험</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[16px] border border-[#292929]/15 bg-white">
            <div className="h-[260px] overflow-hidden">
              <img
                src=""
                alt="암벽 체험"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-[18px] text-center">
              <p className="text-[16px] font-bold">암벽 체험</p>
            </div>
          </div>
        </div>

        <button className="absolute top-1/2 right-[-55px] -translate-y-1/2">
          <ArrowRight className="w-[28px] h-[28px] text-[#292929]/50" />
        </button>
      </div>

      <div className="mt-[25px] flex justify-center gap-[7px]">
        <span className="w-[8px] h-[8px] rounded-full bg-[#39A96B]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"></span>
      </div>
    </section>
  );
}
