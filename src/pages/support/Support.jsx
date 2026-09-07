import SupportBg from "../../img/support_bg.png";
import PageTitle from "../components/PageTitle";

const faqItems = [
  {
    id: 1,
    question: "유모차 반입이 가능한가요?",
    answer: "네, 가능합니다.",
  },
  {
    id: 2,
    question: "외부 음식물 반입이 가능한가요?",
    answer:
      "물과 이유식, 특수식을 제외한 외부 음식물은 반입이 불가합니다.",
  },
  {
    id: 3,
    question: "재입장이 가능한가요?",
    answer:
      "퇴장 후 재입장은 불가합니다. 성인만 입구에서 도장을 받은 후 외출할 수 있습니다.",
  },
  {
    id: 4,
    question: "양말은 꼭 착용해야 하나요?",
    answer: "에어바운스 등 일부 시설은 양말 착용이 필수입니다.",
  },
  {
    id: 5,
    question: "수유실이 있나요?",
    answer:
      "행사장 내부에는 없으며 본 건물 1층 수유실을 이용해주세요.",
  },
  {
    id: 6,
    question: "보조배터리 대여가 가능한가요?",
    answer: "유료 보조배터리 대여 서비스를 이용할 수 있습니다.",
  },
];

const contactItems = [
  {
    id: "contact",
    title: "기타문의",
    phone: "051-000-0000",
    phoneLink: "0510000000",
    description: "키즈월드 이용 및 운영 관련 문의를 도와드려요.",
  },
  {
    id: "group",
    title: "단체문의",
    phone: "070-4801-6034",
    phoneLink: "07048016034",
    description: "단체 방문 및 이용 관련 문의를 도와드려요.",
  },
];

export default function Support() {
  return (
    <>
      <PageTitle title="문의" />

      <main className="min-h-screen bg-white pt-[90px]">
        {/* 상단 비주얼 */}
        <section
          className="relative overflow-hidden bg-cover bg-[center_62%] bg-no-repeat px-5 py-[65px] sm:px-[30px] md:px-[50px] lg:px-[80px] lg:py-[75px] xl:px-[150px]"
          style={{
            backgroundImage: `url(${SupportBg})`,
          }}
        >
          <div className="absolute inset-0 bg-[#292929]/65" />

          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#292929]/50 to-transparent" />

          <div className="relative z-10">
            <h1 className="font-['Jua'] text-[42px] leading-[1.15] text-white sm:text-[52px] lg:text-[60px]">
              문의
            </h1>

            <p className="mt-3 text-[16px] font-bold text-[#FF6B81] sm:text-[18px] lg:text-[20px]">
              자주 묻는 질문과 문의 정보를 확인해주세요!
            </p>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section
          id="faq"
          className="px-5 py-[70px] sm:px-8 md:px-10 lg:px-[60px] lg:py-[90px] xl:px-[80px]"
        >
          <div className="mx-auto max-w-[1120px]">
            {/* 타이틀 */}
            <div>
              <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
                Q&A
              </h2>

              <p className="mt-3 text-[16px] font-bold text-[#FF6B81] sm:text-[18px]">
                고객님들이 많이 궁금해하는 내용을 모았어요.
              </p>
            </div>

            {/* 질문 목록 */}
            <div className="mt-[40px] grid grid-cols-1 gap-[18px] lg:grid-cols-2">
              {faqItems.map((item) => (
                <article
                  key={item.id}
                  className="relative min-h-[175px] overflow-hidden rounded-[16px] border border-[#292929]/10 bg-white px-[24px] py-[28px] sm:min-h-[185px] sm:px-[28px] sm:py-[30px]"
                >
                  {/* 배경 Q */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[18px] top-[10px] text-[80px] font-bold leading-none text-[#FF6B81]/10"
                  >
                    Q
                  </span>

                  {/* 배경 A */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[2px] right-[16px] text-[80px] font-bold leading-none text-[#FFD050]/20"
                  >
                    A
                  </span>

                  <div className="relative z-10 pl-[45px]">
                    <h3 className="break-keep text-[19px] font-bold leading-[1.5] text-[#292929] sm:text-[21px]">
                      {item.question}
                    </h3>

                    <p className="mt-[18px] break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[18px]">
                      {item.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 기타문의 / 단체문의 */}
        <section className="px-5 pb-[100px] pt-[10px] sm:px-8 md:px-10 lg:px-[60px] lg:pb-[120px] xl:px-[80px]">
          <div className="mx-auto max-w-[1120px] border-y border-[#292929]/10 py-[35px] sm:py-[45px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {contactItems.map((contact, index) => (
                <div
                  key={contact.id}
                  id={contact.id}
                  className={`${
                    index === 0
                      ? "pb-[30px] md:border-r md:border-[#292929]/10 md:pb-0 md:pr-[45px]"
                      : "border-t border-[#292929]/10 pt-[30px] md:border-t-0 md:pl-[45px] md:pt-0"
                  }`}
                >
                  <p className="text-[16px] font-bold text-[#FF6B81]">
                    {contact.title}
                  </p>

                  {/* 클릭하면 바로 전화 연결 */}
                  <a
                    href={`tel:${contact.phoneLink}`}
                    aria-label={`${contact.title} ${contact.phone}로 전화하기`}
                    className="mt-[10px] inline-block text-[24px] font-bold text-[#292929] underline decoration-[#FF6B81]/35 decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-[#FF6B81] sm:text-[28px]"
                  >
                    {contact.phone}
                  </a>

                  <p className="mt-[12px] break-keep text-[15px] font-medium leading-[1.7] text-[#292929]/55 sm:text-[16px]">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}