import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <section className="mt-[30px] bg-[white] px-5 py-[45px] sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
      {/* 타이틀 */}
      <div className="flex flex-col gap-[16px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            이용안내
          </h2>

          <p className="mt-[8px] text-[16px] font-bold text-[#E53935] lg:text-[18px]">
            이용에 필요한 정보들을 확인해보세요!
          </p>
        </div>

        <Link
          to="/guides"
          className="group flex w-fit items-center gap-[8px] text-[16px] font-medium text-[#292929] transition-colors duration-300 hover:text-[#E53935]"
        >
          안내사항 전체보기
          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
        </Link>
      </div>

      {/* 운영시간 + 입장료 */}
      <div className="mt-[30px] grid grid-cols-1 items-stretch gap-[28px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-[40px]">
        {/* 운영시간 */}
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold text-[#292929]">운영시간</h3>

          {/* 운영시간 유리 카드 */}
          <div
            className="
              relative mt-[14px] flex-1 overflow-hidden
              rounded-[20px]
              border border-[#F5A623]/25
              bg-[#F5A623]/[0.08]
              px-[24px] py-[24px]
              backdrop-blur-[10px]
              shadow-[0_10px_35px_rgba(245,166,35,0.08)]
              sm:px-[30px]
            "
          >
            <div className="absolute left-0 top-0 h-full w-[5px] bg-[#F5A623]/70" />

            {/* 오픈 / 마감 */}
            <div className="relative z-10 grid grid-cols-2 gap-[20px]">
              <div className="px-[6px] py-[6px]">
                <p className="text-[16px] font-bold text-[#292929]/55">오픈</p>

                <p className="mt-[6px] text-[34px] font-bold tracking-[-1px] text-[#292929] sm:text-[38px] lg:text-[40px]">
                  10:30
                </p>
              </div>

              <div className="border-l border-[#292929]/10 px-[20px] py-[6px]">
                <p className="text-[16px] font-bold text-[#292929]/55">마감</p>

                <p className="mt-[6px] text-[34px] font-bold tracking-[-1px] text-[#292929] sm:text-[38px] lg:text-[40px]">
                  18:00
                </p>
              </div>
            </div>

            {/* 입장마감 */}
            <div className="relative z-10 mt-[20px] flex items-center justify-between border-t border-[#F5A623]/20 pt-[18px]">
              <span className="text-[17px] font-bold text-[#292929]">
                입장마감
              </span>

              <span className="text-[26px] font-bold text-[#E53935]">
                17:00
              </span>
            </div>
          </div>
        </div>

        {/* 입장료 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-[12px] sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-[24px] font-bold text-[#292929]">입장료</h3>

            <Link
              to="/guides/admission"
              className="group flex w-fit items-center gap-[6px] rounded-[8px] border border-[#292929]/15 bg-white/20 px-[12px] py-[8px] text-[16px] font-medium text-[#292929] transition-all duration-300 hover:border-[#E53935] hover:text-[#E53935]"
            >
              무료/할인 대상 자세히보기
              <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </div>
          <div
            className="
              relative mt-[14px] flex-1 overflow-hidden
              rounded-[20px]
              border border-[#F5A623]/25
              bg-[#F5A623]/[0.08]
              px-[24px] py-[24px]
              backdrop-blur-[10px]
              shadow-[0_10px_35px_rgba(245,166,35,0.08)]
              sm:px-[30px]
            "
          >
            {/* 왼쪽 포인트 라인 */}
            <div className="absolute left-0 top-0 h-full w-[5px] bg-[#F5A623]/70" />

            {/* 종일권 */}
            <div className="relative z-10 grid grid-cols-1 gap-[20px] md:grid-cols-[110px_1fr] md:items-center">
              <div>
                <p className="text-[18px] font-bold text-[#E59A16]">종일권</p>
              </div>

              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                {/* 대인 */}
                <div>
                  <p className="text-[16px] font-bold text-[#292929]/55">
                    대인
                  </p>

                  <p className="mt-[3px] text-[28px] font-bold text-[#292929]">
                    25,000
                    <span className="ml-[5px] text-[16px]">원</span>
                  </p>

                  <p className="mt-[4px] text-[16px] font-medium text-[#292929]/55">
                    14세 이상
                  </p>
                </div>

                {/* 소인 */}
                <div>
                  <p className="text-[16px] font-bold text-[#292929]/55">
                    소인
                  </p>

                  <p className="mt-[3px] text-[28px] font-bold text-[#292929]">
                    35,000
                    <span className="ml-[5px] text-[16px]">원</span>
                  </p>

                  <p className="mt-[4px] text-[16px] font-medium text-[#292929]/55">
                    24개월 이상 ~ 14세 미만
                  </p>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="relative z-10 my-[22px] h-px w-full bg-[#F5A623]/20" />

            {/* 오후권 */}
            <div className="relative z-10 grid grid-cols-1 gap-[20px] md:grid-cols-[110px_1fr] md:items-center">
              <div>
                <p className="text-[18px] font-bold text-[#E59A16]">오후권</p>
              </div>

              <div>
                <p className="text-[16px] font-bold text-[#292929]/55">
                  소인 / 대인
                </p>

                <div className="mt-[3px] flex flex-col gap-[6px] xl:flex-row xl:items-end xl:gap-[18px]">
                  <p className="text-[28px] font-bold text-[#292929]">
                    17,500
                    <span className="ml-[5px] text-[16px]">원</span>
                  </p>

                  <p className="pb-[3px] text-[16px] font-medium text-[#E53935]">
                    15시부터 입장 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 안내 */}
      <div className="mt-[22px] rounded-[14px] border border-[#E53935]/25 bg-white/30 px-[20px] py-[15px] text-center backdrop-blur-[8px]">
        <p className="text-[16px] font-medium leading-[1.7] text-[#292929]/75">
          영업시간 내{" "}
          <span className="font-bold text-[#E53935]">
            시간제한 없이 이용 가능
          </span>
          하며, 퇴장 시{" "}
          <span className="font-bold text-[#E53935]">재입장은 불가</span>
          합니다.
        </p>
      </div>
    </section>
  );
}
