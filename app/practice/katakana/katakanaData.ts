import type { KanaCharacter } from "@/types/kana";

export const katakanaData: KanaCharacter[] = [
  // =========================
  // Basic Katakana
  // =========================
  { kana: "ア", romaji: "a", group: "basic" },
  { kana: "イ", romaji: "i", group: "basic" },
  { kana: "ウ", romaji: "u", group: "basic" },
  { kana: "エ", romaji: "e", group: "basic" },
  { kana: "オ", romaji: "o", group: "basic" },

  { kana: "カ", romaji: "ka", group: "basic" },
  { kana: "キ", romaji: "ki", group: "basic" },
  { kana: "ク", romaji: "ku", group: "basic" },
  { kana: "ケ", romaji: "ke", group: "basic" },
  { kana: "コ", romaji: "ko", group: "basic" },

  { kana: "サ", romaji: "sa", group: "basic" },
  { kana: "シ", romaji: "shi", group: "basic" },
  { kana: "ス", romaji: "su", group: "basic" },
  { kana: "セ", romaji: "se", group: "basic" },
  { kana: "ソ", romaji: "so", group: "basic" },

  { kana: "タ", romaji: "ta", group: "basic" },
  { kana: "チ", romaji: "chi", group: "basic" },
  { kana: "ツ", romaji: "tsu", group: "basic" },
  { kana: "テ", romaji: "te", group: "basic" },
  { kana: "ト", romaji: "to", group: "basic" },

  { kana: "ナ", romaji: "na", group: "basic" },
  { kana: "ニ", romaji: "ni", group: "basic" },
  { kana: "ヌ", romaji: "nu", group: "basic" },
  { kana: "ネ", romaji: "ne", group: "basic" },
  { kana: "ノ", romaji: "no", group: "basic" },

  { kana: "ハ", romaji: "ha", group: "basic" },
  { kana: "ヒ", romaji: "hi", group: "basic" },
  { kana: "フ", romaji: "fu", group: "basic" },
  { kana: "ヘ", romaji: "he", group: "basic" },
  { kana: "ホ", romaji: "ho", group: "basic" },

  { kana: "マ", romaji: "ma", group: "basic" },
  { kana: "ミ", romaji: "mi", group: "basic" },
  { kana: "ム", romaji: "mu", group: "basic" },
  { kana: "メ", romaji: "me", group: "basic" },
  { kana: "モ", romaji: "mo", group: "basic" },

  { kana: "ヤ", romaji: "ya", group: "basic" },
  { kana: "ユ", romaji: "yu", group: "basic" },
  { kana: "ヨ", romaji: "yo", group: "basic" },

  { kana: "ラ", romaji: "ra", group: "basic" },
  { kana: "リ", romaji: "ri", group: "basic" },
  { kana: "ル", romaji: "ru", group: "basic" },
  { kana: "レ", romaji: "re", group: "basic" },
  { kana: "ロ", romaji: "ro", group: "basic" },

  { kana: "ワ", romaji: "wa", group: "basic" },
  { kana: "ヲ", romaji: "wo", group: "basic" },
  { kana: "ン", romaji: "n", group: "basic" },

  // =========================
  // Dakuten
  // =========================
  { kana: "ガ", romaji: "ga", group: "dakuten" },
  { kana: "ギ", romaji: "gi", group: "dakuten" },
  { kana: "グ", romaji: "gu", group: "dakuten" },
  { kana: "ゲ", romaji: "ge", group: "dakuten" },
  { kana: "ゴ", romaji: "go", group: "dakuten" },

  { kana: "ザ", romaji: "za", group: "dakuten" },
  { kana: "ジ", romaji: "ji", group: "dakuten" },
  { kana: "ズ", romaji: "zu", group: "dakuten" },
  { kana: "ゼ", romaji: "ze", group: "dakuten" },
  { kana: "ゾ", romaji: "zo", group: "dakuten" },

  { kana: "ダ", romaji: "da", group: "dakuten" },
  { kana: "ヂ", romaji: "ji", group: "dakuten" },
  { kana: "ヅ", romaji: "zu", group: "dakuten" },
  { kana: "デ", romaji: "de", group: "dakuten" },
  { kana: "ド", romaji: "do", group: "dakuten" },

  { kana: "バ", romaji: "ba", group: "dakuten" },
  { kana: "ビ", romaji: "bi", group: "dakuten" },
  { kana: "ブ", romaji: "bu", group: "dakuten" },
  { kana: "ベ", romaji: "be", group: "dakuten" },
  { kana: "ボ", romaji: "bo", group: "dakuten" },

  // =========================
  // Handakuten
  // =========================
  { kana: "パ", romaji: "pa", group: "handakuten" },
  { kana: "ピ", romaji: "pi", group: "handakuten" },
  { kana: "プ", romaji: "pu", group: "handakuten" },
  { kana: "ペ", romaji: "pe", group: "handakuten" },
  { kana: "ポ", romaji: "po", group: "handakuten" },

  // =========================
  // Yōon
  // =========================
  { kana: "キャ", romaji: "kya", group: "yoon" },
  { kana: "キュ", romaji: "kyu", group: "yoon" },
  { kana: "キョ", romaji: "kyo", group: "yoon" },

  { kana: "シャ", romaji: "sha", group: "yoon" },
  { kana: "シュ", romaji: "shu", group: "yoon" },
  { kana: "ショ", romaji: "sho", group: "yoon" },

  { kana: "チャ", romaji: "cha", group: "yoon" },
  { kana: "チュ", romaji: "chu", group: "yoon" },
  { kana: "チョ", romaji: "cho", group: "yoon" },

  { kana: "ニャ", romaji: "nya", group: "yoon" },
  { kana: "ニュ", romaji: "nyu", group: "yoon" },
  { kana: "ニョ", romaji: "nyo", group: "yoon" },

  { kana: "ヒャ", romaji: "hya", group: "yoon" },
  { kana: "ヒュ", romaji: "hyu", group: "yoon" },
  { kana: "ヒョ", romaji: "hyo", group: "yoon" },

  { kana: "ミャ", romaji: "mya", group: "yoon" },
  { kana: "ミュ", romaji: "myu", group: "yoon" },
  { kana: "ミョ", romaji: "myo", group: "yoon" },

  { kana: "リャ", romaji: "rya", group: "yoon" },
  { kana: "リュ", romaji: "ryu", group: "yoon" },
  { kana: "リョ", romaji: "ryo", group: "yoon" },

  { kana: "ギャ", romaji: "gya", group: "yoon" },
  { kana: "ギュ", romaji: "gyu", group: "yoon" },
  { kana: "ギョ", romaji: "gyo", group: "yoon" },

  { kana: "ジャ", romaji: "ja", group: "yoon" },
  { kana: "ジュ", romaji: "ju", group: "yoon" },
  { kana: "ジョ", romaji: "jo", group: "yoon" },

  { kana: "ビャ", romaji: "bya", group: "yoon" },
  { kana: "ビュ", romaji: "byu", group: "yoon" },
  { kana: "ビョ", romaji: "byo", group: "yoon" },

  { kana: "ピャ", romaji: "pya", group: "yoon" },
  { kana: "ピュ", romaji: "pyu", group: "yoon" },
  { kana: "ピョ", romaji: "pyo", group: "yoon" },
];