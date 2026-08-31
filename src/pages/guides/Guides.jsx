import { NavLink, Outlet } from "react-router-dom";

export default function Guides() {
  const menuStyle = ({ isActive }) =>
    `flex min-w-[120px] items-center justify-center rounded-full border px-[24px] py-[12px] text-[16px] font-bold whitespace-nowrap transition-all duration-300 lg:min-w-[135px] lg:px-[30px] lg:py-[14px] ${
      isActive
        ? "border-[#F5A623] bg-[#F5A623] text-white shadow-[0_6px_18px_rgba(245,166,35,0.18)]"
        : "border-[#292929]/15 bg-white text-[#292929]/65 hover:border-[#F5A623] hover:text-[#F5A623]"
    }`;

  return (
    <div className="mt-[90px] min-h-screen bg-[#FFF9EE]">
      {/* 타이틀 영역 */}
      <section className="bg-gradient-to-r from-[#BEBEBE] to-[#777777] px-5 py-[65px] sm:px-8 md:px-10 lg:px-[60px] lg:py-[75px] xl:px-[90px]">
        <div>
          <h1 className="font-['Jua'] text-[42px] leading-none text-[#292929] sm:text-[48px] lg:text-[56px]">
            이용안내
          </h1>

          <p className="mt-[12px] text-[16px] font-bold text-[#E53935] lg:text-[18px]">
            이용에 필요한 정보를 찾아보세요
          </p>
        </div>
      </section>

      {/* 세부 메뉴 */}
      <div className="border-b border-[#292929]/10 bg-[#FFF9EE]">
        <nav className="flex gap-[10px] overflow-x-auto px-5 py-[24px] sm:px-8 md:px-10 lg:justify-center lg:gap-[14px] lg:px-[60px] lg:py-[28px] xl:px-[90px]">
          <NavLink
            to="/guides"
            end
            className={menuStyle}
          >
            이용정보
          </NavLink>

          <NavLink
            to="/guides/admission"
            className={menuStyle}
          >
            이용요금
          </NavLink>

          <NavLink
            to="/guides/parking"
            className={menuStyle}
          >
            주차안내
          </NavLink>

          <NavLink
            to="/guides/rules"
            className={menuStyle}
          >
            이용수칙
          </NavLink>
        </nav>
      </div>

      {/* 하위 페이지 */}
      <Outlet />
    </div>
  );
}