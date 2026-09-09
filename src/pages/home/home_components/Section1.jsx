import kidsworldImg from "../../../img/about.jpg";
import Experience from "../../../img/experience.jpg";
import yellowStarImg from "../../../img/yellowstar.png";
import pinkStarImg from "../../../img/pinkstar.png";
import FamilyImg from "../../../img/family.png";
import { Link } from "react-router-dom";

const playPoints = [
  {
    id: 1,
    title: "대규모 실내놀이터",
    image: kidsworldImg,
    imagePosition: "object-left",
  },
  {
    id: 2,
    title: "다양한 놀이시설",
    image: Experience,
    imagePosition: "object-center",
  },
  {
    id: 3,
    title: "온가족이 함께",
    image: FamilyImg,
    imagePosition: "object-right",
  },
];

export default function Section1() {
  return (
    <section className="relative w-full  bg-white px-5 pb-[50px] pt-[70px] sm:px-[30px] sm:pb-[60px] sm:pt-[80px] md:px-[50px] lg:px-[80px] lg:pb-[65px] lg:pt-[100px] xl:px-[150px]">
      {/* 왼쪽 노란 장식 */}
      <img
        src={yellowStarImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-220px] top-[24%] z-0 w-[400px] -translate-y-1/2 select-none object-contain opacity-[0.12] sm:left-[-260px] sm:w-[500px] lg:left-[-320px] lg:w-[650px] xl:w-[760px]"
      />

      {/* 오른쪽 핑크 장식 */}
      <img
        src={pinkStarImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-220px] top-[76%] z-0 w-[390px] -translate-y-1/2 select-none object-contain opacity-[0.12] sm:right-[-260px] sm:w-[490px] lg:right-[-320px] lg:w-[640px] xl:w-[750px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">
        {/* 제목 영역 */}
        <div className="text-center">
          <p className="text-[14px] font-bold tracking-[1.5px] text-[#FFD050] sm:text-[16px] lg:text-[18px]">
            WELCOME TO
          </p>

          <h2 className="mt-2 font-['Jua'] text-[44px] leading-none tracking-[-1px] text-[#292929] sm:text-[56px] lg:text-[68px]">
            KIDSWORLD!
          </h2>

          <p className="mt-7 text-[16px] font-[400] leading-[1.8] text-[#292929]/60 sm:text-[18px] lg:mt-9 lg:text-[20px]">
            온 가족이 함께 즐기는 대규모 실내 놀이터!
            <br />
            다양한 놀이시설과 즐거운 체험이 가득!
          </p>
        </div>

        {/* 원형 이미지 */}
        <div className="mt-[55px] grid grid-cols-3 justify-items-center gap-[5px] sm:mt-[70px] sm:gap-[20px] lg:mt-[85px] lg:gap-[40px] xl:gap-[55px]">
          {playPoints.map((point) => (
            <Link to="/about" key={point.id} className="w-full">
              <article
                tabIndex={0}
                className="group relative aspect-square w-full max-w-[300px] cursor-pointer overflow-hidden rounded-full shadow-[0_15px_35px_rgba(41,41,41,0.18)] outline-none ring-[#FFD050] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(41,41,41,0.25)] focus-visible:ring-4 sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[370px]"
              >
                {/* 이미지 */}
                <img
                  src={point.image}
                  alt={point.title}
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 ${point.imagePosition}`}
                />

                {/* 모바일 기본 오버레이 / PC 호버 오버레이 */}
                <div className="absolute inset-0 bg-[#292929]/85 transition-colors duration-300 sm:bg-[#292929]/0 sm:group-hover:bg-[#292929]/85 sm:group-focus:bg-[#292929]/85" />

                {/* 설명 */}
                <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-white opacity-100 transition-all duration-300 sm:translate-y-3 sm:px-5 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus:translate-y-0 sm:group-focus:opacity-100 lg:px-8">
                  <h3 className="break-keep text-[14px] font-medium leading-[1.3] sm:text-[16px] sm:font-bold md:text-[18px] lg:text-[22px]">
                    <span className="text-[#FFD050]"># </span>
                    {point.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
