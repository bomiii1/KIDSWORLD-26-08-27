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

export default function AttractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const attraction = AttractionsData.find((item) => item.id === Number(id));

  if (!attraction) {
    return (
      <main className="min-h-screen bg-[white] px-5 pt-[150px] text-center">
        <h2 className="text-[30px] font-bold text-[#292929]">
          시설 정보를 찾을 수 없습니다.
        </h2>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-[30px] cursor-pointer font-bold text-[#E53935]"
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
    <main className="min-h-screen bg-[white] pb-[150px] pt-[100px]">
      <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        {/* 뒤로가기 */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="group inline-flex cursor-pointer items-center gap-[8px] text-[20px] font-medium text-[#292929]/60 transition-colors hover:text-[#292929]"
        >
          <ArrowLeft className="h-[25px] w-[25px] transition-transform group-hover:-translate-x-[3px]" />
          돌아가기
        </button>

        {/* 상단 상세 영역 */}
        <section className="mt-[35px] grid grid-cols-1 gap-[45px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-[70px]">
          {/* 이미지 */}
          <div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-[#D9D9D9]">
            {attraction.AttractionImg ? (
              <img
                src={attraction.AttractionImg}
                alt={attraction.AttractionName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[16px] font-medium text-[#292929]/35">
                이미지 준비중
              </div>
            )}
          </div>

          {/* 오른쪽 정보 */}
          <div>
            <p className="text-[18px] font-bold uppercase tracking-[0.08em] text-[#F5A623]">
              {attraction.category}
            </p>

            <h1 className="mt-[8px] text-[42px] font-bold leading-[1.2] text-[#292929] sm:text-[48px] lg:text-[56px]">
              {attraction.AttractionName}
            </h1>

            {attraction.description && (
              <p className="mt-[20px] max-w-[800px] text-[18px] font-medium leading-[1.8] text-[#292929]/65">
                {attraction.description}
              </p>
            )}

            {/* 기본 정보 */}
            <div className="mt-[40px] grid grid-cols-2 border-y border-[#292929]/15">
              {/* 이용시간 */}
              <div className="flex-col border-b border-r border-[#292929]/15 px-[5px] py-[22px]">
                <div className="flex items-center gap-[8px] text-[#292929]/50">
                  <Clock3 className="h-[20px] w-[20px]" />
                  <span className="text-[18px] font-medium">이용시간</span>
                </div>

                <p className="mt-[8px] text-[26px] font-bold text-[#292929]">
                  {attraction.duration || "현장 안내 기준"}
                </p>
              </div>

              {/* 이용인원 */}
              <div className="border-b border-[#292929]/15 px-[20px] py-[22px]">
                <div className="flex items-center gap-[8px] text-[#292929]/50">
                  <Users className="h-[20px] w-[20px]" />
                  <span className="text-[18px] font-medium">이용인원</span>
                </div>

                <p className="mt-[8px] text-[26px] font-bold text-[#292929]">
                  {attraction.capacity || "현장 안내 기준"}
                </p>
              </div>

              {/* 신장제한 */}
              <div className="border-r border-[#292929]/15 px-[5px] py-[22px]">
                <div className="flex items-center gap-[8px] text-[#292929]/50">
                  <Ruler className="h-[20px] w-[20px]" />
                  <span className="text-[18px] font-medium">신장제한</span>
                </div>

                <p className="mt-[8px] text-[26px] font-bold text-[#292929]">
                  {attraction.heightText || "별도 제한 없음"}
                </p>
              </div>

              {/* 이용대상 */}
              <div className="px-[20px] py-[22px]">
                <div className="flex items-center gap-[8px] text-[#292929]/50">
                  <UserRoundCheck className="h-[20px] w-[20px]" />
                  <span className="text-[18px] font-medium">이용대상</span>
                </div>

                <p className="mt-[8px] text-[26px] font-bold text-[#292929]">
                  {getTargetText()}
                </p>
              </div>
            </div>

            {/* 위치 */}
            {attraction.location && (
              <div className="mt-[18px] flex items-center gap-[8px] text-[15px] font-medium text-[#292929]/60">
                <MapPin className="h-[18px] w-[18px]" />
                {attraction.location}
              </div>
            )}
          </div>
        </section>

        {/* 운영 안내 */}
        <section className="mt-[100px]">
          <h2 className="mt-[5px] text-[30px] font-bold text-[#292929]">
            휴게시간
          </h2>

          <p className="text-[14px] font-bold text-[#E53935]">
            기구마다 휴게시간을 확인하고 이용에 참고부탁드립니다
          </p>

          <div className="mt-[30px] grid grid-cols-1 gap-[15px] md:grid-cols-2">
            {/* 점심시간 */}
            <div className="rounded-[18px] bg-white px-[25px] py-[24px]">
              <p className="text-[14px] font-medium text-[#292929]/45">
                점심시간
              </p>

              <p className="mt-[8px] text-[18px] font-bold text-[#292929]">
                {attraction.lunchtime || "별도 없음"}
              </p>
            </div>
            {/* 점검시간 */}
            <div className="rounded-[18px] bg-white px-[25px] py-[24px]">
              <p className="text-[16px] font-medium text-[#292929]/45">
                점검시간
              </p>

              <div className="mt-[8px] space-y-[5px]">
                {Array.isArray(attraction.breaktime) &&
                attraction.breaktime.length > 0 ? (
                  attraction.breaktime.map((time, index) => (
                    <p
                      key={index}
                      className="text-[18px] font-bold text-[#292929]"
                    >
                      {time.label && (
                        <span className="mr-[10px] text-[#E53935]">
                          {time.label}
                        </span>
                      )}

                      {time.time}
                    </p>
                  ))
                ) : attraction.breaktime ? (
                  <p className="text-[18px] font-bold text-[#292929]">
                    {attraction.breaktime}
                  </p>
                ) : (
                  <p className="text-[18px] font-bold text-[#292929]">
                    별도 없음
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 주의사항 */}
        {attraction.precautions?.length > 0 && (
          <section className="mt-[80px]">
            <div className="flex items-center gap-[10px]">
              <TriangleAlert className="h-[24px] w-[24px] text-[#E53935]" />

              <h2 className="text-[28px] font-bold text-[#292929]">
                이용 시 주의사항
              </h2>
            </div>

            <div className="mt-[25px] rounded-[20px] bg-[#F5A623]/10 px-[25px] py-[25px] sm:px-[30px]">
              <ul className="space-y-[12px]">
                {attraction.precautions.map((precaution, index) => (
                  <li
                    key={index}
                    className="flex gap-[10px] text-[18px] font-medium leading-[1.7] text-[#292929]/70"
                  >
                    <span className="mt-[10px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#E53935]" />

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
