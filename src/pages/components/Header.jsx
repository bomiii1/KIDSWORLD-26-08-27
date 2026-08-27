import logoImg from "../../img/logo.png";

export default function Header() {
  return (
    <header className="flex h-[80px] w-full items-center justify-between bg-[#292929] px-[150px]">
      <div className="w-[60px]">
        <img
          src={logoImg}
          alt="키즈월드 로고"
        />
      </div>

      <div className="flex items-center gap-[30px]">
        <nav className="flex items-center gap-[30px] text-[16px] text-[#FFF9EE]">
          <div className="cursor-pointer transition-colors hover:text-red-400">
            소개
          </div>

          <div className="cursor-pointer transition-colors hover:text-red-400">
            이용안내
          </div>

          <div className="cursor-pointer transition-colors hover:text-red-400">
            시설안내
          </div>

          <div className="cursor-pointer transition-colors hover:text-red-400">
            문의
          </div>
        </nav>

        <a
          href="#"
          className="rounded-[5px] bg-red-700 px-5 py-2 text-[14px] font-medium text-[#FFF9EE] transition-colors hover:bg-red-800"
        >
          예약 사이트 이동 &rarr;
        </a>
      </div>
    </header>
  );
}