const ticketOptions = [
  {
    id: 1,
    name: "종일권",
    time: "운영시간 동안 이용",
    prices: [
      {
        type: "대인",
        age: "만 14세 이상",
        price: "25,000원",
      },
      {
        type: "소인",
        age: "24개월 이상 ~ 만 14세 미만",
        price: "35,000원",
      },
    ],
  },
  {
    id: 2,
    name: "오후권",
    time: "15:00부터 입장",
    prices: [
      {
        type: "대인",
        age: "만 14세 이상",
        price: "17,500원",
      },
      {
        type: "소인",
        age: "24개월 이상 ~ 만 14세 미만",
        price: "17,500원",
      },
    ],
  },
];

const discountInformation = [
  {
    id: 1,
    title: "무료입장",
    highlight: "무료",
    contents: ["24개월 미만 유아"],
    notice: "관련 증빙서류를 지참해주세요.",
  },
  {
    id: 2,
    title: "할인 대상",
    highlight: "50% 할인",
    contents: [
      "장애인 · 국가유공자 (동반 1인까지)",
      "임산부",
      "65세 이상",
    ],
    notice: "관련 증빙서류를 지참해주세요.",
  },
];

export default function Admission() {
  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[150px]">
      <div className="mx-auto max-w-[1250px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            이용요금
          </h2>

          <p className="mt-3 text-[16px] font-bold text-[#FF6B81] sm:text-[18px]">
            상상체험 키즈월드 이용요금을 확인해주세요.
          </p>
        </div>

        {/* 이용요금 */}
        <div className="mt-[42px] border-t border-[#292929]/15 sm:mt-[55px]">
          {ticketOptions.map((ticket) => (
            <article
              key={ticket.id}
              className="border-b border-[#292929]/15 py-6 sm:py-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.8fr_1fr_1fr] md:items-center md:gap-8">
                {/* 이용권 이름 */}
                <div>
                  <h3 className="text-[22px] font-bold text-[#292929] sm:text-[26px]">
                    {ticket.name}
                  </h3>

                  <p className="mt-1 text-[14px] font-bold text-[#FF6B81] sm:text-[16px]">
                    {ticket.time}
                  </p>
                </div>

                {/* 금액 */}
                <div className="grid grid-cols-2 gap-5 md:contents">
                  {ticket.prices.map((price) => (
                    <div key={price.type}>
                      <p className="text-[14px] font-bold text-[#292929]/50 sm:text-[16px]">
                        {price.type}
                      </p>

                      <p className="mt-2 whitespace-nowrap text-[22px] font-bold text-[#292929] sm:text-[26px]">
                        {price.price}
                      </p>

                      <p className="mt-1 break-keep text-[14px] font-medium leading-[1.5] text-[#292929]/45 sm:text-[16px]">
                        {price.age}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 무료입장 / 할인 대상 */}
        <div className="mt-[65px] grid grid-cols-1 border-y border-[#292929]/15 sm:grid-cols-2 lg:mt-[85px]">
          {discountInformation.map((information, index) => (
            <article
              key={information.id}
              className={`py-7 sm:min-h-[280px] sm:px-8 sm:py-9 ${
                index === 0
                  ? "border-b border-[#292929]/15 sm:border-b-0 sm:border-r"
                  : ""
              } ${index === 0 ? "sm:pl-0" : "sm:pr-0"}`}
            >
              {/* 제목 */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[21px] font-bold text-[#292929] sm:text-[24px]">
                  {information.title}
                </h3>

                <strong className="text-[16px] font-bold text-[#FF6B81] sm:text-[18px]">
                  {information.highlight}
                </strong>
              </div>

              {/* 대상 */}
              <div className="mt-5">
                {information.contents.length === 1 ? (
                  <p className="text-[16px] font-medium leading-[1.8] text-[#292929]/65 sm:text-[18px]">
                    {information.contents[0]}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {information.contents.map((content) => (
                      <li
                        key={content}
                        className="flex gap-3 break-keep text-[16px] font-medium leading-[1.7] text-[#292929]/65 sm:text-[18px]"
                      >
                        <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FFD050]" />

                        {content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 증빙 안내 */}
              <p className="mt-5 break-keep text-[14px] font-bold leading-[1.7] text-[#5F8F73] sm:text-[16px]">
                * {information.notice}
              </p>
            </article>
          ))}
        </div>

        {/* 이용안내 */}
        <div className="mt-[28px] rounded-[14px] border border-[#FF6B81]/70 bg-[#FFD050]/10 px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="break-keep text-[14px] font-bold leading-[1.8] text-[#292929] sm:text-[17px]">
            영업시간 내{" "}
            <strong className="text-[#FF6B81]">
              시간제한 없이 이용 가능
            </strong>
            합니다. 단, 퇴장 시{" "}
            <strong className="text-[#FF6B81]">
              재입장은 불가
            </strong>
            합니다.
          </p>
        </div>
      </div>
    </section>
  );
}