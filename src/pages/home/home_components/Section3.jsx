import giraffeImg from "../../../img/giraffe.png";
import cloud1Img from "../../../img/cloud1.png";
import cloud2Img from "../../../img/cloud2.png";
import cloud3Img from "../../../img/cloud3.png";

export default function Section3() {
  return (
    <section className="relative mx-auto h-[330px] w-full overflow-hidden bg-[#FFF9EE] sm:h-[310px] lg:h-[300px]">
      {/* 초록색 영역 */}
      <div className="absolute left-0 top-[55px] h-[240px] w-full bg-[#138D4B] sm:top-[60px] sm:h-[215px] lg:top-[68px] lg:h-[175px]">
        {/* 왼쪽 구름 */}
        <img
          src={cloud1Img}
          alt=""
          className="pointer-events-none absolute left-0 top-[58px] z-10 w-[55px] sm:top-[52px] sm:w-[72px] lg:top-[48px] lg:w-[90px]"
        />

        {/* 텍스트 */}
        <div className="relative z-20 mx-auto h-full max-w-[1228px] px-5 pt-7 sm:px-10 sm:pl-[150px] sm:pt-8 md:pl-[20px] lg:flex lg:items-center lg:pl-[20px] lg:pt-0">
          <div>
            <h2 className="text-[30px] font-[Jua] tracking-[-1px] text-[#FFF9EE] sm:text-[38px] lg:text-[52px]">
              맞춤 놀이 찾기
            </h2>

            <p className="text-[15px] font-bold leading-[1.65] text-[#FFAD21] sm:text-[17px]  lg:text-[21px]">
              <span className="block lg:inline">
                키, 나이, 보호자동반 탑승 여부에 맞춰
              </span>

              <span className="block lg:ml-2 lg:inline">
                이용 가능한 놀이를 추천해드립니다.
              </span>
            </p>
          </div>
        </div>

        {/* 오른쪽 흰 구름 버튼 */}
        <button
          type="button"
          aria-label="맞춤 놀이 찾기"
          className="group absolute bottom-0 right-0 z-10 h-[90px] w-[215px] origin-bottom-right cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300 ease-out hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline-none sm:h-[110px] sm:w-[280px] lg:h-[138px] lg:w-[370px]"
        >
          <img
            src={cloud2Img}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-contain object-bottom"
          />

          <span className="absolute bottom-[23px] left-1/2 z-10 flex -translate-x-1/2 items-center whitespace-nowrap text-[13px] font-bold text-[#292929] sm:bottom-[30px] sm:text-[15px] lg:bottom-[38px] lg:text-[18px]">
            맞춤 놀이 찾기
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
              →
            </span>
          </span>
        </button>

        {/* 오른쪽 하늘색 구름 */}
        <img
          src={cloud3Img}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-20 w-[70px] sm:w-[95px] lg:w-[120px]"
        />

        {/* 기린 */}
        <img
          src={giraffeImg}
          alt=""
          className="pointer-events-none absolute bottom-0 left-[14px] z-30 h-[135px] w-auto object-contain sm:left-[35px] sm:h-[175px] md:left-[60px] md:h-[195px] lg:left-[115px] lg:h-[245px]"
        />
      </div>
    </section>
  );
}
