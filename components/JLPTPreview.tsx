import Link from "next/link";

export default function JLPTPreview() {
  const rows = [
    ["日", "Sun / Day", "ニチ", "ひ"],
    ["月", "Moon / Month", "ゲツ", "つき"],
    ["火", "Fire", "カ", "ひ"],
    ["水", "Water", "スイ", "みず"],
    ["木", "Tree", "モク", "き"],
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl md:text-2xl font-bold">
          JLPT N5 Kanji Preview
        </h2>

        <Link
          href="/jlpt/n5"
          className="text-green-700 font-semibold text-xs md:text-sm"
        >
          View All →
        </Link>

      </div>

      <div className="overflow-x-auto bg-white rounded-2xl border">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-2 py-2 text-left text-xs md:text-sm">
                Kanji
              </th>

              <th className="px-2 py-2 text-left text-xs md:text-sm">
                Meaning
              </th>

              <th className="px-2 py-2 text-left text-xs md:text-sm">
                Onyomi
              </th>

              <th className="px-2 py-2 text-left text-xs md:text-sm">
                Kunyomi
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row) => (

              <tr
                key={row[0]}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-2 py-2 text-xl md:text-2xl font-medium">
                  {row[0]}
                </td>

                <td className="px-2 py-2 text-xs md:text-sm">
                  {row[1]}
                </td>

                <td className="px-2 py-2 text-xs md:text-sm">
                  {row[2]}
                </td>

                <td className="px-2 py-2 text-xs md:text-sm">
                  {row[3]}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}