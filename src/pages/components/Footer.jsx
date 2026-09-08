import LogoImg from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-[100px] border-t border-[#292929]/10 bg-white px-5 py-[45px] text-[#292929] sm:px-8 md:px-10 lg:px-[60px] lg:py-[55px] xl:px-[150px]">
      <div className="flex flex-col gap-[35px] lg:flex-row lg:items-start lg:justify-between">
        {/* 왼쪽 */}
        <div className="max-w-[520px]">
          <Link to={"/"}>
            <img src={LogoImg} alt="로고" />
          </Link>

          <p className="mt-2">
            부산 해운대구 APEC로 30
            <br className="sm:hidden" /> 벡스코 제2전시장 3층
          </p>

          <div className="mt-[28px] space-y-[8px] text-[16px] font-medium leading-[1.7] text-[#292929]/70">
            <p>
              문의{" "}
              <a href="tel:070-4801-6034" className="hover:text-[#FF6B81]">
                070-4801-6034
              </a>
            </p>

            <p>운영시간 10:30 - 18:00</p>

            <p>입장마감 17:00</p>
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="mt-[40px] border-t border-[#292929]/10 pt-[22px]">
        <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[16px] font-medium text-[#292929]/40">
            © KIDS WORLD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
