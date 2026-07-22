import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BookContext } from "../../context/BookProvider";

export default function PageToRead() {
  const { readList } = useContext(BookContext);

  const chartData = readList.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pages to Read</h1>

      {chartData.length === 0 ? (
        <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
          <h2 className="font-bold text-3xl">No Read List Data Found!</h2>
        </div>
      ) : (
        <section className="bg-base-200 rounded-xl p-4 md:p-8">
          <h2 className="text-xl font-semibold mb-6">
            Pages in your read list
          </h2>
          <div className="h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 8, right: 16, left: 8, bottom: 72 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar
                  dataKey="pages"
                  name="Total pages"
                  fill="#22c55e"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}
    </main>
  );
}
