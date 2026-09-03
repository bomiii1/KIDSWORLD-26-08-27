import att7 from "../img/att_7.png";
import bumpercar from "../img/bumpercar.jpeg";
import waterball from "../img/waterball.jpeg";
import boat from "../img/boat.jpeg";
import ufo from "../img/ufo.jpeg";
import bounce_l from "../img/bounce_l.jpeg";
import toddler from "../img/toddler.jpeg";
import ghost from "../img/ghost.jpeg";
import swing from "../img/swing.jpeg";
import tube from "../img/tube.jpeg";
import daramg from "../img/daramg.jpeg";
import rc_car from "../img/rc_car.jpeg";
import rotate from "../img/rotate.jpeg";
import battle from "../img/battle.jpeg";
import racing from "../img/racing.jpeg";
import picky from "../img/picky.jpeg";
import fishing from "../img/fishing.jpeg";
import lego from "../img/lego.jpeg";
import ddr from "../img/ddr.jpeg";
import dino from "../img/dino.jpeg";
import rc_boat from "../img/rc_boat.jpeg";
import castle from "../img/castle.jpeg";
import zip from "../img/zip.jpeg";
import climbing from "../img/climbing.png";
import interstella from "../img/interstella.jpeg";
import racing_bounce from "../img/racing_bounce.jpeg";
import train from "../img/train.jpeg";
import car_biking from "../img/car_biking.jpeg";

