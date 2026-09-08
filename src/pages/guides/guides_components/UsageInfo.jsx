import { ArrowUpRight } from "lucide-react";
import kidsworld from "../../../img/kidsworld.jpeg";
import info from "../../../img/info.jpeg";

export default function UsageInfo() {
  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[60px] lg:py-[90px] xl:px-[80px]">
      <div className="mx-auto max-w-[1120px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            이용정보
          </h2>

          <p className="mt-3 break-keep text-[16px] font-bold leading-[1.6] text-[#FF6B81] sm:text-[18px]">
            상상체험 키즈월드 이용에 필요한 기본 정보를 안내드립니다.
          </p>
        </div>

        {/* 이미지와 정보 */}
        <div className="mt-[40px] grid grid-cols-1 items-stretch gap-[45px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-[50px]">
          {/* 왼쪽 이미지 */}
          <div className="flex flex-col gap-[18px] lg:grid lg:h-full lg:grid-rows-2">
            <div className="group h-[280px] overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px] lg:h-auto lg:min-h-0">
              <img
                src={info}
                alt="키즈월드 이용정보"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="group h-[280px] overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px] lg:h-auto lg:min-h-0">
              <img
                src={kidsworld}
                alt="키즈월드 시설 전경"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* 오른쪽 정보 */}
          <div className="flex h-full flex-col">
            {/* 주소 */}
            <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 pb-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                주소
              </h3>

              <div>
                <p className="text-[16px] font-bold leading-[1.7] text-[#292929] sm:text-[18px]">
                  부산 해운대구 APEC로 30
                  <br />
                  벡스코 제2전시장 3층
                </p>

                <div className="mt-[16px] flex flex-wrap gap-[10px]">
                  <a
                    href="https://map.naver.com/p/entry/place/1801736280?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609010922%26locale%3Dko%26svcName%3Dmap_pcv5"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-[6px] rounded-[8px] border border-[#292929]/20 px-[14px] py-[9px] text-[16px] font-medium text-[#292929] transition-colors duration-300 hover:border-[#FF6B81] hover:text-[#FF6B81]"
                  >
                    네이버 지도
                    <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>

                  <a
                    href="https://kko.to/Zded0GIQtd"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-[6px] rounded-[8px] border border-[#292929]/20 px-[14px] py-[9px] text-[16px] font-medium text-[#292929] transition-colors duration-300 hover:border-[#FF6B81] hover:text-[#FF6B81]"
                  >
                    카카오맵
                    <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* 연락처 */}
            <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                연락처
              </h3>

              <p className=" group text-[16px] font-medium text-[#292929] sm:text-[18px]">
                <a
                  href="tel:07048016034"
                  aria-label="문의 전화하기"
                  className="flex items-center gap-[5px] transition-colors duration-200 hover:text-[#FF6B81]"
                >
                  070-4801-6034
                  <ArrowUpRight className="h-5 w-5 text-[#292929]/60 group-hover:text-[#FF6B81] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </p>
            </div>

            {/* 영업시간 */}
            <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                영업시간
              </h3>

              <p className="text-[16px] font-bold leading-[1.8] text-[#292929] sm:text-[18px]">
                10:30 - 18:00
                <br />
                17:00 입장마감
              </p>
            </div>

            {/* 운영일정 */}
            <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                운영일정
              </h3>

              <div>
                <p className="text-[16px] font-bold text-[#292929] sm:text-[18px]">
                  2025.12.06 ~ 2026.10.18
                </p>

                <div className="mt-[10px] space-y-[6px]">
                  <p className="text-[16px] font-medium text-[#5F8F73]">
                    * 2026-08-26 기준
                  </p>

                  <p className="text-[16px] font-medium text-[#5F8F73]">
                    * 종료일은 변동될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 이용방법 */}
            <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                이용방법
              </h3>

              <div>
                <p className="break-keep text-[16px] font-bold leading-[1.8] text-[#292929] sm:text-[18px]">
                  매표소 → 티켓 발권 → 입구 → 티켓 제출 → 바로 입장
                </p>

                <div className="mt-[10px] space-y-[6px]">
                  <p className="break-keep text-[16px] font-medium leading-[1.7] text-[#5F8F73]">
                    * 온라인 예매도 매표소에서 티켓 발권 후 사용
                  </p>

                  <p className="break-keep text-[16px] font-medium leading-[1.7] text-[#5F8F73]">
                    * 재입장 불가 / 성인만 도장받고 외출 가능
                  </p>
                </div>
              </div>
            </div>

            {/* 편의 */}
            <div className="grid flex-1 grid-cols-1 gap-[12px] pt-[28px] sm:grid-cols-[120px_1fr]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                편의
              </h3>

              <div className="space-y-[12px] text-[16px] font-medium text-[#292929] sm:text-[18px]">
                <p>의무실</p>

                <p>미아방지 스티커</p>

                <p>전자레인지 (이유식)</p>

                <p className="break-keep">
                  수유실
                  <span className="ml-2 text-[#292929]/55">
                    키즈월드 내부 없음 / 건물 1층
                  </span>
                </p>

                <p>
                  보조배터리 대여
                  <span className="ml-2 text-[#292929]/55">유료</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
