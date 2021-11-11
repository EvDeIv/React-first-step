import TailwindColor from "@videsk/tailwind-random-color";

function StatisticSection({ title, stats }) {
  return (
    <section className=" inline-block">
      {title ? (
        <h2 className="block text-center p-3 font-semibold bg-yellow-100">
          {title}
        </h2>
      ) : (
        false
      )}

      <ul className="flex">
        {stats.map((el) => (
          <li
            className={`flex flex-col justify-center items-center p-3 ${new TailwindColor().pick()}`}
            key={el.id}
          >
            <span className="text-sm text-white">{el.label}</span>
            <span className="text-white">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticSection;
