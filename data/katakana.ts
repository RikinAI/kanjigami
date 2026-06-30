type KanaRow = {
  row: string;
  chars: {
    kana: string;
    romaji: string;
  }[];
};

export const basicKatakana: KanaRow[] = [
  {
    row: "",
    chars: [
      { kana: "ア", romaji: "a" },
      { kana: "イ", romaji: "i" },
      { kana: "ウ", romaji: "u" },
      { kana: "エ", romaji: "e" },
      { kana: "オ", romaji: "o" },
    ],
  },
  {
    row: "K",
    chars: [
      { kana: "カ", romaji: "ka" },
      { kana: "キ", romaji: "ki" },
      { kana: "ク", romaji: "ku" },
      { kana: "ケ", romaji: "ke" },
      { kana: "コ", romaji: "ko" },
    ],
  },
  {
    row: "S",
    chars: [
      { kana: "サ", romaji: "sa" },
      { kana: "シ", romaji: "shi" },
      { kana: "ス", romaji: "su" },
      { kana: "セ", romaji: "se" },
      { kana: "ソ", romaji: "so" },
    ],
  },
  {
    row: "T",
    chars: [
      { kana: "タ", romaji: "ta" },
      { kana: "チ", romaji: "chi" },
      { kana: "ツ", romaji: "tsu" },
      { kana: "テ", romaji: "te" },
      { kana: "ト", romaji: "to" },
    ],
  },
  {
    row: "N",
    chars: [
      { kana: "ナ", romaji: "na" },
      { kana: "ニ", romaji: "ni" },
      { kana: "ヌ", romaji: "nu" },
      { kana: "ネ", romaji: "ne" },
      { kana: "ノ", romaji: "no" },
    ],
  },
  {
    row: "H",
    chars: [
      { kana: "ハ", romaji: "ha" },
      { kana: "ヒ", romaji: "hi" },
      { kana: "フ", romaji: "fu" },
      { kana: "ヘ", romaji: "he" },
      { kana: "ホ", romaji: "ho" },
    ],
  },
  {
    row: "M",
    chars: [
      { kana: "マ", romaji: "ma" },
      { kana: "ミ", romaji: "mi" },
      { kana: "ム", romaji: "mu" },
      { kana: "メ", romaji: "me" },
      { kana: "モ", romaji: "mo" },
    ],
  },
  {
    row: "Y",
    chars: [
      { kana: "ヤ", romaji: "ya" },
      { kana: "", romaji: "" },
      { kana: "ユ", romaji: "yu" },
      { kana: "", romaji: "" },
      { kana: "ヨ", romaji: "yo" },
    ],
  },
  {
    row: "R",
    chars: [
      { kana: "ラ", romaji: "ra" },
      { kana: "リ", romaji: "ri" },
      { kana: "ル", romaji: "ru" },
      { kana: "レ", romaji: "re" },
      { kana: "ロ", romaji: "ro" },
    ],
  },
  {
    row: "W",
    chars: [
      { kana: "ワ", romaji: "wa" },
      { kana: "", romaji: "" },
      { kana: "", romaji: "" },
      { kana: "", romaji: "" },
      { kana: "ヲ", romaji: "wo" },
    ],
  },
  {
    row: "ン",
    chars: [
      { kana: "ン", romaji: "n" },
      { kana: "", romaji: "" },
      { kana: "", romaji: "" },
      { kana: "", romaji: "" },
      { kana: "", romaji: "" },
    ],
  },
];

export const katakanaDakuten: KanaRow[] = [
  {
    row: "G",
    chars: [
      { kana: "ガ", romaji: "ga" },
      { kana: "ギ", romaji: "gi" },
      { kana: "グ", romaji: "gu" },
      { kana: "ゲ", romaji: "ge" },
      { kana: "ゴ", romaji: "go" },
    ],
  },
  {
    row: "Z",
    chars: [
      { kana: "ザ", romaji: "za" },
      { kana: "ジ", romaji: "ji" },
      { kana: "ズ", romaji: "zu" },
      { kana: "ゼ", romaji: "ze" },
      { kana: "ゾ", romaji: "zo" },
    ],
  },
  {
    row: "D",
    chars: [
      { kana: "ダ", romaji: "da" },
      { kana: "ヂ", romaji: "ji" },
      { kana: "ヅ", romaji: "zu" },
      { kana: "デ", romaji: "de" },
      { kana: "ド", romaji: "do" },
    ],
  },
  {
    row: "B",
    chars: [
      { kana: "バ", romaji: "ba" },
      { kana: "ビ", romaji: "bi" },
      { kana: "ブ", romaji: "bu" },
      { kana: "ベ", romaji: "be" },
      { kana: "ボ", romaji: "bo" },
    ],
  },
];

