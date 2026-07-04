import type { KanaCharacter } from "@/types/kana";

export const hiraganaData: KanaCharacter[] = [
  // =========================
  // Basic Hiragana (46)
  // =========================
  { kana: "あ", romaji: "a", group: "basic" },
  { kana: "い", romaji: "i", group: "basic" },
  { kana: "う", romaji: "u", group: "basic" },
  { kana: "え", romaji: "e", group: "basic" },
  { kana: "お", romaji: "o", group: "basic" },

  { kana: "か", romaji: "ka", group: "basic" },
  { kana: "き", romaji: "ki", group: "basic" },
  { kana: "く", romaji: "ku", group: "basic" },
  { kana: "け", romaji: "ke", group: "basic" },
  { kana: "こ", romaji: "ko", group: "basic" },

  { kana: "さ", romaji: "sa", group: "basic" },
  { kana: "し", romaji: "shi", group: "basic" },
  { kana: "す", romaji: "su", group: "basic" },
  { kana: "せ", romaji: "se", group: "basic" },
  { kana: "そ", romaji: "so", group: "basic" },

  { kana: "た", romaji: "ta", group: "basic" },
  { kana: "ち", romaji: "chi", group: "basic" },
  { kana: "つ", romaji: "tsu", group: "basic" },
  { kana: "て", romaji: "te", group: "basic" },
  { kana: "と", romaji: "to", group: "basic" },

  { kana: "な", romaji: "na", group: "basic" },
  { kana: "に", romaji: "ni", group: "basic" },
  { kana: "ぬ", romaji: "nu", group: "basic" },
  { kana: "ね", romaji: "ne", group: "basic" },
  { kana: "の", romaji: "no", group: "basic" },

  { kana: "は", romaji: "ha", group: "basic" },
  { kana: "ひ", romaji: "hi", group: "basic" },
  { kana: "ふ", romaji: "fu", group: "basic" },
  { kana: "へ", romaji: "he", group: "basic" },
  { kana: "ほ", romaji: "ho", group: "basic" },

  { kana: "ま", romaji: "ma", group: "basic" },
  { kana: "み", romaji: "mi", group: "basic" },
  { kana: "む", romaji: "mu", group: "basic" },
  { kana: "め", romaji: "me", group: "basic" },
  { kana: "も", romaji: "mo", group: "basic" },

  { kana: "や", romaji: "ya", group: "basic" },
  { kana: "ゆ", romaji: "yu", group: "basic" },
  { kana: "よ", romaji: "yo", group: "basic" },

  { kana: "ら", romaji: "ra", group: "basic" },
  { kana: "り", romaji: "ri", group: "basic" },
  { kana: "る", romaji: "ru", group: "basic" },
  { kana: "れ", romaji: "re", group: "basic" },
  { kana: "ろ", romaji: "ro", group: "basic" },

  { kana: "わ", romaji: "wa", group: "basic" },
  { kana: "を", romaji: "wo", group: "basic" },
  { kana: "ん", romaji: "n", group: "basic" },

  // =========================
  // Dakuten
  // =========================
  { kana: "が", romaji: "ga", group: "dakuten" },
  { kana: "ぎ", romaji: "gi", group: "dakuten" },
  { kana: "ぐ", romaji: "gu", group: "dakuten" },
  { kana: "げ", romaji: "ge", group: "dakuten" },
  { kana: "ご", romaji: "go", group: "dakuten" },

  { kana: "ざ", romaji: "za", group: "dakuten" },
  { kana: "じ", romaji: "ji", group: "dakuten" },
  { kana: "ず", romaji: "zu", group: "dakuten" },
  { kana: "ぜ", romaji: "ze", group: "dakuten" },
  { kana: "ぞ", romaji: "zo", group: "dakuten" },

  { kana: "だ", romaji: "da", group: "dakuten" },
  { kana: "ぢ", romaji: "ji", group: "dakuten" },
  { kana: "づ", romaji: "zu", group: "dakuten" },
  { kana: "で", romaji: "de", group: "dakuten" },
  { kana: "ど", romaji: "do", group: "dakuten" },

  { kana: "ば", romaji: "ba", group: "dakuten" },
  { kana: "び", romaji: "bi", group: "dakuten" },
  { kana: "ぶ", romaji: "bu", group: "dakuten" },
  { kana: "べ", romaji: "be", group: "dakuten" },
  { kana: "ぼ", romaji: "bo", group: "dakuten" },

  // =========================
  // Handakuten
  // =========================
  { kana: "ぱ", romaji: "pa", group: "handakuten" },
  { kana: "ぴ", romaji: "pi", group: "handakuten" },
  { kana: "ぷ", romaji: "pu", group: "handakuten" },
  { kana: "ぺ", romaji: "pe", group: "handakuten" },
  { kana: "ぽ", romaji: "po", group: "handakuten" },

  // =========================
  // Yōon
  // =========================
  { kana: "きゃ", romaji: "kya", group: "yoon" },
  { kana: "きゅ", romaji: "kyu", group: "yoon" },
  { kana: "きょ", romaji: "kyo", group: "yoon" },

  { kana: "しゃ", romaji: "sha", group: "yoon" },
  { kana: "しゅ", romaji: "shu", group: "yoon" },
  { kana: "しょ", romaji: "sho", group: "yoon" },

  { kana: "ちゃ", romaji: "cha", group: "yoon" },
  { kana: "ちゅ", romaji: "chu", group: "yoon" },
  { kana: "ちょ", romaji: "cho", group: "yoon" },

  { kana: "にゃ", romaji: "nya", group: "yoon" },
  { kana: "にゅ", romaji: "nyu", group: "yoon" },
  { kana: "にょ", romaji: "nyo", group: "yoon" },

  { kana: "ひゃ", romaji: "hya", group: "yoon" },
  { kana: "ひゅ", romaji: "hyu", group: "yoon" },
  { kana: "ひょ", romaji: "hyo", group: "yoon" },

  { kana: "みゃ", romaji: "mya", group: "yoon" },
  { kana: "みゅ", romaji: "myu", group: "yoon" },
  { kana: "みょ", romaji: "myo", group: "yoon" },

  { kana: "りゃ", romaji: "rya", group: "yoon" },
  { kana: "りゅ", romaji: "ryu", group: "yoon" },
  { kana: "りょ", romaji: "ryo", group: "yoon" },

  { kana: "ぎゃ", romaji: "gya", group: "yoon" },
  { kana: "ぎゅ", romaji: "gyu", group: "yoon" },
  { kana: "ぎょ", romaji: "gyo", group: "yoon" },

  { kana: "じゃ", romaji: "ja", group: "yoon" },
  { kana: "じゅ", romaji: "ju", group: "yoon" },
  { kana: "じょ", romaji: "jo", group: "yoon" },

  { kana: "びゃ", romaji: "bya", group: "yoon" },
  { kana: "びゅ", romaji: "byu", group: "yoon" },
  { kana: "びょ", romaji: "byo", group: "yoon" },

  { kana: "ぴゃ", romaji: "pya", group: "yoon" },
  { kana: "ぴゅ", romaji: "pyu", group: "yoon" },
  { kana: "ぴょ", romaji: "pyo", group: "yoon" },
];