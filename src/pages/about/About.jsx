import PageTitle from "../components/PageTitle";

import aboutImg1 from "../../img/aboutImg1.png";
import aboutImg2 from "../../img/aboutImg.png";
import keyword2500 from "../../img/keyword2500.png";
import keywordAllday from "../../img/keyword_allday.png";
import keyword30 from "../../img/keyword30.png";

const experienceCards = [
  {
    id: 1,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfNTYg%2FMDAxNzg3OTE2ODQ5NzQx.eVRWnZ9XeLHGB9RJz9EhJXDDNrcOXvHj8oYFj2mssSYg.DJqKxyBIYGG6fgGjrC7kPfuB8ms-wpqNLg3rRp-vjDog.JPEG%2F900_20260822_154002.jpg&type=sc960_832",
    text: "보기만 하는 것이 아닌 직접 몸으로 즐기는 놀이",
  },
  {
    id: 2,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MTlfODkg%2FMDAxNzg3MTA2OTIwMjMw.4nJnBfTDA5oaBycI9LWzs6KwcU6V-WAU2Bo24ze467sg.Omt_LTQuJge0yKJTH7w8yVK7N46dyQoio1o4woKNeJIg.JPEG%2FIMG%25A3%25DF4593.jpg&type=a340",
    text: "소중한 순간을 사진과 기억으로 남기는 공간",
  },
  {
    id: 3,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA3MjVfMzQg%2FMDAxNzg0OTM4OTg0MTM0.g25_hsDEfvmAFJJxGVL9qXZI4WOuLM5IhqkMquB3d7Mg.ZZmcXTiGtvoKhEFfIRy5SC-jS9Ql4Lo2445p-14YVI4g.JPEG%2FIMG%25A3%25DF1246.JPG&type=a340",
    text: "놀이와 체험 과정에서 자연스럽게 얻는 경험",
  },
  {
    id: 4,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA0MjlfOTgg%2FMDAxNzc3NDIxNDA0MzQ1.-F9dfUDaNlfheh4s3n1iOE6IlvKt9Nyj59KidXisNRYg.rOpfLAky3PlJYJcorMBK-vLswa3I7F1G2kKbja2jRpMg.JPEG%2F900_1777339397430.jpg&type=a340",
    text: "부모와 아이가 함께 즐길 수 있는 다양한 놀이",
  },
];

const historyItems = [
  {
    year: "2010",
    title: "어린이를 위한 체험형 행사 시작",
  },
  {
    year: "2014",
    title: "상상체험 키즈월드 운영 확대",
  },
  {
    year: "2020",
    title: "다양한 놀이와 체험을 한 공간에서",
  },
  {
    year: "TODAY",
    title: "상상체험 키즈월드 2026",
    current: true,
  },
];

const keyPoints = [
  {
    id: 1,
    value: "2,500평",
    title: "넓은 실내 공간",
    description: "아이들이 자유롭게 뛰어놀 수 있는 대규모 공간",
    image: keyword2500,
  },
  {
    id: 2,
    value: "ALL DAY",
    title: "시간 제한 없이",
    description: "입장부터 운영 마감까지 여유롭게 이용",
    image: keywordAllday,
  },
  {
    id: 3,
    value: "30종+",
    title: "다양한 놀이시설",
    description: "놀이와 체험을 한 공간에서 즐길 수 있는 구성",
    image: keyword30,
  },
];

