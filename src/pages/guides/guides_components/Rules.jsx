export default function Rules() {
  return (
    <section className="bg-[#FFF9EE] px-5 py-[60px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[80px] xl:px-[150px]">

      {/* 상단 안내 */}
      <div className="rounded-[12px] bg-white/70 px-[24px] py-[26px] text-center">
        <p className="text-[20px] font-bold text-[#F5A623] sm:text-[21px] lg:text-[23px]">
          모두가 안전하고 즐거운 이용을 위해 방문 전 꼭 확인해주세요 !
        </p>
      </div>


      {/* 이용수칙 */}
      <div className="mt-[40px] grid grid-cols-1 gap-x-[45px] gap-y-[38px] lg:grid-cols-2">

        {/* 수칙 1 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              외부음식 반입 금지하고있습니다
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              물과 이유식(특수식)을 제외한 모든 외부음식물 반입을 금지하고
              있습니다.
              <br className="hidden xl:block" />
              적발 시 이용에 불이익이 있을 수 있으니 꼭 확인하고 방문해주세요.
            </p>
          </div>
        </div>


        {/* 수칙 2 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              질서를 위해 부모가 아이 대신 줄서기 금지합니다
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              놀이시설 이용 시 보호자가 아이 대신 줄을 서는 것은 불가합니다.
              <br className="hidden xl:block" />
              기구를 이용하는 모든 인원이 함께 줄을 서주세요.
            </p>
          </div>
        </div>


        {/* 수칙 3 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              놀이시설 이용 전 안전수칙을 확인해주세요
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              각 놀이시설마다 이용 가능한 연령과 신장 기준이 다를 수 있습니다.
              <br className="hidden xl:block" />
              이용 전 안내사항을 반드시 확인해주세요.
            </p>
          </div>
        </div>


        {/* 수칙 4 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              어린이는 보호자와 함께 이용해주세요
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              어린이가 안전하게 시설을 이용할 수 있도록 보호자의 주의와
              관찰이 필요합니다.
              <br className="hidden xl:block" />
              이용 중 아이가 혼자 이동하지 않도록 확인해주세요.
            </p>
          </div>
        </div>


        {/* 수칙 5 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              시설 내에서는 뛰지 않도록 주의해주세요
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              시설 내에서 뛰거나 장난을 할 경우 충돌 및 부상의 위험이 있습니다.
              <br className="hidden xl:block" />
              안전한 이용을 위해 천천히 이동해주세요.
            </p>
          </div>
        </div>


        {/* 수칙 6 */}
        <div className="flex items-start gap-[12px]">
          <span className="mt-[1px] text-[21px] font-bold text-[#E53935]">
            •
          </span>

          <div>
            <h3 className="text-[20px] font-bold leading-[1.5] text-[#E53935] lg:text-[21px]">
              안전요원의 안내를 따라주세요
            </h3>

            <p className="mt-[10px] text-[17px] font-medium leading-[1.7] text-[#292929]/70 lg:text-[18px]">
              안전하고 즐거운 이용을 위해 각 시설의 안전요원 안내를
              따라주세요.
              <br className="hidden xl:block" />
              안전수칙을 지키지 않을 경우 시설 이용이 제한될 수 있습니다.
            </p>
          </div>
        </div>

      </div>


      {/* 준비물 */}
      <div className="mt-[85px]">

        {/* 준비물 타이틀 */}
        <div className="flex items-center gap-[14px]">
          <div>
            <h2 className="text-[28px] font-bold text-[#292929] lg:text-[30px]">
              준비물
            </h2>

            <div className="mt-[6px] h-[3px] w-[65px] bg-[#E53935]" />
          </div>

          <span className="relative rounded-[8px] bg-[#D9D9D9] px-[15px] py-[8px] text-[16px] font-bold text-[#292929]/60">
            챙겨오시면 좋아요 !

            <span className="absolute -bottom-[7px] left-[16px] h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#D9D9D9]" />
          </span>
        </div>


        {/* 준비물 목록 */}
        <div className="mt-[30px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">

          {/* 양말 */}
          <div className="group overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <span className="text-[20px] font-bold text-[#292929]">
                양말
              </span>
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">
                양말
              </p>
            </div>
          </div>


          {/* 돗자리 */}
          <div className="group overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <span className="text-[20px] font-bold text-[#292929]">
                돗자리
              </span>
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">
                돗자리
              </p>
            </div>
          </div>


          {/* 물 */}
          <div className="group overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <span className="text-[20px] font-bold text-[#292929]">
                물
              </span>
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">
                물
              </p>
            </div>
          </div>


          {/* 기타 준비물 */}
          <div className="group overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <span className="text-[20px] font-bold text-[#292929]">
                기타 준비물
              </span>
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">
                기타 준비물
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}