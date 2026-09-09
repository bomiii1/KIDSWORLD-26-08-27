import { ArrowUpRight } from "lucide-react";
import parkingImg from "../../../img/parking.png";

export default function Parking() {
  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[60px] lg:py-[90px] xl:px-[80px]">
      <div className="mx-auto max-w-[1120px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            주차안내
          </h2>

          <p className="mt-3 break-keep text-[16px] font-[500] leading-[1.6] text-[#292929]/60 sm:text-[18px]">
            벡스코 주차장 이용 및 주차지원 안내입니다.
          </p>
        </div>

        {/* 주차 가능 장소 */}
        <div className="mt-[38px] rounded-[14px] border border-[#FF6B81]/60 px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="break-keep text-[16px] font-[500] leading-[1.8] text-[#292929] sm:text-[18px]">
            벡스코 주차장{" "}
            <span className="font-[500] text-[#FF6B81]">
              제1전시장 · 제2전시장
            </span>
            에 주차할 수 있습니다.
          </p>
        </div>

        {/* 주차 기본정보 */}
        <div className="mt-[55px] grid grid-cols-1 gap-[55px] lg:grid-cols-2 lg:gap-[70px]">
          {/* 주차 요금 */}
          <div>
            <h3 className="text-[22px] font-bold text-[#292929] sm:text-[26px]">
              주차 요금
            </h3>

            <dl className="mt-5 border-t border-[#292929]/15">
              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500] text-[#292929]/55 sm:text-[18px]">
                  구분
                </p>

                <p className="text-[16px] font-bold text-[#292929] sm:text-[18px]">
                  유료
                </p>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500] text-[#292929]/55 sm:text-[18px]">
                  기본요금
                </p>

                <p className="text-[16px] font-medium leading-[1.7] text-[#292929] sm:text-[18px]">
                  1시간 2,700원
                </p>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500]] text-[#292929]/55 sm:text-[18px]">
                  일일 최대
                </p>

                <p className="text-[16px] font-medium leading-[1.7] text-[#292929] sm:text-[18px]">
                  15,000원
                </p>
              </div>
            </dl>
          </div>

          {/* 주차장 정보 */}
          <div>
            <h3 className="text-[22px] font-bold text-[#292929] sm:text-[26px]">
              주차장 정보
            </h3>

            <dl className="mt-5 border-t border-[#292929]/15">
              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500] text-[#292929]/55 sm:text-[18px]">
                  정산 방법
                </p>

                <p className="text-[16px] font-medium text-[#292929] sm:text-[18px]">
                  출차 전 사전정산
                </p>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500] text-[#292929]/55 sm:text-[18px]">
                  주차장 문의
                </p>

                <p className=" group text-[16px] font-medium text-[#292929] sm:text-[18px]">
                  <a
                    href="tel:0517407336"
                    aria-label="주차장 문의 전화하기"
                    className="flex items-center gap-[5px] transition-colors duration-200 hover:text-[#FF6B81]"
                  >
                    051-740-7336
                    <ArrowUpRight className="h-5 w-5 text-[#292929]/60 group-hover:text-[#FF6B81] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#292929]/15 py-5 sm:grid-cols-[130px_1fr]">
                <p className="text-[16px] font-[500] text-[#292929]/55 sm:text-[18px]">
                  주차 가능
                </p>

                <p className="break-keep text-[16px] font-medium text-[#292929] sm:text-[18px]">
                  제1전시장 · 제2전시장
                </p>
              </div>
            </dl>
          </div>
        </div>

        {/* 주차장 이미지 */}
        <div className="mt-[55px] grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-[280px] overflow-hipen rounded-[16px] bg-[#F2F2F2] sm:h-[340px]">
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjAzMTZfODkg%2FMDAxNzczNjEwMzY5MDc1.z7hfivF0C7DVOqzBIiZeVnFYGj1Xhxs91lqU1lCbvK0g.QOSga0EyO1HKuj28ArcshKS0eeVhZf5RooSE_DCdWYsg.JPEG%2F9026f169.jpg&type=sc960_832"
              alt="벡스코 주차장 입구"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-[280px] overflow-hipen rounded-[16px] bg-[#F2F2F2] sm:h-[340px]">
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMDNfMjcy%2FMDAxNTQ2NDg5NjE2NjMx.sG1Yvs_BufkRN75H369eueoj0WQiYjXx_r-NgtVg8MAg.s3DnQQKM7_RauhANTpH0ygFI6uCAeqswORazSyxBucMg.JPEG.choisujo%2FCYMERA_20190103_132529.jpg&type=sc960_832"
              alt="벡스코 주차장 안내"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* 주차지원 */}
        <section className="mt-[80px] border-t border-[#292929]/15 pt-[65px] sm:mt-[100px] sm:pt-[80px]">
          <div>
            <h2 className="font-['Jua'] text-[34px] leading-none text-[#292929] sm:text-[42px]">
              주차지원
            </h2>

            <p className="mt-3 break-keep text-[16px] font-[500] leading-[1.6] text-[#292929]/60 sm:text-[18px]">
              방문 시간에 따른 주차지원 시간을 확인해주세요.
            </p>
          </div>

          <div className="mt-[35px] grid grid-cols-1 gap-[40px] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-[60px]">
            {/* 안내 이미지 */}
            <div className="flex min-h-[360px] items-center justify-center overflow-hipen rounded-[16px] bg-[#F7F7F7] lg:h-full">
              <img
                src={parkingImg}
                alt="키즈월드 주차등록 안내"
                className="h-full w-full object-contain"
              />
            </div>

            {/* 지원 내용 */}
            <div className="flex h-full flex-col">
              <div className="border-t border-[#292929]/15">
                <div className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-[#292929]/15 py-6">
                  <p className="text-[17px] font-bold text-[#292929] sm:text-[19px]">
                    15시 이전 방문 차량
                  </p>

                  <p className="whitespace-nowrap text-[20px] font-bold text-[#FF6B81] sm:text-[22px]">
                    2시간 지원
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-[#292929]/15 py-6">
                  <p className="text-[17px] font-bold text-[#292929] sm:text-[19px]">
                    15시 이후 방문 차량
                  </p>

                  <p className="whitespace-nowrap text-[20px] font-bold text-[#FF6B81] sm:text-[22px]">
                    1시간 지원
                  </p>
                </div>
              </div>

              <div className="mt-[30px] space-y-4">
                <p className="break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[18px]">
                  입장 시 매표소 또는 입구 직원에게 주차등록을 요청해주세요.
                </p>

                <p className="break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[18px]">
                  차량 1대당 1회 적용되며, 입장권 매수와 관계없이 동일하게
                  적용됩니다.
                </p>

                <p className="break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[18px]">
                  종일권이라도{" "}
                  <strong className="font-bold text-[#FF6B81]">
                    15시 이후 입장 시 1시간 지원
                  </strong>
                  됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
