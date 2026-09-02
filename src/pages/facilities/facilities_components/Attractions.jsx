import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { AttractionsData } from "../../../data/attractions";

export default function Attractions() {
  const [search, setSearch] = useState("");

  const filteredAttractions = AttractionsData.filter((item) =>
    item.AttractionName.includes(search),
  );

  return (
    <main className="min-h-screen bg-[white] pb-[150px] pt-[140px]">
      <div className="px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[150px]">
        <h3 className="font-['Jua'] text-[40px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
          놀이시설
        </h3>

        {/* 검색 */}
        <div className="mt-[50px] w-full max-w-[300px]">
          <div className="flex items-center border-b border-[#292929]/20 pb-[10px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색"
              className="w-full bg-transparent text-[15px] text-[#292929] outline-none placeholder:text-[#292929]/45"
            />

            <Search className="h-[21px] w-[21px] shrink-0 stroke-[1.5] text-[#292929]/55" />
          </div>
        </div>

        {/* 시설 카드 */}
        <div className="mt-[40px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAttractions.map((attraction) => (
            <Link
              key={attraction.id}
              to={`/facilities/attractions/${attraction.id}`}
              className="group block overflow-hidden rounded-[20px] border border-[#292929]/10 bg-white transition-all duration-300 hover:-translate-y-[5px] hover:shadow-xl"
            >
              {/* 이미지 */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#D9D9D9]">
                {attraction.AttractionImg && (
                  <img
                    src={attraction.AttractionImg}
                    alt={attraction.AttractionName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                )}
              </div>

              {/* 정보 */}
              <div className="px-[20px] py-[22px]">
                <p className="text-[13px] font-bold text-[#F5A623]">
                  {attraction.category}
                </p>

                <h4 className="mt-[6px] text-[21px] font-bold text-[#292929]">
                  {attraction.AttractionName}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        {/* 검색 결과 없음 */}
        {filteredAttractions.length === 0 && (
          <div className="py-[120px] text-center text-[16px] font-medium text-[#292929]/50">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </main>
  );
}
