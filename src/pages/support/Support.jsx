export default function Support() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] pt-[90px]">
      {/* 타이틀 */}
      <section className="px-5 py-[65px] sm:px-8 md:px-10 lg:px-[80px] xl:px-[150px]">
        <div>
          <h1 className="font-['Jua'] text-[46px] text-[#292929] sm:text-[52px] lg:text-[60px]">
            문의
          </h1>

          <p className="mt-[10px] text-[18px] font-bold text-[#E53935] lg:text-[20px]">
            자주 묻는 질문과 문의 정보를 확인해주세요.
          </p>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section
        id="faq"
        className="bg-[#EEE8DE] px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[250px]"
      >
        <div className="inline-block">
          <h2 className="text-[30px] font-bold text-[#292929] lg:text-[34px]">
            자주 묻는 질문
          </h2>

          <div className="mt-[7px] h-[3px] w-full bg-[#E53935]" />
        </div>

        <div className="mt-[35px] grid grid-cols-1 gap-[22px] lg:grid-cols-2">
          {/* 질문 1 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                유모차 반입이 가능한가요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                네 가능합니다.
              </p>
            </div>
          </div>

          {/* 질문 2 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                외부 음식물 반입이 가능한가요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                물과 이유식, 특수식을 제외한 외부 음식물은 반입이 불가합니다.
              </p>
            </div>
          </div>

          {/* 질문 3 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                재입장이 가능한가요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                퇴장 후 재입장은 불가합니다. (성인만 입구에서 도장받고 외출가능)
              </p>
            </div>
          </div>

          {/* 질문 4 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                양말은 꼭 착용해야 하나요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                에어바운스 등 일부 시설은 양말 착용이 필수입니다.
              </p>
            </div>
          </div>

          {/* 질문 5 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                수유실이 있나요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                행사장 내부에는 없으며 본 건물 1층 수유실을 이용해주세요.
              </p>
            </div>
          </div>

          {/* 질문 6 */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#FFF9EE] px-[28px] py-[30px]">
            <span className="absolute left-[20px] top-[12px] text-[82px] font-bold leading-none text-[#16864B]/20">
              Q
            </span>

            <span className="absolute bottom-[5px] right-[18px] text-[82px] font-bold leading-none text-[#F5A623]/20">
              A
            </span>

            <div className="relative z-10 pl-[48px]">
              <h3 className="text-[20px] font-bold text-[#292929] lg:text-[22px]">
                보조배터리 대여가 가능한가요?
              </h3>

              <p className="mt-[18px] text-[18px] font-medium leading-[1.8] text-[#292929]/70 lg:text-[19px]">
                유료 보조배터리 대여 서비스를 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 기타문의 / 단체문의 */}
      <section className="px-5 py-[65px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[150px]">
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {/* 기타문의 */}
          <div
            id="contact"
            className="rounded-[18px] border border-[#292929]/10 bg-white/50 px-[28px] py-[30px]"
          >
            <div className="inline-block">
              <h2 className="text-[24px] font-bold text-[#292929] lg:text-[28px]">
                기타문의
              </h2>

              <div className="mt-[7px] h-[3px] w-full bg-[#E53935]" />
            </div>

            <p className="mt-[22px] text-[20px] font-bold text-[#292929] lg:text-[22px]">
              051-000-0000
            </p>

            <p className="mt-[10px] text-[18px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[19px]">
              운영 관련 문의사항은 전화로 문의해주세요.
            </p>
          </div>

          {/* 단체문의 */}
          <div
            id="group"
            className="rounded-[18px] border border-[#292929]/10 bg-white/50 px-[28px] py-[30px]"
          >
            <div className="inline-block">
              <h2 className="text-[24px] font-bold text-[#292929] lg:text-[28px]">
                단체문의
              </h2>

              <div className="mt-[7px] h-[3px] w-full bg-[#E53935]" />
            </div>

            <p className="mt-[22px] text-[20px] font-bold text-[#292929] lg:text-[22px]">
              070-4801-6034
            </p>

            <p className="mt-[10px] text-[18px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[19px]">
              단체 방문 및 이용 관련 문의는 전화로 문의해주세요.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
