import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function Error() {
  return (
    <div>
      <PageTitle title="404" />
      <main className="flex min-h-screen items-center justify-center bg-[white] px-[20px]">
        <div className="text-center">
          <p className="mb-[10px] text-[16px] font-bold tracking-[2px] text-[#F5A623]">
            KIDS WORLD
          </p>

          <h1 className="text-[120px] font-black leading-none text-[#E53935] sm:text-[160px]">
            404
          </h1>

          <h2 className="mt-[20px] text-[28px] font-bold text-[#292929] sm:text-[36px]">
            페이지를 찾을 수 없습니다.
          </h2>

          <p className="mt-[14px] text-[15px] leading-[1.8] text-[#292929]/55 sm:text-[16px]">
            요청하신 페이지가 존재하지 않거나
            <br />
            주소가 변경되었을 수 있습니다.
          </p>

          <Link
            to="/"
            className="mt-[35px] inline-flex h-[52px] items-center justify-center rounded-[10px] bg-[#E53935] px-[28px] text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#C92F2C] active:scale-95"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
