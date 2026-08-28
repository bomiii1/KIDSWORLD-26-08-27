import { Link } from "react-router-dom";
import HeroBg from "../../../img/hero_bg.png";
import Poster from "../../../img/season_poster.png";
import BexocoLogo from "../../../img/bexco_logo.png";

export default function HeroSection() {
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[heroZoom_10s_ease-out_forwards]"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      <div className="relative w-full h-full bg-black/78 backdrop-blur-[3px] pt-[90px]">
        <div className="h-full px-[150px] flex items-center justify-center ">
          <div className="w-[40%] flex justify-center">
            <img
              src={Poster}
              alt="시즌포스터"
              className="
                w-[420px]
                max-w-full
                rounded-[12px]
                shadow-2xl
              "
            />
          </div>

          <div className="w-[60%] text-[#FFF9EE]">
            <p className="text-[22px] font-bold text-[#E53935] mb-[30px]">
              아이들을 위한 대규모 실내 놀이공간
            </p>

            <div className="w-[200px]">
              <img src={BexocoLogo} alt="벡스코로고" />
            </div>

            <h2 className="mt-[10px] text-[75px] leading-[1.2] font-['Jua']">
              상상체험 키즈월드
            </h2>

            <p className="text-[28px] font-bold text-[#F5A623]">
              2025.12.06 - 2026.10.18
            </p>

            <p className="mt-[40px] text-[18px] leading-[1.8] text-[#FFF9EE]/80">
              다양한 놀이시설과 즐거운 체험이 가득!
              <br />
              온가족이 함께 즐기는 실내 놀이터!
            </p>

            <div className="mt-[55px] flex gap-[20px] justify-end">
              <Link
                to={"/facilities"}
                className="
                  py-[40px]
                  px-[80px]
                  rounded-[8px]
                  border
                  border-white/60
                  bg-white/10
                  text-[16px]
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/20
                  hover:-translate-y-1
                  active:scale-95
                "
              >
                시설 둘러보기 →
              </Link>

              <a
                href="#"
                target="blank"
                className="
                  py-[40px]
                  px-[80px]
                  rounded-[8px]
                  border
                  border-white/60
                  bg-white/10
                  text-[16px]
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/20
                  hover:-translate-y-1
                  active:scale-95
                "
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
