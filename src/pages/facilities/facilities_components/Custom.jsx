import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  Ruler,
  Search,
  CircleCheck,
  CircleAlert,
  ChevronDown,
} from "lucide-react";

import { AttractionsData } from "../../../data/attractions";

export default function Custom() {
  const [heightRange, setHeightRange] = useState("");
  const [ageRange, setAgeRange] = useState("");

  const [resultHeightRange, setResultHeightRange] = useState("");
  const [resultAgeRange, setResultAgeRange] = useState("");

  const heightOptions = [
    {
      value: "under110",
      label: "110cm 미만",
      min: 0,
      max: 109,
    },
    {
      value: "110to119",
      label: "110 ~ 119cm",
      min: 110,
      max: 119,
    },
    {
      value: "over120",
      label: "120cm 이상",
      min: 120,
      max: Infinity,
    },
  ];

  const ageOptions = [
    {
      value: "under24",
      label: "24개월 미만",
    },
    {
      value: "24to5",
      label: "24개월 이상 ~ 5세 이하",
    },
    {
      value: "over6",
      label: "6세 이상",
    },
  ];

  const handleSubmit = () => {
    if (!heightRange || !ageRange) {
      return;
    }

    setResultHeightRange(heightRange);
    setResultAgeRange(ageRange);
  };

  const hasResult =
    resultHeightRange !== "" && resultAgeRange !== "";

  const selectedHeight = heightOptions.find(
    (option) => option.value === resultHeightRange,
  );

  const selectedAge = ageOptions.find(
    (option) => option.value === resultAgeRange,
  );

  const getRideResult = (attraction) => {
    const conditions = [];
    const reasons = [];

    // 최소 키 제한
    if (
      attraction.minHeight !== null &&
      attraction.minHeight !== undefined
    ) {
      if (selectedHeight.max < attraction.minHeight) {
        reasons.push(`${attraction.minHeight}cm 이상 이용 가능`);
      } else {
        conditions.push(`${attraction.minHeight}cm 이상`);
      }
    }

    // 최대 키 제한
    if (
      attraction.maxHeight !== null &&
      attraction.maxHeight !== undefined
    ) {
      if (selectedHeight.min > attraction.maxHeight) {
        reasons.push(`${attraction.maxHeight}cm 이하 이용 가능`);
      } else {
        conditions.push(`${attraction.maxHeight}cm 이하`);
      }
    }

    // 유아 전용
    if (
      attraction.target === "toddler" &&
      resultAgeRange === "over6"
    ) {
      reasons.push("5세 이하 이용 가능");
    }

    // 개월 수에 따른 보호자 동반
    if (
      resultAgeRange === "under24" &&
      attraction.guardianAllowed &&
      attraction.guardianRequiredUnderMonths
    ) {
      conditions.push(
        `${attraction.guardianRequiredUnderMonths}개월 미만 보호자 동반`,
      );
    }

    // 키에 따른 보호자 동반
    if (
      attraction.guardianAllowed &&
      attraction.guardianRequiredUnderHeight &&
      selectedHeight.max < attraction.guardianRequiredUnderHeight
    ) {
      conditions.push(
        `${attraction.guardianRequiredUnderHeight}cm 미만 보호자 동반`,
      );
    }

    // 체중 제한
    if (attraction.weightText) {
      conditions.push(attraction.weightText);
    }

    // 별도 이용료
    if (attraction.priceText) {
      conditions.push(attraction.priceText);
    }

    // 보호자도 일반 이용 가능
    if (attraction.adult === true) {
      conditions.push("보호자도 이용 가능");
    }

    if (reasons.length > 0) {
      return {
        status: "difficult",
        conditions,
        reasons,
      };
    }

    return {
      status: "available",
      conditions,
      reasons,
    };
  };

  const availableAttractions = hasResult
    ? AttractionsData.map((attraction) => ({
        ...attraction,
        result: getRideResult(attraction),
      })).filter(
        (attraction) => attraction.result.status === "available",
      )
    : [];

  const difficultAttractions = hasResult
    ? AttractionsData.map((attraction) => ({
        ...attraction,
        result: getRideResult(attraction),
      })).filter(
        (attraction) => attraction.result.status === "difficult",
      )
    : [];

  const AttractionCard = ({ attraction, difficult = false }) => {
    return (
      <Link
        to={`/facilities/attractions/${attraction.id}`}
        className={`group block overflow-hidden rounded-[16px] border bg-white transition-all duration-300 hover:border-[#292929]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${
          difficult
            ? "border-[#292929]/10 opacity-70"
            : "border-[#292929]/10"
        }`}
      >
        {/* 이미지 */}
        <div className="aspect-[4/3] w-full overflow-hidden bg-[#EEEEEE]">
          {attraction.AttractionImg ? (
            <img
              src={attraction.AttractionImg}
              alt={attraction.AttractionName}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-[16px] font-medium text-[#292929]/40">
                이미지 준비중
              </span>
            </div>
          )}
        </div>

        {/* 정보 */}
        <div className="px-[20px] py-[22px]">
          <p className="text-[16px] font-bold text-[#5E9F45]">
            {attraction.category}
          </p>

          <h3 className="mt-[4px] text-[22px] font-bold leading-[1.5] text-[#292929]">
            {attraction.AttractionName}
          </h3>

          {/* 이용 조건 */}
          {!difficult &&
            attraction.result.conditions.length > 0 && (
              <div className="mt-[16px] flex flex-wrap gap-[8px]">
                {attraction.result.conditions.map(
                  (condition, index) => (
                    <span
                      key={index}
                      className="rounded-[6px] bg-[#5E9F45]/10 px-[10px] py-[6px] text-[16px] font-medium text-[#4D8638]"
                    >
                      {condition}
                    </span>
                  ),
                )}
              </div>
            )}

          {/* 이용 어려운 이유 */}
          {difficult &&
            attraction.result.reasons.length > 0 && (
              <div className="mt-[16px] space-y-[6px]">
                {attraction.result.reasons.map(
                  (reason, index) => (
                    <p
                      key={index}
                      className="text-[16px] font-medium leading-[1.6] text-[#292929]/55"
                    >
                      {reason}
                    </p>
                  ),
                )}
              </div>
            )}
        </div>
      </Link>
    );
  };

  return (
    <main className="min-h-screen bg-white pb-[150px] pt-[140px]">
      <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        <div className="mx-auto max-w-[1250px]">
          {/* 타이틀 */}
          <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
            <p className="mt-[5px] text-[22px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
              맞춤놀이 찾기
            </p>

            <p className="text-[18px] font-bold leading-[1.6] text-[#5E9F45]">
              우리 아이에게 맞는 놀이시설을 찾아보세요.
            </p>
          </div>

          {/* 조건 선택 */}
          <section className="mt-[45px] rounded-[16px] border border-[#292929]/10 bg-[#F7F7F4] px-[24px] py-[30px] sm:px-[32px] lg:px-[40px] lg:py-[35px]">
            <div className="mb-[22px]">
              <p className="text-[22px] font-bold text-[#292929]">
                아이의 조건을 선택해주세요
              </p>

              <p className="mt-[5px] text-[18px] font-medium text-[#292929]/55">
                키와 연령에 맞는 놀이시설을 확인할 수 있어요.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] lg:flex-row">
              {/* 키 */}
              <div className="relative flex-1">
                <Ruler className="pointer-events-none absolute left-[18px] top-1/2 h-[21px] w-[21px] -translate-y-1/2 text-[#5E9F45]" />

                <select
                  value={heightRange}
                  onChange={(e) =>
                    setHeightRange(e.target.value)
                  }
                  className="h-[62px] w-full cursor-pointer appearance-none rounded-[10px] border border-[#292929]/15 bg-white pl-[52px] pr-[45px] text-[18px] font-medium text-[#292929] outline-none transition-colors duration-300 hover:border-[#292929]/30 focus:border-[#5E9F45]"
                >
                  <option value="">
                    키를 선택해주세요
                  </option>

                  {heightOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-[18px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#292929]/45" />
              </div>

              {/* 연령 */}
              <div className="relative flex-1">
                <Baby className="pointer-events-none absolute left-[18px] top-1/2 h-[21px] w-[21px] -translate-y-1/2 text-[#5E9F45]" />

                <select
                  value={ageRange}
                  onChange={(e) =>
                    setAgeRange(e.target.value)
                  }
                  className="h-[62px] w-full cursor-pointer appearance-none rounded-[10px] border border-[#292929]/15 bg-white pl-[52px] pr-[45px] text-[18px] font-medium text-[#292929] outline-none transition-colors duration-300 hover:border-[#292929]/30 focus:border-[#5E9F45]"
                >
                  <option value="">
                    연령을 선택해주세요
                  </option>

                  {ageOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-[18px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#292929]/45" />
              </div>

              {/* 검색 */}
              <button
                type="button"
                onClick={handleSubmit}
                className="flex h-[62px] shrink-0 cursor-pointer items-center justify-center gap-[9px] rounded-[10px] bg-[#E53935] px-[28px] text-[18px] font-bold text-white transition-colors duration-300 hover:bg-[#D73330] active:bg-[#C92F2C] lg:min-w-[190px]"
              >
                <Search className="h-[21px] w-[21px]" />
                맞춤 놀이 찾기
              </button>
            </div>
          </section>

          {/* 조회 전 */}
          {!hasResult && (
            <div className="py-[120px] text-center">
              <p className="text-[18px] font-medium text-[#292929]/45">
                아이의 키와 연령을 선택해주세요.
              </p>
            </div>
          )}

          {/* 결과 */}
          {hasResult && (
            <>
              {/* 선택한 조건 */}
              <section className="mt-[45px]">
                <div className="flex flex-wrap items-center gap-[10px]">
                  <p className="mr-[4px] text-[18px] font-bold text-[#292929]">
                    선택한 조건
                  </p>

                  <span className="rounded-[7px] border border-[#292929]/15 bg-white px-[14px] py-[8px] text-[16px] font-medium text-[#292929]/70">
                    {selectedHeight?.label}
                  </span>

                  <span className="rounded-[7px] border border-[#292929]/15 bg-white px-[14px] py-[8px] text-[16px] font-medium text-[#292929]/70">
                    {selectedAge?.label}
                  </span>
                </div>
              </section>

              {/* 이용 가능 */}
              <section className="mt-[70px]">
                <div>
                  <div className="flex items-center gap-[10px]">
                    <CircleCheck className="h-[28px] w-[28px] text-[#5E9F45]" />

                    <h2 className="text-[28px] font-bold text-[#292929] sm:text-[30px]">
                      이용할 수 있어요!
                    </h2>
                  </div>

                  <p className="mt-[7px] text-[18px] font-medium text-[#292929]/55">
                    시설별 세부 이용조건을 함께 확인해주세요.
                  </p>
                </div>

                <div className="mt-[30px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {availableAttractions.map(
                    (attraction) => (
                      <AttractionCard
                        key={attraction.id}
                        attraction={attraction}
                      />
                    ),
                  )}
                </div>
              </section>

              {/* 이용 어려움 */}
              {difficultAttractions.length > 0 && (
                <section className="mt-[100px] border-t border-[#292929]/10 pt-[70px]">
                  <div className="flex flex-col gap-[10px] sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-[10px]">
                        <CircleAlert className="h-[28px] w-[28px] text-[#292929]/40" />

                        <h2 className="text-[28px] font-bold text-[#292929] sm:text-[30px]">
                          현재 조건으로 이용이 어려워요
                        </h2>
                      </div>

                      <p className="mt-[7px] text-[18px] font-medium text-[#292929]/55">
                        이용조건을 충족하지 않은 시설이에요.
                      </p>
                    </div>

                    <p className="text-[18px] font-medium text-[#292929]/45">
                      {difficultAttractions.length}개
                    </p>
                  </div>

                  <div className="mt-[30px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {difficultAttractions.map(
                      (attraction) => (
                        <AttractionCard
                          key={attraction.id}
                          attraction={attraction}
                          difficult={true}
                        />
                      ),
                    )}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}