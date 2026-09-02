import { ArrowUpRight, TrainFront, SquareParking } from "lucide-react";

import BexcoBg from "../../../img/bexco_bg.jpg";
import MapImg from "../../../img/map.png";

export default function Section6() {
  return (
    <section className="mt-[70px] bg-[white] pb-[80px] sm:pb-[100px] lg:pb-[140px] xl:pb-[150px]">
      {/* 타이틀 */}
      <div className="px-5 pb-[28px] sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        <h2 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
          오시는길
        </h2>

        <p className="mt-[8px] text-[16px] font-bold text-[#E53935] lg:text-[18px]">
          키즈월드 오시는 길
        </p>
      </div>

      {/* 메인 안내 영역 */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BexcoBg})` }}
      >
        {/* 검은 오버레이 */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 grid grid-cols-1 gap-[30px] px-5 py-[45px] sm:px-8 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-[55px] lg:px-[60px] lg:py-[60px] xl:px-[150px]">
          {/* 지도 이미지 */}
          <div className="overflow-hidden rounded-[20px] bg-white shadow-2xl">
            <img
              src={MapImg}
              alt="상상체험 키즈월드 오시는길 지도"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* 오른쪽 정보 */}
          <div className="text-white">
            <p className="text-[18px] font-bold text-[#F5A623]">
              상상체험 키즈월드
            </p>

            <h3 className="mt-[10px] text-[30px] font-bold leading-[1.35] sm:text-[34px] lg:text-[38px]">
              부산 해운대구 APEC로 30
              <br />
              벡스코 제2전시장 3층
            </h3>

            {/* 지하철 */}
            <div className="mt-[35px] flex gap-[16px]">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white/10">
                <TrainFront className="h-[24px] w-[24px]" />
              </div>

              <div>
                <p className="text-[18px] font-bold">지하철 이용</p>

                <p className="mt-[5px] text-[16px] font-medium leading-[1.7] text-white/65">
                  벡스코역 5번 출구 도보 약 6분
                  <br />
                  센텀시티역 1번 출구 도보 약 7분
                </p>

                <div className="mt-[14px] flex flex-wrap gap-[10px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-[6px] rounded-[8px] border border-white/30 px-[14px] py-[9px] text-[16px] font-medium transition-all duration-300 hover:bg-white/10"
                  >
                    네이버 지도
                    <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-[6px] rounded-[8px] border border-white/30 px-[14px] py-[9px] text-[16px] font-medium transition-all duration-300 hover:bg-white/10"
                  >
                    카카오맵
                    <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* 주차 */}
            <div className="mt-[30px] flex gap-[16px]">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white/10">
                <SquareParking className="h-[26px] w-[26px]" />
              </div>

              <div>
                <p className="text-[18px] font-bold">주차 안내</p>

                <p className="mt-[5px] text-[16px] font-medium leading-[1.7] text-white/65">
                  벡스코 제1·2전시장 주차 가능
                </p>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-[14px] flex w-fit items-center gap-[6px] rounded-[8px] border border-white/30 px-[14px] py-[9px] text-[16px] font-medium transition-all duration-300 hover:bg-white/10"
                >
                  주차안내
                  <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
