import { PlusIcon } from "@heroicons/react/solid";

const TableUsuariosRecientes = ({
  handleCreateLicense,
  recentUsers,
  getStatusColor,
}) => {
  return (
    <>
      <div className="bg-gray-800 p-6 rounded-2xl lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">
              Usuarios Recientes
            </h2>
            <div className="text-xs text-gray-400">
              Últimas licencias creadas
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleCreateLicense}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Nueva Licencia
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-400 border-b border-gray-700">
                <th className="pb-3 pr-8">Usuario</th>
                <th className="pb-3 pr-8">ID</th>
                <th className="pb-3 pr-8">Email</th>
                <th className="pb-3 pr-8">Plan</th>
                <th className="pb-3 pr-8">Status</th>
                <th className="pb-3">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 last:border-0"
                >
                  <td className="py-4 pr-8">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        {user.avatar}
                      </div>
                      <span className="ml-3 text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 pr-8 text-gray-400">#{user.id}</td>
                  <td className="py-4 pr-8 text-gray-400">{user.email}</td>
                  <td className="py-4 pr-8 text-white">{user.plan}</td>
                  <td className="py-4 pr-8">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableUsuariosRecientes;
