const model = require('./model.js')
const multer = require('../../lib/multer.js')
const upload = multer.single('cardImg')

const ourData = [
    {
    "id": 69,
    "Code": "840",
    "Ccy": "USD",
    "CcyNm_RU": "Доллар США",
    "CcyNm_UZ": "AQSH dollari",
    "CcyNm_UZC": "АҚШ доллари",
    "CcyNm_EN": "US Dollar",
    "Nominal": "1",
    "Rate": "11010.45",
    "Diff": "23.24",
    "Date": "05.10.2022"
    },
    {
    "id": 21,
    "Code": "978",
    "Ccy": "EUR",
    "CcyNm_RU": "Евро",
    "CcyNm_UZ": "EVRO",
    "CcyNm_UZC": "EВРО",
    "CcyNm_EN": "Euro",
    "Nominal": "1",
    "Rate": "10878.32",
    "Diff": "151.51",
    "Date": "05.10.2022"
    },
    {
    "id": 57,
    "Code": "643",
    "Ccy": "RUB",
    "CcyNm_RU": "Российский рубль",
    "CcyNm_UZ": "Rossiya rubli",
    "CcyNm_UZC": "Россия рубли",
    "CcyNm_EN": "Russian Ruble",
    "Nominal": "1",
    "Rate": "186.54",
    "Diff": "-2.81",
    "Date": "05.10.2022"
    },
    {
    "id": 22,
    "Code": "826",
    "Ccy": "GBP",
    "CcyNm_RU": "Фунт стерлингов",
    "CcyNm_UZ": "Angliya funt sterlingi",
    "CcyNm_UZC": "Англия фунт стерлинги",
    "CcyNm_EN": "Pound Sterling",
    "Nominal": "1",
    "Rate": "12512.28",
    "Diff": "220.89",
    "Date": "05.10.2022"
    },
    {
    "id": 33,
    "Code": "392",
    "Ccy": "JPY",
    "CcyNm_RU": "Иена",
    "CcyNm_UZ": "Yaponiya iyenasi",
    "CcyNm_UZC": "Япония иенаси",
    "CcyNm_EN": "Japan Yen",
    "Nominal": "1",
    "Rate": "76.06",
    "Diff": "0.36",
    "Date": "05.10.2022"
    },
    {
    "id": 6,
    "Code": "944",
    "Ccy": "AZN",
    "CcyNm_RU": "Азербайджанский манат",
    "CcyNm_UZ": "Ozarbayjon manati",
    "CcyNm_UZC": "Озарбайжон манати",
    "CcyNm_EN": "Azerbaijan Manat",
    "Nominal": "1",
    "Rate": "6480.55",
    "Diff": "13.68",
    "Date": "05.10.2022"
    },
    {
    "id": 7,
    "Code": "050",
    "Ccy": "BDT",
    "CcyNm_RU": "Бангладешская така",
    "CcyNm_UZ": "Bangladesh takasi",
    "CcyNm_UZC": "Бангладеш такаси",
    "CcyNm_EN": "Bangladesh Taka",
    "Nominal": "1",
    "Rate": "109.00",
    "Diff": "0.98",
    "Date": "05.10.2022"
    },
    {
    "id": 8,
    "Code": "975",
    "Ccy": "BGN",
    "CcyNm_RU": "Болгарский лев",
    "CcyNm_UZ": "Bolgariya levi",
    "CcyNm_UZC": "Болгария леви",
    "CcyNm_EN": "Bulgarian Lev",
    "Nominal": "1",
    "Rate": "5561.11",
    "Diff": "76.55",
    "Date": "05.10.2022"
    },
    {
    "id": 9,
    "Code": "048",
    "Ccy": "BHD",
    "CcyNm_RU": "Бахрейнский динар",
    "CcyNm_UZ": "Bahrayn dinori",
    "CcyNm_UZC": "Баҳрайн динори",
    "CcyNm_EN": "Bahraini Dinar",
    "Nominal": "1",
    "Rate": "29174.48",
    "Diff": "61.58",
    "Date": "05.10.2022"
    },
    {
    "id": 10,
    "Code": "096",
    "Ccy": "BND",
    "CcyNm_RU": "Брунейский доллар",
    "CcyNm_UZ": "Bruney dollari",
    "CcyNm_UZC": "Бруней доллари",
    "CcyNm_EN": "Brunei Dollar",
    "Nominal": "1",
    "Rate": "7699.62",
    "Diff": "49.43",
    "Date": "05.10.2022"
    },
    {
    "id": 11,
    "Code": "986",
    "Ccy": "BRL",
    "CcyNm_RU": "Бразильский реал",
    "CcyNm_UZ": "Braziliya reali",
    "CcyNm_UZC": "Бразилия реали",
    "CcyNm_EN": "Brazilian Real",
    "Nominal": "1",
    "Rate": "2131.74",
    "Diff": "103.01",
    "Date": "05.10.2022"
    },
    {
    "id": 12,
    "Code": "933",
    "Ccy": "BYN",
    "CcyNm_RU": "Белорусский рубль",
    "CcyNm_UZ": "Belorus rubli",
    "CcyNm_UZC": "Белорус рубли",
    "CcyNm_EN": "Belarusian Ruble",
    "Nominal": "1",
    "Rate": "4340.63",
    "Diff": "9.16",
    "Date": "05.10.2022"
    },
    {
    "id": 13,
    "Code": "124",
    "Ccy": "CAD",
    "CcyNm_RU": "Канадский доллар",
    "CcyNm_UZ": "Kanada dollari",
    "CcyNm_UZC": "Канада доллари",
    "CcyNm_EN": "Canadian Dollar",
    "Nominal": "1",
    "Rate": "8078.69",
    "Diff": "100.76",
    "Date": "05.10.2022"
    },
    {
    "id": 14,
    "Code": "756",
    "Ccy": "CHF",
    "CcyNm_RU": "Швейцарский франк",
    "CcyNm_UZ": "Shveytsariya franki",
    "CcyNm_UZC": "Швейцария франки",
    "CcyNm_EN": "Swiss Franc",
    "Nominal": "1",
    "Rate": "11138.54",
    "Diff": "50.43",
    "Date": "05.10.2022"
    },
    {
    "id": 15,
    "Code": "156",
    "Ccy": "CNY",
    "CcyNm_RU": "Юань ренминби",
    "CcyNm_UZ": "Xitoy yuani",
    "CcyNm_UZC": "Хитой юани",
    "CcyNm_EN": "Yuan Renminbi",
    "Nominal": "1",
    "Rate": "1547.28",
    "Diff": "3.27",
    "Date": "05.10.2022"
    },
    {
    "id": 16,
    "Code": "192",
    "Ccy": "CUP",
    "CcyNm_RU": "Кубинское песо",
    "CcyNm_UZ": "Kuba pesosi",
    "CcyNm_UZC": "Куба песоси",
    "CcyNm_EN": "Cuban Peso",
    "Nominal": "1",
    "Rate": "458.77",
    "Diff": "0.97",
    "Date": "05.10.2022"
    },
    {
    "id": 17,
    "Code": "203",
    "Ccy": "CZK",
    "CcyNm_RU": "Чешская крона",
    "CcyNm_UZ": "Chexiya kronasi",
    "CcyNm_UZC": "Чехия кронаси",
    "CcyNm_EN": "Czech Koruna",
    "Nominal": "1",
    "Rate": "443.18",
    "Diff": "6.14",
    "Date": "05.10.2022"
    },
    {
    "id": 18,
    "Code": "208",
    "Ccy": "DKK",
    "CcyNm_RU": "Датская крона",
    "CcyNm_UZ": "Daniya kronasi",
    "CcyNm_UZC": "Дания кронаси",
    "CcyNm_EN": "Danish Krone",
    "Nominal": "1",
    "Rate": "1462.74",
    "Diff": "20.34",
    "Date": "05.10.2022"
    },
    {
    "id": 19,
    "Code": "012",
    "Ccy": "DZD",
    "CcyNm_RU": "Алжирский динар",
    "CcyNm_UZ": "Jazoir dinori",
    "CcyNm_UZC": "Жазоир динори",
    "CcyNm_EN": "Algerian Dinar",
    "Nominal": "1",
    "Rate": "78.56",
    "Diff": "0.55",
    "Date": "05.10.2022"
    },
    {
    "id": 20,
    "Code": "818",
    "Ccy": "EGP",
    "CcyNm_RU": "Египетский фунт",
    "CcyNm_UZ": "Misr funti",
    "CcyNm_UZC": "Миср фунти",
    "CcyNm_EN": "Egyptian Pound",
    "Nominal": "1",
    "Rate": "560.04",
    "Diff": "-2.25",
    "Date": "05.10.2022"
    },
    {
    "id": 2,
    "Code": "971",
    "Ccy": "AFN",
    "CcyNm_RU": "Афгани",
    "CcyNm_UZ": "Afg‘oniston afg‘onisi",
    "CcyNm_UZC": "Афғонистон афғониси",
    "CcyNm_EN": "AF Afghani",
    "Nominal": "1",
    "Rate": "125.43",
    "Diff": "0.9",
    "Date": "05.10.2022"
    },
    {
    "id": 4,
    "Code": "032",
    "Ccy": "ARS",
    "CcyNm_RU": "Аргентинское песо",
    "CcyNm_UZ": "Argentina pesosi",
    "CcyNm_UZC": "Аргентина песоси",
    "CcyNm_EN": "Argentine Peso",
    "Nominal": "1",
    "Rate": "74.28",
    "Diff": "-0.3",
    "Date": "05.10.2022"
    },
    {
    "id": 23,
    "Code": "981",
    "Ccy": "GEL",
    "CcyNm_RU": "Грузинский лари",
    "CcyNm_UZ": "Gruziya larisi",
    "CcyNm_UZC": "Грузия лариси",
    "CcyNm_EN": "Georgian Lari",
    "Nominal": "1",
    "Rate": "3918.31",
    "Diff": "29.03",
    "Date": "05.10.2022"
    },
    {
    "id": 24,
    "Code": "344",
    "Ccy": "HKD",
    "CcyNm_RU": "Гонгконгский доллар",
    "CcyNm_UZ": "Gongkong dollari",
    "CcyNm_UZC": "Гонгконг доллари",
    "CcyNm_EN": "Hong Kong Dollar",
    "Nominal": "1",
    "Rate": "1402.61",
    "Diff": "2.97",
    "Date": "05.10.2022"
    },
    {
    "id": 25,
    "Code": "348",
    "Ccy": "HUF",
    "CcyNm_RU": "Венгерский форинт",
    "CcyNm_UZ": "Vengriya forinti",
    "CcyNm_UZC": "Венгрия форинти",
    "CcyNm_EN": "Hungarian Forint",
    "Nominal": "1",
    "Rate": "26.09",
    "Diff": "0.87",
    "Date": "05.10.2022"
    },
    {
    "id": 26,
    "Code": "360",
    "Ccy": "IDR",
    "CcyNm_RU": "Рупия",
    "CcyNm_UZ": "Indoneziya rupiyasi",
    "CcyNm_UZC": "Индонезия рупияси",
    "CcyNm_EN": "Rupiah",
    "Nominal": "10",
    "Rate": "7.22",
    "Diff": "0.04",
    "Date": "05.10.2022"
    },
    {
    "id": 27,
    "Code": "376",
    "Ccy": "ILS",
    "CcyNm_RU": "Новый израильский шекель",
    "CcyNm_UZ": "Isroil shekeli",
    "CcyNm_UZC": "Исроил шекели",
    "CcyNm_EN": "New Israeli Sheqel",
    "Nominal": "1",
    "Rate": "3130.10",
    "Diff": "83.6",
    "Date": "05.10.2022"
    },
    {
    "id": 28,
    "Code": "356",
    "Ccy": "INR",
    "CcyNm_RU": "Индийская рупия",
    "CcyNm_UZ": "Hindiston rupiyasi",
    "CcyNm_UZC": "Ҳиндистон рупияси",
    "CcyNm_EN": "Indian Rupee",
    "Nominal": "1",
    "Rate": "135.09",
    "Diff": "0.88",
    "Date": "05.10.2022"
    },
    {
    "id": 29,
    "Code": "368",
    "Ccy": "IQD",
    "CcyNm_RU": "Иракский динар",
    "CcyNm_UZ": "Iroq dinori",
    "CcyNm_UZC": "Ироқ динори",
    "CcyNm_EN": "Iraqi Dinar",
    "Nominal": "1",
    "Rate": "7.54",
    "Diff": "0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 30,
    "Code": "364",
    "Ccy": "IRR",
    "CcyNm_RU": "Иранский риал",
    "CcyNm_UZ": "Eron riali",
    "CcyNm_UZC": "Эрон риали",
    "CcyNm_EN": "Iranian Rial",
    "Nominal": "10",
    "Rate": "2.62",
    "Diff": "0",
    "Date": "05.10.2022"
    },
    {
    "id": 31,
    "Code": "352",
    "Ccy": "ISK",
    "CcyNm_RU": "Исландская крона",
    "CcyNm_UZ": "Islandiya kronasi",
    "CcyNm_UZC": "Исландия кронаси",
    "CcyNm_EN": "Iceland Krona",
    "Nominal": "1",
    "Rate": "76.65",
    "Diff": "0.73",
    "Date": "05.10.2022"
    },
    {
    "id": 32,
    "Code": "400",
    "Ccy": "JOD",
    "CcyNm_RU": "Иорданский динар",
    "CcyNm_UZ": "Iordaniya dinori",
    "CcyNm_UZC": "Иордания динори",
    "CcyNm_EN": "Jordanian Dinar",
    "Nominal": "1",
    "Rate": "15529.55",
    "Diff": "43.7",
    "Date": "05.10.2022"
    },
    {
    "id": 5,
    "Code": "036",
    "Ccy": "AUD",
    "CcyNm_RU": "Австралийский доллар",
    "CcyNm_UZ": "Avstraliya dollari",
    "CcyNm_UZC": "Австралия доллари",
    "CcyNm_EN": "Australian Dollar",
    "Nominal": "1",
    "Rate": "7139.18",
    "Diff": "59.02",
    "Date": "05.10.2022"
    },
    {
    "id": 34,
    "Code": "417",
    "Ccy": "KGS",
    "CcyNm_RU": "Киргизский сом",
    "CcyNm_UZ": "Qirg‘iz somi",
    "CcyNm_UZC": "Қирғиз соми",
    "CcyNm_EN": "Kyrgyzstan Som",
    "Nominal": "1",
    "Rate": "137.28",
    "Diff": "0.29",
    "Date": "05.10.2022"
    },
    {
    "id": 35,
    "Code": "116",
    "Ccy": "KHR",
    "CcyNm_RU": "Риель",
    "CcyNm_UZ": "Kambodja riyeli",
    "CcyNm_UZC": "Камбоджа риели",
    "CcyNm_EN": "Riel",
    "Nominal": "1",
    "Rate": "2.67",
    "Diff": "0",
    "Date": "05.10.2022"
    },
    {
    "id": 36,
    "Code": "410",
    "Ccy": "KRW",
    "CcyNm_RU": "Вона Республики Корея",
    "CcyNm_UZ": "Koreya Respublikasi voni",
    "CcyNm_UZC": "Корея Республикаси вони",
    "CcyNm_EN": "The Korean Republic Won",
    "Nominal": "1",
    "Rate": "7.72",
    "Diff": "0.11",
    "Date": "05.10.2022"
    },
    {
    "id": 37,
    "Code": "414",
    "Ccy": "KWD",
    "CcyNm_RU": "Кувейтский динар",
    "CcyNm_UZ": "Quvayt dinori",
    "CcyNm_UZC": "Қувайт динори",
    "CcyNm_EN": "Kuwaiti Dinar",
    "Nominal": "1",
    "Rate": "35540.51",
    "Diff": "97.9",
    "Date": "05.10.2022"
    },
    {
    "id": 38,
    "Code": "398",
    "Ccy": "KZT",
    "CcyNm_RU": "Казахстанский тенге",
    "CcyNm_UZ": "Qozog‘iston tengesi",
    "CcyNm_UZC": "Қозоғистон тенгеси",
    "CcyNm_EN": "Kazakhstan Tenge",
    "Nominal": "1",
    "Rate": "23.29",
    "Diff": "0.2",
    "Date": "05.10.2022"
    },
    {
    "id": 39,
    "Code": "418",
    "Ccy": "LAK",
    "CcyNm_RU": "Лаосский кип",
    "CcyNm_UZ": "Laos kipisi",
    "CcyNm_UZC": "Лаос киписи",
    "CcyNm_EN": "Lao Kip",
    "Nominal": "1",
    "Rate": "0.66",
    "Diff": "0",
    "Date": "05.10.2022"
    },
    {
    "id": 40,
    "Code": "422",
    "Ccy": "LBP",
    "CcyNm_RU": "Ливанский фунт",
    "CcyNm_UZ": "Livan funti",
    "CcyNm_UZC": "Ливан фунти",
    "CcyNm_EN": "Lebanese Pound",
    "Nominal": "1",
    "Rate": "7.28",
    "Diff": "0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 41,
    "Code": "434",
    "Ccy": "LYD",
    "CcyNm_RU": "Ливийский динар",
    "CcyNm_UZ": "Liviya dinori",
    "CcyNm_UZC": "Ливия динори",
    "CcyNm_EN": "Libyan Dinar",
    "Nominal": "1",
    "Rate": "2197.83",
    "Diff": "6.31",
    "Date": "05.10.2022"
    },
    {
    "id": 42,
    "Code": "504",
    "Ccy": "MAD",
    "CcyNm_RU": "Марокканский дирхам",
    "CcyNm_UZ": "Marokash dirhami",
    "CcyNm_UZC": "Марокаш дирҳами",
    "CcyNm_EN": "Moroccan Dirham",
    "Nominal": "1",
    "Rate": "1006.39",
    "Diff": "7.59",
    "Date": "05.10.2022"
    },
    {
    "id": 43,
    "Code": "498",
    "Ccy": "MDL",
    "CcyNm_RU": "Молдавский лей",
    "CcyNm_UZ": "Moldaviya leyi",
    "CcyNm_UZC": "Молдавия лейи",
    "CcyNm_EN": "Moldovan Leu",
    "Nominal": "1",
    "Rate": "564.64",
    "Diff": "1.19",
    "Date": "05.10.2022"
    },
    {
    "id": 44,
    "Code": "104",
    "Ccy": "MMK",
    "CcyNm_RU": "Мьянманский кьят",
    "CcyNm_UZ": "Myanma kyati",
    "CcyNm_UZC": "Мьянма кьяти",
    "CcyNm_EN": "Kyat",
    "Nominal": "1",
    "Rate": "5.24",
    "Diff": "0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 45,
    "Code": "496",
    "Ccy": "MNT",
    "CcyNm_RU": "Монгольский тугpик",
    "CcyNm_UZ": "Mongoliya tugriki",
    "CcyNm_UZC": "Монголия тугрики",
    "CcyNm_EN": "Tugrik",
    "Nominal": "1",
    "Rate": "3.31",
    "Diff": "0",
    "Date": "05.10.2022"
    },
    {
    "id": 46,
    "Code": "484",
    "Ccy": "MXN",
    "CcyNm_RU": "Мексиканское песо",
    "CcyNm_UZ": "Meksika pesosi",
    "CcyNm_UZC": "Мексика песоси",
    "CcyNm_EN": "Mexican Peso",
    "Nominal": "1",
    "Rate": "550.90",
    "Diff": "4.52",
    "Date": "05.10.2022"
    },
    {
    "id": 47,
    "Code": "458",
    "Ccy": "MYR",
    "CcyNm_RU": "Малайзийский ринггит",
    "CcyNm_UZ": "Malayziya ringgiti",
    "CcyNm_UZC": "Малайзия ринггити",
    "CcyNm_EN": "Malaysian Ringgit",
    "Nominal": "1",
    "Rate": "2371.15",
    "Diff": "7.29",
    "Date": "05.10.2022"
    },
    {
    "id": 48,
    "Code": "578",
    "Ccy": "NOK",
    "CcyNm_RU": "Норвежская крона",
    "CcyNm_UZ": "Norvegiya kronasi",
    "CcyNm_UZC": "Норвегия кронаси",
    "CcyNm_EN": "Norwegian Krone",
    "Nominal": "1",
    "Rate": "1039.92",
    "Diff": "28.38",
    "Date": "05.10.2022"
    },
    {
    "id": 49,
    "Code": "554",
    "Ccy": "NZD",
    "CcyNm_RU": "Новозеландский доллар",
    "CcyNm_UZ": "Yangi Zelandiya dollari",
    "CcyNm_UZC": "Янги Зеландия доллари",
    "CcyNm_EN": "New Zealand Dollar",
    "Nominal": "1",
    "Rate": "6291.37",
    "Diff": "82.5",
    "Date": "05.10.2022"
    },
    {
    "id": 50,
    "Code": "512",
    "Ccy": "OMR",
    "CcyNm_RU": "Оманский риал",
    "CcyNm_UZ": "Ummon riali",
    "CcyNm_UZC": "Уммон риали",
    "CcyNm_EN": "Rial Omani",
    "Nominal": "1",
    "Rate": "28598.57",
    "Diff": "67.77",
    "Date": "05.10.2022"
    },
    {
    "id": 51,
    "Code": "608",
    "Ccy": "PHP",
    "CcyNm_RU": "Филиппинское песо",
    "CcyNm_UZ": "Filippin pesosi",
    "CcyNm_UZC": "Филиппин песоси",
    "CcyNm_EN": "Philippine Piso",
    "Nominal": "1",
    "Rate": "187.57",
    "Diff": "1.45",
    "Date": "05.10.2022"
    },
    {
    "id": 52,
    "Code": "586",
    "Ccy": "PKR",
    "CcyNm_RU": "Пакистанская рупия",
    "CcyNm_UZ": "Pokiston rupiyasi",
    "CcyNm_UZC": "Покистон рупияси",
    "CcyNm_EN": "Pakistan Rupee",
    "Nominal": "1",
    "Rate": "48.91",
    "Diff": "0.51",
    "Date": "05.10.2022"
    },
    {
    "id": 53,
    "Code": "985",
    "Ccy": "PLN",
    "CcyNm_RU": "Злотый",
    "CcyNm_UZ": "Polsha zlotiysi",
    "CcyNm_UZC": "Польша злотийси",
    "CcyNm_EN": "Polish Zloty",
    "Nominal": "1",
    "Rate": "2267.16",
    "Diff": "44.92",
    "Date": "05.10.2022"
    },
    {
    "id": 54,
    "Code": "634",
    "Ccy": "QAR",
    "CcyNm_RU": "Катарский риал",
    "CcyNm_UZ": "Qatar riali",
    "CcyNm_UZC": "Қатар риали",
    "CcyNm_EN": "Qatari Rial",
    "Nominal": "1",
    "Rate": "3024.02",
    "Diff": "6.38",
    "Date": "05.10.2022"
    },
    {
    "id": 55,
    "Code": "946",
    "Ccy": "RON",
    "CcyNm_RU": "Румынский лей",
    "CcyNm_UZ": "Ruminiya leyi",
    "CcyNm_UZC": "Руминия лейи",
    "CcyNm_EN": "Romanian Leu",
    "Nominal": "1",
    "Rate": "2198.66",
    "Diff": "31.04",
    "Date": "05.10.2022"
    },
    {
    "id": 56,
    "Code": "941",
    "Ccy": "RSD",
    "CcyNm_RU": "Сербский динар",
    "CcyNm_UZ": "Serbiya dinori",
    "CcyNm_UZC": "Сербия динори",
    "CcyNm_EN": "Serbian Dinar",
    "Nominal": "1",
    "Rate": "92.70",
    "Diff": "1.28",
    "Date": "05.10.2022"
    },
    {
    "id": 3,
    "Code": "051",
    "Ccy": "AMD",
    "CcyNm_RU": "Армянский драм",
    "CcyNm_UZ": "Armaniston drami",
    "CcyNm_UZC": "Арманистон драми",
    "CcyNm_EN": "Armenian Dram",
    "Nominal": "1",
    "Rate": "27.19",
    "Diff": "-0.03",
    "Date": "05.10.2022"
    },
    {
    "id": 58,
    "Code": "682",
    "Ccy": "SAR",
    "CcyNm_RU": "Саудовский риял",
    "CcyNm_UZ": "Saudiya Arabistoni riali",
    "CcyNm_UZC": "Саудия Арабистони риали",
    "CcyNm_EN": "Saudi Riyal",
    "Nominal": "1",
    "Rate": "2928.86",
    "Diff": "5.17",
    "Date": "05.10.2022"
    },
    {
    "id": 59,
    "Code": "938",
    "Ccy": "SDG",
    "CcyNm_RU": "Суданский фунт",
    "CcyNm_UZ": "Sudan funti",
    "CcyNm_UZC": "Судан фунти",
    "CcyNm_EN": "Sudanese Pound",
    "Nominal": "1",
    "Rate": "19.42",
    "Diff": "0.04",
    "Date": "05.10.2022"
    },
    {
    "id": 60,
    "Code": "752",
    "Ccy": "SEK",
    "CcyNm_RU": "Шведская крона",
    "CcyNm_UZ": "Shvetsiya kronasi",
    "CcyNm_UZC": "Швеция кронаси",
    "CcyNm_EN": "Swedish Krona",
    "Nominal": "1",
    "Rate": "1008.63",
    "Diff": "24.76",
    "Date": "05.10.2022"
    },
    {
    "id": 61,
    "Code": "702",
    "Ccy": "SGD",
    "CcyNm_RU": "Сингапурский доллар",
    "CcyNm_UZ": "Singapur dollari",
    "CcyNm_UZC": "Сингапур доллари",
    "CcyNm_EN": "Singapore Dollar",
    "Nominal": "1",
    "Rate": "7699.62",
    "Diff": "49.43",
    "Date": "05.10.2022"
    },
    {
    "id": 62,
    "Code": "760",
    "Ccy": "SYP",
    "CcyNm_RU": "Сирийский фунт",
    "CcyNm_UZ": "Suriya funti",
    "CcyNm_UZC": "Сурия фунти",
    "CcyNm_EN": "Syrian Pound",
    "Nominal": "1",
    "Rate": "4.38",
    "Diff": "0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 63,
    "Code": "764",
    "Ccy": "THB",
    "CcyNm_RU": "Бат",
    "CcyNm_UZ": "Tailand bati",
    "CcyNm_UZC": "Таиланд бати",
    "CcyNm_EN": "Baht",
    "Nominal": "1",
    "Rate": "293.26",
    "Diff": "5.18",
    "Date": "05.10.2022"
    },
    {
    "id": 64,
    "Code": "972",
    "Ccy": "TJS",
    "CcyNm_RU": "Сомони",
    "CcyNm_UZ": "Tojikiston somonisi",
    "CcyNm_UZC": "Тожикистон сомониси",
    "CcyNm_EN": "Tajikistan Somoni",
    "Nominal": "1",
    "Rate": "1120.66",
    "Diff": "5.21",
    "Date": "05.10.2022"
    },
    {
    "id": 65,
    "Code": "934",
    "Ccy": "TMT",
    "CcyNm_RU": "Новый туркменский манат",
    "CcyNm_UZ": "Turkmaniston manati",
    "CcyNm_UZC": "Туркманистон манати",
    "CcyNm_EN": "Turkmenistan New Manat",
    "Nominal": "1",
    "Rate": "3150.34",
    "Diff": "6.65",
    "Date": "05.10.2022"
    },
    {
    "id": 66,
    "Code": "788",
    "Ccy": "TND",
    "CcyNm_RU": "Тунисский динар",
    "CcyNm_UZ": "Tunis dinori",
    "CcyNm_UZC": "Тунис динори",
    "CcyNm_EN": "Tunisian Dinar",
    "Nominal": "1",
    "Rate": "3410.60",
    "Diff": "61.96",
    "Date": "05.10.2022"
    },
    {
    "id": 67,
    "Code": "949",
    "Ccy": "TRY",
    "CcyNm_RU": "Турецкая лира",
    "CcyNm_UZ": "Turkiya lirasi",
    "CcyNm_UZC": "Туркия лираси",
    "CcyNm_EN": "Turkish Lira",
    "Nominal": "1",
    "Rate": "592.61",
    "Diff": "0.81",
    "Date": "05.10.2022"
    },
    {
    "id": 68,
    "Code": "980",
    "Ccy": "UAH",
    "CcyNm_RU": "Гривна",
    "CcyNm_UZ": "Ukraina grivnasi",
    "CcyNm_UZC": "Украина гривнаси",
    "CcyNm_EN": "Ukrainian Hryvnia",
    "Nominal": "1",
    "Rate": "299.59",
    "Diff": "0.63",
    "Date": "05.10.2022"
    },
    {
    "id": 1,
    "Code": "784",
    "Ccy": "AED",
    "CcyNm_RU": "Дирхам ОАЭ",
    "CcyNm_UZ": "BAA dirhami",
    "CcyNm_UZC": "БАА дирҳами",
    "CcyNm_EN": "UAE Dirham",
    "Nominal": "1",
    "Rate": "2997.59",
    "Diff": "6.33",
    "Date": "05.10.2022"
    },
    {
    "id": 70,
    "Code": "858",
    "Ccy": "UYU",
    "CcyNm_RU": "Уругвайское песо",
    "CcyNm_UZ": "Urugvay pesosi",
    "CcyNm_UZC": "Уругвай песоси",
    "CcyNm_EN": "Peso Uruguayo",
    "Nominal": "1",
    "Rate": "264.07",
    "Diff": "-0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 71,
    "Code": "928",
    "Ccy": "VES",
    "CcyNm_RU": "Венесуэльский боливар",
    "CcyNm_UZ": "Venesuela bolivari",
    "CcyNm_UZC": "Венесуэла боливари",
    "CcyNm_EN": "Bolívar",
    "Nominal": "1",
    "Rate": "1349.12",
    "Diff": "4.87",
    "Date": "05.10.2022"
    },
    {
    "id": 72,
    "Code": "704",
    "Ccy": "VND",
    "CcyNm_RU": "Донг",
    "CcyNm_UZ": "Vetnam dongi",
    "CcyNm_UZC": "Вьетнам донги",
    "CcyNm_EN": "Dong",
    "Nominal": "10",
    "Rate": "4.61",
    "Diff": "0.01",
    "Date": "05.10.2022"
    },
    {
    "id": 73,
    "Code": "960",
    "Ccy": "XDR",
    "CcyNm_RU": "СДР",
    "CcyNm_UZ": "SDR",
    "CcyNm_UZC": "СДР",
    "CcyNm_EN": "SDR",
    "Nominal": "1",
    "Rate": "14100.87",
    "Diff": "38.56",
    "Date": "05.10.2022"
    },
    {
    "id": 74,
    "Code": "886",
    "Ccy": "YER",
    "CcyNm_RU": "Йеменский риал",
    "CcyNm_UZ": "Yaman riali",
    "CcyNm_UZC": "Яман риали",
    "CcyNm_EN": "Yemeni Rial",
    "Nominal": "1",
    "Rate": "44.00",
    "Diff": "0.08",
    "Date": "05.10.2022"
    },
    {
    "id": 75,
    "Code": "710",
    "Ccy": "ZAR",
    "CcyNm_RU": "Рэнд",
    "CcyNm_UZ": "Janubiy Afrika randi",
    "CcyNm_UZC": "Жанубий Африка ранди",
    "CcyNm_EN": "Rand",
    "Nominal": "1",
    "Rate": "619.71",
    "Diff": "12.01",
    "Date": "05.10.2022"
    }
    ]

const GET_API = async (req,res) =>{
    try {
        // const cards = await model.GET(req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data: ourData
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const GET = async (req,res) =>{
    try {
        const cards = await model.GET(req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const GETPENDEING = async (req,res) =>{
    try {
        const cards = await model.GETACTIVED()
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const GETDELETED = async (req,res) =>{
    try {
        const cards = await model.GETDELETED()
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const POST = async (req,res) =>{
    console.log(req.body,req.file)
    try {
        const cards = await model.POST(req.body,req.files)
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const PUT = async (req,res) =>{
    try {
        const cards = await model.PUT(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'updated',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const DELETED = async (req,res) =>{
    try {
        const cards = await model.DELETE(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'deleted',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const ADMINACTIVE = async (req,res) =>{
    try {
        const cards = await model.ADMINACTIVE(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'actived',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    GET_API, GET,GETPENDEING,GETDELETED, POST ,PUT , DELETED ,ADMINACTIVE , upload 
}