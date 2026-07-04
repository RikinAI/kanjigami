export interface KanaCharacter {
  kana: string;
  romaji: string;
  group: "basic" | "dakuten" | "handakuten" | "yoon";
}