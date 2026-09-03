import { ArrowUpRight } from "lucide-react";
import kidsworld from "../../../img/kidsworld.jpeg";
import info from "../../../img/info.jpeg";

export default function UsageInfo() {
  return (
    <section className="bg-white px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[150px]">
      {/* 타이틀 */}
      <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
        <p className="mt-[5px] text-[20px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
          이용정보
        </p>

        <p className="text-[18px] font-bold text-[#5E9F45]">
          상상체험 키즈월드 이용에 필요한 기본 정보를 안내드립니다.
        </p>
      </div>

      <div className="mt-[35px] grid grid-cols-1 items-stretch gap-[45px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[55px]">
        {/* 왼쪽 이미지 */}
        <div className="flex flex-col gap-[18px] lg:h-full">
          <div className="group overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px] lg:h-auto lg:min-h-0 lg:flex-1">
            <img
              src={info}
              alt="키즈월드 이용정보 이미지"
              className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-full lg:h-full"
            />
          </div>

          <div className="group overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px] lg:h-auto lg:min-h-0 lg:flex-1">
            <img
              src={kidsworld}
              alt="키즈월드 시설 이미지"
              className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-full lg:h-full"
            />
          </div>
        </div>

        {/* 오른쪽 정보 */}
        <div className="flex h-full flex-col">
          {/* 주소 */}
          <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 pb-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              주소
            </h3>

            <div>
              <p className="text-[17px] font-bold leading-[1.7] text-[#292929] lg:text-[18px]">
                부산 해운대구 APEC로 30
                <br />
                벡스코 제2전시장 3층
              </p>

              <div className="mt-[16px] flex flex-wrap gap-[10px]">
                <a
                  href="https://map.naver.com/p/entry/place/1801736280?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609010922%26locale%3Dko%26svcName%3Dmap_pcv5"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-[6px] rounded-[8px] border border-[#292929]/20 px-[14px] py-[9px] text-[16px] font-medium text-[#292929] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E53935] hover:text-[#E53935]"
                >
                  네이버 지도
                  <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </a>

                <a
                  href="https://kko.to/Zded0GIQtd"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-[6px] rounded-[8px] border border-[#292929]/20 px-[14px] py-[9px] text-[16px] font-medium text-[#292929] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E53935] hover:text-[#E53935]"
                >
                  카카오맵
                  <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </a>
              </div>
            </div>
          </div>

          {/* 연락처 */}
          <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              연락처
            </h3>

            <p className="text-[17px] font-bold text-[#292929] lg:text-[18px]">
              070-4801-6034
            </p>
          </div>

          {/* 영업시간 */}
          <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              영업시간
            </h3>

            <p className="text-[17px] font-bold leading-[1.8] text-[#292929] lg:text-[18px]">
              10:30 - 18:00
              <br />
              17:00 입장마감
            </p>
          </div>

          {/* 운영일정 */}
          <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              운영일정
            </h3>

            <div>
              <p className="text-[17px] font-bold text-[#292929] lg:text-[18px]">
                2025.12.06 ~ 2026.10.18
              </p>

              <div className="mt-[10px] space-y-[6px]">
                <p className="text-[16px] font-medium text-[#E53935] lg:text-[17px]">
                  * 2026-08-26 기준
                </p>

                <p className="text-[16px] font-medium text-[#E53935] lg:text-[17px]">
                  * 종료일은 변동될 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 이용방법 */}
          <div className="grid grid-cols-1 gap-[12px] border-b border-[#292929]/10 py-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              이용방법
            </h3>

            <div>
              <p className="text-[17px] font-bold leading-[1.8] text-[#292929] lg:text-[18px]">
                매표소 → 티켓 발권 → 입구 → 티켓 제출 → 바로 입장
              </p>

              <div className="mt-[10px] space-y-[6px]">
                <p className="text-[16px] font-medium leading-[1.7] text-[#E53935] lg:text-[17px]">
                  * 온라인 예매도 매표소에서 티켓 발권 후 사용
                </p>

                <p className="text-[16px] font-medium leading-[1.7] text-[#E53935] lg:text-[17px]">
                  * 재입장 불가 / 성인만 도장받고 외출 가능
                </p>
              </div>
            </div>
          </div>

          {/* 편의 */}
          <div className="grid grid-cols-1 gap-[12px] pt-[28px] sm:grid-cols-[130px_1fr]">
            <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
              편의
            </h3>

            <div className="space-y-[12px] text-[17px] font-medium text-[#292929] lg:text-[18px]">
              <p>의무실</p>

              <p>미아방지 스티커</p>

              <p>전자레인지 (이유식)</p>

              <p>
                수유실
                <span className="ml-[8px] text-[#292929]/55">
                  키즈월드 내부 없음 / 건물 1층
                </span>
              </p>

              <p>
                보조배터리 대여
                <span className="ml-[8px] text-[#292929]/55">유료</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
