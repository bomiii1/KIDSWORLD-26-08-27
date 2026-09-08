import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroBg1 from "../../../img/hero_bg.png";
import HeroBg2 from "../../../img/hero_bg2.jpg";
import HeroBg3 from "../../../img/hero_bg3.png";
import BexocoLogo from "../../../img/bexco_logo.png";
import { Tickets } from "lucide-react";

const buttonStyle =
  "flex w-fit h-[52px] items-center justify-center whitespace-nowrap rounded-full bg-white/20 px-8 text-[15px] font-[500] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/30 active:scale-95";
export default function HeroSection() {
  const heroImages = [HeroBg1, HeroBg2, HeroBg3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full">
      {/* 히어로 영역 */}
      <section className="relative h-[540px] w-full overflow-hidden bg-[#292929] sm:h-[580px] lg:h-[calc(100svh-190px)] lg:min-h-[570px] lg:max-h-[680px]">
        {/* 배경 이미지 */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-[position:48%_center] bg-no-repeat
      transition-[opacity,transform]
      sm:bg-center
      ${
        currentImage === index
          ? "scale-[1.06] opacity-100"
          : "scale-100 opacity-0"
      }
    `}
            style={{
              backgroundImage: `url(${image})`,
              transitionProperty: "opacity, transform",
              transitionDuration: "2000ms, 8000ms",
              transitionTimingFunction: "ease-in-out, ease-out",
            }}
          />
        ))}
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40" />

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 flex h-full w-full items-center px-5 pb-[75px] pt-[90px] sm:px-[30px] sm:pb-[80px] md:px-[50px] lg:px-[80px] lg:pb-[80px] lg:pt-[90px] xl:px-[150px]">
          <div className="mx-auto w-full max-w-[800px] text-center text-white lg:mx-0 lg:text-left">
            {/* 작은 문구 */}
            <p className="mb-1 text-[12px] font-bold tracking-[-0.3px] text-[#FFD050] sm:mb-2 sm:text-[14px] lg:text-[14px]">
              대형 실내 놀이터
            </p>

            {/* 벡스코 로고 */}
            <div className="mx-auto w-[155px] sm:w-[185px] lg:mx-0 lg:w-[225px]">
              <img src={BexocoLogo} alt="벡스코" className="block w-full" />
            </div>

            {/* 제목 */}
            <h1 className="mt-4 whitespace-nowrap font-['Jua'] text-[38px] leading-[1.12] tracking-[-1px] text-white sm:text-[52px] lg:text-[68px] xl:text-[74px]">
              상상체험 키즈월드
            </h1>

            {/* 버튼 */}
            <div className="mx-auto mt-8 flex w-full flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:mx-0 lg:mt-11 lg:justify-start">
              <Link to="/facilities" className={buttonStyle}>
                시설 둘러보기 →
              </Link>

              <Link to="/guides/admission" className={buttonStyle}>
                이용요금 알아보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 운영정보 박스 */}
      <aside className="relative z-20 mx-5 -mt-[65px] rounded-[22px] bg-white px-5 py-6 text-[#292929] shadow-[0_12px_40px_rgba(41,41,41,0.2)] sm:mx-[30px] sm:-mt-[70px] sm:px-7 sm:py-7 md:mx-[50px] lg:mx-[80px] lg:-mt-[65px] lg:px-8 lg:py-8 xl:mx-[150px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-[1.4fr_0.9fr_1.15fr_1.25fr] lg:gap-0">
          {/* 운영기간 */}
          <div className="col-span-2 min-w-0 lg:col-span-1 lg:border-r lg:border-[#292929]/15 lg:px-6">
            <div className="flex gap-2 items-center mb-2">
              <p className="text-[14px] font-bold text-[#292929]/55 lg:text-[16px]">
                운영기간
              </p>
              <span className="w-fit shrink-0 whitespace-nowrap rounded-full bg-[#5F8F73] px-2 py-[4px] text-[12px] font-[500] text-white lg:text-[12px]">
                운영중
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <strong className="whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[18px]">
                2025.12.06 - 2026.10.18
              </strong>
            </div>
          </div>

          {/* 운영시간 */}
          <div className="min-w-0 lg:border-r lg:border-[#292929]/15 lg:px-8">
            <p className="mb-2 text-[14px] font-bold text-[#292929]/55 lg:text-[16px]">
              운영시간
            </p>

            <strong className="whitespace-nowrap text-[16px] lg:text-[18px]">
              10:30 - 18:00
            </strong>
          </div>

          {/* 위치 */}
          <div className="min-w-0 lg:border-r lg:border-[#292929]/15 lg:px-8">
            <p className="mb-2 text-[14px] font-bold text-[#292929]/55 lg:text-[16px]">
              위치
            </p>

            <strong className="text-[14px] leading-[1.5] sm:text-[16px] lg:text-[18px]">
              벡스코 제2전시장 3층
            </strong>
          </div>

          {/* 예매방법 */}
          <div className="col-span-2 flex min-w-0 items-center lg:col-span-1 lg:px-8">
            <div className="shrink-0">
              <p className="mb-2 text-[14px] font-bold text-[#292929]/55 lg:text-[16px]">
                예매방법
              </p>

              <strong className="whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[18px]">
                온라인 · 현장 예매
              </strong>
            </div>

            {/* 온라인 예매 버튼 */}
            <a
              href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
              target="_blank"
              rel="noreferrer"
              aria-label="온라인 예매 사이트 바로가기"
              title="온라인 예매 바로가기"
              className="ml-auto flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#FF6B81] text-white shadow-md transition-transform duration-300 hover:scale-110 sm:h-[52px] sm:w-[52px] lg:h-[58px] lg:w-[58px]"
            >
              <Tickets className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
