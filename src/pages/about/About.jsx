import Review from "./about_components/Review";
import aboutImg from "../../img/about.jpg";

import { useState } from "react";

export default function About() {
  const [activeKeyword, setActiveKeyword] = useState("2500");

  return (
    <main className="min-h-screen bg-[white] pt-[90px]">
      {/* 상단 타이틀 */}
      <section
        className="relative bg-cover bg-[center_50%] bg-no-repeat px-5 py-[65px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[75px] xl:px-[150px]"
        style={{
          backgroundImage:
            "url(https://mblogthumb-phinf.pstatic.net/MjAyNDA3MzBfMjg1/MDAxNzIyMzUwNjM2MzU2.KZUm8ffnIlX9N6ijR1VvemejEO9x8TpFlMbgUIiUXj8g.y73cpa-W_7S5OWdQqei6Q4qKJGem0R9Qw5fpDOcVsgMg.JPEG/SE-ad50c06f-8d66-49cc-859b-1d06dd4b7798.jpg?type=w800)",
        }}
      >
        {/* 검정 오버레이 */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 타이틀 */}
        <div className="relative z-10">
          <h1 className="font-['Jua'] text-[46px] text-[white] sm:text-[52px] lg:text-[60px]">
            상상체험 키즈월드
          </h1>

          <p className="mt-[10px] text-[18px] font-bold text-[#E53935] lg:text-[20px]">
            상상체험 키즈월드를 소개합니다!
          </p>
        </div>

        {/* 동그라미 */}
        <div className="absolute bottom-[-85px] right-[30px] z-20 hidden gap-[22px] md:flex lg:right-[80px] xl:right-[150px]">
          <div className="circle-up circle-delay-1 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-[#F5A623] text-[15px] font-bold text-[white] shadow-2xl lg:h-[180px] lg:w-[180px] lg:text-[17px]">
            EXPERIENCE
          </div>

          <div className="circle-up circle-delay-2 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-[#16864B] text-[15px] font-bold text-[white] shadow-2xl lg:h-[180px] lg:w-[180px] lg:text-[17px]">
            PLAY
          </div>

          <div className="circle-up circle-delay-3 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-[#F5A623] text-[15px] font-bold text-[white] shadow-2xl lg:h-[180px] lg:w-[180px] lg:text-[17px]">
            EMOTION
          </div>
        </div>
      </section>

      {/* 키즈월드 소개 */}
      <section className="px-5 pb-[70px] pt-[80px] sm:px-8 sm:pt-[100px] md:px-10 lg:px-[80px] lg:pb-[80px] lg:pt-[110px] xl:px-[150px]">
        {/* 소개글 */}
        <div className="flex flex-col items-center text-center my-10">
          <h2 className="text-[28px] font-bold text-[#292929] sm:text-[32px] lg:text-[38px]">
            놀이를 넘어, 가족의 추억이 되는 공간
          </h2>

          <p className="mt-[18px] max-w-[720px] text-[15px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[17px]">
            상상체험 키즈월드는 아이들이 직접 몸으로 느끼고 경험하며,
            <br className="hidden sm:block" />
            부모와 아이가 함께 즐거운 순간을 만들어가는 실내 놀이공간입니다.
          </p>
        </div>

        {/* 메인 이미지 */}
        <div className="mt-[35px] overflow-hidden rounded-[30px]">
          <img
            src={aboutImg}
            alt="상상체험 키즈월드"
            className="h-[300px] w-full object-cover object-center sm:h-[500px] lg:h-[550px]"
          />
        </div>

        {/* 카드 */}
        <div className="mt-[28px] grid grid-cols-2 gap-x-[10px] gap-y-[24px] sm:gap-[14px] lg:grid-cols-4">
          {/* 카드 1 */}
          <div>
            <div
              className="relative min-h-[190px] overflow-hidden rounded-[14px] bg-cover bg-center bg-no-repeat sm:min-h-[220px] sm:rounded-[18px] lg:min-h-[250px]"
              style={{
                backgroundImage:
                  "url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfNTYg%2FMDAxNzg3OTE2ODQ5NzQx.eVRWnZ9XeLHGB9RJz9EhJXDDNrcOXvHj8oYFj2mssSYg.DJqKxyBIYGG6fgGjrC7kPfuB8ms-wpqNLg3rRp-vjDog.JPEG%2F900_20260822_154002.jpg&type=sc960_832)",
              }}
            >
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-[14px] sm:p-[18px] lg:p-[24px]">
                <p className="text-[12px] font-bold leading-[1.6] text-white sm:text-[14px] lg:text-[17px] lg:leading-[1.7]">
                  보기만 하는 것이 아닌
                  <br />
                  직접 몸으로 즐기는 놀이
                </p>
              </div>
            </div>

            <p className="mt-[10px] text-center text-[12px] font-bold text-[#292929] sm:text-[13px] lg:mt-[14px] lg:text-[14px]">
              직접 참여하는 체험
            </p>
          </div>

          {/* 카드 2 */}
          <div>
            <div className="relative min-h-[190px] overflow-hidden rounded-[14px] bg-[#D9D9D9] bg-cover bg-center bg-no-repeat sm:min-h-[220px] sm:rounded-[18px] lg:min-h-[250px]">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-[14px] sm:p-[18px] lg:p-[24px]">
                <p className="text-[12px] font-bold leading-[1.6] text-white sm:text-[14px] lg:text-[17px] lg:leading-[1.7]">
                  가족과 함께한 순간을
                  <br />
                  사진과 기억으로 남기는 공간
                </p>
              </div>
            </div>

            <p className="mt-[10px] text-center text-[12px] font-bold text-[#292929] sm:text-[13px] lg:mt-[14px] lg:text-[14px]">
              추억이 되는 체험
            </p>
          </div>

          {/* 카드 3 */}
          <div>
            <div className="relative min-h-[190px] overflow-hidden rounded-[14px] bg-[#D9D9D9] bg-cover bg-center bg-no-repeat sm:min-h-[220px] sm:rounded-[18px] lg:min-h-[250px]">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-[14px] sm:p-[18px] lg:p-[24px]">
                <p className="text-[12px] font-bold leading-[1.6] text-white sm:text-[14px] lg:text-[17px] lg:leading-[1.7]">
                  놀이와 체험 과정에서
                  <br />
                  자연스럽게 얻는 경험
                </p>
              </div>
            </div>

            <p className="mt-[10px] text-center text-[12px] font-bold text-[#292929] sm:text-[13px] lg:mt-[14px] lg:text-[14px]">
              놀면서 배우는 체험
            </p>
          </div>

          {/* 카드 4 */}
          <div>
            <div className="relative min-h-[190px] overflow-hidden rounded-[14px] bg-[#D9D9D9] bg-cover bg-center bg-no-repeat sm:min-h-[220px] sm:rounded-[18px] lg:min-h-[250px]">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-[14px] sm:p-[18px] lg:p-[24px]">
                <p className="text-[12px] font-bold leading-[1.6] text-white sm:text-[14px] lg:text-[17px] lg:leading-[1.7]">
                  부모와 아이가 함께 즐길 수 있는
                  <br />
                  다양한 놀이
                </p>
              </div>
            </div>

            <p className="mt-[10px] text-center text-[12px] font-bold text-[#292929] sm:text-[13px] lg:mt-[14px] lg:text-[14px]">
              온 가족이 함께
            </p>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="px-5 pb-[40px] sm:px-8 md:px-10 lg:px-[80px] lg:pb-[50px] xl:px-[150px]">
        {/* PC / 태블릿 */}
        <div className="mt-[50px] hidden md:block">
          <div className="relative">
            <div className="absolute left-0 top-[8px] h-[2px] w-full bg-[#292929]/15" />

            <div className="relative grid grid-cols-4 gap-[30px]">
              {/* 2010 */}
              <div>
                <div className="h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

                <p className="mt-[24px] text-[14px] font-bold text-[#292929]/45">
                  2010
                </p>

                <h3 className="mt-[10px] text-[17px] font-bold leading-[1.6] text-[#292929] lg:text-[19px]">
                  어린이를 위한
                  <br />
                  체험형 행사 시작
                </h3>
              </div>

              {/* 2014 */}
              <div>
                <div className="h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

                <p className="mt-[24px] text-[14px] font-bold text-[#292929]/45">
                  2014
                </p>

                <h3 className="mt-[10px] text-[17px] font-bold leading-[1.6] text-[#292929] lg:text-[19px]">
                  상상체험 키즈월드
                  <br />
                  운영 확대
                </h3>
              </div>

              {/* 2020 */}
              <div>
                <div className="h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

                <p className="mt-[24px] text-[14px] font-bold text-[#292929]/45">
                  2020
                </p>

                <h3 className="mt-[10px] text-[17px] font-bold leading-[1.6] text-[#292929] lg:text-[19px]">
                  다양한 놀이와 체험을
                  <br />한 공간에서
                </h3>
              </div>

              {/* TODAY */}
              <div>
                <div className="h-[18px] w-[18px] rounded-full bg-[#16864B] ring-[6px] ring-[#16864B]/10" />

                <p className="mt-[22px] text-[14px] font-bold text-[#16864B]">
                  TODAY
                </p>

                <h3 className="mt-[10px] text-[22px] font-bold leading-[1.5] text-[#292929] lg:text-[26px]">
                  상상체험
                  <br />
                  키즈월드 2026
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 모바일 */}
        <div className="relative mt-[40px] md:hidden">
          <div className="absolute bottom-0 left-[7px] top-0 w-[2px] bg-[#292929]/15" />

          <div className="space-y-[35px]">
            {/* 2010 */}
            <div className="relative pl-[38px]">
              <div className="absolute left-0 top-[4px] h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

              <p className="text-[13px] font-bold text-[#292929]/45">2010</p>

              <h3 className="mt-[7px] text-[17px] font-bold leading-[1.6] text-[#292929]">
                어린이를 위한 체험형 행사 시작
              </h3>
            </div>

            {/* 2014 */}
            <div className="relative pl-[38px]">
              <div className="absolute left-0 top-[4px] h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

              <p className="text-[13px] font-bold text-[#292929]/45">2014</p>

              <h3 className="mt-[7px] text-[17px] font-bold leading-[1.6] text-[#292929]">
                상상체험 키즈월드 운영 확대
              </h3>
            </div>

            {/* 2020 */}
            <div className="relative pl-[38px]">
              <div className="absolute left-0 top-[4px] h-[16px] w-[16px] rounded-full bg-[#D9D9D9]" />

              <p className="text-[13px] font-bold text-[#292929]/45">2020</p>

              <h3 className="mt-[7px] text-[17px] font-bold leading-[1.6] text-[#292929]">
                다양한 놀이와 체험을 한 공간에서
              </h3>
            </div>

            {/* TODAY */}
            <div className="relative pl-[38px]">
              <div className="absolute left-[-1px] top-[3px] h-[18px] w-[18px] rounded-full bg-[#16864B] ring-[6px] ring-[#16864B]/10" />

              <p className="text-[13px] font-bold text-[#16864B]">TODAY</p>

              <h3 className="mt-[7px] text-[21px] font-bold text-[#292929]">
                상상체험 키즈월드 2026
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 키워드 */}
      <section className="px-5 pb-[80px] pt-[20px] sm:px-8 sm:pt-[30px] md:px-10 lg:px-[80px] lg:pb-[100px] lg:pt-[40px] xl:px-[150px]">
        <div className="grid grid-cols-1 gap-[35px] lg:grid-cols-2 lg:items-center lg:gap-[80px]">
          {/* 왼쪽 이미지 자리 */}
          <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-[#D9D9D9] sm:h-[400px] lg:h-[520px]">
            <p className="text-[16px] font-bold text-[#292929]/30">
              {activeKeyword} 이미지
            </p>
          </div>

          {/* 오른쪽 키워드 */}
          <div>
            {/* 2500 */}
            <div
              onMouseEnter={() => setActiveKeyword("2500")}
              onClick={() => setActiveKeyword("2500")}
              className="cursor-pointer py-[12px] lg:py-[15px]"
            >
              <h3
                className={`text-[52px] font-black leading-none transition-all duration-300 sm:text-[70px] lg:text-[90px] ${
                  activeKeyword === "2500"
                    ? "text-[#F5A623]"
                    : "text-[#F5A623]/20"
                }`}
              >
                2500
              </h3>

              <p
                className={`mt-[8px] text-[14px] font-bold transition-all duration-300 sm:text-[16px] ${
                  activeKeyword === "2500"
                    ? "text-[#292929]/70"
                    : "text-[#292929]/25"
                }`}
              >
                약 2,500평의 넓은 실내 공간
              </p>
            </div>

            {/* ALL DAY */}
            <div
              onMouseEnter={() => setActiveKeyword("allday")}
              onClick={() => setActiveKeyword("allday")}
              className="cursor-pointer py-[12px] lg:py-[15px]"
            >
              <h3
                className={`text-[52px] font-black leading-none transition-all duration-300 sm:text-[70px] lg:text-[90px] ${
                  activeKeyword === "allday"
                    ? "text-[#16864B]"
                    : "text-[#16864B]/20"
                }`}
              >
                ALL DAY
              </h3>

              <p
                className={`mt-[8px] text-[14px] font-bold transition-all duration-300 sm:text-[16px] ${
                  activeKeyword === "allday"
                    ? "text-[#292929]/70"
                    : "text-[#292929]/25"
                }`}
              >
                입장부터 마감까지 시간 제한 없이
              </p>
            </div>

            {/* 30종 이상 */}
            <div
              onMouseEnter={() => setActiveKeyword("30")}
              onClick={() => setActiveKeyword("30")}
              className="cursor-pointer py-[12px] lg:py-[15px]"
            >
              <h3
                className={`text-[52px] font-black leading-none transition-all duration-300 sm:text-[70px] lg:text-[90px] ${
                  activeKeyword === "30"
                    ? "text-[#E53935]"
                    : "text-[#E53935]/20"
                }`}
              >
                30종 이상
              </h3>

              <p
                className={`mt-[8px] text-[14px] font-bold transition-all duration-300 sm:text-[16px] ${
                  activeKeyword === "30"
                    ? "text-[#292929]/70"
                    : "text-[#292929]/25"
                }`}
              >
                다양한 놀이시설을 한 공간에서
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Review /> */}
    </main>
  );
}
