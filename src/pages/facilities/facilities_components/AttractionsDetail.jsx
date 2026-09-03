import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  Users,
  Ruler,
  UserRoundCheck,
  MapPin,
  TriangleAlert,
} from "lucide-react";

import { AttractionsData } from "../../../data/attractions";
import PageTitle from "../../components/PageTitle";

export default function AttractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const attraction = AttractionsData.find((item) => item.id === Number(id));

  if (!attraction) {
    return (
      <main className="min-h-screen bg-white px-5 pt-[130px] text-center">
        <h2 className="text-[22px] font-bold text-[#292929] sm:text-[30px]">
          시설 정보를 찾을 수 없습니다.
        </h2>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-[25px] cursor-pointer text-[14px] font-bold text-[#E53935] sm:text-[16px]"
        >
          놀이시설로 돌아가기
        </button>
      </main>
    );
  }

  const getTargetText = () => {
    if (attraction.target === "toddler") {
      return "유아 전용";
    }

    if (attraction.guardianAllowed && attraction.guardianRequiredUnderMonths) {
      return `${attraction.guardianRequiredUnderMonths}개월 미만 보호자 동반 가능`;
    }

    if (attraction.adult) {
      return "전체 이용 가능";
    }

    return "어린이 전용";
  };

  return (
    <main className="min-h-screen bg-white pb-[100px] pt-[100px] sm:pb-[150px]">
      <PageTitle title={attraction.AttractionName} />
      <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        {/* 뒤로가기 */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="group inline-flex cursor-pointer items-center gap-[6px] text-[14px] font-medium text-[#292929]/60 transition-colors hover:text-[#292929] sm:gap-[8px] sm:text-[18px] lg:text-[20px]"
        >
          <ArrowLeft className="h-[19px] w-[19px] transition-transform group-hover:-translate-x-[3px] sm:h-[23px] sm:w-[23px] lg:h-[25px] lg:w-[25px]" />
          돌아가기
        </button>

        {/* 상단 상세 영역 */}
        <section className="mt-[25px] grid grid-cols-1 gap-[28px] sm:mt-[35px] sm:gap-[45px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-[70px]">
          {/* 이미지 */}
          <div className="aspect-[4/3] overflow-hidden rounded-[16px] bg-[#D9D9D9] sm:rounded-[24px]">
            {attraction.AttractionImg ? (
              <img
                src={attraction.AttractionImg}
                alt={attraction.AttractionName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[13px] font-medium text-[#292929]/35 sm:text-[16px]">
                이미지 준비중
              </div>
            )}
          </div>

          {/* 오른쪽 정보 */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#F5A623] sm:text-[16px] lg:text-[18px]">
              {attraction.category}
            </p>

            <h1 className="mt-[5px] break-keep text-[30px] font-bold leading-[1.2] text-[#292929] sm:mt-[8px] sm:text-[42px] md:text-[48px] lg:text-[56px]">
              {attraction.AttractionName}
            </h1>

            {attraction.description && (
              <p className="mt-[14px] max-w-[800px] break-keep text-[14px] font-medium leading-[1.7] text-[#292929]/65 sm:mt-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[1.8]">
                {attraction.description}
              </p>
            )}

            {/* 기본 정보 */}
            <div className="mt-[28px] grid grid-cols-2 border-y border-[#292929]/15 sm:mt-[40px]">
              {/* 이용시간 */}
              <div className="flex-col border-b border-r border-[#292929]/15 px-[5px] py-[16px] sm:py-[22px]">
                <div className="flex items-center gap-[6px] text-[#292929]/50 sm:gap-[8px]">
                  <Clock3 className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />

                  <span className="text-[12px] font-medium sm:text-[16px] lg:text-[18px]">
                    이용시간
                  </span>
                </div>

                <p className="mt-[6px] break-keep text-[16px] font-bold leading-[1.4] text-[#292929] sm:mt-[8px] sm:text-[21px] lg:text-[26px]">
                  {attraction.duration || "현장 안내 기준"}
                </p>
              </div>

              {/* 이용인원 */}
              <div className="border-b border-[#292929]/15 px-[12px] py-[16px] sm:px-[20px] sm:py-[22px]">
                <div className="flex items-center gap-[6px] text-[#292929]/50 sm:gap-[8px]">
                  <Users className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />

                  <span className="text-[12px] font-medium sm:text-[16px] lg:text-[18px]">
                    이용인원
                  </span>
                </div>

                <p className="mt-[6px] break-keep text-[16px] font-bold leading-[1.4] text-[#292929] sm:mt-[8px] sm:text-[21px] lg:text-[26px]">
                  {attraction.capacity || "현장 안내 기준"}
                </p>
              </div>

              {/* 신장제한 */}
              <div className="border-r border-[#292929]/15 px-[5px] py-[16px] sm:py-[22px]">
                <div className="flex items-center gap-[6px] text-[#292929]/50 sm:gap-[8px]">
                  <Ruler className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />

                  <span className="text-[12px] font-medium sm:text-[16px] lg:text-[18px]">
                    신장제한
                  </span>
                </div>

                <p className="mt-[6px] break-keep text-[16px] font-bold leading-[1.4] text-[#292929] sm:mt-[8px] sm:text-[21px] lg:text-[26px]">
                  {attraction.heightText || "별도 제한 없음"}
                </p>
              </div>

              {/* 이용대상 */}
              <div className="px-[12px] py-[16px] sm:px-[20px] sm:py-[22px]">
                <div className="flex items-center gap-[6px] text-[#292929]/50 sm:gap-[8px]">
                  <UserRoundCheck className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />

                  <span className="text-[12px] font-medium sm:text-[16px] lg:text-[18px]">
                    이용대상
                  </span>
                </div>

                <p className="mt-[6px] break-keep text-[16px] font-bold leading-[1.4] text-[#292929] sm:mt-[8px] sm:text-[21px] lg:text-[26px]">
                  {getTargetText()}
                </p>
              </div>
            </div>

            {/* 위치 */}
            {attraction.location && (
              <div className="mt-[15px] flex items-center gap-[6px] text-[12px] font-medium text-[#292929]/60 sm:mt-[18px] sm:gap-[8px] sm:text-[15px]">
                <MapPin className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]" />
                {attraction.location}
              </div>
            )}
          </div>
        </section>

        {/* 운영 안내 */}
        {/* 운영 안내 */}
        <section className="mt-[65px] sm:mt-[100px]">
          <h2 className="text-[22px] font-bold text-[#292929] sm:text-[30px]">
            휴게시간
          </h2>

          <p className="mt-[4px] text-[12px] font-bold text-[#E53935] sm:text-[14px]">
            기구마다 휴게시간을 확인하고 이용에 참고 부탁드립니다.
          </p>

          <div className="mt-[20px] rounded-[18px] bg-[#F7F7F4] p-[14px] sm:mt-[30px] sm:rounded-[24px] sm:p-[20px]">
            <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
              {/* 점심시간 */}
              <div className="rounded-[14px] border border-[#F5A623]/25 bg-white px-[18px] py-[20px] sm:rounded-[18px] sm:px-[25px] sm:py-[26px]">
                <div className="flex items-center gap-[8px]">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#F5A623]" />

                  <p className="text-[13px] font-bold text-[#F5A623] sm:text-[16px]">
                    점심시간
                  </p>
                </div>

                <p className="mt-[10px] text-[18px] font-bold text-[#292929] sm:text-[22px]">
                  {attraction.lunchtime || "별도 없음"}
                </p>
              </div>

              {/* 점검시간 */}
              <div className="rounded-[14px] border border-[#E53935]/20 bg-white px-[18px] py-[20px] sm:rounded-[18px] sm:px-[25px] sm:py-[26px]">
                <div className="flex items-center gap-[8px]">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#E53935]" />

                  <p className="text-[13px] font-bold text-[#E53935] sm:text-[16px]">
                    점검시간
                  </p>
                </div>

                <div className="mt-[10px]">
                  {Array.isArray(attraction.breaktime) &&
                  attraction.breaktime.length > 0 ? (
                    attraction.breaktime.map((time, index) => (
                      <p
                        key={index}
                        className="text-[17px] font-bold leading-[1.6] text-[#292929] sm:text-[20px]"
                      >
                        {time.label && (
                          <span className="mr-[8px] text-[#E53935]">
                            {time.label}
                          </span>
                        )}

                        {time.time}
                      </p>
                    ))
                  ) : attraction.breaktime ? (
                    <p className="text-[17px] font-bold leading-[1.6] text-[#292929] sm:text-[20px]">
                      {attraction.breaktime}
                    </p>
                  ) : (
                    <p className="text-[17px] font-bold text-[#292929] sm:text-[20px]">
                      별도 없음
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 주의사항 */}
        {attraction.precautions?.length > 0 && (
          <section className="mt-[55px] sm:mt-[80px]">
            <div className="flex items-center gap-[8px] sm:gap-[10px]">
              <TriangleAlert className="h-[20px] w-[20px] text-[#E53935] sm:h-[24px] sm:w-[24px]" />

              <h2 className="text-[21px] font-bold text-[#292929] sm:text-[28px]">
                이용 시 주의사항
              </h2>
            </div>

            <div className="mt-[18px] rounded-[14px] bg-[#F5A623]/10 px-[18px] py-[18px] sm:mt-[25px] sm:rounded-[20px] sm:px-[30px] sm:py-[25px]">
              <ul className="space-y-[8px] sm:space-y-[12px]">
                {attraction.precautions.map((precaution, index) => (
                  <li
                    key={index}
                    className="flex gap-[8px] break-keep text-[13px] font-medium leading-[1.65] text-[#292929]/70 sm:gap-[10px] sm:text-[18px] sm:leading-[1.7]"
                  >
                    <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#E53935] sm:mt-[10px]" />

                    {precaution}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
