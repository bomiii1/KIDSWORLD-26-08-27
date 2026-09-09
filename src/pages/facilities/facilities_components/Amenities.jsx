import { MapPin } from "lucide-react";
import toyshop from "../../../img/toyshop.jpeg";

const amenities = [
  {
    id: 1,
    name: "매점",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfNzQg%2FMDAxNzg3OTI0OTgxOTQ0.M3PNDLTpEn7HX8_ygA9KYAo3ZRrQm9k-1eV0QQ-hUEsg.Ur_zBxEbdQLcz2_AsIYpUTMiR_WZNT6xu90X4JjmWwAg.JPEG%2FIMG_2595.JPG&type=sc960_832",
    location: "5E 표시 바로 아래",
    description: "간식과 간단한 식사를 구매할 수 있는 매점입니다.",
    details: ["떡볶이", "핫바", "볶음밥"],
  },
  {
    id: 2,
    name: "카페",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA3MThfMjI1%2FMDAxNzg0MzYyMjQ4MjE0.bfXMXMYshnE9adXxYzXiZbFGg4RUiNXdvk6QGwpiR6wg.gyx3A_SfWdBQXf2bTpZRo3NB2hCCD-nqRP9sSaw1Vjwg.JPEG%2F900_1784362247401.jpg&type=a340",
    location: "5E 표시 바로 아래",
    description: "커피와 다양한 음료를 즐길 수 있는 카페입니다.",
    details: ["아메리카노", "음료"],
  },
  {
    id: 3,
    name: "장난감가게",
    image: toyshop,
    location: "낚시터 체험 뒤",
    description: "아이들이 좋아하는 다양한 장난감과 소품을 만나볼 수 있습니다.",
    details: ["돗자리", "양말", "장난감"],
  },
  {
    id: 4,
    name: "오락존",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjlfMiAg%2FMDAxNzg4MDA0NDU5NDQw.I7tqQe7KY2EzXULUlOdnKJIoMfLYeBWSd-fioTmVoGAg.4Nbt_Ox8Tb269OuR-BMEL7xsV7M04x8CqqhDEREX2VIg.JPEG%2FIMG%25A3%25DF9671.JPG&type=sc960_832",
    location: "피키포키 옆",
    description: "다양한 오락시설을 즐길 수 있는 공간입니다.",
    details: ["게임", "오락시설"],
  },
  {
    id: 5,
    name: "컬링비즈체험",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTFfMjI1%2FMDAxNzA0OTUwNzY3NjAy.PdxEz3psvfN-U1yyfgzh52MCU08u2zLA74AjE0mavQgg.1jycsNoFMXPzt8VnZUO9DGR9Gm2u6-g0eQ62NZFVL20g.JPEG.jar9034%2F20240107%25A3%25DF113143.jpg&type=sc960_832",
    location: "페달보트 앞",
    description: "아이들이 직접 참여하며 즐길 수 있는 체험 공간입니다.",
    details: ["만들기", "체험"],
  },
  {
    id: 6,
    name: "도시어부체험",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfMTEz%2FMDAxNzg3OTE1NjUxODU2.4AN3la6zMnk_Nz2wJyE-T0t7H9aWaq_rotjAOnM9b_0g.Y1A52tdnmRzu_NibU41C5JVV0so6wPLL12JMBKLpW0Ug.JPEG%2F900_20260822_160744.jpg&type=sc960_832",
    location: "매점 앞",
    description: "가족과 함께 즐길 수 있는 재미있는 체험형 공간입니다.",
    details: ["낚시체험", "가족체험"],
  },
];

export default function Amenities() {
  return (
    <section className="bg-white px-5 py-[70px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[150px]">
      <div className="mx-auto max-w-[1250px]">
        {/* 타이틀 */}
        <div>
          <h2 className="font-['Jua'] text-[38px] leading-none text-[#292929] sm:text-[46px] lg:text-[52px]">
            부대시설
          </h2>

          <p className="mt-3 break-keep text-[16px] font-medium leading-[1.6] text-[#292929]/60 sm:text-[18px]">
            키즈월드에서 함께 이용할 수 있는 다양한 편의·체험시설을 안내합니다.
          </p>
        </div>

        {/* 시설 목록 */}
        <div className="mt-[42px] grid grid-cols-1 gap-x-[30px] gap-y-[45px] md:grid-cols-2 lg:mt-[55px] lg:gap-x-[45px] lg:gap-y-[55px]">
          {amenities.map((amenity) => (
            <article
              key={amenity.id}
              className="group border-b border-[#292929]/10 pb-[30px]"
            >
              {/* 이미지 */}
              <div className="h-[240px] overflow-hidden rounded-[14px] bg-[#F2F2F2] sm:h-[300px] lg:h-[340px]">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                />
              </div>

              {/* 내용 */}
              <div className="pt-5 sm:pt-6">
                <h3 className="text-[24px] font-bold text-[#292929] sm:text-[27px]">
                  {amenity.name}
                </h3>

                {/* 위치 */}
                <div className="mt-3 flex items-center gap-2">
                  <MapPin className="h-[17px] w-[17px] shrink-0 text-[#FF6B81]" />

                  <span className="text-[14px] font-medium text-[#292929]/55 sm:text-[16px]">
                    {amenity.location}
                  </span>
                </div>

                {/* 설명 */}
                <p className="mt-4 break-keep text-[16px] font-medium leading-[1.8] text-[#292929]/70 sm:text-[18px]">
                  {amenity.description}
                </p>

                {/* 태그 */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {amenity.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-[#292929]/5 px-3 py-[7px] text-[14px] font-bold text-[#292929]/55 sm:text-[15px]"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
