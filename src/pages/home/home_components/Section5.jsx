import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const rules = [
  {
    number: "01",
    title: "양말을 꼭 챙겨주세요",
    description: "에어바운스 등 일부 시설은 양말 착용이 필수입니다.",
  },
  {
    number: "02",
    title: "외부 음식물은 반입할 수 없어요",
    description: "물과 이유식을 제외한 모든 외부 음식물은 반입이 제한됩니다.",
  },
  {
    number: "03",
    title: "아이와 함께 줄을 서주세요",
    description:
      "대신 줄서기는 불가하며, 시설을 이용하는 모든 인원이 함께 줄을 서야 합니다.",
  },
];

export default function Section5() {
  return (
    <section className="bg-white px-5 pb-[90px] sm:px-[30px] sm:pb-[110px] md:px-[50px] lg:px-[80px] lg:pb-[130px] xl:px-[150px]">
      <div className="mx-auto max-w-[1600px]">
        {/* 제목 */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
              이용수칙
            </h2>

            <p className="mt-3 text-[14px] font-medium leading-[1.6] text-[#292929]/60 sm:text-[16px] lg:text-[18px]">
              안전하고 즐거운 이용을 위해 방문 전 꼭 확인해주세요!
            </p>
          </div>

          <Link
            to="/guides/rules"
            className="group flex w-fit items-center gap-2 text-[14px] font-medium text-[#292929]/70 transition-colors hover:text-[#FF6B81] sm:text-[16px] lg:text-[18px]"
          >
            전체 이용수칙 보기
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* 목록 좌우 여백 */}
        <div className="mt-9  sm:mt-11 ">
          {/* 이용수칙 목록 */}
          <div className="border-y border-[#292929]/15">
            {rules.map((rule, index) => (
              <article
                key={rule.number}
                className={`grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 gap-y-2 px-2 py-6 sm:px-4 md:grid-cols-[50px_250px_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[55px_300px_minmax(0,1fr)] lg:px-6 lg:py-8 ${
                  index !== rules.length - 1
                    ? "border-b border-[#292929]/10"
                    : ""
                }`}
              >
                {/* 번호 */}
                <span className="pt-[2px] text-[14px] font-bold text-[#FF6B81] sm:text-[16px]">
                  {rule.number}
                </span>

                {/* 제목 */}
                <h3 className="break-keep text-[18px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
                  {rule.title}
                </h3>

                {/* 설명 */}
                <p className="col-start-2 break-keep text-[14px] font-medium leading-[1.7] text-[#292929]/60 sm:text-[16px] md:col-start-3 lg:text-[18px]">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
