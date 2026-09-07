import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, TriangleAlert } from "lucide-react";

import { AttractionsData } from "../../../data/attractions";
import PageTitle from "../../components/PageTitle";

export default function AttractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const attraction = AttractionsData.find(
    (item) => item.id === Number(id),
  );

  if (!attraction) {
    return (
      <main className="min-h-screen bg-white px-5 pt-[130px] text-center">
        <h2 className="text-[22px] font-bold text-[#292929] sm:text-[30px]">
          시설 정보를 찾을 수 없습니다.
        </h2>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-[25px] cursor-pointer text-[14px] font-bold text-[#FF6B81] sm:text-[16px]"
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

    if (
      attraction.guardianAllowed &&
      attraction.guardianRequiredUnderMonths
    ) {
      return `${attraction.guardianRequiredUnderMonths}개월 미만 보호자 동반 가능`;
    }

    if (attraction.adult) {
      return "전체 이용 가능";
    }

    return "어린이 전용";
  };

  const basicInformation = [
    {
      label: "이용시간",
      value: attraction.duration || "현장 안내 기준",
    },
    {
      label: "이용인원",
      value: attraction.capacity || "현장 안내 기준",
    },
    {
      label: "신장제한",
      value: attraction.heightText || "별도 제한 없음",
    },
    {
      label: "이용대상",
      value: getTargetText(),
    },
  ];

  return (
    <>
      <PageTitle title={attraction.AttractionName} />

      <main className="min-h-screen bg-white pb-[100px] pt-[100px] sm:pb-[150px]">
        <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
          <div className="mx-auto max-w-[1300px]">
            {/* 뒤로가기 */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#292929]/55 transition-colors hover:text-[#FF6B81] sm:text-[18px]"
            >
              <ArrowLeft className="h-[19px] w-[19px] transition-transform duration-200 group-hover:-translate-x-1 sm:h-[22px] sm:w-[22px]" />
              돌아가기
            </button>

            {/* 상단 상세 영역 */}
            <section className="mt-[28px] grid grid-cols-1 gap-[35px] sm:mt-[40px] lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-[70px]">
              {/* 시설 이미지 */}
              {/* 시설 이미지 */}
<div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F2F2F2] sm:rounded-[20px]">
  {attraction.AttractionImg ? (
    <img
      src={attraction.AttractionImg}
      alt={attraction.AttractionName}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full items-center justify-center">
      <span className="text-[14px] font-medium text-[#292929]/35 sm:text-[16px]">
        이미지 준비 중
      </span>
    </div>
  )}

  {/* 사진 위 위치 정보 */}
  {attraction.location && (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#292929]/80 to-transparent px-5 pb-4 pt-12 sm:px-6 sm:pb-5">
      <div className="flex items-start gap-2 text-white">
        <MapPin className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#FF6B81]" />

        <p className="break-keep text-[14px] font-bold leading-[1.6] sm:text-[16px]">
          {attraction.location}
        </p>
      </div>
    </div>
  )}
</div>

              {/* 시설 정보 */}
              <div className="lg:pt-2">
                <p className="text-[14px] font-bold text-[#FF6B81] sm:text-[16px] lg:text-[18px]">
                  {attraction.category}
                </p>

                <h1 className="mt-2 break-keep font-['Jua'] text-[36px] leading-[1.2] text-[#292929] sm:text-[46px] lg:text-[56px]">
                  {attraction.AttractionName}
                </h1>

                {attraction.description && (
                  <p className="mt-5 max-w-[800px] break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/65 sm:text-[18px]">
                    {attraction.description}
                  </p>
                )}

                {/* 기본 정보 */}
                <dl className="mt-[32px] border-t border-[#292929]/15 sm:mt-[40px]">
                  {basicInformation.map((information) => (
                    <div
                      key={information.label}
                      className="grid grid-cols-[90px_1fr] gap-4 border-b border-[#292929]/15 py-4 sm:grid-cols-[110px_1fr] sm:py-5"
                    >
                      <dt className="text-[14px] font-medium text-[#292929]/45 sm:text-[16px]">
                        {information.label}
                      </dt>

                      <dd className="break-keep text-[16px] font-bold leading-[1.5] text-[#292929] sm:text-[18px]">
                        {information.value}
                      </dd>
                    </div>
                  ))}
                </dl>

              
              </div>
            </section>

            {/* 휴게시간 */}
            <section className="mt-[75px] sm:mt-[110px]">
              <div>
                <h2 className="font-['Jua'] text-[32px] leading-none text-[#292929] sm:text-[40px]">
                  휴게시간
                </h2>

                <p className="mt-3 break-keep text-[14px] font-bold text-[#FF6B81] sm:text-[18px]">
                  기구마다 휴게시간을 확인하고 이용에 참고해주세요.
                </p>
              </div>

              <div className="mt-[28px] grid grid-cols-1 border-y border-[#292929]/15 md:grid-cols-2">
                {/* 점심시간 */}
                <div className="py-6 md:border-r md:border-[#292929]/15 md:px-8 md:py-8 md:first:pl-0">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#FFD050]" />

                    <h3 className="text-[16px] font-bold text-[#292929]/55 sm:text-[18px]">
                      점심시간
                    </h3>
                  </div>

                  <p className="mt-3 text-[20px] font-bold text-[#292929] sm:text-[24px]">
                    {attraction.lunchtime || "별도 없음"}
                  </p>
                </div>

                {/* 점검시간 */}
                <div className="border-t border-[#292929]/15 py-6 md:border-t-0 md:px-8 md:py-8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF6B81]" />

                    <h3 className="text-[16px] font-bold text-[#292929]/55 sm:text-[18px]">
                      점검시간
                    </h3>
                  </div>

                  <div className="mt-3 space-y-1">
                    {Array.isArray(attraction.breaktime) &&
                    attraction.breaktime.length > 0 ? (
                      attraction.breaktime.map((time, index) => (
                        <p
                          key={index}
                          className="break-keep text-[18px] font-bold leading-[1.6] text-[#292929] sm:text-[21px]"
                        >
                          {time.label && (
                            <span className="mr-2 text-[#FF6B81]">
                              {time.label}
                            </span>
                          )}

                          {time.time}
                        </p>
                      ))
                    ) : attraction.breaktime ? (
                      <p className="text-[18px] font-bold leading-[1.6] text-[#292929] sm:text-[21px]">
                        {attraction.breaktime}
                      </p>
                    ) : (
                      <p className="text-[18px] font-bold text-[#292929] sm:text-[21px]">
                        별도 없음
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 주의사항 */}
            {attraction.precautions?.length > 0 && (
              <section className="mt-[65px] sm:mt-[90px]">
                <div className="flex items-center gap-2">
                  <TriangleAlert className="h-[22px] w-[22px] shrink-0 text-[#5F8F73] sm:h-[25px] sm:w-[25px]" />

                  <h2 className="text-[22px] font-bold text-[#292929] sm:text-[28px]">
                    이용 시 주의사항
                  </h2>
                </div>

                <div className="mt-5 border-y border-[#5F8F73]/25 bg-[#5F8F73]/10 px-5 py-5 sm:px-7 sm:py-6">
                  <ul className="space-y-3">
                    {attraction.precautions.map(
                      (precaution, index) => (
                        <li
                          key={index}
                          className="flex gap-3 break-keep text-[14px] font-medium leading-[1.7] text-[#292929]/70 sm:text-[18px]"
                        >
                          <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#5F8F73]" />

                          {precaution}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}