import { DotsVerticalIcon } from "@heroicons/react/solid";

const LicensesState = ({ statusDistribution }) => {
  return (
    <>
      <div className="bg-gray-800 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-white">
            Estado de Licencias
          </h2>
          <button className="text-gray-400 hover:text-white">
            <DotsVerticalIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center my-6">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4b5563"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#activity-gradient)"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="125.6"
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient
                  id="activity-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-white">
                {statusDistribution.percentage}
              </div>
              <div className="text-xs text-gray-400">
                {statusDistribution.period}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {statusDistribution.metrics.map((metric, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  index === 0
                    ? "bg-green-400"
                    : index === 1
                    ? "bg-yellow-400"
                    : index === 2
                    ? "bg-red-400"
                    : "bg-indigo-400"
                }`}
              />
              <div className="ml-2">
                <div className="text-xs text-gray-400">{metric.name}</div>
                <div className="text-sm font-medium text-white">
                  {metric.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LicensesState;
