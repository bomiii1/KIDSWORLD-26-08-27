import {
  ArrowUpRight,
  MapPin,
  SquareParking,
  TrainFront,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Section6() {
  return (
    <section className="bg-white px-5 pb-[90px] sm:px-[30px] sm:pb-[110px] md:px-[50px] lg:px-[80px] lg:pb-[140px] xl:px-[150px]">
      <div className="mx-auto max-w-[1600px]">
        {/* 제목 */}
        <div>
          <h2 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            오시는길
          </h2>

          <p className="mt-3 text-[14px] font-bold text-[#FF6B81] sm:text-[16px] lg:text-[18px]">
            키즈월드 오시는 길을 안내드립니다.
          </p>
        </div>

        {/* 지도와 정보 */}
        <div className="mt-9 grid grid-cols-1 gap-9 sm:mt-11 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-[60px]">
          {/* 실제 지도 */}
          <div className="h-[320px] w-full overflow-hidden rounded-[14px] border border-[#292929]/15 bg-[#F4F4F4] sm:h-[400px] lg:h-full lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=%EC%83%81%EC%83%81%EC%B2%B4%ED%97%98%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C%20%EB%B2%A1%EC%8A%A4%EC%BD%94%20%EC%A0%9C2%EC%A0%84%EC%8B%9C%EC%9E%A5&z=16&output=embed"
              title="상상체험 키즈월드 위치 지도"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

          {/* 오른쪽 정보 */}
          <div className="flex h-full flex-col">
            {/* 주소 */}
            <div className="flex items-start gap-3">
      

              <div>

                <h3 className="mt-2 break-keep text-[25px] font-bold leading-[1.3] text-[#292929] sm:text-[30px] lg:text-[34px]">
                  부산 해운대구 APEC로 30
                  <br />
                  벡스코 제2전시장 3층
                </h3>
              </div>
            </div>

            {/* 지하철 */}
            <div className="mt-9 flex items-start gap-4 border-t border-[#292929]/15 pt-7">
              <TrainFront className="mt-1 h-6 w-6 shrink-0 text-[#292929] lg:h-7 lg:w-7" />

              <div>
                <h4 className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                  지하철 이용
                </h4>

                <p className="mt-2 text-[14px] font-medium leading-[1.8] text-[#292929]/65 sm:text-[16px] lg:text-[18px]">
                  벡스코역 5번 출구에서 도보 약 6분
                  <br />
                  센텀시티역 1번 출구에서 도보 약 7분
                </p>

                {/* 지도 바로가기 */}
                <div className="mb-8 mt-4 flex flex-wrap gap-2 lg:mb-10">
  <a
    href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%EC%A0%9C2%EC%A0%84%EC%8B%9C%EC%9E%A5"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-2 rounded-[7px] border border-[#292929]/25 px-4 py-3 text-[14px] font-medium text-[#292929] transition-colors duration-300 hover:border-[#FF6B81] hover:text-[#FF6B81] sm:text-[16px]"
  >
    네이버 지도
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>

  <a
    href="https://map.kakao.com/link/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%EC%A0%9C2%EC%A0%84%EC%8B%9C%EC%9E%A5"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-2 rounded-[7px] border border-[#292929]/25 px-4 py-3 text-[14px] font-medium text-[#292929] transition-colors duration-300 hover:border-[#FF6B81] hover:text-[#FF6B81] sm:text-[16px]"
  >
    카카오맵
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
</div>
              </div>
            </div>

            {/* 주차 */}
            <div className="mt-7 flex items-start gap-4 border-t border-[#292929]/15 pt-7 lg:mt-auto">
              <SquareParking className="mt-1 h-7 w-7 shrink-0 text-[#292929]" />

              <div>
                <h4 className="text-[18px] font-bold text-[#292929] lg:text-[20px]">
                  주차 안내
                </h4>

                <p className="mt-2 text-[14px] font-medium leading-[1.8] text-[#292929]/65 sm:text-[16px] lg:text-[18px]">
                  벡스코 제1·2전시장 주차장을 이용할 수 있습니다.
                </p>

                <Link
                  to="/guides/parking"
                  className="group mt-4 flex w-fit items-center gap-2 rounded-[7px] border border-[#292929]/25 px-4 py-3 text-[14px] font-medium text-[#292929] transition-colors duration-300 hover:border-[#FF6B81] hover:text-[#FF6B81] sm:text-[16px]"
                >
                  주차안내

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}