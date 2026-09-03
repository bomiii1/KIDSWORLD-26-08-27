import { NavLink, Outlet } from "react-router-dom";
import GuideBg from "../../img/guide_bg.png";
import PageTitle from "../components/PageTitle";

export default function Guides() {
  const menuStyle = ({ isActive }) =>
    `flex w-full min-w-0 items-center justify-center rounded-full border px-[12px] py-[12px] text-[14px] font-bold whitespace-nowrap transition-all duration-300 sm:px-[18px] sm:text-[16px] lg:w-auto lg:min-w-[135px] lg:px-[30px] lg:py-[14px] ${
      isActive
        ? "border-[#F5A623] bg-[#F5A623] text-white shadow-[0_6px_18px_rgba(245,166,35,0.18)]"
        : "border-[#292929]/15 bg-white text-[#292929]/65 hover:border-[#F5A623] hover:text-[#F5A623]"
    }`;

  return (
    <>
      <PageTitle title="이용안내" />
      <div className="lg:mt-[90px]  mt-[70px] min-h-screen bg-white">
        <section
          className="relative bg-cover bg-[center_90%] bg-no-repeat px-5 py-[65px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[75px] xl:px-[150px]"
          style={{
            backgroundImage: `url(${GuideBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* 타이틀 */}
          <div className="relative z-10">
            <h1 className="font-['Jua'] text-[46px] text-white sm:text-[52px] lg:text-[60px]">
              이용안내
            </h1>

            <p className="mt-[10px] text-[18px] font-bold text-[#E53935] lg:text-[20px]">
              이용에 필요한 정보를 찾아보세요
            </p>
          </div>
        </section>

        <div className="border-b border-[#292929]/10 bg-white">
          <nav className="grid grid-cols-2 gap-[10px] px-5 py-[20px] sm:px-8 md:px-10 lg:flex lg:justify-center lg:gap-[14px] lg:px-[60px] lg:py-[28px] xl:px-[90px]">
            <NavLink to="/guides" end className={menuStyle}>
              이용정보
            </NavLink>

            <NavLink to="/guides/admission" className={menuStyle}>
              이용요금
            </NavLink>

            <NavLink to="/guides/parking" className={menuStyle}>
              주차안내
            </NavLink>

            <NavLink to="/guides/rules" className={menuStyle}>
              이용수칙
            </NavLink>
          </nav>
        </div>

        <Outlet />
      </div>
    </>
  );
}
