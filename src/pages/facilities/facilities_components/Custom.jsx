import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  Ruler,
  Search,
  CircleCheck,
  CircleAlert,
  ChevronDown,
  X,
} from "lucide-react";

import { AttractionsData } from "../../../data/attractions";

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

export default function Custom() {
  const [heightRange, setHeightRange] = useState("");
  const [ageRange, setAgeRange] = useState("");

  const [resultHeightRange, setResultHeightRange] = useState("");
  const [resultAgeRange, setResultAgeRange] = useState("");

  const handleSubmit = () => {
    if (!heightRange || !ageRange) {
      return;
    }

    setResultHeightRange(heightRange);
    setResultAgeRange(ageRange);
  };

  const removeHeightCondition = () => {
    setHeightRange("");
    setResultHeightRange("");
  };

  const removeAgeCondition = () => {
    setAgeRange("");
    setResultAgeRange("");
  };

  const clearAllConditions = () => {
    setHeightRange("");
    setAgeRange("");
    setResultHeightRange("");
    setResultAgeRange("");
  };

  const hasResult = resultHeightRange !== "" && resultAgeRange !== "";

  const hasSelectedCondition =
    resultHeightRange !== "" || resultAgeRange !== "";

  const selectedHeight = heightOptions.find(
    (option) => option.value === resultHeightRange,
  );

  const selectedAge = ageOptions.find(
    (option) => option.value === resultAgeRange,
  );

  const getRideResult = (attraction) => {
    const conditions = [];
    const warnings = [];
    const infos = [];
    const reasons = [];

    const addWarning = (text) => {
      if (text && !warnings.includes(text)) {
        warnings.push(text);
      }
    };

    // 최소 키 제한
    if (attraction.minHeight !== null && attraction.minHeight !== undefined) {
      if (selectedHeight.max < attraction.minHeight) {
        reasons.push(`${attraction.minHeight}cm 이상 이용 가능`);
      } else {
        conditions.push(`${attraction.minHeight}cm 이상`);
      }
    }

    // 최대 키 제한
    if (attraction.maxHeight !== null && attraction.maxHeight !== undefined) {
      if (selectedHeight.min > attraction.maxHeight) {
        reasons.push(`${attraction.maxHeight}cm 이하 이용 가능`);
      } else {
        conditions.push(`${attraction.maxHeight}cm 이하`);
      }
    }

    // 유아 전용
    if (attraction.target === "toddler" && resultAgeRange === "over6") {
      reasons.push("5세 이하 이용 가능");
    }

    // 개월 수에 따른 보호자 동반
    if (
      resultAgeRange === "under24" &&
      attraction.guardianAllowed &&
      attraction.guardianRequiredUnderMonths
    ) {
      addWarning(
        attraction.guardianCondition ||
          `${attraction.guardianRequiredUnderMonths}개월 미만 보호자 동반`,
      );
    }

    // 키에 따른 보호자 동반
    if (
      attraction.guardianAllowed &&
      attraction.guardianRequiredUnderHeight &&
      selectedHeight.max < attraction.guardianRequiredUnderHeight
    ) {
      addWarning(
        attraction.guardianCondition ||
          `${attraction.guardianRequiredUnderHeight}cm 미만 보호자 동반`,
      );
    }

    // 별도의 보호자 조건
    if (
      attraction.guardianCondition &&
      !attraction.guardianRequiredUnderMonths &&
      !attraction.guardianRequiredUnderHeight
    ) {
      addWarning(attraction.guardianCondition);
    }

    // 체중 제한
    if (attraction.weightText) {
      addWarning(attraction.weightText);
    }

    // 별도 이용료
    if (attraction.priceText) {
      addWarning(attraction.priceText);
    }

    // 보호자 이용 가능
    if (attraction.adult === true) {
      infos.push("보호자도 이용 가능");
    }

    if (reasons.length > 0) {
      return {
        status: "difficult",
        conditions,
        warnings,
        infos,
        reasons,
      };
    }

    return {
      status: "available",
      conditions,
      warnings,
      infos,
      reasons,
    };
  };

  const attractionsWithResult = hasResult
    ? AttractionsData.map((attraction) => ({
        ...attraction,
        result: getRideResult(attraction),
      }))
    : [];

  const availableAttractions = attractionsWithResult.filter(
    (attraction) => attraction.result.status === "available",
  );

  const difficultAttractions = attractionsWithResult.filter(
    (attraction) => attraction.result.status === "difficult",
  );

  const AttractionCard = ({ attraction, difficult = false }) => {
    return (
      <Link
        to={`/facilities/attractions/${attraction.id}`}
        className={`group block min-w-0 ${difficult ? "opacity-60" : ""}`}
      >
        {/* 이미지 */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#D9D9D9] sm:rounded-[16px]">
          {attraction.AttractionImg ? (
            <img
              src={attraction.AttractionImg}
              alt={attraction.AttractionName}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[14px] font-medium text-[#292929]/40 sm:text-[16px]">
                이미지 준비 중
              </span>
            </div>
          )}
        </div>

        {/* 시설명 */}
        <h3 className="mt-[10px] break-keep px-[4px] text-[16px] font-bold leading-[1.45] text-[#292929] transition-colors duration-300 group-hover:text-[#FF6B81] sm:mt-[12px] sm:text-[20px]">
          {attraction.AttractionName}
        </h3>

        {/* 이용 가능 조건 */}
        {!difficult && (
          <div className="mt-[8px] flex flex-wrap gap-[6px] px-[4px]">
            {attraction.result.conditions.map((condition, index) => (
              <span
                key={`condition-${index}`}
                className="break-keep rounded-[6px] bg-[#292929]/10 px-[10px] py-[6px] text-[12px] font-bold leading-[1.3] text-[#292929]/75 backdrop-blur-sm sm:text-[14px]"
              >
                {condition}
              </span>
            ))}

            {attraction.result.warnings.map((warning, index) => (
              <span
                key={`warning-${index}`}
                className="break-keep rounded-[6px] bg-[#FF6B81]/15 px-[10px] py-[6px] text-[12px] font-bold leading-[1.3] text-[#FF6B81] backdrop-blur-sm sm:text-[14px]"
              >
                {warning}
              </span>
            ))}

            {attraction.result.infos.map((info, index) => (
              <span
                key={`info-${index}`}
                className="break-keep rounded-[6px] bg-[#5F8F73]/15 px-[10px] py-[6px] text-[12px] font-bold leading-[1.3] text-[#5F8F73] backdrop-blur-sm sm:text-[14px]"
              >
                {info}
              </span>
            ))}
          </div>
        )}

        {/* 이용이 어려운 이유 */}
        {difficult && attraction.result.reasons.length > 0 && (
          <div className="mt-[8px] flex flex-wrap gap-[6px] px-[4px]">
            {attraction.result.reasons.map((reason, index) => (
              <span
                key={index}
                className="break-keep rounded-[6px] bg-[#292929]/10 px-[10px] py-[6px] text-[12px] font-bold leading-[1.3] text-[#292929]/60 backdrop-blur-sm sm:text-[14px]"
              >
                {reason}
              </span>
            ))}
          </div>
        )}
      </Link>
    );
  };

  return (
    <section className="min-h-screen bg-white pb-[100px] pt-[70px] sm:pb-[130px] sm:pt-[90px] lg:pb-[150px]">
      <div className="px-5 sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[150px]">
        <div className="mx-auto max-w-[1300px]">
          {/* 타이틀 */}
          <div>
            <h1 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
              맞춤놀이 찾기
            </h1>

            <p className="mt-3 break-keep text-[16px] font-[500] leading-[1.6] text-[#292929]/60 sm:text-[18px]">
              우리 아이에게 맞는 놀이시설을 찾아보세요.
            </p>
          </div>

          {/* 조건 선택 */}
          <section className="mt-[32px] rounded-[16px] border border-[#FFD050]/45 bg-[#FFD050]/15 px-[18px] py-[24px] sm:mt-[45px] sm:px-[32px] sm:py-[32px] lg:px-[40px] lg:py-[38px]">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-[20px] font-bold text-[#292929] sm:text-[24px]">
                아이의 조건을 선택해주세요
              </h2>

              <p className="mt-2 text-[14px] font-medium text-[#292929]/60 sm:text-[18px]">
                키와 연령에 맞는 놀이시설을 확인할 수 있어요.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row">
              {/* 키 선택 */}
              <div className="relative flex-1">
                <Ruler className="pointer-events-none absolute left-[15px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#FF6B81] sm:left-[18px] sm:h-[22px] sm:w-[22px]" />

                <select
                  value={heightRange}
                  onChange={(event) => setHeightRange(event.target.value)}
                  className="h-[56px] w-full cursor-pointer appearance-none rounded-[10px] border border-[#292929]/15 bg-white pl-[46px] pr-[42px] text-[14px] font-medium text-[#292929] outline-none transition-all duration-300 hover:border-[#292929]/30 focus:border-[#FF6B81] focus:shadow-[0_0_0_3px_rgba(255,107,129,0.1)] sm:h-[62px] sm:pl-[52px] sm:text-[18px]"
                >
                  <option value="">키를 선택해주세요</option>

                  {heightOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#292929]/45 sm:right-[18px] sm:h-[20px] sm:w-[20px]" />
              </div>

              {/* 연령 선택 */}
              <div className="relative flex-1">
                <Baby className="pointer-events-none absolute left-[15px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#FF6B81] sm:left-[18px] sm:h-[22px] sm:w-[22px]" />

                <select
                  value={ageRange}
                  onChange={(event) => setAgeRange(event.target.value)}
                  className="h-[56px] w-full cursor-pointer appearance-none rounded-[10px] border border-[#292929]/15 bg-white pl-[46px] pr-[42px] text-[14px] font-medium text-[#292929] outline-none transition-all duration-300 hover:border-[#292929]/30 focus:border-[#FF6B81] focus:shadow-[0_0_0_3px_rgba(255,107,129,0.1)] sm:h-[62px] sm:pl-[52px] sm:text-[18px]"
                >
                  <option value="">연령을 선택해주세요</option>

                  {ageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#292929]/45 sm:right-[18px] sm:h-[20px] sm:w-[20px]" />
              </div>

              {/* 검색 버튼 */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!heightRange || !ageRange}
                className="flex h-[56px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#FF6B81] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#f45c74] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#292929]/20 disabled:text-white sm:h-[62px] sm:px-8 sm:text-[18px] lg:min-w-[190px]"
              >
                <Search className="h-5 w-5" />
                맞춤 놀이 찾기
              </button>
            </div>
          </section>

          {/* 선택한 조건 */}
          {hasSelectedCondition && (
            <section className="mt-[30px] sm:mt-[40px]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-[10px]">
                <p className="mr-1 text-[14px] font-bold text-[#292929] sm:text-[18px]">
                  선택한 조건
                </p>

                {selectedHeight && (
                  <button
                    type="button"
                    onClick={removeHeightCondition}
                    aria-label={`${selectedHeight.label} 조건 삭제`}
                    className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FFD050]/35 px-4 py-[9px] text-[14px] font-bold text-[#292929] transition-colors hover:bg-[#FFD050]/60 sm:text-[16px]"
                  >
                    {selectedHeight.label}
                    <X className="h-4 w-4" />
                  </button>
                )}

                {selectedAge && (
                  <button
                    type="button"
                    onClick={removeAgeCondition}
                    aria-label={`${selectedAge.label} 조건 삭제`}
                    className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FFD050]/35 px-4 py-[9px] text-[14px] font-bold text-[#292929] transition-colors hover:bg-[#FFD050]/60 sm:text-[16px]"
                  >
                    {selectedAge.label}
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={clearAllConditions}
                  className="ml-1 cursor-pointer text-[14px] font-medium text-[#292929]/45 underline decoration-[#292929]/20 underline-offset-4 transition-colors hover:text-[#292929] sm:text-[16px]"
                >
                  전체 해제
                </button>
              </div>
            </section>
          )}

          {/* 조회 전 또는 조건 제거 후 */}
          {!hasResult && (
            <div className="py-[80px] text-center sm:py-[110px]">
              <p className="text-[14px] font-medium text-[#292929]/45 sm:text-[18px]">
                {hasSelectedCondition
                  ? "조건을 다시 선택해주세요."
                  : "아이의 키와 연령을 선택해주세요."}
              </p>
            </div>
          )}

          {/* 검색 결과 */}
          {hasResult && (
            <>
              {/* 이용 가능 */}
              <section className="mt-[55px] sm:mt-[70px]">
                <div>
                  <div className="flex items-center gap-[8px] sm:gap-[10px]">
                    <CircleCheck className="h-[25px] w-[25px] shrink-0 text-[#5F8F73] sm:h-[29px] sm:w-[29px]" />

                    <h2 className="text-[22px] font-bold text-[#292929] sm:text-[30px]">
                      이용할 수 있어요!
                    </h2>
                  </div>

                  <p className="mt-2 text-[14px] font-medium text-[#292929]/55 sm:text-[18px]">
                    시설별 세부 이용조건을 함께 확인해주세요.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-[30px] sm:gap-[18px] lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                  {availableAttractions.map((attraction) => (
                    <AttractionCard
                      key={attraction.id}
                      attraction={attraction}
                    />
                  ))}
                </div>
              </section>

              {/* 이용 어려움 */}
              {difficultAttractions.length > 0 && (
                <section className="mt-[70px] border-t border-[#292929]/10 pt-[50px] sm:mt-[100px] sm:pt-[70px]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 sm:gap-[10px]">
                        <CircleAlert className="h-[25px] w-[25px] shrink-0 text-[#FF6B81] sm:h-[29px] sm:w-[29px]" />

                        <h2 className="break-keep text-[21px] font-bold leading-[1.4] text-[#292929] sm:text-[30px]">
                          현재 조건으로 이용이 어려워요
                        </h2>
                      </div>

                      <p className="mt-2 text-[14px] font-medium text-[#292929]/55 sm:text-[18px]">
                        이용조건을 충족하지 않은 시설이에요.
                      </p>
                    </div>

                    <p className="text-[14px] font-medium text-[#292929]/45 sm:text-[18px]">
                      {difficultAttractions.length}개
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-[30px] sm:gap-[18px] lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                    {difficultAttractions.map((attraction) => (
                      <AttractionCard
                        key={attraction.id}
                        attraction={attraction}
                        difficult
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
