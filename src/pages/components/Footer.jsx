import LogoImg from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#292929] px-5 py-[42px] text-white sm:px-8 md:px-10 lg:px-[80px] lg:py-[50px] xl:px-[150px]">
      <div className="mx-auto max-w-[1600px]">
        {/* 상단 */}
        <div className="flex flex-col gap-[32px] sm:flex-row sm:items-start sm:justify-between">
          {/* 왼쪽 */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={LogoImg}
                alt="상상체험 키즈월드"
                className="w-[85px] sm:w-[95px]"
              />
            </Link>

            <p className="mt-4 text-[14px] font-medium leading-[1.7] text-white/55 sm:text-[15px]">
              부산 해운대구 APEC로 30
              <br />
              벡스코 제2전시장 3층
            </p>
          </div>

          {/* 오른쪽 */}
          <div className="flex flex-col gap-2 text-[14px] font-medium sm:items-end sm:text-[15px]">
            <p className="text-white/55">
              운영시간
              <span className="ml-3 text-white/85">10:30 - 18:00</span>
            </p>

            <p className="text-white/55">
              입장마감
              <span className="ml-3 text-white/85">17:00</span>
            </p>

            <p className="text-white/55">
              문의
              <a
                href="tel:070-4801-6034"
                className="ml-3 text-white/85 transition-colors duration-200 hover:text-[#FF6B81]"
              >
                070-4801-6034
              </a>
            </p>
          </div>
        </div>

        {/* 하단 */}
        <div className="mt-[35px] border-t border-white/10 pt-[18px]">
          <p className="text-[13px] font-medium text-white/30 sm:text-[14px]">
            © KIDS WORLD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
