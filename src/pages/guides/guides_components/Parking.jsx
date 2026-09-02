import parkingImg from "../../../img/parking.png";

export default function Parking() {
  return (
    <section className="bg-[white] px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[150px]">
      <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
        <p className="mt-[5px] text-[20px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
          주차안내
        </p>
        <p className="text-[18px] font-bold text-[#5E9F45]">
          벡스코 주차장 이용 및 주차지원 안내입니다.
        </p>
      </div>

      <div className="mt-[35px] rounded-[18px] border border-[#292929]/10 bg-white/50 px-[24px] py-[22px] sm:px-[30px] flex justify-center">
        <p className="text-[18px] font-bold leading-[1.7] text-[#292929] lg:text-[20px]">
          벡스코 주차장
          <span className="mx-[6px] text-[#F5A623]">제1전시장 / 제2전시장</span>
          에 주차 가능합니다.
        </p>
      </div>

      {/* 주차 기본정보 */}
      <div className="mt-[35px] grid grid-cols-1 gap-[35px] lg:grid-cols-2 lg:gap-[70px]">
        {/* 주차 요금 */}
        <div>
          <h3 className="text-[22px] font-bold text-[#292929]">주차 요금</h3>

          <div className="mt-[20px] border-t border-[#292929]/10">
            <div className="grid grid-cols-[100px_1fr] gap-[20px] border-b border-[#292929]/10 py-[18px] sm:grid-cols-[130px_1fr]">
              <p className="text-[18px] font-bold text-[#292929]">구분</p>

              <p className="text-[18px] font-bold text-[#292929]">유료</p>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-[20px] border-b border-[#292929]/10 py-[18px] sm:grid-cols-[130px_1fr]">
              <p className="text-[18px] font-bold text-[#292929]">기본요금</p>

              <p className="text-[18px] font-medium leading-[1.8] text-[#292929]/75">
                10분 500원 / 1시간 3,000원
              </p>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-[20px] py-[18px] sm:grid-cols-[130px_1fr]">
              <p className="text-[18px] font-bold text-[#292929]">일일 최대</p>

              <p className="text-[20px] font-bold text-[#292929]">15,000원</p>
            </div>
          </div>
        </div>

        {/* 기타 정보 */}
        <div>
          <h3 className="text-[22px] font-bold text-[#292929]">주차장 정보</h3>

          <div className="mt-[20px] border-t border-[#292929]/10">
            <div className="grid grid-cols-[120px_1fr] gap-[20px] border-b border-[#292929]/10 py-[18px]">
              <p className="text-[18px] font-bold text-[#292929]">정산 방법</p>

              <p className="text-[18px] font-medium text-[#292929]/75">
                출차 전 사전정산
              </p>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-[20px] border-b border-[#292929]/10 py-[18px]">
              <p className="text-[18px] font-bold text-[#292929]">
                주차장 문의
              </p>

              <p className="text-[18px] font-medium text-[#292929]/75">
                051-000-0000
              </p>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-[20px] py-[18px]">
              <p className="text-[18px] font-bold text-[#292929]">주차 가능</p>

              <p className="text-[18px] font-medium text-[#292929]/75">
                제1전시장 · 제2전시장
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 주차장 이미지 */}
      <div className="mt-[45px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
        <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px]">
          <img
            className="w-full"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjAzMTZfODkg%2FMDAxNzczNjEwMzY5MDc1.z7hfivF0C7DVOqzBIiZeVnFYGj1Xhxs91lqU1lCbvK0g.QOSga0EyO1HKuj28ArcshKS0eeVhZf5RooSE_DCdWYsg.JPEG%2F9026f169.jpg&type=sc960_832"
            alt=""
          />
        </div>

        <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:h-[340px]">
          <img
            className="w-full"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMDNfMjcy%2FMDAxNTQ2NDg5NjE2NjMx.sG1Yvs_BufkRN75H369eueoj0WQiYjXx_r-NgtVg8MAg.s3DnQQKM7_RauhANTpH0ygFI6uCAeqswORazSyxBucMg.JPEG.choisujo%2FCYMERA_20190103_132529.jpg&type=sc960_832"
            alt=""
          />
        </div>
      </div>

      {/* 주차등록 */}
      <div className="mt-[75px]">
        <div>
          <h3 className="text-[26px] font-bold text-[#292929] lg:text-[30px]">
            주차등록
          </h3>

          <div className="mt-[6px] h-[3px] w-[75px] bg-[#E53935]" />
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[35px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-[65px]">
          {/* 안내 이미지 */}
          <div className="overflow-hidden rounded-[16px]">
            <img
              src={parkingImg}
              alt="키즈월드 주차등록 안내"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 지원 내용 */}
          <div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-[20px] border-b border-[#292929]/10 py-[20px]">
              <p className="text-[19px] font-bold text-[#292929]">
                15시 이전 방문 차량
              </p>

              <p className="text-[22px] font-bold text-[#F5A623]">2시간 지원</p>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-[20px] border-b border-[#292929]/10 py-[20px]">
              <p className="text-[19px] font-bold text-[#292929]">
                15시 이후 방문 차량
              </p>

              <p className="text-[22px] font-bold text-[#F5A623]">1시간 지원</p>
            </div>

            <div className="mt-[30px] space-y-[12px]">
              <p className="text-[18px] font-medium leading-[1.8] text-[#292929]/75">
                입장 시 매표소 또는 입구 직원에게 주차등록을 요청해주세요.
              </p>

              <p className="text-[18px] font-medium leading-[1.8] text-[#292929]/75">
                차량 1대당 1회 적용되며, 입장권 매수와 관계없이 동일하게
                적용됩니다.
              </p>

              <p className="text-[18px] font-medium leading-[1.8] text-[#292929]/75">
                종일권이라도{" "}
                <span className="font-bold text-[#E53935]">
                  15시 이후 입장 시 1시간 지원
                </span>
                됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
