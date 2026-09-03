import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Section5() {
  return (
    <section className="mt-[30px] bg-[white] px-5 py-[45px] sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
      {/* 타이틀 */}
      <div className="flex flex-col gap-[16px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            이용수칙
          </h2>

          <p className="mt-[8px] text-[16px] font-bold text-[#E53935] lg:text-[18px]">
            안전하고 즐거운 이용을 위해 방문 전 꼭 확인해주세요 !
          </p>
        </div>

        <Link
          to="/guides/rules"
          className="group flex w-fit items-center gap-[8px] text-[16px] font-medium text-[#292929] transition-colors duration-300 hover:text-[#E53935]"
        >
          전체 이용수칙 보기
          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
        </Link>
      </div>

      {/* 이용수칙 박스 */}
      <div className="mt-[28px] overflow-hidden rounded-[20px] bg-[#292929] px-[24px] py-[30px] sm:px-[40px] sm:py-[36px] lg:px-[55px] lg:py-[42px]">
        <div className="mx-auto max-w-[1100px]">
          {/* 수칙 1 */}
          <div className="text-center">
            <h3 className="text-[18px] font-bold text-[white] sm:text-[20px]">
              양말을 꼭 챙겨주세요
            </h3>

            <p className="mt-[6px] text-[12px] font-medium leading-[1.7] text-white/60 sm:text-[17px]">
              에어바운스 등 일부 시설은 양말 착용이 필수입니다.
            </p>
          </div>

          <div className="my-[22px] h-px w-full bg-white/15 sm:my-[26px]" />

          {/* 수칙 2 */}
          <div className="text-center">
            <h3 className="text-[18px] font-bold text-[white] sm:text-[20px]">
              외부 음식물은 반입할 수 없어요
            </h3>

            <p className="mt-[6px] text-[12px] font-medium leading-[1.7] text-white/60 sm:text-[17px]">
              물과 이유식을 제외한 모든 외부 음식물은 반입 금지입니다.
            </p>
          </div>

          <div className="my-[22px] h-px w-full bg-white/15 sm:my-[26px]" />

          {/* 수칙 3 */}
          <div className="text-center">
            <h3 className="text-[18px] font-bold text-[white] sm:text-[20px]">
              아이와 함께 줄을 서주세요
            </h3>

            <p className="mt-[6px] text-[12px] font-medium leading-[1.7] text-white/60 sm:text-[17px]">
              대신줄서기는 불가합니다. 기구를 이용하는 모든 인원이 줄을 서계신
              후 이용 부탁드립니다.
            </p>
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mx-auto mt-[30px] max-w-[1100px] border-t border-[#F5A623]/60 pt-[24px] text-center">
          <p className="text-[16px] font-bold leading-[1.7] text-[#F5A623] sm:text-[17px]">
            안전한 이용을 위해 모든 시설에서 안전요원의 안내를 따라주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
