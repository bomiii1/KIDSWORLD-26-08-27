import socks from "../../../img/socks.png";
import mat from "../../../img/mat.png";
import water from "../../../img/water.png";
import clothes from "../../../img/clothes.png";

export default function Rules() {
  return (
    <section className="bg-[white] px-5 py-[50px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[70px] xl:px-[150px]">
      <div className="border-l-[4px] border-[#5E9F45] pl-[18px]">
        <p className="mt-[5px] text-[20px] font-bold leading-[1.6] text-[#292929] sm:text-[28px]">
          이용수칙
        </p>
        <p className="text-[18px] font-bold text-[#5E9F45]">
          모두가 안전하고 즐거운 이용을 위해 이용수칙을 지켜주세요.
        </p>
      </div>

      {/* 이용수칙 */}
      <div className="mt-[38px] grid grid-cols-1 gap-x-[70px] lg:grid-cols-2">
        {/* 수칙 1 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#5E9F45]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              외부음식 반입은 제한됩니다
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              물과 이유식(특수식)을 제외한 모든 외부음식물 반입을 금지하고
              있습니다.
              <br className="hidden xl:block" />
              적발 시 이용에 불이익이 있을 수 있으니 꼭 확인하고 방문해주세요.
            </p>
          </div>
        </div>

        {/* 수칙 2 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#E53935]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              아이와 함께 줄을 서주세요
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              놀이시설 이용 시 보호자가 아이 대신 줄을 서는 것은 불가합니다.
              <br className="hidden xl:block" />
              기구를 이용하는 모든 인원이 함께 줄을 서주세요.
            </p>
          </div>
        </div>

        {/* 수칙 3 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5A623]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              놀이시설 이용 전 안전수칙을 확인해주세요
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              각 놀이시설마다 이용 가능한 연령과 신장 기준이 다를 수 있습니다.
              <br className="hidden xl:block" />
              이용 전 안내사항을 반드시 확인해주세요.
            </p>
          </div>
        </div>

        {/* 수칙 4 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#5E9F45]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              어린이는 보호자와 함께 이용해주세요
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              어린이가 안전하게 시설을 이용할 수 있도록 보호자의 주의와 관찰이
              필요합니다.
              <br className="hidden xl:block" />
              이용 중 아이가 혼자 이동하지 않도록 확인해주세요.
            </p>
          </div>
        </div>

        {/* 수칙 5 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#E53935]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              시설 내에서는 뛰지 않도록 주의해주세요
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              시설 내에서 뛰거나 장난을 할 경우 충돌 및 부상의 위험이 있습니다.
              <br className="hidden xl:block" />
              안전한 이용을 위해 천천히 이동해주세요.
            </p>
          </div>
        </div>

        {/* 수칙 6 */}
        <div className="flex gap-[14px] border-b border-[#292929]/10 py-[27px]">
          <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5A623]" />

          <div>
            <h3 className="text-[19px] font-bold leading-[1.5] text-[#292929] lg:text-[20px]">
              안전요원의 안내를 따라주세요
            </h3>

            <p className="mt-[8px] text-[16px] font-medium leading-[1.8] text-[#292929]/60 lg:text-[17px]">
              안전하고 즐거운 이용을 위해 각 시설의 안전요원 안내를 따라주세요.
              <br className="hidden xl:block" />
              안전수칙을 지키지 않을 경우 시설 이용이 제한될 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 준비물 */}
      <div className="mt-[80px]">
        {/* 준비물 타이틀 */}
        <div>
          <div className="flex items-center gap-[12px]">
            <h2 className="inline-block border-b-[3px] border-[#5E9F45] pb-[5px] text-[28px] font-bold text-[#292929] lg:text-[30px]">
              준비물
            </h2>

            <p className="text-[15px] font-medium text-[#292929]/50">
              챙겨오시면 좋아요!
            </p>
          </div>
        </div>

        {/* 준비물 목록 */}
        <div className="mt-[30px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {/* 양말 */}
          <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <img src={socks} alt="" />
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">양말</p>
            </div>
          </div>

          {/* 돗자리 */}
          <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <img src={mat} alt="" />
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">돗자리</p>
            </div>
          </div>

          {/* 물 */}
          <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <img src={water} alt="" />
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">물</p>
            </div>
          </div>

          {/* 기타 준비물 */}
          <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_25px_rgba(41,41,41,0.05)]">
            <div className="flex h-[240px] items-center justify-center bg-[#D9D9D9] sm:h-[250px] lg:h-[260px]">
              <img src={clothes} alt="" />
            </div>

            <div className="px-[18px] py-[18px] text-center">
              <p className="text-[18px] font-bold text-[#292929]">편한 복장</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
