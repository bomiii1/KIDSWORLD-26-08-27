import { Link } from "react-router-dom";
import logoImg from "../../img/logo.png";

export default function Header() {
  return (
    <header className="flex h-[90px] z-10000 w-full items-center justify-between bg-[#292929]/60 backdrop-blur-xl shadow-2xl/30 px-[20px] sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[150px] fixed top-0 left-0">
      <Link to={"/"} className="w-[6px] sm:w-[70px] md:w-[80px] lg:w-[70px]">
        <img src={logoImg} alt="키즈월드 로고" />
      </Link>

      <div className="flex items-center gap-[12px] sm:gap-[18px] md:gap-[24px] lg:gap-[30px]">
        <nav className="flex items-center gap-[14px] sm:gap-[20px] md:gap-[28px] lg:gap-[40px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#FFF9EE]">
          <Link
            to={"/about"}
            className="cursor-pointer transition-colors hover:text-[#F5A623] font-medium"
          >
            소개
          </Link>

          <Link
            to={"/guides"}
            className="cursor-pointer transition-colors hover:text-[#F5A623] font-medium"
          >
            이용안내
          </Link>

          <Link
            to={"/facilities"}
            className="cursor-pointer transition-colors hover:text-[#F5A623] font-medium"
          >
            시설안내
          </Link>

          <Link
            to={"/support"}
            className="cursor-pointer transition-colors hover:text-[#F5A623] font-medium"
          >
            문의
          </Link>
        </nav>

        <a
          href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280?placePath=%2Fticket%3Fbk_query%3D%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C%26entry%3Dpll%26fromNxList%3Dtrue%26fromPanelNum%3D2%26timestamp%3D202608281148%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C&placeSearchOption=bk_query%3D%25EB%25B2%25A1%25EC%258A%25A4%25EC%25BD%2594%2520%25ED%2582%25A4%25EC%25A6%2588%25EC%259B%2594%25EB%2593%259C%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%25B2%25A1%25EC%258A%25A4%25EC%25BD%2594%2520%25ED%2582%25A4%25EC%25A6%2588%25EC%259B%2594%25EB%2593%259C%26x%3D129.063001%26y%3D35.163524&searchType=place&c=15.00,0,0,0,dh"
          target="blank"
          className="rounded-[10px] bg-[#E53935] py-2 font-medium transition-all
          px-3 md:px-4 lg:px-5
          text-[12px] md:text-[14px] lg:text-[16px] lg:text-[14px]
          text-[#FFF9EE] hover:bg-[#c22b29] whitespace-nowrap"
        >
          온라인 예매
        </a>
      </div>
    </header>
  );
}
