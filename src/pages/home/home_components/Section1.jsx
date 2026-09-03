import { ArrowUpRight } from "lucide-react";
import flagIcon from "../../../img/flag_icon.png";
import { Link } from "react-router-dom";
import kidsworldImg from "../../../img/about.jpg";

export default function Section1() {
  return (
    <section className="mt-[70px] px-5 sm:mt-[80px] sm:px-10 md:px-12 lg:mt-[100px] lg:px-[80px] xl:px-[150px]">
      <div className="flex flex-col gap-[45px] lg:flex-row lg:items-center lg:gap-[50px]">
        {/* 왼쪽 이미지 */}
        <div className="w-full lg:w-[45%]">
          <img
            src={kidsworldImg}
            className="h-[320px] w-full rounded-[16px] bg-[#D9D9D9] sm:h-[400px] md:h-[460px] lg:h-[500px]"
          />
        </div>

        {/* 오른쪽 내용 */}
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-['Jua'] text-[42px] leading-none text-[#292929] sm:text-[50px] md:text-[56px] lg:text-[60px]">
                  KIDS WORLD
                </h1>

                <img
                  src={flagIcon}
                  alt="깃발아이콘"
                  className="w-[32px] shrink-0 sm:w-[38px] lg:w-auto"
                />
              </div>

              <p className="mt-2 text-[18px] font-bold text-[#E53935] sm:text-[21px] lg:text-[24px]">
                상상체험 키즈월드를 소개합니다 !
              </p>
            </div>

            <Link
              to="/guides"
              className="group flex w-fit items-center gap-[8px] text-[14px] transition-colors hover:text-[#E53935] sm:text-[15px] lg:text-[16px]"
            >
              <span className="font-medium">더보기</span>

              <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </Link>
          </div>

          {/* 설명 */}
          <div className="mt-[30px] sm:mt-[35px] lg:mt-[45px]">
            <p className="text-[14px] font-medium leading-[1.8] text-[#292929] sm:text-[15px] md:text-[16px]">
              벡스코 상상체험 키즈월드는 아이들의 상상력과 호기심을 키워주는
              국내 최대 실내 놀이공간입니다.
              <br className="hidden md:block" />
              안전하고 쾌적한 환경에서 다양한 놀이와 체험을 마음껏 즐길 수
              있습니다.
            </p>
          </div>

          {/* 동그라미 3개 */}
          <div className="mt-[35px] flex w-full items-center justify-between gap-2 sm:gap-4 lg:mt-[40px] lg:gap-3 xl:gap-[20px]">
            {/* 1 */}
            <div className="flex aspect-square min-w-0 flex-1 flex-col items-center justify-center rounded-full bg-[#16864B]/50 px-2 text-center shadow-xl transition-all duration-200 hover:scale-105 sm:px-3 lg:px-2 xl:px-[20px]">
              <p className="whitespace-nowrap text-[11px] font-bold sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px]">
                #대규모 실내놀이터
              </p>

              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-[#292929]/60 sm:mt-3 sm:text-[12px] md:text-[14px] lg:text-[12px] xl:mt-[14px] xl:text-[16px]">
                2500평 규모의
                <br />
                대형 실내놀이터
              </p>
            </div>

            {/* 2 */}
            <div className="flex aspect-square min-w-0 flex-1 flex-col items-center justify-center rounded-full bg-[#F5A623]/50 px-2 text-center shadow-xl transition-all duration-200 hover:scale-105 sm:px-3 lg:px-2 xl:px-[20px]">
              <p className="whitespace-nowrap text-[11px] font-bold sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px]">
                #다양한 체험시설
              </p>

              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-[#292929]/60 sm:mt-3 sm:text-[12px] md:text-[14px] lg:text-[12px] xl:mt-[12px] xl:text-[16px]">
                다양한 체험시설이 있어
                <br />
                즐거움이 가득
              </p>
            </div>

            {/* 3 */}
            <div className="flex aspect-square min-w-0 flex-1 flex-col items-center justify-center rounded-full bg-[#16864B]/50 px-2 text-center shadow-xl transition-all duration-200 hover:scale-105 sm:px-3 lg:px-2 xl:px-[20px]">
              <p className="whitespace-nowrap text-[11px] font-bold sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px]">
                #시간제한 없이
              </p>

              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-[#292929]/60 sm:mt-3 sm:text-[12px] md:text-[14px] lg:text-[12px] xl:mt-[12px] xl:text-[16px]">
                시간 제한 없이 편하게
                <br />
                즐기는 실내놀이터
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
