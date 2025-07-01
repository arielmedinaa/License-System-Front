
const ModalNewCli = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-slate-700/70 bg-opacity-10"
            onClick={() => setShowModal(false)}
          ></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Crear Nuevo Usuario
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="user-name"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Nombre del usuario"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="user-email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="user-password"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="user-password"
                      className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="user-role"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Rol
                    </label>
                    <select
                      id="user-role"
                      className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="user">Usuario</option>
                      <option value="admin">Administrador</option>
                      <option value="manager">Gerente</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="create-license"
                      name="create-license"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-700"
                    />
                    <label
                      htmlFor="create-license"
                      className="ml-2 block text-sm text-gray-300"
                    >
                      Crear licencia automáticamente
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Crear
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewCli;