export const katakanaHandakuten: KanaRow[] = [
  {
    row: "P",
    chars: [
      { kana: "パ", romaji: "pa" },
      { kana: "ピ", romaji: "pi" },
      { kana: "プ", romaji: "pu" },
      { kana: "ペ", romaji: "pe" },
      { kana: "ポ", romaji: "po" },
    ],
  },
];

export const katakanaYoon: KanaRow[] = [
  {
    row: "K",
    chars: [
      { kana: "キャ", romaji: "kya" },
      { kana: "", romaji: "" },
      { kana: "キュ", romaji: "kyu" },
      { kana: "", romaji: "" },
      { kana: "キョ", romaji: "kyo" },
    ],
  },
  {
    row: "S",
    chars: [
      { kana: "シャ", romaji: "sha" },
      { kana: "", romaji: "" },
      { kana: "シュ", romaji: "shu" },
      { kana: "", romaji: "" },
      { kana: "ショ", romaji: "sho" },
    ],
  },
  {
    row: "T",
    chars: [
      { kana: "チャ", romaji: "cha" },
      { kana: "", romaji: "" },
      { kana: "チュ", romaji: "chu" },
      { kana: "", romaji: "" },
      { kana: "チョ", romaji: "cho" },
    ],
  },
  {
    row: "N",
    chars: [
      { kana: "ニャ", romaji: "nya" },
      { kana: "", romaji: "" },
      { kana: "ニュ", romaji: "nyu" },
      { kana: "", romaji: "" },
      { kana: "ニョ", romaji: "nyo" },
    ],
  },
  {
    row: "H",
    chars: [
      { kana: "ヒャ", romaji: "hya" },
      { kana: "", romaji: "" },
      { kana: "ヒュ", romaji: "hyu" },
      { kana: "", romaji: "" },
      { kana: "ヒョ", romaji: "hyo" },
    ],
  },
  {
    row: "M",
    chars: [
      { kana: "ミャ", romaji: "mya" },
      { kana: "", romaji: "" },
      { kana: "ミュ", romaji: "myu" },
      { kana: "", romaji: "" },
      { kana: "ミョ", romaji: "myo" },
    ],
  },
  {
    row: "R",
    chars: [
      { kana: "リャ", romaji: "rya" },
      { kana: "", romaji: "" },
      { kana: "リュ", romaji: "ryu" },
      { kana: "", romaji: "" },
      { kana: "リョ", romaji: "ryo" },
    ],
  },
  {
    row: "G",
    chars: [
      { kana: "ギャ", romaji: "gya" },
      { kana: "", romaji: "" },
      { kana: "ギュ", romaji: "gyu" },
      { kana: "", romaji: "" },
      { kana: "ギョ", romaji: "gyo" },
    ],
  },
  {
    row: "J",
    chars: [
      { kana: "ジャ", romaji: "ja" },
      { kana: "", romaji: "" },
      { kana: "ジュ", romaji: "ju" },
      { kana: "", romaji: "" },
      { kana: "ジョ", romaji: "jo" },
    ],
  },
  {
    row: "B",
    chars: [
      { kana: "ビャ", romaji: "bya" },
      { kana: "", romaji: "" },
      { kana: "ビュ", romaji: "byu" },
      { kana: "", romaji: "" },
      { kana: "ビョ", romaji: "byo" },
    ],
  },
  {
    row: "P",
    chars: [
      { kana: "ピャ", romaji: "pya" },
      { kana: "", romaji: "" },
      { kana: "ピュ", romaji: "pyu" },
      { kana: "", romaji: "" },
      { kana: "ピョ", romaji: "pyo" },
    ],
  },
];