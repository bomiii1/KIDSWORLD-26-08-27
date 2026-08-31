import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logoImg from "../../img/logo.png";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed left-0 top-0 z-[10000] h-[90px] w-full border-b border-white/10 bg-[#292929]/70 px-[20px] text-[#FFF9EE] backdrop-blur-xl sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[150px]"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex h-full w-full items-center justify-between">
          {/* 로고 */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="w-[65px] shrink-0 sm:w-[75px] lg:w-[70px]"
          >
            <img
              src={logoImg}
              alt="키즈월드 로고"
              className="w-full"
            />
          </Link>

          {/* PC 메뉴 */}
          <div className="hidden h-full lg:block">
            <div className="grid h-full grid-cols-[80px_110px_110px_80px_150px] items-center gap-[28px] xl:gap-[38px]">
              {/* 소개 */}
              <div
                className="flex h-full items-center justify-center"
                onMouseEnter={() => setActiveMenu("about")}
              >
                <Link
                  to="/about"
                  className={`relative flex h-full items-center justify-center text-[16px] font-bold transition-colors duration-300 ${
                    activeMenu === "about"
                      ? "text-[#F5A623]"
                      : "hover:text-[#F5A623]"
                  }`}
                >
                  소개

                  <span
                    className={`absolute bottom-[22px] left-0 h-[2px] bg-[#F5A623] transition-all duration-300 ${
                      activeMenu === "about" ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </div>

              {/* 이용안내 */}
              <div
                className="flex h-full items-center justify-center"
                onMouseEnter={() => setActiveMenu("guides")}
              >
                <Link
                  to="/guides"
                  className={`relative flex h-full items-center justify-center text-[16px] font-bold transition-colors duration-300 ${
                    activeMenu === "guides"
                      ? "text-[#F5A623]"
                      : "hover:text-[#F5A623]"
                  }`}
                >
                  이용안내

                  <span
                    className={`absolute bottom-[22px] left-0 h-[2px] bg-[#F5A623] transition-all duration-300 ${
                      activeMenu === "guides" ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </div>

              {/* 시설안내 */}
              <div
                className="flex h-full items-center justify-center"
                onMouseEnter={() => setActiveMenu("facilities")}
              >
                <Link
                  to="/facilities"
                  className={`relative flex h-full items-center justify-center text-[16px] font-bold transition-colors duration-300 ${
                    activeMenu === "facilities"
                      ? "text-[#F5A623]"
                      : "hover:text-[#F5A623]"
                  }`}
                >
                  시설안내

                  <span
                    className={`absolute bottom-[22px] left-0 h-[2px] bg-[#F5A623] transition-all duration-300 ${
                      activeMenu === "facilities" ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </div>

              {/* 문의 */}
              <div
                className="flex h-full items-center justify-center"
                onMouseEnter={() => setActiveMenu("support")}
              >
                <Link
                  to="/support"
                  className={`relative flex h-full items-center justify-center text-[16px] font-bold transition-colors duration-300 ${
                    activeMenu === "support"
                      ? "text-[#F5A623]"
                      : "hover:text-[#F5A623]"
                  }`}
                >
                  문의

                  <span
                    className={`absolute bottom-[22px] left-0 h-[2px] bg-[#F5A623] transition-all duration-300 ${
                      activeMenu === "support" ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </div>

              {/* 온라인 예매 */}
              <a
                href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center whitespace-nowrap rounded-[10px] bg-[#E53935] px-[18px] py-[12px] text-[16px] font-bold text-[#FFF9EE] transition-all duration-300 hover:bg-[#C92F2C]"
              >
                온라인 예매
              </a>
            </div>
          </div>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="메뉴"
            className="flex h-[44px] w-[44px] items-center justify-center lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-[30px] w-[30px]" />
            ) : (
              <Menu className="h-[32px] w-[32px]" />
            )}
          </button>
        </div>

        {/* PC 세부메뉴 */}
        <div
          className={`fixed left-0 top-[90px] hidden w-full border-t border-white/10 bg-[#292929]/95 shadow-[0_15px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 lg:block ${
            activeMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-[8px] opacity-0"
          }`}
        >
          <div className="px-[80px] xl:px-[150px]">
            <div className="flex min-h-[240px] w-full justify-end py-[35px]">
              <div className="grid grid-cols-[80px_110px_110px_80px_150px] gap-[28px] xl:gap-[38px]">
                {/* 소개 세부메뉴 */}
                <div>
                  {activeMenu === "about" && (
                    <div className="flex flex-col items-center gap-[20px]">
                      <Link
                        to="/about"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        키즈월드
                      </Link>

                      <Link
                        to="/directions"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        오시는길
                      </Link>
                    </div>
                  )}
                </div>

                {/* 이용안내 세부메뉴 */}
                <div>
                  {activeMenu === "guides" && (
                    <div className="flex flex-col items-center gap-[20px]">
                      <Link
                        to="/guides"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        이용정보
                      </Link>

                      <Link
                        to="/guides/admission"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        이용요금
                      </Link>

                      <Link
                        to="/guides/parking"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        주차안내
                      </Link>

                      <Link
                        to="/guides/rules"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        이용수칙
                      </Link>
                    </div>
                  )}
                </div>

                {/* 시설안내 세부메뉴 */}
                <div>
                  {activeMenu === "facilities" && (
                    <div className="flex flex-col items-center gap-[20px]">
                      <Link
                        to="/facilities"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        놀이시설
                      </Link>

                      <Link
                        to="/facilities/rest"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        휴게공간
                      </Link>

                      <Link
                        to="/facilities/amenities"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        부대시설
                      </Link>

                      <Link
                        to="/facilities/custom"
                        onClick={() => setActiveMenu(null)}
                        className="whitespace-nowrap text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        아이맞춤 시설안내
                      </Link>
                    </div>
                  )}
                </div>

                {/* 문의 세부메뉴 */}
                <div>
                  {activeMenu === "support" && (
                    <div className="flex flex-col items-center gap-[20px]">
                      <Link
                        to="/support"
                        onClick={() => setActiveMenu(null)}
                        className="text-[18px] font-medium text-[#FFF9EE]/65 transition-colors hover:text-[#F5A623]"
                      >
                        문의
                      </Link>
                    </div>
                  )}
                </div>

                {/* 예매 버튼 자리 */}
                <div />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed left-0 top-[90px] z-[9999] w-full overflow-y-auto bg-[#292929] text-[#FFF9EE] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "visible h-[calc(100vh-90px)] opacity-100"
            : "invisible h-0 opacity-0"
        }`}
      >
        <div className="px-[24px] py-[35px] sm:px-[40px]">
          {/* 소개 */}
          <div className="border-b border-white/10 pb-[26px]">
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="text-[22px] font-bold"
            >
              소개
            </Link>

            <div className="mt-[18px] grid grid-cols-2 gap-[14px]">
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                키즈월드
              </Link>

              <Link
                to="/directions"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                오시는길
              </Link>
            </div>
          </div>

          {/* 이용안내 */}
          <div className="border-b border-white/10 py-[26px]">
            <Link
              to="/guides"
              onClick={closeMobileMenu}
              className="text-[22px] font-bold"
            >
              이용안내
            </Link>

            <div className="mt-[18px] grid grid-cols-2 gap-x-[30px] gap-y-[14px]">
              <Link
                to="/guides"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                이용정보
              </Link>

              <Link
                to="/guides/admission"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                이용요금
              </Link>

              <Link
                to="/guides/parking"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                주차안내
              </Link>

              <Link
                to="/guides/rules"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                이용수칙
              </Link>
            </div>
          </div>

          {/* 시설안내 */}
          <div className="border-b border-white/10 py-[26px]">
            <Link
              to="/facilities"
              onClick={closeMobileMenu}
              className="text-[22px] font-bold"
            >
              시설안내
            </Link>

            <div className="mt-[18px] grid grid-cols-2 gap-x-[30px] gap-y-[14px]">
              <Link
                to="/facilities"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                놀이시설
              </Link>

              <Link
                to="/facilities/rest"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                휴게공간
              </Link>

              <Link
                to="/facilities/amenities"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                부대시설
              </Link>

              <Link
                to="/facilities/custom"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                아이맞춤 시설안내
              </Link>
            </div>
          </div>

          {/* 문의 */}
          <div className="py-[26px]">
            <Link
              to="/support"
              onClick={closeMobileMenu}
              className="text-[22px] font-bold"
            >
              문의
            </Link>

            <div className="mt-[18px]">
              <Link
                to="/support"
                onClick={closeMobileMenu}
                className="text-[16px] font-medium text-white/55 transition-colors hover:text-[#F5A623]"
              >
                문의
              </Link>
            </div>
          </div>

          {/* 모바일 온라인 예매 */}
          <a
            href="https://map.naver.com/p/search/%EB%B2%A1%EC%8A%A4%EC%BD%94%20%ED%82%A4%EC%A6%88%EC%9B%94%EB%93%9C/place/1801736280"
            target="_blank"
            rel="noreferrer"
            className="group mt-[10px] flex w-full items-center justify-between rounded-[12px] bg-[#E53935] px-[20px] py-[16px] text-[16px] font-bold"
          >
            온라인 예매

            <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
        </div>
      </div>
    </>
  );
}