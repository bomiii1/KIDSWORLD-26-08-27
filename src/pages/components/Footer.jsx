import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#292929] px-5 py-[45px] mt-[100px] text-[white] sm:px-8 md:px-10 lg:px-[60px] lg:py-[55px] xl:px-[150px]">
      <div className="flex flex-col gap-[35px] lg:flex-row lg:items-start lg:justify-between">
        {/* 왼쪽 */}
        <div className="max-w-[520px]">
          <h2 className="font-['Jua'] text-[36px] leading-none sm:text-[42px] lg:text-[46px]">
            KIDS WORLD
          </h2>

          <p className="mt-[10px] text-[18px] font-bold text-[#F5A623]">
            상상체험 키즈월드
          </p>

          <p className="mt-[18px] text-[16px] font-medium leading-[1.7] text-[white]/65">
            아이들의 상상이 현실이 되는 즐거운 놀이공간
          </p>

          <div className="mt-[28px] space-y-[8px] text-[16px] font-medium leading-[1.7] text-[white]/70">
            <p>
              부산 해운대구 APEC로 30
              <br className="sm:hidden" /> 벡스코 제2전시장 3층
            </p>

            <p>운영시간 10:30 - 18:00</p>

            <p>* 입장마감 17:00</p>
          </div>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="grid grid-cols-2 gap-x-[45px] gap-y-[14px] sm:grid-cols-3 lg:gap-x-[55px]">
          <Link
            to="/guides"
            className="text-[16px] font-medium text-[white]/70 transition-colors duration-300 hover:text-[#F5A623]"
          >
            이용안내
          </Link>

          <Link
            to="/facilities"
            className="text-[16px] font-medium text-[white]/70 transition-colors duration-300 hover:text-[#F5A623]"
          >
            시설안내
          </Link>

          <Link
            to="/directions"
            className="text-[16px] font-medium text-[white]/70 transition-colors duration-300 hover:text-[#F5A623]"
          >
            오시는길
          </Link>

          <Link
            to="/faq"
            className="text-[16px] font-medium text-[white]/70 transition-colors duration-300 hover:text-[#F5A623]"
          >
            FAQ
          </Link>

          <Link
            to="/guides"
            className="text-[16px] font-medium text-[white]/70 transition-colors duration-300 hover:text-[#F5A623]"
          >
            단체문의
          </Link>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-[6px] text-[16px] font-bold text-[#F5A623]"
          >
            예매 바로가기
            <ArrowUpRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
        </div>
      </div>

      {/* 하단 */}
      <div className="mt-[40px] border-t border-white/10 pt-[22px]">
        <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[16px] font-medium text-[white]/40">
            © KIDS WORLD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