export const AttractionsData = [
  {
    id: 1,
    AttractionName: "일반 에어바운스",
    AttractionImg: bounce_l,

    category: "에어바운스",
    target: "general",
    location: "오른쪽 에어바운스존",

    popular: true,

    description:
      "다양한 모양의 에어바운스를 자유롭게 오가며 신나게 뛰어놀 수 있는 공간입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "별도 없음",
    breaktime: "별도 없음",

    precautions: [
      "다른 어린이와 부딪히지 않도록 주변을 살피며 이용해주세요.",
      "안전을 위해 위험한 장난이나 밀치는 행동은 삼가해주세요.",
    ],
  },

  {
    id: 2,
    AttractionName: "유아전용 에어바운스",
    AttractionImg: toddler,

    category: "에어바운스",
    target: "toddler",
    location: "왼쪽 에어바운스존, 오른쪽 에어바운스존",

    popular: false,

    description:
      "어린 유아들이 비교적 편안하고 안전하게 뛰어놀 수 있도록 마련된 유아 전용 에어바운스입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "유아 전용(5세 이하)",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "유아 전용 공간으로 이용 대상을 확인해주세요.",
      "혼잡할 경우 다른 어린이와 충분한 간격을 두고 이용해주세요.",
    ],
  },

  {
    id: 3,
    AttractionName: "궁전시티슬라이드",
    AttractionImg: castle,

    category: "에어바운스",
    target: "general",
    location: "왼쪽 에어바운스",

    popular: false,

    description:
      "커다란 궁전 모양의 에어바운스를 오르고 슬라이드를 내려오며 즐기는 대형 놀이시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: 110,
    maxHeight: null,
    heightText: "110cm 이상 탑승 가능",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "12:00-12:30",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "110cm 이상 어린이만 이용할 수 있습니다.",
      "슬라이드에서는 앞 이용자가 내려간 것을 확인한 후 출발해주세요.",
      "화상/쓸림 부상 방지를 위해 슬라이드 탑승 자세를 꼭 지켜주세요",
    ],
  },

  {
    id: 4,
    AttractionName: "RC존",
    AttractionImg: rc_car,

    category: "RC",
    target: "general",
    location: "",

    popular: true,

    description:
      "직접 리모컨을 조작하며 다양한 RC 기기를 즐길 수 있는 체험 공간입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "12:30-13:00",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "다른 이용객의 RC 기기와 충돌하지 않도록 주의해주세요.",
      "사용 후 조종기는 지정된 위치에 놓아주세요.",
    ],
  },

  {
    id: 5,
    AttractionName: "RC보트",
    AttractionImg: rc_boat,

    category: "RC",
    target: "general",
    location: "",

    popular: false,

    description:
      "물 위를 움직이는 RC보트를 직접 조종하며 방향 조작을 즐길 수 있는 체험시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "순차 이용",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "보트와 조종기는 안내된 방법에 따라 이용해주세요.",
      "시설 안쪽으로 손을 넣거나 직접 보트를 잡지 말아주세요.",
    ],
  },

  {
    id: 6,
    AttractionName: "회전그네",
    AttractionImg: swing,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "빙글빙글 회전하는 그네를 타고 시원한 움직임을 즐길 수 있는 놀이기구입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "12:00-12:30",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "운행 중에는 안전장치를 풀지 말아주세요.",
      "기구가 완전히 멈춘 후 안전요원의 안내에 따라 내려주세요.",
    ],
  },

  {
    id: 7,
    AttractionName: "스페이스 플레인",
    AttractionImg: att7,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: true,

    description:
      "우주선을 타고 떠나는 듯한 움직임을 즐길 수 있는 어린이 놀이기구입니다.",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: 120,
    maxHeight: null,
    heightText: "120cm 이상 탑승가능",

    duration: "3분 내외",
    capacity: "최대 12명",

    lunchtime: "11:30-12:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "운행 중 자리에서 일어나지 말아주세요.",
      "안전벨트와 안전장치를 반드시 착용해주세요.",
      "떨어질수 있는 소지품은 보관함에 보관 후 탑승해주세요",
    ],
  },

  {
    id: 8,
    AttractionName: "워터볼",
    AttractionImg: waterball,

    category: "놀이시설",
    target: "general",
    location: "",

    popular: true,

    description:
      "투명한 볼 안에 들어가 물 위를 움직이며 균형을 잡아보는 이색 체험시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "순차 이용",
    capacity: "1인 이용",

    lunchtime: "12:30-13:00",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "안전요원의 안내에 따라 입장 및 퇴장해주세요.",
      "이용 중 무리한 움직임은 삼가해주세요.",
    ],
  },

  {
    id: 9,
    AttractionName: "회전관람차",
    AttractionImg: rotate,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "천천히 회전하며 키즈월드의 분위기를 즐길 수 있는 어린이 관람형 놀이기구입니다.",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "운행 중 좌석 밖으로 몸을 내밀지 말아주세요.",
      "기구가 완전히 멈춘 뒤 하차해주세요.",
    ],
  },

  {
    id: 10,
    AttractionName: "베틀킹",
    AttractionImg: battle,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "움직이는 기구를 타고 신나는 재미를 느낄 수 있는 어린이 놀이시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "안전장치를 반드시 착용한 후 이용해주세요.",
      "운행 중 자리에서 일어나거나 장난치지 말아주세요.",
    ],
  },

  {
    id: 11,
    AttractionName: "레이싱 장애물바운스",
    AttractionImg: racing_bounce,

    category: "에어바운스",
    target: "general",
    location: "",

    popular: false,

    description:
      "레이싱을 테마로 한 다양한 장애물을 통과하며 뛰어놀 수 있는 대형 에어바운스입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "앞 이용자와 충분한 간격을 유지해주세요.",
      "장애물을 역방향으로 이용하지 말아주세요.",
    ],
  },

  {
    id: 12,
    AttractionName: "부스터트럭 장애물바운스",
    AttractionImg: train,

    category: "에어바운스",
    target: "general",
    location: "",

    popular: false,

    description:
      "커다란 트럭을 테마로 한 장애물을 오르고 통과하며 즐기는 에어바운스입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "다른 이용자를 밀거나 잡아당기지 말아주세요.",
      "정해진 진행 방향에 따라 이용해주세요.",
    ],
  },

  {
    id: 13,
    AttractionName: "귀신장애물바운스",
    AttractionImg: ghost,

    category: "에어바운스",
    target: "general",
    location: "",

    popular: false,

    description:
      "귀신 테마의 재미있는 장애물을 통과하며 모험하듯 즐기는 에어바운스입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "장애물 사이에서 장시간 머무르지 말아주세요.",
      "앞 이용자와 안전거리를 유지하며 이동해주세요.",
    ],
  },

  {
    id: 14,
    AttractionName: "회전짚라인",
    AttractionImg: zip,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: true,

    description:
      "공중에서 회전하며 이동하는 짚라인의 색다른 움직임을 즐길 수 있는 놀이시설입니다.",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "안전장비를 정확하게 착용한 후 이용해주세요.",
      "운행 중 안전장치를 만지거나 풀지 말아주세요.",
    ],
  },

  {
    id: 15,
    AttractionName: "레이싱존",
    AttractionImg: racing,

    category: "놀이시설",
    target: "general",
    location: "",

    popular: true,

    description:
      "레이싱을 테마로 한 탈것을 직접 즐기며 주행의 재미를 느낄 수 있는 공간입니다.",

    adult: true,

    guardianAllowed: true,
    guardianRequiredUnderMonths: null,
    guardianRequiredUnderHeight: 120,
    guardianCondition: "120cm 미만 보호자 동반 탑승",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "순차 이용",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "앞 차량과 충분한 거리를 유지해주세요.",
      "운행 방향과 안전요원의 안내를 따라주세요.",
    ],
  },

  {
    id: 16,
    AttractionName: "피키포키",
    AttractionImg: picky,

    category: "놀이시설",
    target: "general",
    location: "",

    popular: true,

    description:
      "아이들이 즐겁게 움직이며 색다른 놀이를 경험할 수 있는 체험형 놀이시설입니다.",

    paid: true,
    price: 12000,
    priceText: "별도 이용료 12,000원",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "시설 내부에서는 뛰어다닐 때 주변 이용객을 주의해주세요.",
      "안전요원의 안내에 따라 이용해주세요.",
    ],
  },

  {
    id: 17,
    AttractionName: "암벽",
    AttractionImg: climbing,

    category: "체험",
    target: "general",
    location: "",

    popular: true,

    description:
      "손과 발을 이용해 암벽을 오르며 도전하는 즐거움과 성취감을 느낄 수 있는 체험시설입니다.",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "1회 체험",
    capacity: "현장 운영 기준",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "안전장비를 올바르게 착용한 후 이용해주세요.",
      "체험 중에는 안전요원의 안내를 반드시 따라주세요.",
    ],
  },

  {
    id: 18,
    AttractionName: "자동차바이킹",
    AttractionImg: car_biking,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "자동차 모양의 바이킹을 타고 앞뒤로 움직이는 재미를 즐길 수 있는 어린이 놀이기구입니다.",

    adult: false,

    guardianAllowed: true,
    guardianRequiredUnderMonths: 24,
    guardianCondition: "24개월 미만 아동 동반 시 보호자 탑승 가능",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "24개월 미만 아동은 보호자와 함께 탑승해주세요.",
      "운행 중에는 안전장치를 풀거나 자리에서 일어나지 말아주세요.",
    ],
  },

  {
    id: 19,
    AttractionName: "UFO 바이킹",
    AttractionImg: ufo,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: true,

    description:
      "UFO 모양의 바이킹을 타고 좌우로 움직이며 짜릿한 재미를 즐길 수 있는 인기 놀이기구입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 3분",
    capacity: "어린이 기준 10명",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "기구 운행 중에는 벨트를 풀거나 일어서는 등 위험한 행동은 삼가해주세요.",
      "보호자 탑승 시 보호자 옆 한 칸은 비워두고 이용해주세요.",
    ],
  },

  {
    id: 20,
    AttractionName: "페달보트",
    AttractionImg: boat,

    category: "놀이시설",
    target: "general",
    location: "",

    popular: false,

    description:
      "직접 페달을 움직이며 물 위를 천천히 이동해볼 수 있는 어린이 체험시설입니다.",

    adult: false,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    maxWeight: 40,
    weightText: "40kg 이하 이용 가능",

    duration: "순차 이용",
    capacity: "현장 운영 기준",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "보트 이용 중 자리에서 일어나지 말아주세요.",
      "시설 가장자리로 손이나 발을 내밀지 말아주세요.",
    ],
  },

  {
    id: 21,
    AttractionName: "범퍼카존",
    AttractionImg: bumpercar,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "직접 범퍼카를 운전하며 신나는 주행을 경험할 수 있는 놀이공간입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "안전벨트를 착용한 후 출발해주세요.",
      "운행 중 차량 밖으로 손이나 발을 내밀지 말아주세요.",
    ],
  },

  {
    id: 22,
    AttractionName: "인터스텔라",
    AttractionImg: interstella,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "우주를 테마로 한 기구를 타고 신나는 움직임을 즐길 수 있는 놀이시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "안전장치를 착용하고 운행 중에는 자리를 이동하지 말아주세요.",
      "기구가 완전히 멈춘 뒤 하차해주세요.",
    ],
  },

  {
    id: 23,
    AttractionName: "DDR",
    AttractionImg: ddr,

    category: "게임",
    target: "general",
    location: "",

    popular: false,

    description:
      "음악과 화면에 맞춰 발판을 밟으며 리듬감 있게 즐길 수 있는 게임시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "1~2인 이용",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "게임 중 주변 이용객과 부딪히지 않도록 주의해주세요.",
      "기기 위에서 과도하게 뛰거나 장난치지 말아주세요.",
    ],
  },

  {
    id: 24,
    AttractionName: "회전공룡",
    AttractionImg: dino,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: false,

    description:
      "귀여운 공룡 모양의 기구를 타고 빙글빙글 회전하며 즐기는 어린이 놀이기구입니다.",

    adult: false,

    guardianAllowed: true,
    guardianRequiredUnderMonths: 24,
    guardianCondition: "24개월 미만 아동 동반 시 보호자 탑승 가능",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "24개월 미만 아동은 보호자와 함께 탑승해주세요.",
      "운행 중에는 안전장치를 풀거나 자리에서 일어나지 말아주세요.",
    ],
  },

  {
    id: 25,
    AttractionName: "회전다람쥐통",
    AttractionImg: daramg,

    category: "놀이기구",
    target: "general",
    location: "",

    popular: true,

    description:
      "다람쥐통 모양의 기구를 타고 빙글빙글 회전하는 재미를 즐길 수 있는 놀이기구입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: 120,
    maxHeight: null,
    heightText: "120cm 이상 탑승가능",

    duration: "약 2~3분",
    capacity: "현장 운영 기준",

    lunchtime: "12:00-12:30",
    breaktime: "15:00-15:15 , 17:00-17:15",

    precautions: [
      "회전 중에는 안전손잡이를 잡고 이용해주세요.",
      "기구가 완전히 정지하기 전에는 일어나지 말아주세요.",
      "떨어질수 있는 소지품은 보관함에 보관 후 탑승해주세요",
    ],
  },

  {
    id: 26,
    AttractionName: "튜브썰매",
    AttractionImg: tube,

    category: "놀이시설",
    target: "general",
    location: "",

    popular: true,

    description:
      "튜브를 타고 슬로프를 내려오며 속도감과 짜릿함을 즐길 수 있는 인기 놀이시설입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "현장 안내 기준",

    duration: "1회 이용",
    capacity: "현장 운영 기준",

    lunchtime: "12:30-13:00",
    breaktime: "14:30-14:45 , 16:30-16:45",

    precautions: [
      "앞 이용자가 완전히 도착한 후 출발해주세요.",
      "튜브 탑승 중에는 손과 발을 바깥으로 내밀지 말아주세요.",
    ],
  },

  {
    id: 27,
    AttractionName: "레고존",
    AttractionImg: lego,

    category: "체험",
    target: "general",
    location: "",

    popular: false,

    description:
      "다양한 블록을 자유롭게 조립하며 상상력과 창의력을 펼칠 수 있는 놀이공간입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "자유 이용",

    lunchtime: "11:30-12:00",
    breaktime: "14:45-15:00 , 16:45-17:00",

    precautions: [
      "사용한 블록은 이용 후 정리해주세요.",
      "작은 블록을 입에 넣지 않도록 보호자의 주의가 필요합니다.",
    ],
  },

  {
    id: 28,
    AttractionName: "낚시터",
    AttractionImg: fishing,

    category: "체험",
    target: "general",
    location: "",

    popular: false,

    description:
      "낚싯대를 이용해 물고기를 잡아보며 놀이처럼 낚시를 경험할 수 있는 체험공간입니다.",

    adult: true,

    guardianAllowed: false,
    guardianRequiredUnderMonths: null,
    guardianCondition: "",

    minHeight: null,
    maxHeight: null,
    heightText: "별도 키 제한 없음",

    duration: "자유 이용",
    capacity: "현장 안내 기준",

    lunchtime: "-",
    breaktime: "-",

    precautions: [
      "낚싯대를 휘두르지 않도록 주변 이용객을 주의해주세요.",
      "사용한 낚싯대는 체험 후 지정된 위치에 놓아주세요.",
    ],
  },
];
