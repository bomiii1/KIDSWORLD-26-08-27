import { NavLink, Outlet } from "react-router-dom";
import FacilitiesBg from "../../img/facilities_bg.png";
import PageTitle from "../components/PageTitle";

export default function Facilities() {
  const menuStyle = ({ isActive }) =>
    `flex w-full min-w-0 items-center justify-center whitespace-nowrap rounded-full border px-[12px] py-[12px] text-[14px] font-bold transition-all duration-300 sm:px-[18px] sm:text-[16px] lg:w-auto lg:min-w-[135px] lg:px-[30px] lg:py-[14px] ${
      isActive
        ? "border-[#FF6B81] bg-[#FF6B81] text-white shadow-[0_6px_18px_rgba(255,107,129,0.2)]"
        : "border-[#292929]/15 bg-white text-[#292929]/65 hover:border-[#FF6B81] hover:text-[#FF6B81]"
    }`;

  return (
    <>
      <PageTitle title="시설안내" />

      <main className="min-h-screen bg-white pt-[70px] lg:pt-[90px]">
        {/* 상단 비주얼 */}
        <section
          className="relative overflow-hidden bg-cover bg-[center_62%] bg-no-repeat px-5 py-[65px] sm:px-[30px] md:px-[50px] lg:px-[80px] lg:py-[75px] xl:px-[150px]"
          style={{
            backgroundImage: `url(${FacilitiesBg})`,
          }}
        >
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-[#292929]/65" />

          {/* 아래쪽 그라데이션 */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#292929]/50 to-transparent" />

          <div className="relative z-10">
            <h1 className="font-['Jua'] text-[42px] leading-[1.15] text-white sm:text-[52px] lg:text-[60px]">
              시설안내
            </h1>

            <p className="mt-3 text-[16px] font-bold text-[#FF6B81] sm:text-[18px] lg:text-[20px]">
              키즈월드의 다양한 시설을 만나보세요!
            </p>
          </div>
        </section>

        {/* 세부 메뉴 */}
        <div className="border-b border-[#292929]/10 bg-white">
          <nav className="grid grid-cols-2 gap-[10px] px-5 py-[20px] sm:px-[30px] md:px-[50px] lg:flex lg:justify-center lg:gap-[14px] lg:px-[80px] lg:py-[28px] xl:px-[150px]">
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
    </>
  );
}