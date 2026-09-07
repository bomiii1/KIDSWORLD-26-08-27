import socks from "../../../img/socks.png";
import mat from "../../../img/mat.png";
import water from "../../../img/water.png";
import clothes from "../../../img/clothes.png";

const rules = [
  {
    id: 1,
    title: "외부음식 반입은 제한됩니다",
    description:
      "물과 이유식(특수식)을 제외한 모든 외부음식물은 반입할 수 없습니다. 적발 시 이용에 불이익이 있을 수 있으니 방문 전 확인해주세요.",
  },
  {
    id: 2,
    title: "아이와 함께 줄을 서주세요",
    description:
      "놀이시설 이용 시 보호자가 아이 대신 줄을 서는 것은 불가합니다. 기구를 이용하는 모든 인원이 함께 줄을 서주세요.",
  },
  {
    id: 3,
    title: "놀이시설 이용 전 안전수칙을 확인해주세요",
    description:
      "각 놀이시설마다 이용 가능한 연령과 신장 기준이 다를 수 있습니다. 이용 전 안내사항을 반드시 확인해주세요.",
  },
  {
    id: 4,
    title: "어린이는 보호자와 함께 이용해주세요",
    description:
      "어린이가 안전하게 시설을 이용할 수 있도록 보호자의 주의와 관찰이 필요합니다. 이용 중 아이가 혼자 이동하지 않도록 확인해주세요.",
  },
  {
    id: 5,
    title: "시설 내에서는 뛰지 않도록 주의해주세요",
    description:
      "시설 안에서 뛰거나 장난을 하면 충돌 및 부상의 위험이 있습니다. 안전한 이용을 위해 천천히 이동해주세요.",
  },
  {
    id: 6,
    title: "안전요원의 안내를 따라주세요",
    description:
      "안전하고 즐거운 이용을 위해 각 시설의 안전요원 안내를 따라주세요. 안전수칙을 지키지 않을 경우 시설 이용이 제한될 수 있습니다.",
  },
];

const supplies = [
  {
    id: 1,
    name: "양말",
    image: socks,
  },
  {
    id: 2,
    name: "돗자리",
    image: mat,
  },
  {
    id: 3,
    name: "물",
    image: water,
  },
  {
    id: 4,
    name: "편한 복장",
    image: clothes,
  },
];

export default function Rules() {
  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[60px] lg:py-[90px] xl:px-[80px]">
      <div className="mx-auto max-w-[1040px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            이용수칙
          </h2>

          <p className="mt-3 break-keep text-[16px] font-bold leading-[1.6] text-[#FF6B81] sm:text-[18px]">
            모두가 안전하고 즐겁게 이용할 수 있도록 이용수칙을 지켜주세요.
          </p>
        </div>

        {/* 이용수칙 목록 */}
        <div className="mt-[42px] border-t border-[#292929]/15 sm:mt-[55px]">
          {rules.map((rule) => (
            <article
              key={rule.id}
              className="grid grid-cols-[38px_1fr] gap-3 border-b border-[#292929]/15 py-6 sm:grid-cols-[55px_1fr] sm:gap-5 sm:py-8"
            >
              <span className="pt-[2px] text-[14px] font-bold text-[#FF6B81] sm:text-[16px]">
                {String(rule.id).padStart(2, "0")}
              </span>

              <div>
                <h3 className="break-keep text-[18px] font-bold leading-[1.5] text-[#292929] sm:text-[21px]">
                  {rule.title}
                </h3>

                <p className="mt-2 break-keep text-[15px] font-medium leading-[1.8] text-[#292929]/60 sm:text-[17px]">
                  {rule.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 준비물 */}
        <section className="mt-[75px] border-t border-[#292929]/15 pt-[60px] sm:mt-[95px] sm:pt-[75px]">
          <div>
            <h2 className="font-['Jua'] text-[32px] leading-none text-[#292929] sm:text-[40px]">
              준비물
            </h2>

            <p className="mt-3 text-[14px] font-bold text-[#FF6B81] sm:text-[17px]">
              미리 챙겨오시면 좋아요!
            </p>
          </div>

          {/* 준비물 목록 */}
          <div className="mt-[30px] grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
            {supplies.map((supply) => (
              <figure key={supply.id} className="group min-w-0">
                <div className="aspect-square overflow-hidden rounded-[14px] bg-[#FFD050]/10 sm:rounded-[16px]">
                  <img
                    src={supply.image}
                    alt={supply.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <figcaption className="mt-3 text-center text-[16px] font-bold text-[#292929] sm:mt-4 sm:text-[18px]">
                  {supply.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}