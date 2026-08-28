import { ArrowUpRight } from "lucide-react";
import flagIcon from "../../../img/flag_icon.png";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="mt-[100px] px-[150px]">
      <div className="flex items-center gap-[50px]">
        <div className="w-[45%]">
          <img
            src=""
            alt=""
            className="w-full h-[500px] object-cover rounded-[16px] bg-[#D9D9D9]"
          />
        </div>

        <div className="w-[55%]">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="font-['Jua'] text-[60px] leading-none text-[#292929]">
                  KIDS WORLD
                </h1>

                <div>
                  <img src={flagIcon} alt="깃발아이콘" />
                </div>
              </div>

              <p className=" text-[24px] font-bold text-[#E53935]">
                상상체험 키즈월드를 소개합니다 !
              </p>
            </div>

            <Link
              to={"/guides"}
              className="group flex items-center gap-[8px] text-[16px] hover:text-[#E53935]"
            >
              <span className="relative font-medium hover:text-[#E53935] transition-all">
                더보기
              </span>

              <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </Link>
          </div>

          <div className="mt-[45px] flex items-center justify-between">
            <p className="text-[15px] leading-[1.8] font-medium text-[#292929]">
              벡스코 상상체험 키즈월드는 아이들의 상상력과 호기심을 키워주는
              국내 최대 실내 놀이공간입니다.
              <br />
              안전하고 쾌적한 환경에서 다양한 놀이와 체험을 마음껏 즐길 수
              있습니다.
            </p>
          </div>

          <div className="mt-[40px] flex gap-[20px]">
            <div className="w-[240px] h-[240px] rounded-full bg-[#16864B]/50 shadow-xl hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center px-[20px]">
              <p className="text-[18px] font-bold">#대규모 실내놀이터</p>
              <p className="mt-[14px] text-[16px] leading-[1.6] text-[#292929]/60 font-medium">
                2500평 규모의
                <br />
                대형 실내놀이터
              </p>
            </div>

            <div className="w-[240px] h-[240px] rounded-full bg-[#F5A623]/50 shadow-xl hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center px-[20px]">
              <p className="text-[18px] font-bold">#다양한 체험시설</p>
              <p className="mt-[12px] text-[16px] leading-[1.6] text-[#292929]/60 font-medium">
                다양한 체험시설이 있어
                <br />
                즐거움이 가득
              </p>
            </div>

            <div className="w-[240px] h-[240px] rounded-full bg-[#16864B]/50 shadow-xl hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center px-[20px]">
              <p className="text-[18px] font-bold">#시간제한 없이</p>
              <p className="mt-[12px] text-[16px] leading-[1.6] text-[#292929]/60 font-medium">
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
