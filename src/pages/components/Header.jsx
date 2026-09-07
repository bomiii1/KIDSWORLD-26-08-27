import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logoImg from "../../img/logo.png";

const menuItems = [
  {
    label: "소개",
    to: "/about",
  },
  {
    label: "이용안내",
    to: "/guides",
  },
  {
    label: "시설안내",
    to: "/facilities",
  },
  {
    label: "문의",
    to: "/support",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 모바일 메뉴가 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`left-0 top-0 z-[10000] h-[70px] w-full border-b border-[#292929]/10 px-5 text-[#292929] transition-[background-color,box-shadow,backdrop-filter] duration-300 sm:px-[30px] md:px-[50px] lg:h-[90px] lg:px-[80px] xl:px-[150px] ${
          isScrolled
            ? "fixed bg-white/95 shadow-[0_8px_25px_rgba(41,41,41,0.1)] backdrop-blur-xl"
            : "absolute bg-white"
        }`}
      >
        <div className="flex h-full w-full items-center justify-between">
          {/* 로고 */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="w-[55px] shrink-0 sm:w-[60px] lg:w-[70px]"
          >
            <img
              src={logoImg}
              alt="키즈월드 로고"
              className="block w-full"
            />
          </Link>

          {/* PC 메뉴 */}
          <nav className="hidden h-full lg:block" aria-label="주요 메뉴">
            <div className="grid h-full grid-cols-[80px_110px_110px_80px_150px] items-center gap-[28px] xl:gap-[38px]">
              {menuItems.map((menu) => (
                <div
                  key={menu.to}
                  className="flex h-full items-center justify-center"
                >
                  <Link
                    to={menu.to}
                    className="group relative flex h-full items-center justify-center text-[16px] font-bold text-[#292929] transition-colors duration-300 hover:text-[#FF6B81]"
                  >
                    {menu.label}

                    {/* 메뉴 hover 밑줄 */}
                    <span className="absolute bottom-[20px] left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#FFD050] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              ))}

              {/* 온라인 예매 */}
              <a
                href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center whitespace-nowrap rounded-[10px] border border-[#FF6B81] bg-white px-[18px] py-[11px] text-[15px] font-bold text-[#FF6B81] transition-all duration-300 hover:bg-[#FF6B81] hover:text-white"
              >
                예매하기
              </a>
            </div>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center text-[#292929] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-[25px] w-[25px]" />
            ) : (
              <Menu className="h-[27px] w-[27px]" />
            )}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed left-0 top-[70px] z-[9999] w-full overflow-y-auto bg-white text-[#292929] shadow-[0_15px_30px_rgba(41,41,41,0.12)] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "visible h-[calc(100svh-70px)] opacity-100"
            : "invisible h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-8 sm:px-10" aria-label="모바일 메뉴">
          {/* 모바일 메뉴 목록 */}
          <div>
            {menuItems.map((menu) => (
              <Link
                key={menu.to}
                to={menu.to}
                onClick={closeMobileMenu}
                className="block border-b border-[#292929]/10 py-6 text-[22px] font-bold text-[#292929] transition-colors duration-300 first:pt-0 hover:text-[#FF6B81]"
              >
                {menu.label}
              </Link>
            ))}
          </div>

          {/* 모바일 예매 버튼 */}
          <a
            href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 flex w-full items-center justify-between rounded-[12px] bg-[#FF6B81] px-5 py-4 text-[16px] font-bold text-white shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            예매하기

            <ArrowUpRight className="h-[19px] w-[19px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </div>
    </>
  );
}