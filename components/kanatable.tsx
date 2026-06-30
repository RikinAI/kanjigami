type KanaRow = {
  row: string;
  chars: {
    kana: string;
    romaji: string;
  }[];
};

type KanaTableProps = {
  title: string;
  description: string;
  headers: string[];
  data: KanaRow[];
};

export default function KanaTable({
  title,
  description,
  headers,
  data,
}: KanaTableProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-1">
        {title}
      </h2>

      <p className="text-center text-slate-600 mb-4">
        {description}
      </p>

      <div className="max-w-5xl mx-auto">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full min-w-[650px]">

            <thead className="bg-slate-100">
            <tr>
                <th className="w-14 px-2 py-3"></th>

                {headers.map((header, index) => (
                <th
                    key={index}
                    className="px-2 py-3 text-sm font-semibold text-slate-700"
                >
                    {header}
                </th>
                ))}
            </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-slate-200"
                >
                  <td className="bg-slate-50 text-center font-bold text-slate-700">
                    {row.row}
                  </td>

                  {row.chars.map((char, index) => (
                    <td
                      key={index}
                      className="py-2 text-center hover:bg-orange-50 transition-colors"
                    >
                      {char.kana && (
                        <>
                          <div className="text-2xl md:text-3xl font-bold text-slate-900">
                            {char.kana}
                          </div>

                          <div className="text-sm text-slate-600">
                            {char.romaji}
                          </div>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}