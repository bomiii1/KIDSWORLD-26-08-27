import { useState } from "react";

import RestG1 from "../../../img/rest_g1.jpeg";
import RestG2 from "../../../img/rest_g2.jpeg";
import RestG3 from "../../../img/rest_g3.jpeg";

import RestT1 from "../../../img/rest_t1.jpeg";
import RestT2 from "../../../img/rest_t2.jpeg";
import RestT3 from "../../../img/rest_t3.jpeg";

import RestH1 from "../../../img/rest_h1.jpeg";
import RestH2 from "../../../img/rest_h2.jpeg";
import RestH3 from "../../../img/rest_h3.jpeg";

const restAreas = {
  grass: {
    name: "잔디존",
    images: [RestG1, RestG2, RestG3],
    tags: ["개인 돗자리", "자유 이용"],
    description:
      "넓은 공간에 돗자리를 펴고 자유롭게 휴식할 수 있는 공간입니다.",
    rules: [
      "개인 돗자리를 이용하여 편안하게 휴식할 수 있습니다.",
      "다른 이용객의 통행에 방해되지 않도록 이용해주세요.",
      "소방안전을 위해 소화전 앞 노란색 테이프 구역은 비워주세요.",
    ],
  },

  tent: {
    name: "텐트존",
    images: [RestT1, RestT2, RestT3],
    tags: ["무료 이용", "선착순"],
    description:
      "편안한 텐트 안에서 아이들과 함께 휴식을 즐길 수 있는 공간입니다.",
    rules: [
      "누구나 자유롭게 이용할 수 있는 무료 텐트존입니다.",
      "이용 가능한 텐트는 선착순으로 이용해주세요.",
      "장시간 자리를 비우는 이용은 자제해주세요.",
    ],
  },

  color: {
    name: "컬러펜스존",
    images: [RestH1, RestH2, RestH3],
    tags: ["개인 돗자리", "자유 이용"],
    description:
      "컬러펜스로 공간을 구분해 보다 편안하게 이용할 수 있는 휴게공간입니다.",
    rules: [
      "컬러펜스로 구분되어 있는 휴게공간입니다.",
      "가족과 함께 편안하게 휴식을 즐길 수 있습니다.",
      "다른 이용객을 배려하여 이용해주세요.",
    ],
  },
};

export default function RestArea() {
  const [activeTab, setActiveTab] = useState("tent");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeArea = restAreas[activeTab];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setActiveImageIndex(0);
  };

  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[150px]">
      <div className="mx-auto max-w-[1250px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            휴게공간
          </h2>

          <p className="mt-3 break-keep text-[16px] font-medium leading-[1.6] text-[#292929]/60 sm:text-[18px]">
            놀이 중 편안하게 쉬어갈 수 있는 휴게공간을 안내합니다.
          </p>
        </div>

        {/* 탭 */}
        <div className="mt-[40px] grid grid-cols-3 border-b border-[#292929]/15">
          <button
            type="button"
            onClick={() => handleTabChange("grass")}
            className={`relative cursor-pointer py-[18px] text-[16px] font-bold sm:text-[18px] lg:py-[20px] ${
              activeTab === "grass"
                ? "text-[#292929]"
                : "text-[#292929]/40 hover:text-[#292929]/70"
            }`}
          >
            잔디존
            {activeTab === "grass" && (
              <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-[#FF6B81]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("tent")}
            className={`relative cursor-pointer py-[18px] text-[16px] font-bold sm:text-[18px] lg:py-[20px] ${
              activeTab === "tent"
                ? "text-[#292929]"
                : "text-[#292929]/40 hover:text-[#292929]/70"
            }`}
          >
            텐트존
            {activeTab === "tent" && (
              <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-[#FF6B81]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("color")}
            className={`relative cursor-pointer py-[18px] text-[16px] font-bold sm:text-[18px] lg:py-[20px] ${
              activeTab === "color"
                ? "text-[#292929]"
                : "text-[#292929]/40 hover:text-[#292929]/70"
            }`}
          >
            컬러펜스존
            {activeTab === "color" && (
              <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-[#FF6B81]" />
            )}
          </button>
        </div>

        {/* 선택된 휴게공간 */}
        <div className="mt-[35px]">
          <div className="grid grid-cols-1 overflow-hidden rounded-[16px] border border-[#292929]/10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* 메인 이미지 */}
            <div className="h-[280px] overflow-hidden bg-[#EEEEEE] sm:h-[380px] lg:h-[500px]">
              <img
                src={activeArea.images[activeImageIndex]}
                alt={`${activeArea.name} 사진 ${activeImageIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* 내용 */}
            <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
              <h3 className="text-[30px] font-bold text-[#292929] lg:text-[38px]">
                {activeArea.name}
              </h3>

              {/* 특징 */}
              <div className="mt-[16px] flex flex-wrap gap-[8px]">
                {activeArea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[6px] bg-[#292929]/5 px-[12px] py-[7px] text-[15px] font-bold text-[#292929]/60 sm:text-[16px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-[22px] break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/60 sm:text-[18px]">
                {activeArea.description}
              </p>

              {/* 이용 안내 */}
              <div className="mt-[30px] space-y-[18px] border-t border-[#292929]/10 pt-[25px]">
                {activeArea.rules.map((rule, index) => (
                  <div key={rule} className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[15px] font-bold text-[#292929]/35 sm:text-[16px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="break-keep text-[16px] font-medium leading-[1.7] text-[#292929]/70 sm:text-[18px]">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 서브 이미지 */}
          <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
            {activeArea.images.map((image, index) => {
              const isSelected = activeImageIndex === index;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`${activeArea.name} 사진 ${index + 1} 크게 보기`}
                  className={`group relative h-[110px] cursor-pointer overflow-hidden rounded-[10px] ring-inset sm:h-[170px] lg:h-[210px] ${
                    isSelected
                      ? "ring-2 ring-[#FF6B81]"
                      : "ring-1 ring-[#292929]/10"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${activeArea.name} 사진 ${index + 1}`}
                    className={`h-full w-full object-cover transition-opacity duration-200 ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-80 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mt-[40px] rounded-[14px] border border-[#5F8F73]/35 px-5 py-[18px] sm:px-8">
          <p className="break-keep text-center text-[16px] font-medium leading-[1.8] text-[#5F8F73] sm:text-[18px]">
            잔디존, 텐트존, 컬러펜스존 외에도 통행에 방해가 되지 않는 공간이라면
            자유롭게 돗자리를 펴고 이용하실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
