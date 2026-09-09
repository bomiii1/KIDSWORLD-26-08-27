import { ArrowRight, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

import yellowStar from "../../../img/yellowstar.png";
import pinkStar from "../../../img/pinkstar.png";

export default function Section3() {
  return (
    <section className="bg-white px-5 pb-[90px] sm:px-[30px] sm:pb-[110px] md:px-[50px] lg:px-[80px] lg:pb-[130px] xl:px-[150px]">
      <Link
        to="/facilities/custom"
        aria-label="우리 아이 맞춤놀이 찾기"
        className="group relative flex w-full cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-[20px] bg-[#FFD050]/45 px-5 py-7 transition-all duration-300 hover:bg-[#FFD050]/65 hover:shadow-[0_10px_30px_rgba(41,41,41,0.1)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B81]/35 sm:px-8 sm:py-8 lg:px-14 lg:py-10"
      >
        {/* 안내 내용 */}
        <div className="relative z-10 flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white/65 text-[#292929] sm:h-[60px] sm:w-[60px]">
            <Ruler className="h-7 w-7 rotate-[-45deg] sm:h-8 sm:w-8" />
          </div>

          <div className="min-w-0">
            <h2 className="break-keep font-['Jua'] text-[22px] leading-[1.3] text-[#292929] sm:text-[28px] lg:text-[32px]">
              우리 아이 맞춤놀이 찾기
            </h2>

            <p className="mt-2 break-keep text-[14px] font-medium leading-[1.6] text-[#292929]/60 sm:text-[16px] lg:text-[18px]">
              키, 나이, 보호자동반 탑승 여부에 맞춰 이용 가능한 놀이를
              추천해드립니다.
            </p>
          </div>
        </div>

        <ArrowRight className="relative z-10 h-7 w-7 shrink-0 text-[#FF6B81] transition-transform duration-300 group-hover:translate-x-2 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
      </Link>
    </section>
  );
}
