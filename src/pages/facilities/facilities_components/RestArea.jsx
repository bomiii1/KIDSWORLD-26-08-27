import { useState } from "react";
import RestColor1 from "../../../img/rest_h1.jpeg";

export default function RestArea() {
  const [activeTab, setActiveTab] = useState("tent");

  return (
    <section className="bg-[#FFF9EE] px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[250px]">
      {/* 타이틀 */}
      <div>
        <p className="text-[14px] font-bold tracking-[0.18em] text-[#16864B]">
          REST AREA
        </p>

        <h2 className="mt-[8px] text-[28px] font-bold text-[#292929] sm:text-[32px] lg:text-[36px]">
          휴게공간
        </h2>

        <p className="mt-[10px] text-[15px] font-medium leading-[1.7] text-[#292929]/55 sm:text-[16px]">
          아이들이 신나게 노는 동안 가족과 함께 편안하게 쉬어가세요.
        </p>
      </div>

      {/* 탭 */}
      <div className="mt-[40px] grid grid-cols-3 overflow-hidden rounded-t-[16px]">
        <button
          type="button"
          onClick={() => setActiveTab("grass")}
          className={`py-[18px] text-[14px] font-bold transition-all duration-300 sm:text-[18px] lg:py-[28px] ${
            activeTab === "grass"
              ? "bg-[#292929] text-white"
              : "bg-[#292929]/8 text-[#292929]/45 hover:bg-[#292929]/12 hover:text-[#292929]/75"
          }`}
        >
          잔디존
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tent")}
          className={`py-[18px] text-[14px] font-bold transition-all duration-300 sm:text-[18px] lg:py-[28px] ${
            activeTab === "tent"
              ? "bg-[#292929] text-white"
              : "bg-[#292929]/8 text-[#292929]/45 hover:bg-[#292929]/12 hover:text-[#292929]/75"
          }`}
        >
          텐트존
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("color")}
          className={`py-[18px] text-[14px] font-bold transition-all duration-300 sm:text-[18px] lg:py-[28px] ${
            activeTab === "color"
              ? "bg-[#292929] text-white"
              : "bg-[#292929]/8 text-[#292929]/45 hover:bg-[#292929]/12 hover:text-[#292929]/75"
          }`}
        >
          컬러펜스존
        </button>
      </div>

      {/* 잔디존 */}
      {activeTab === "grass" && (
        <div className="mt-[0px]">
          <div className="overflow-hidden rounded-b-[24px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              {/* 이미지 */}
              <div className="h-[280px] overflow-hidden bg-[#E8E8E8] sm:h-[380px] lg:h-[500px]">
                <img
                  src={null}
                  alt="잔디존"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 내용 */}
              <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                <p className="text-[13px] font-bold tracking-[0.16em] text-[#16864B]">
                  REST AREA 01
                </p>

                <h3 className="mt-[7px] text-[32px] font-bold text-[#292929] lg:text-[42px]">
                  잔디존
                </h3>

                {/* 태그 */}
                <div className="mt-[16px] flex flex-wrap gap-[8px]">
                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    개인 돗자리
                  </span>

                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    자유 이용
                  </span>
                </div>

                <p className="mt-[22px] text-[15px] font-medium leading-[1.8] text-[#292929]/55 lg:text-[17px]">
                  넓은 공간에 돗자리를 펴고 자유롭게 휴식할 수 있는 공간입니다.
                </p>

                {/* 안내 */}
                <div className="mt-[30px] space-y-[20px]">
                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      01
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      개인 돗자리를 이용하여 편안하게 휴식할 수 있습니다.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      02
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      다른 이용객의 통행에 방해되지 않도록 이용해주세요.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      03
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      소방안전을 위해 소화전 앞 노란색 테이프 구역은 비워주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 서브 이미지 */}
          <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="잔디존 사진 1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="잔디존 사진 2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="잔디존 사진 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* 텐트존 */}
      {activeTab === "tent" && (
        <div className="mt-[0px]">
          <div className="overflow-hidden rounded-b-[24px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              {/* 이미지 */}
              <div className="h-[280px] overflow-hidden bg-[#E8E8E8] sm:h-[380px] lg:h-[500px]">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjlfMjE3%2FMDAxNzg3OTYzNjM0Njcy.ZvcBED1gjcJgfLevYxsWxcX1g5rObEKyAWMzU4ys-aQg.TxzhLywd7JMU_FpHIW_m25kEffGSwZM4WpViknWBCpAg.JPEG%2FIMG%25A3%25DF5509.jpg&type=sc960_832"
                  alt="텐트존"
                  className="h-full w-full object-cover object-[center_70%]"
                />
              </div>

              {/* 내용 */}
              <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                <p className="text-[13px] font-bold tracking-[0.16em] text-[#16864B]">
                  REST AREA 02
                </p>

                <h3 className="mt-[7px] text-[32px] font-bold text-[#292929] lg:text-[42px]">
                  텐트존
                </h3>

                {/* 태그 */}
                <div className="mt-[16px] flex flex-wrap gap-[8px]">
                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    무료 이용
                  </span>

                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    선착순
                  </span>
                </div>

                <p className="mt-[22px] text-[15px] font-medium leading-[1.8] text-[#292929]/55 lg:text-[17px]">
                  편안한 텐트 안에서 아이들과 함께 휴식을 즐길 수 있는
                  공간입니다.
                </p>

                {/* 안내 */}
                <div className="mt-[30px] space-y-[20px]">
                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      01
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      누구나 자유롭게 이용할 수 있는 무료 텐트존입니다.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      02
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      이용 가능한 텐트는 선착순으로 이용해주세요.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      03
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      장시간 자리를 비우는 이용은 자제해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 서브 이미지 */}
          <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjlfMjE3%2FMDAxNzg3OTYzNjM0Njcy.ZvcBED1gjcJgfLevYxsWxcX1g5rObEKyAWMzU4ys-aQg.TxzhLywd7JMU_FpHIW_m25kEffGSwZM4WpViknWBCpAg.JPEG%2FIMG%25A3%25DF5509.jpg&type=sc960_832"
                alt="텐트존 사진 1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="텐트존 사진 2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="텐트존 사진 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* 컬러펜스존 */}
      {activeTab === "color" && (
        <div className="mt-[0px]">
          <div className="overflow-hidden rounded-b-[24px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              {/* 이미지 */}
              <div className="h-[280px] overflow-hidden bg-[#E8E8E8] sm:h-[380px] lg:h-[500px]">
                <img
                  src={null}
                  alt="컬러펜스존"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 내용 */}
              <div className="flex flex-col justify-center px-[24px] py-[35px] sm:px-[40px] lg:px-[50px] lg:py-[50px]">
                <p className="text-[13px] font-bold tracking-[0.16em] text-[16864B]">
                  REST AREA 03
                </p>

                <h3 className="mt-[7px] text-[32px] font-bold text-[#292929] lg:text-[42px]">
                  컬러펜스존
                </h3>

                {/* 태그 */}
                <div className="mt-[16px] flex flex-wrap gap-[8px]">
                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    개인 돗자리
                  </span>

                  <span className="rounded-full bg-[#F5A623] px-[14px] py-[7px] text-[13px] font-bold text-white sm:text-[14px]">
                    자유 이용
                  </span>
                </div>

                <p className="mt-[22px] text-[15px] font-medium leading-[1.8] text-[#292929]/55 lg:text-[17px]">
                  컬러펜스로 공간을 구분해 보다 편안하게 이용할 수 있는
                  휴게공간입니다.
                </p>

                {/* 안내 */}
                <div className="mt-[30px] space-y-[20px]">
                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      01
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      컬러펜스로 구분되어 있는 휴게공간입니다.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      02
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      가족과 함께 편안하게 휴식을 즐길 수 있습니다.
                    </p>
                  </div>

                  <div className="flex gap-[16px]">
                    <span className="shrink-0 pt-[2px] text-[13px] font-bold text-[#F5A623]">
                      03
                    </span>

                    <p className="text-[15px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[16px]">
                      다른 이용객을 배려하여 이용해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 서브 이미지 */}
          <div className="mt-[16px] grid grid-cols-3 gap-[10px] sm:gap-[16px]">
            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={RestColor1}
                alt="컬러펜스존 사진 1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="컬러펜스존 사진 2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[110px] overflow-hidden rounded-[14px] bg-[#E5E5E5] sm:h-[170px] lg:h-[210px]">
              <img
                src={null}
                alt="컬러펜스존 사진 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* 하단 안내 */}
      <p className="mt-[40px] text-center text-[14px] font-medium leading-[1.8] text-[#292929]/55 sm:text-[15px]">
        잔디존, 텐트존, 컬러펜스존 외에도 통행에 방해가 되지 않는 공간이라면
        자유롭게 돗자리를 펴고 이용하실 수 있습니다.
      </p>
    </section>
  );
}
