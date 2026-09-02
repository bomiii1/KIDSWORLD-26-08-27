import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { AttractionsData } from "../../../data/attractions";

export default function Attractions() {
  const [search, setSearch] = useState("");

  const filteredAttractions = AttractionsData.filter((item) =>
    item.AttractionName.includes(search.trim()),
  );

  return (
    <main className="min-h-screen bg-white pb-[150px] pt-[140px]">
      <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        <div className="mx-auto max-w-[1250px]">
          {/* 타이틀 */}
          <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
            <p className="mt-[5px] text-[20px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
              놀이시설
            </p>

            <p className="text-[16px] font-bold leading-[1.6] text-[#5E9F45] sm:text-[18px]">
              키즈월드의 다양한 놀이시설을 확인해보세요.
            </p>
          </div>

          {/* 검색 */}
          <div className="mt-[40px] flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-[420px]">
              <Search className="absolute left-[17px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#292929]/45" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="놀이시설 이름을 검색해보세요"
                className="
                  h-[52px] w-full rounded-[10px]
                  border border-[#292929]/15
                  bg-white
                  pl-[50px] pr-[18px]
                  text-[16px] text-[#292929]
                  outline-none
                  transition-all duration-300
                  placeholder:text-[#292929]/40
                  hover:border-[#292929]/30
                  focus:border-[#5E9F45]
                  focus:shadow-[0_0_0_3px_rgba(94,159,69,0.08)]
                "
              />
            </div>

            <p className="text-[14px] font-medium text-[#292929]/50 sm:text-[16px]">
              총{" "}
              <span className="font-bold text-[#292929]">
                {filteredAttractions.length}
              </span>
              개 시설
            </p>
          </div>

          {/* 시설 카드 */}
          <div className="mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAttractions.map((attraction) => (
              <Link
                key={attraction.id}
                to={`/facilities/attractions/${attraction.id}`}
                className="
                  group block overflow-hidden
                  rounded-[16px]
                  border border-[#292929]/10
                  bg-white
                  transition-all duration-300
                  hover:border-[#292929]/20
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                "
              >
                {/* 이미지 */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#EEEEEE]">
                  {attraction.AttractionImg ? (
                    <img
                      src={attraction.AttractionImg}
                      alt={attraction.AttractionName}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-[1.02]
                      "
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-[14px] font-medium text-[#292929]/40">
                        이미지 준비중
                      </span>
                    </div>
                  )}
                </div>

                {/* 정보 */}
                <div className="px-[20px] py-[20px]">
                  <p className="text-[14px] font-bold text-[#5E9F45]">
                    {attraction.category}
                  </p>

                  <h4 className="mt-[4px] text-[20px] font-bold leading-[1.5] text-[#292929] sm:text-[22px]">
                    {attraction.AttractionName}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          {/* 검색 결과 없음 */}
          {filteredAttractions.length === 0 && (
            <div className="py-[120px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">
                검색 결과가 없습니다.
              </p>

              <p className="mt-[6px] text-[16px] font-medium text-[#292929]/50">
                다른 시설 이름으로 검색해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}