export default function About() {
  return (
    <>
      <PageTitle title="소개" />

      <main className="min-h-screen bg-white pt-[70px] lg:pt-[90px]">
        {/* 상단 비주얼 */}
        <section
          className="relative bg-cover bg-[center_50%] bg-no-repeat px-5 py-[65px] sm:px-[30px] md:px-[50px] lg:px-[80px] lg:py-[75px] xl:px-[150px]"
          style={{
            backgroundImage: `url(${aboutImg1})`,
          }}
        >
          <div className="absolute inset-0 bg-[#292929]/70" />

          <div className="relative z-10">
            <h1 className="font-['Jua'] text-[46px] text-white sm:text-[52px] lg:text-[60px]">
              상상체험 키즈월드
            </h1>

            <p className="text-[16px] font-[500] text-white/80 sm:text-[18px] lg:text-[20px]">
              상상체험 키즈월드를 소개합니다!
            </p>
          </div>
        </section>

        {/* 키즈월드 소개 */}
        <section className="px-5 pb-[80px] pt-[80px] sm:px-[30px] sm:pt-[100px] md:px-[50px] lg:px-[80px] lg:pt-[110px] xl:px-[150px]">
          <div className="mx-auto max-w-[1600px]">
            {/* 소개글 */}
            <div className="my-10 flex flex-col items-center text-center">
              <h2 className="break-keep text-[28px] font-bold text-[#292929] sm:text-[32px] lg:text-[38px]">
                아이들의 상상이 현실이 되는 즐거운 놀이공간
              </h2>

              <p className="mt-[18px] max-w-[720px] break-keep text-[14px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[16px] lg:text-[18px]">
                상상체험 키즈월드는 아이들이 직접 몸으로 느끼고 경험하며,
                <br className="hidden sm:block" />
                부모와 아이가 함께 즐거운 순간을 만들어가는 실내 놀이공간입니다.
              </p>
            </div>

            {/* 메인 이미지 */}
            <div className="mt-[35px] overflow-hidden rounded-[24px]">
              <img
                src={aboutImg2}
                alt="상상체험 키즈월드"
                className="h-[300px] w-full object-cover object-center sm:h-[500px] lg:h-[550px] opacity-80"
              />
            </div>

            {/* 체험 카드 */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-4">
              {experienceCards.map((card) => (
                <article
                  key={card.id}
                  className="group relative min-h-[190px] overflow-hidden rounded-[14px] bg-[#292929] sm:min-h-[230px] sm:rounded-[18px] lg:min-h-[270px]"
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* 검정 배경 */}
                  <div className="absolute inset-0 bg-[#292929]/45 transition-colors duration-300 group-hover:bg-[#292929]/55" />

                  {/* 사진 아래쪽 글자 */}
                  <p className="absolute inset-x-0 bottom-0 z-10 break-keep p-4 text-left text-[14px] font-bold leading-[1.7] text-white sm:p-5 sm:text-[16px] lg:p-6 lg:text-[18px]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 연혁 */}
        <section className="bg-[#FFD050]/10 px-5 py-[75px] sm:px-[30px] sm:py-[85px] md:px-[50px] lg:px-[80px] lg:py-[95px] xl:px-[150px]">
          <div className="mx-auto max-w-[1600px]">
            <div className="relative mt-12 md:mt-16">
              {/* 모바일 세로선 / PC 가로선 */}
              <div className="absolute bottom-0 left-[7px] top-0 w-[2px] bg-[#292929]/12 md:bottom-auto md:left-0 md:right-0 md:top-[7px] md:h-[2px] md:w-full" />

              <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
                {historyItems.map((item) => (
                  <article
                    key={item.year}
                    className="relative pl-10 md:pl-0 md:pt-10"
                  >
                    <span
                      className={`absolute left-0 top-0 h-4 w-4 rounded-full md:left-0 md:top-0 ${
                        item.current
                          ? "bg-[#FF6B81] ring-[6px] ring-[#FF6B81]/15"
                          : "border-[4px] border-[#FFD050] bg-white"
                      }`}
                    />

                    <p
                      className={`text-[14px] font-bold sm:text-[16px] ${
                        item.current ? "text-[#FF6B81]" : "text-[#292929]/45"
                      }`}
                    >
                      {item.year}
                    </p>

                    <h3
                      className={`mt-2 break-keep font-bold leading-[1.6] text-[#292929] ${
                        item.current
                          ? "text-[20px] lg:text-[24px]"
                          : "text-[18px] lg:text-[20px]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 주요 특징 이미지 배너 */}
        <section className="bg-white px-5 py-[80px] sm:px-[30px] sm:py-[90px] md:px-[50px] lg:px-[80px] lg:py-[110px] xl:px-[150px]">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="sr-only">키즈월드 주요 특징</h2>

            <div className="grid grid-cols-1 overflow-hidden rounded-[20px] sm:grid-cols-3">
              {keyPoints.map((point, index) => (
                <article
                  key={point.id}
                  className={`group relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px] ${
                    index !== keyPoints.length - 1
                      ? "border-b border-white/40 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  {/* 배경 이미지 */}
                  <img
                    src={point.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* 글자가 있는 아래쪽에만 그라데이션 */}
                  <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#292929]/95 via-[#292929]/60 to-transparent" />

                  {/* 내용 */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-5 lg:p-8">
                    <strong className="inline-block origin-left font-['Jua'] text-[42px] leading-none text-[#FF6B81] drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] transition-all duration-300 sm:text-[36px] sm:text-white sm:group-hover:scale-105 sm:group-hover:text-[#FF6B81] lg:text-[52px]">
                      {point.value}
                    </strong>

                    <h3 className="mt-3 text-[18px] font-bold drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] lg:text-[22px]">
                      {point.title}
                    </h3>

                    <p className="mt-2 break-keep text-[14px] font-medium leading-[1.7] text-white/90 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] sm:text-[16px]">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
