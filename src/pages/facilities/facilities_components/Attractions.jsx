import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { AttractionsData } from "../../../data/attractions";

export default function Attractions() {
  const [search, setSearch] = useState("");

  const trimmedSearch = search.trim().toLowerCase();

  const filteredAttractions = AttractionsData.filter((attraction) => {
    const attractionName = attraction.AttractionName ?? "";

    return attractionName.toLowerCase().includes(trimmedSearch);
  });

  return (
    <section className="min-h-screen bg-white pb-[100px] pt-[70px] sm:pb-[120px] sm:pt-[80px] lg:pb-[150px] lg:pt-[100px]">
      <div className="px-5 sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[150px]">
        <div className="mx-auto max-w-[1300px]">
          {/* 타이틀 */}
          <div>
            <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
              놀이시설
            </h2>

            <p className="mt-3 break-keep text-[16px] font-[500] leading-[1.6] text-[#292929]/60 sm:text-[18px]">
              키즈월드의 다양한 놀이시설을 확인해보세요.
            </p>
          </div>

          {/* 검색 */}
          <div className="mt-[38px] flex flex-col gap-4 border-b border-[#292929]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-[460px]">
              <Search className="pointer-events-none absolute left-[17px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#292929]/40" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="놀이시설 이름을 검색해보세요"
                aria-label="놀이시설 검색"
                className="h-[54px] w-full rounded-[12px] border border-[#292929]/15 bg-white pl-[50px] pr-[18px] text-[16px] text-[#292929] outline-none transition-all duration-300 placeholder:text-[#292929]/40 hover:border-[#292929]/30 focus:border-[#FF6B81] focus:shadow-[0_0_0_3px_rgba(255,107,129,0.1)]"
              />
            </div>

            <p className="text-[14px] font-medium text-[#292929]/55 sm:text-[16px]">
              총{" "}
              <span className="font-bold text-[#FF6B81]">
                {filteredAttractions.length}
              </span>
              개 시설
            </p>
          </div>

          {/* 시설 목록 */}
          {filteredAttractions.length > 0 && (
            <div className="mt-[28px] grid grid-cols-2 gap-x-[12px] gap-y-[30px] sm:gap-x-[20px] sm:gap-y-[40px] lg:grid-cols-3 lg:gap-x-[24px] xl:grid-cols-4">
              {filteredAttractions.map((attraction) => (
                <Link
                  key={attraction.id}
                  to={`/facilities/attractions/${attraction.id}`}
                  className="group block min-w-0"
                >
                  {/* 시설 이미지 */}
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#F2F2F2] sm:rounded-[16px]">
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

                  {/* 시설 이름 */}
                  <h3 className="mt-3 break-keep text-[17px] font-bold leading-[1.45] text-[#292929] transition-colors duration-200 group-hover:text-[#FF6B81] sm:mt-4 sm:text-[20px]">
                    {attraction.AttractionName}
                  </h3>
                </Link>
              ))}
            </div>
          )}

          {/* 검색 결과 없음 */}
          {filteredAttractions.length === 0 && (
            <div className="py-[100px] text-center sm:py-[120px]">
              <p className="text-[18px] font-bold text-[#292929]">
                검색 결과가 없습니다.
              </p>

              <p className="mt-2 text-[14px] font-medium text-[#292929]/50 sm:text-[16px]">
                다른 놀이시설 이름으로 검색해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
