// tourdata.js
const TOUR_DATA = [
  {
    id: "hallstatt",
    name: "UNESCO Korumasında Hallstatt",
    country:"Avusturya",
    dates: [
      { text: "20/05/2027 - 23/05/2027", quota: 12 },
      { text: "15/08/2027 - 18/08/2027", quota: 12 }
    ],
    prices: {
      Adult: {
        "1 Yetişkin": 1800,
        "2 Yetişkin": 3200,
        "3 Yetişkin": 4500
      },
      Child: {
        "Yok": 0,
        "1 Yaşında": 0,
        "2 Yaşında": 0,
        "3 Yaşında": 0,
        "4 Yaşında": 900,
        "5 Yaşında": 900,
        "6 Yaşında": 900,
        "7 Yaşında": 900,
        "8 Yaşında": 900,
        "9 Yaşında": 900,
        "10 Yaşında": 900,
        "11 Yaşında": 900,
        "12 Yaşında": 900
      }
    },
    duration: "3 Gün",
    program: {
      "1. Gün": "Hallstatt'a varış ve göl turu.",
      "2. Gün": "Tuz Madeni ziyareti ve akşam yemeği.",
      "3. Gün": "Göl kenarında yürüyüş ve dönüş."
    },
    images: {
      desktop: "assets/hallstatt-lg.webp",
      tablet: "assets/hallstatt-md.webp",
      mobile: "assets/hallstatt-sm.png"
    },
    info: "Avusturya'nın masalsı göl kenarı köyü Hallstatt, tarihi tuz madeni ve muhteşem manzaralı Skywalk seyir terası gezintisi."
  },
  {
    id: "istanbul",
    name: "Masalsı Şehir İstanbul",
    country: "Turkiye",
    dates: [
      { text: "05/06/2027 - 11/06/2027", quota: 12 },
      { text: "15/08/2027 - 21/08/2027", quota: 12 }
    ],
    prices: {
      Adult: {
        "1 Yetişkin": 1700,
        "2 Yetişkin": 3400,
        "3 Yetişkin": 5100
      },
      Child: {
        "Yok": 0,
        "1 Yaşında": 0,
        "2 Yaşında": 0,
        "3 Yaşında": 0,
        "4 Yaşında": 900,
        "5 Yaşında": 900,
        "6 Yaşında": 900,
        "7 Yaşında": 900,
        "8 Yaşında": 900,
        "9 Yaşında": 900,
        "10 Yaşında": 900,
        "11 Yaşında": 900,
        "12 Yaşında": 900
      }
    },
    duration: "6 Gün",
    program: {
      "1. Gün": "detaylandırılacaktır",
      "2. Gün": "detaylandırılacaktır",
      "3. Gün": "detaylandırılacaktır"
    },
    images: {
      desktop: "assets/istanbul-lg.webp",
      tablet: "assets/istanbul-md.webp",
      mobile: "assets/istanbul-sm.webp"
    },
    info: "Tarihi yarımada, Boğaziçi ve kültürel rotaları keşif. Gündüzü ve gecesi birbirinden farklı İstanbul deneyimi."
  },
  {
    id: "norvec",
    name: "Norveç Kuzey Işıkları",
    country:"Norveç",
    dates: [
      { text: "05/12/2027 - 09/12/2027", quota: 12 },
      { text: "15/01/2028 - 19/01/2028", quota: 12 }
    ],
    prices: {
      Adult: {
        "1 Yetişkin": 1700,
        "2 Yetişkin": 3400,
        "3 Yetişkin": 5100
      },
      Child: {
        "Yok": 0,
        "1 Yaşında": 0,
        "2 Yaşında": 0,
        "3 Yaşında": 0,
        "4 Yaşında": 900,
        "5 Yaşında": 900,
        "6 Yaşında": 900,
        "7 Yaşında": 900,
        "8 Yaşında": 900,
        "9 Yaşında": 900,
        "10 Yaşında": 900,
        "11 Yaşında": 900,
        "12 Yaşında": 900
      }
    },
    duration: "5 Gün",
    program: {
      "1. Gün": "detaylandırılacaktır",
      "2. Gün": "detaylandırılacaktır"
    },
    images: {
      desktop: "assets/norvec-lg.webp",
      tablet: "assets/norvec-md.webp",
      mobile: "assets/norvec-sm.png"
    },
    info: "Görkemli kuzey ışıkları dansını izleme ve fotoğraflama amaçlı heyecan dolu bir doğa seyahati."
  }
];