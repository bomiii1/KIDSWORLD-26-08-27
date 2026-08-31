export default function Admission() {
  return (
    <section className="px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[150px]">
      {/* 타이틀 */}
      <div>
        <h2 className="text-[28px] font-bold text-[#292929] sm:text-[30px] lg:text-[32px]">
          이용요금
        </h2>

        <p className="mt-[8px] text-[16px] font-medium text-[#292929]/60 lg:text-[18px]">
          키즈월드 이용요금을 확인해주세요.
        </p>
      </div>

      {/* 이용요금 박스 */}
      <div className="mt-[35px] overflow-hidden rounded-[20px] border border-[#F5A623]/20 bg-[#F5A623]/[0.08] shadow-[0_10px_35px_rgba(245,166,35,0.08)] backdrop-blur-[10px]">
        
        {/* 종일권 */}
        <div className="grid grid-cols-1 gap-[25px] px-[24px] py-[32px] sm:px-[30px] lg:grid-cols-[150px_1fr] lg:items-center lg:px-[45px] lg:py-[38px]">
          <div>
            <p className="text-[20px] font-bold text-[#E59A16] lg:text-[22px]">
              종일권
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2">
            {/* 대인 */}
            <div>
              <p className="text-[16px] font-bold text-[#292929]/55 lg:text-[18px]">
                대인
              </p>

              <p className="mt-[5px] text-[34px] font-bold text-[#292929] lg:text-[38px]">
                25,000
                <span className="ml-[6px] text-[16px] lg:text-[18px]">
                  원
                </span>
              </p>

              <p className="mt-[7px] text-[16px] font-medium text-[#E53935] lg:text-[18px]">
                14세 이상
              </p>
            </div>

            {/* 소인 */}
            <div>
              <p className="text-[16px] font-bold text-[#292929]/55 lg:text-[18px]">
                소인
              </p>

              <p className="mt-[5px] text-[34px] font-bold text-[#292929] lg:text-[38px]">
                35,000
                <span className="ml-[6px] text-[16px] lg:text-[18px]">
                  원
                </span>
              </p>

              <p className="mt-[7px] text-[16px] font-medium text-[#E53935] lg:text-[18px]">
                24개월 이상 ~ 14세 미만
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="mx-[24px] h-px bg-[#F5A623]/20 sm:mx-[30px] lg:mx-[45px]" />

        {/* 오후권 */}
        <div className="grid grid-cols-1 gap-[25px] px-[24px] py-[32px] sm:px-[30px] lg:grid-cols-[150px_1fr] lg:items-center lg:px-[45px] lg:py-[38px]">
          <div>
            <p className="text-[20px] font-bold text-[#E59A16] lg:text-[22px]">
              오후권
            </p>
          </div>

          <div>
            <p className="text-[16px] font-bold text-[#292929]/55 lg:text-[18px]">
              소인 / 대인
            </p>

            <div className="mt-[5px] flex flex-col gap-[8px] xl:flex-row xl:items-end xl:gap-[20px]">
              <p className="text-[34px] font-bold text-[#292929] lg:text-[38px]">
                17,500
                <span className="ml-[6px] text-[16px] lg:text-[18px]">
                  원
                </span>
              </p>

              <p className="pb-[5px] text-[16px] font-medium text-[#E53935] lg:text-[18px]">
                오후권은 15시부터 입장 가능
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 안내사항 */}
      <div className="mt-[30px] grid grid-cols-1 gap-[18px] lg:grid-cols-3">
        
        {/* 무료입장 */}
        <div className="rounded-[16px] border border-[#F5A623]/30 bg-[#F5A623]/[0.06] px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
          <div className="flex flex-wrap items-center gap-[10px]">
            <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
              무료입장
            </p>

            <span className="rounded-full bg-[#F5A623] px-[11px] py-[5px] text-[16px] font-bold text-white">
              무료
            </span>
          </div>

          <p className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
            24개월 미만 유아
          </p>

          <p className="mt-[9px] text-[16px] font-medium leading-[1.7] text-[#E53935]">
            * 관련 증빙서류를 지참해주세요.
          </p>
        </div>

        {/* 할인 대상 */}
        <div className="rounded-[16px] border border-[#F5A623]/30 bg-[#F5A623]/[0.06] px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
          <div className="flex flex-wrap items-center gap-[10px]">
            <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
              할인 대상
            </p>

            <span className="rounded-full bg-[#F5A623] px-[11px] py-[5px] text-[16px] font-bold text-white">
              50% 할인
            </span>
          </div>

          <div className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
            <p>장애인 · 국가유공자 (동반 1인까지)</p>
            <p>임산부</p>
            <p>65세 이상</p>
          </div>

          <p className="mt-[9px] text-[16px] font-medium leading-[1.7] text-[#E53935]">
            * 관련 증빙서류를 지참해주세요.
          </p>
        </div>

        {/* 이용안내 */}
        <div className="rounded-[16px] border border-[#292929]/10 bg-white/60 px-[24px] py-[25px] lg:px-[26px] lg:py-[28px]">
          <p className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
            이용안내
          </p>

          <p className="mt-[12px] text-[16px] font-medium leading-[1.8] text-[#292929]/65 lg:text-[18px]">
            입장권 구매 후 영업시간 내 시간제한 없이 이용할 수 있으며,
            퇴장 후 재입장은 불가합니다.
          </p>
        </div>
      </div>
    </section>
  );
}