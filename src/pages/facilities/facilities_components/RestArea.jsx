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

export default function RestArea() {
  const [activeTab, setActiveTab] = useState("tent");

  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[150px]">
      <div className="mx-auto max-w-[1250px]">
        {/* 타이틀 */}
        <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
          <p className="mt-[5px] text-[22px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
            휴게공간
          </p>

          <p className="text-[18px] font-bold leading-[1.6] text-[#5E9F45]">
            놀이 중 편안하게 쉬어갈 수 있는 휴게공간을 안내합니다.
          </p>
        </div>

        {/* 탭 */}
        <div className="mt-[40px] grid grid-cols-3 overflow-hidden rounded-t-[14px] border border-b-0 border-[#292929]/10">
          <button
            type="button"
            onClick={() => setActiveTab("grass")}
            className={`py-[18px] text-[16px] font-bold transition-colors duration-300 sm:text-[18px] lg:py-[22px] ${
              activeTab === "grass"
                ? "bg-[#292929] text-white"
                : "bg-[#F5F5F2] text-[#292929]/55 hover:bg-[#EEEEEA] hover:text-[#292929]"
            }`}
          >
            잔디존
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("tent")}
            className={`border-x border-[#292929]/10 py-[18px] text-[16px] font-bold transition-colors duration-300 sm:text-[18px] lg:py-[22px] ${
              activeTab === "tent"
                ? "bg-[#292929] text-white"
                : "bg-[#F5F5F2] text-[#292929]/55 hover:bg-[#EEEEEA] hover:text-[#292929]"
            }`}
          >
            텐트존
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("color")}
            className={`py-[18px] text-[16px] font-bold transition-colors duration-300 sm:text-[18px] lg:py-[22px] ${
              activeTab === "color"
                ? "bg-[#292929] text-white"
                : "bg-[#F5F5F2] text-[#292929]/55 hover:bg-[#EEEEEA] hover:text-[#292929]"
            }`}
          >
            컬러펜스존
          </button>
        </div>

        {/* 잔디존 */}
        {activeTab === "grass" && (
          <div>
            <div className="overflow-hidden rounded-b-[18px] border border-t-0 border-[#292929]/10 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                {/* 메인 이미지 */}
                <div className="h-[280px] overflow-hidden bg-[#EEEEEE] sm:h-[380px] lg:h-[500px]">
                  <img
                    src={RestG1}
                    alt="잔디존"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>

                {/* 내용 */}
                <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                  <h3 className="text-[30px] font-bold text-[#292929] lg:text-[38px]">
                    잔디존
                  </h3>

                  <div className="mt-[16px] flex flex-wrap gap-[8px]">
                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      개인 돗자리
                    </span>

                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      자유 이용
                    </span>
                  </div>

                  <p className="mt-[22px] text-[18px] font-medium leading-[1.8] text-[#292929]/60">
                    넓은 공간에 돗자리를 펴고 자유롭게 휴식할 수 있는
                    공간입니다.
                  </p>

                  <div className="mt-[30px] space-y-[18px] border-t border-[#292929]/10 pt-[25px]">
                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        01
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        개인 돗자리를 이용하여 편안하게 휴식할 수 있습니다.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        02
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        다른 이용객의 통행에 방해되지 않도록 이용해주세요.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        03
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        소방안전을 위해 소화전 앞 노란색 테이프 구역은
                        비워주세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 서브 이미지 */}
            <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestG1}
                  alt="잔디존 사진 1"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestG2}
                  alt="잔디존 사진 2"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestG3}
                  alt="잔디존 사진 3"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        )}

        {/* 텐트존 */}
        {activeTab === "tent" && (
          <div>
            <div className="overflow-hidden rounded-b-[18px] border border-t-0 border-[#292929]/10 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                {/* 메인 이미지 */}
                <div className="h-[280px] overflow-hidden bg-[#EEEEEE] sm:h-[380px] lg:h-[500px]">
                  <img
                    src={RestT1}
                    alt="텐트존"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>

                {/* 내용 */}
                <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                  <h3 className="text-[30px] font-bold text-[#292929] lg:text-[38px]">
                    텐트존
                  </h3>

                  <div className="mt-[16px] flex flex-wrap gap-[8px]">
                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      무료 이용
                    </span>

                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      선착순
                    </span>
                  </div>

                  <p className="mt-[22px] text-[18px] font-medium leading-[1.8] text-[#292929]/60">
                    편안한 텐트 안에서 아이들과 함께 휴식을 즐길 수 있는
                    공간입니다.
                  </p>

                  <div className="mt-[30px] space-y-[18px] border-t border-[#292929]/10 pt-[25px]">
                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        01
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        누구나 자유롭게 이용할 수 있는 무료 텐트존입니다.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        02
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        이용 가능한 텐트는 선착순으로 이용해주세요.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        03
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        장시간 자리를 비우는 이용은 자제해주세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 서브 이미지 */}
            <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestT1}
                  alt="텐트존 사진 1"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestT2}
                  alt="텐트존 사진 2"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestT3}
                  alt="텐트존 사진 3"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        )}

        {/* 컬러펜스존 */}
        {activeTab === "color" && (
          <div>
            <div className="overflow-hidden rounded-b-[18px] border border-t-0 border-[#292929]/10 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                {/* 메인 이미지 */}
                <div className="h-[280px] overflow-hidden bg-[#EEEEEE] sm:h-[380px] lg:h-[500px]">
                  <img
                    src={RestH1}
                    alt="컬러펜스존"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>

                {/* 내용 */}
                <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                  <h3 className="text-[30px] font-bold text-[#292929] lg:text-[38px]">
                    컬러펜스존
                  </h3>

                  <div className="mt-[16px] flex flex-wrap gap-[8px]">
                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      개인 돗자리
                    </span>

                    <span className="rounded-[6px] bg-[#F5A623]/12 px-[12px] py-[7px] text-[16px] font-bold text-[#D68A0D]">
                      자유 이용
                    </span>
                  </div>

                  <p className="mt-[22px] text-[18px] font-medium leading-[1.8] text-[#292929]/60">
                    컬러펜스로 공간을 구분해 보다 편안하게 이용할 수 있는
                    휴게공간입니다.
                  </p>

                  <div className="mt-[30px] space-y-[18px] border-t border-[#292929]/10 pt-[25px]">
                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        01
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        컬러펜스로 구분되어 있는 휴게공간입니다.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        02
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        가족과 함께 편안하게 휴식을 즐길 수 있습니다.
                      </p>
                    </div>

                    <div className="flex gap-[16px]">
                      <span className="shrink-0 pt-[2px] text-[16px] font-bold text-[#5E9F45]">
                        03
                      </span>

                      <p className="text-[18px] font-medium leading-[1.7] text-[#292929]/70">
                        다른 이용객을 배려하여 이용해주세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 서브 이미지 */}
            <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestH1}
                  alt="컬러펜스존 사진 1"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestH2}
                  alt="컬러펜스존 사진 2"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="group h-[110px] overflow-hidden rounded-[12px] sm:h-[170px] lg:h-[210px]">
                <img
                  src={RestH3}
                  alt="컬러펜스존 사진 3"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-[40px] border-t border-[#292929]/10 pt-[25px]">
          <p className="text-center text-[16px] font-medium leading-[1.8] text-[#292929]/60 sm:text-[18px]">
            잔디존, 텐트존, 컬러펜스존 외에도 통행에 방해가 되지 않는 공간이라면
            자유롭게 돗자리를 펴고 이용하실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
