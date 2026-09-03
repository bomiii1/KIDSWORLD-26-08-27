import { Link } from "react-router-dom";
import HeroBg from "../../../img/hero_bg.png";
import Poster from "../../../img/season_poster.png";
import BexocoLogo from "../../../img/bexco_logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70svh] w-full overflow-hidden lg:min-h-screen">
      <div
        className="absolute inset-0 animate-[heroZoom_10s_ease-out_forwards] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      <div className="relative min-h-[70svh] w-full bg-black/78 pt-[90px] backdrop-blur-[3px] lg:min-h-screen">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-[25px] px-5 py-[35px] sm:gap-[35px] sm:px-10 sm:py-[45px] md:px-12 lg:min-h-[calc(100vh-90px)] lg:flex-row lg:gap-[60px] lg:px-[80px] lg:py-0 xl:px-[150px]">
          {/* 포스터 */}
          <div className="flex w-full justify-center lg:w-[40%]">
            <img
              src={Poster}
              alt="시즌포스터"
              className="w-[190px] max-w-full rounded-[12px] shadow-2xl sm:w-[240px] md:w-[290px] lg:w-[380px] xl:w-[420px]"
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="w-full text-center text-white lg:w-[60%] lg:text-left">
            <p className="mb-[10px] text-[13px] font-bold text-[#E53935] sm:text-[16px] md:text-[18px] lg:mb-[30px] lg:text-[22px]">
              아이들을 위한 대규모 실내 놀이공간
            </p>

            <div className="mx-auto w-[100px] sm:w-[130px] md:w-[150px] lg:mx-0 lg:w-[200px]">
              <img src={BexocoLogo} alt="벡스코로고" />
            </div>

            <h2 className="mt-[6px] font-['Jua'] text-[36px] leading-[1.1] sm:text-[44px] md:text-[52px] lg:mt-[10px] lg:text-[64px] xl:text-[75px]">
              상상체험 키즈월드
            </h2>

            <p className="mt-[5px] text-[17px] font-bold text-[#F5A623] sm:text-[20px] md:text-[22px] lg:mt-2 lg:text-[26px] xl:text-[28px]">
              2025.12.06 - 2026.10.18
            </p>

            <p className="mt-[15px] text-[13px] leading-[1.7] text-white/80 sm:mt-[20px] sm:text-[15px] md:text-[16px] lg:mt-[40px] lg:text-[18px]">
              다양한 놀이시설과 즐거운 체험이 가득!
              <br />
              온가족이 함께 즐기는 실내 놀이터!
            </p>

            {/* 버튼 */}
            <div className="mt-[22px] flex gap-[10px] sm:mt-[30px] sm:justify-center lg:mt-[55px] lg:justify-end lg:gap-[20px]">
              <Link
                to="/facilities"
                className="flex-1 rounded-[8px] border border-white/60 bg-white/10 px-[12px] py-[13px] text-center text-[12px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95 sm:max-w-[200px] sm:px-[25px] sm:py-[16px] sm:text-[14px] lg:max-w-none lg:flex-none lg:px-[55px] lg:py-[28px] lg:text-[16px] xl:px-[80px] xl:py-[40px]"
              >
                시설 둘러보기 →
              </Link>

              <a
                href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-[8px] border border-white/60 bg-white/10 px-[12px] py-[13px] text-center text-[12px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95 sm:max-w-[200px] sm:px-[25px] sm:py-[16px] sm:text-[14px] lg:max-w-none lg:flex-none lg:px-[55px] lg:py-[28px] lg:text-[16px] xl:px-[80px] xl:py-[40px]"
              >
                예매 바로가기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
