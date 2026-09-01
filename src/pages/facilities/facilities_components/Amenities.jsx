export default function Amenities() {
  return (
    <section className="bg-[#FFF9EE] px-5 py-[70px] sm:px-8 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[150px]">
      {/* 타이틀 */}
      <div className="mx-auto max-w-[1250px]">
        <div>
          <p className="text-[15px] font-bold text-[#F5A623] lg:text-[17px]">
            AMENITIES
          </p>

          <h2 className="mt-[8px] text-[30px] font-bold text-[#292929] sm:text-[34px] lg:text-[40px]">
            부대시설
          </h2>
        </div>

        {/* 카드 */}
        <div className="mt-[45px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {/* 매점 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfNzQg%2FMDAxNzg3OTI0OTgxOTQ0.M3PNDLTpEn7HX8_ygA9KYAo3ZRrQm9k-1eV0QQ-hUEsg.Ur_zBxEbdQLcz2_AsIYpUTMiR_WZNT6xu90X4JjmWwAg.JPEG%2FIMG_2595.JPG&type=sc960_832"
                alt="매점"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#F5A623]">FOOD</p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    매점
                  </h3>
                </div>

                <span className="rounded-full bg-[#F5A623]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#E59A16]">
                  먹거리
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                간식과 간단한 식사를 구매할 수 있는 매점입니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  떡볶이
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  핫바
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  볶음밥
                </span>
              </div>
            </div>
          </div>

          {/* 카페 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src={null}
                alt="카페"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#16864B]">CAFE</p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    카페
                  </h3>
                </div>

                <span className="rounded-full bg-[#16864B]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#16864B]">
                  음료
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                커피와 다양한 음료를 즐길 수 있는 카페입니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  아메리카노
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  음료
                </span>
              </div>
            </div>
          </div>

          {/* 장난감가게 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src=""
                alt="장난감가게"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#E53935]">SHOP</p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    장난감가게
                  </h3>
                </div>

                <span className="rounded-full bg-[#E53935]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#E53935]">
                  쇼핑
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                아이들이 좋아하는 다양한 장난감과 소품을 만나볼 수 있습니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  완구
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  장난감
                </span>
              </div>
            </div>
          </div>

          {/* 오락존 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjlfMiAg%2FMDAxNzg4MDA0NDU5NDQw.I7tqQe7KY2EzXULUlOdnKJIoMfLYeBWSd-fioTmVoGAg.4Nbt_Ox8Tb269OuR-BMEL7xsV7M04x8CqqhDEREX2VIg.JPEG%2FIMG%25A3%25DF9671.JPG&type=sc960_832"
                alt="오락존"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#F5A623]">GAME</p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    오락존
                  </h3>
                </div>

                <span className="rounded-full bg-[#F5A623]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#E59A16]">
                  오락
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                다양한 오락시설을 즐길 수 있는 공간입니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  게임
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  오락시설
                </span>
              </div>
            </div>
          </div>

          {/* 컬링비즈체험 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfNjkg%2FMDAxNzg3OTE1NjU1NjYw.igdarvruI4YkJ0NAbo9ThgnmmJM8XOlN09EW35LaVMAg.yTM9RT8tsLR7qHcDkZeVUh2ueSia6Of6gwBVvsdZMDIg.JPEG%2F900_20260822_160954.jpg&type=sc960_832"
                alt="컬링비즈체험"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#16864B]">
                    EXPERIENCE
                  </p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    컬링비즈체험
                  </h3>
                </div>

                <span className="rounded-full bg-[#16864B]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#16864B]">
                  체험
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                아이들이 직접 참여하며 즐길 수 있는 체험 공간입니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  만들기
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  체험
                </span>
              </div>
            </div>
          </div>

          {/* 도시어부체험 */}
          <div className="group overflow-hidden rounded-[22px] border border-[#292929]/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[230px] overflow-hidden bg-[#D9D9D9] sm:h-[270px]">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjhfMTEz%2FMDAxNzg3OTE1NjUxODU2.4AN3la6zMnk_Nz2wJyE-T0t7H9aWaq_rotjAOnM9b_0g.Y1A52tdnmRzu_NibU41C5JVV0so6wPLL12JMBKLpW0Ug.JPEG%2F900_20260822_160744.jpg&type=sc960_832"
                alt="도시어부체험"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-[24px] sm:p-[28px]">
              <div className="flex items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[13px] font-bold text-[#E53935]">
                    EXPERIENCE
                  </p>

                  <h3 className="mt-[4px] text-[24px] font-bold text-[#292929] lg:text-[27px]">
                    도시어부체험
                  </h3>
                </div>

                <span className="rounded-full bg-[#E53935]/10 px-[12px] py-[6px] text-[12px] font-bold text-[#E53935]">
                  체험
                </span>
              </div>

              <div className="mt-[20px] flex gap-[10px]">
                <span className="font-bold text-[#292929]/40">위치</span>
                <span className="font-medium text-[#292929]/70">
                  5E 표시 바로 아래
                </span>
              </div>

              <p className="mt-[18px] text-[16px] font-medium leading-[1.8] text-[#292929]/65">
                가족과 함께 즐길 수 있는 재미있는 체험형 공간입니다.
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  낚시체험
                </span>
                <span className="rounded-full bg-[#292929]/5 px-[11px] py-[6px] text-[12px] font-bold text-[#292929]/55">
                  가족체험
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
