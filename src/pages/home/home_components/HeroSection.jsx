import { Link } from "react-router-dom";
import HeroBg from "../../../img/hero_bg.png";
import Poster from "../../../img/season_poster.png";
import BexocoLogo from "../../../img/bexco_logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[heroZoom_10s_ease-out_forwards]"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      <div className="relative min-h-screen w-full bg-black/78 pt-[90px] backdrop-blur-[3px]">
        <div className="mx-auto flex min-h-[calc(100vh-90px)] w-full max-w-[1600px] flex-col items-center justify-center gap-[40px] px-5 py-[50px] sm:px-10 md:px-12 lg:flex-row lg:gap-[60px] lg:px-[80px] lg:py-0 xl:px-[150px]">
          
          {/* 포스터 */}
          <div className="flex w-full justify-center lg:w-[40%]">
            <img
              src={Poster}
              alt="시즌포스터"
              className="w-[260px] max-w-full rounded-[12px] shadow-2xl sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px]"
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="w-full text-center text-[#FFF9EE] lg:w-[60%] lg:text-left">
            <p className="mb-[18px] text-[16px] font-bold text-[#E53935] sm:text-[18px] md:text-[20px] lg:mb-[30px] lg:text-[22px]">
              아이들을 위한 대규모 실내 놀이공간
            </p>

            <div className="mx-auto w-[130px] sm:w-[150px] md:w-[170px] lg:mx-0 lg:w-[200px]">
              <img src={BexocoLogo} alt="벡스코로고" />
            </div>

            <h2 className="mt-[10px] font-['Jua'] text-[42px] leading-[1.15] sm:text-[50px] md:text-[60px] lg:text-[64px] xl:text-[75px]">
              상상체험 키즈월드
            </h2>

            <p className="mt-2 text-[20px] font-bold text-[#F5A623] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
              2025.12.06 - 2026.10.18
            </p>

            <p className="mt-[25px] text-[15px] leading-[1.8] text-[#FFF9EE]/80 sm:text-[16px] md:text-[17px] lg:mt-[40px] lg:text-[18px]">
              다양한 놀이시설과 즐거운 체험이 가득!
              <br />
              온가족이 함께 즐기는 실내 놀이터!
            </p>

            {/* 버튼 */}
            <div className="mt-[35px] flex flex-col gap-[12px] sm:flex-row sm:justify-center lg:mt-[55px] lg:justify-end lg:gap-[20px]">
              <Link
                to="/facilities"
                className="rounded-[8px] border border-white/60 bg-white/10 px-[28px] py-[18px] text-[14px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95 sm:px-[36px] sm:py-[20px] sm:text-[15px] lg:px-[55px] lg:py-[28px] lg:text-[16px] xl:px-[80px] xl:py-[40px]"
              >
                시설 둘러보기 →
              </Link>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="rounded-[8px] border border-white/60 bg-white/10 px-[28px] py-[18px] text-[14px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95 sm:px-[36px] sm:py-[20px] sm:text-[15px] lg:px-[55px] lg:py-[28px] lg:text-[16px] xl:px-[80px] xl:py-[40px]"
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