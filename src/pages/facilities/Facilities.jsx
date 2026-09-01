import { NavLink, Outlet } from "react-router-dom";
import FacilitiesBg from "../../img/facilities_bg.png";

export default function Facilities() {
  const menuStyle = ({ isActive }) =>
    `flex min-w-[120px] items-center justify-center rounded-full border px-[24px] py-[12px] text-[16px] font-bold whitespace-nowrap transition-all duration-300 lg:min-w-[135px] lg:px-[30px] lg:py-[14px] ${
      isActive
        ? "border-[#F5A623] bg-[#F5A623] text-white shadow-[0_6px_18px_rgba(245,166,35,0.18)]"
        : "border-[#292929]/15 bg-white text-[#292929]/65 hover:border-[#F5A623] hover:text-[#F5A623]"
    }`;

  return (
    <main className="min-h-screen bg-[#FFF9EE] pt-[90px]">
      {/* 타이틀 */}
      <section
        className="relative overflow-hidden bg-cover bg-[center_62%] bg-no-repeat px-5 py-[65px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[75px] xl:px-[150px]"
        style={{
          backgroundImage: `url(${FacilitiesBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10">
          <h1 className="font-['Jua'] text-[46px] text-[#FFF9EE] sm:text-[52px] lg:text-[60px]">
            시설안내
          </h1>

          <p className="mt-[10px] text-[18px] font-bold text-[#E53935] lg:text-[20px]">
            키즈월드의 다양한 시설을 만나보세요!
          </p>
        </div>
      </section>

      {/* 세부메뉴 */}
      <div className="border-b border-[#292929]/10 bg-[#FFF9EE]">
        <nav className="flex gap-[10px] overflow-x-auto px-5 py-[24px] sm:px-8 md:px-10 lg:justify-center lg:gap-[14px] lg:px-[60px] lg:py-[28px] xl:px-[90px]">
          <NavLink to="/facilities" end className={menuStyle}>
            놀이시설
          </NavLink>

          <NavLink to="/facilities/rest" className={menuStyle}>
            휴게공간
          </NavLink>

          <NavLink to="/facilities/amenities" className={menuStyle}>
            부대시설
          </NavLink>

          <NavLink to="/facilities/custom" className={menuStyle}>
            아이맞춤 시설안내
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </main>
  );
}