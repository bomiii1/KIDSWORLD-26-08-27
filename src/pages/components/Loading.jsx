export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF9EE]">
      <div className="flex items-end gap-[10px]">
        <span className="h-[18px] w-[18px] animate-bounce rounded-full bg-[#F5A623]" />

        <span
          className="h-[18px] w-[18px] animate-bounce rounded-full bg-[#16864B]"
          style={{ animationDelay: "0.15s" }}
        />

        <span
          className="h-[18px] w-[18px] animate-bounce rounded-full bg-[#E53935]"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      <h1 className="mt-[24px] font-['Jua'] text-[26px] text-[#292929] sm:text-[30px]">
        KIDS WORLD
      </h1>

      <p className="mt-[7px] text-[16px] font-medium text-[#292929]/45 sm:text-[16px]">
        잠시만 기다려주세요!
      </p>
    </div>
  );
}
