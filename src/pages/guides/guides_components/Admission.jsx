export default function Admission() {
  return (
    <section className="bg-white px-5 py-[60px] sm:px-8 md:px-10 lg:py-[80px]">
      <div className="mx-auto max-w-[1250px]">
        {/* 타이틀 */}
        <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
          <p className="mt-[5px] text-[20px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
            이용요금
          </p>

          <p className="text-[18px] font-bold text-[#5E9F45]">
            상상체험 키즈월드 이용요금을 확인해주세요.
          </p>
        </div>

        {/* 이용요금 */}
        <div className="mt-[45px] grid grid-cols-1 gap-[40px] lg:grid-cols-2 lg:gap-[20px]">
          {/* 종일권 */}
          <div>
            <h3 className="mb-[20px] text-center text-[24px] font-bold text-[#292929] lg:text-[28px]">
              종일권
            </h3>

            <div className="rounded-[16px] border border-[#292929]/15 bg-white px-[24px] py-[28px] sm:px-[35px] lg:px-[40px] lg:py-[35px]">
              {/* 대인 */}
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[15px]">
                <div>
                  <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                    대인
                  </p>

                  <p className="mt-[4px] whitespace-nowrap text-[13px] font-medium text-[#292929]/45 lg:text-[14px]">
                    만 14세 이상
                  </p>
                </div>

                <div className="h-px bg-[#292929]/15" />

                <p className="whitespace-nowrap text-[22px] font-bold text-[#292929] lg:text-[26px]">
                  25,000원
                </p>
              </div>

              {/* 소인 */}
              <div className="mt-[30px] grid grid-cols-[auto_1fr_auto] items-center gap-[15px]">
                <div>
                  <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                    소인
                  </p>

                  <p className="mt-[4px] whitespace-nowrap text-[13px] font-medium text-[#292929]/45 lg:text-[14px]">
                    24개월 이상 ~ 만 14세 미만
                  </p>
                </div>

                <div className="h-px bg-[#292929]/15" />

                <p className="whitespace-nowrap text-[22px] font-bold text-[#292929] lg:text-[26px]">
                  35,000원
                </p>
              </div>
            </div>
          </div>

          {/* 오후권 */}
          <div>
            <h3 className="mb-[20px] text-center text-[24px] font-bold text-[#292929] lg:text-[28px]">
              오후권
              <span className="ml-[6px] text-[15px] font-bold lg:text-[17px]">
                (15:00~)
              </span>
            </h3>

            <div className="rounded-[16px] border border-[#292929]/15 bg-white px-[24px] py-[28px] sm:px-[35px] lg:px-[40px] lg:py-[35px]">
              {/* 대인 */}
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[15px]">
                <div>
                  <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                    대인
                  </p>

                  <p className="mt-[4px] whitespace-nowrap text-[13px] font-medium text-[#292929]/45 lg:text-[14px]">
                    만 14세 이상
                  </p>
                </div>

                <div className="h-px bg-[#292929]/15" />

                <p className="whitespace-nowrap text-[22px] font-bold text-[#292929] lg:text-[26px]">
                  17,500원
                </p>
              </div>

              {/* 소인 */}
              <div className="mt-[30px] grid grid-cols-[auto_1fr_auto] items-center gap-[15px]">
                <div>
                  <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                    소인
                  </p>

                  <p className="mt-[4px] whitespace-nowrap text-[13px] font-medium text-[#292929]/45 lg:text-[14px]">
                    24개월 이상 ~ 만 14세 미만
                  </p>
                </div>

                <div className="h-px bg-[#292929]/15" />

                <p className="whitespace-nowrap text-[22px] font-bold text-[#292929] lg:text-[26px]">
                  17,500원
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 무료 / 할인 / 이용안내 */}
        <div className="mt-[35px] grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {/* 무료입장 */}
          <div className="rounded-[16px] border border-[#F5A623]/30 bg-[#F5A623]/[0.06] px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
            <div className="flex flex-wrap items-center gap-[10px]">
              <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                무료입장
              </p>

              <span className="rounded-full bg-[#F5A623] px-[11px] py-[5px] text-[14px] font-bold text-white lg:text-[16px]">
                무료
              </span>
            </div>

            <p className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
              24개월 미만 유아
            </p>

            <p className="mt-[9px] text-[14px] font-medium leading-[1.7] text-[#E53935] lg:text-[16px]">
              * 관련 증빙서류를 지참해주세요.
            </p>
          </div>

          {/* 할인 대상 */}
          <div className="rounded-[16px] border border-[#F5A623]/30 bg-[#F5A623]/[0.06] px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
            <div className="flex flex-wrap items-center gap-[10px]">
              <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                할인 대상
              </p>

              <span className="rounded-full bg-[#F5A623] px-[11px] py-[5px] text-[14px] font-bold text-white lg:text-[16px]">
                50% 할인
              </span>
            </div>

            <div className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
              <p>장애인 · 국가유공자 (동반 1인까지)</p>
              <p>임산부</p>
              <p>65세 이상</p>
            </div>

            <p className="mt-[9px] text-[14px] font-medium leading-[1.7] text-[#E53935] lg:text-[16px]">
              * 관련 증빙서류를 지참해주세요.
            </p>
          </div>

          {/* 이용안내 */}
          <div className="rounded-[16px] border border-[#292929]/10 bg-white/60 px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
            <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
              이용안내
            </p>

            <p className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
              입장권 구매 후 영업시간 내 시간제한 없이 이용할 수 있으며, 퇴장 후
              재입장은 불가합니다.
            </p>

            <p className="mt-[9px] text-[14px] font-medium leading-[1.7] text-[#E53935] lg:text-[16px]">
              * 오후권은 오후 3시부터 입장 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}