import SideBar from "../components/SideBar";

export default function Create() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md mt-8">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Nombre</span>
            <input
              type="text"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">¿De qué tipo es?</span>
            <select className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0">
              <option>Tipos 1</option>
              <option>Tipo 2</option>
              <option>Tipo 3</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Descripción</span>
            <textarea
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              rows="3"
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="text-gray-700 bg-gray-200 border-transparent rounded focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                  />
                  <span className="ml-2">Añadir foto</span>
                </label>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="mt-2">
              <button className="w-20 text-white rounded-lg shadow-lg bg-slate-500 hover:text-black hover:bg-primary hover:shadow-2xl">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

Create.getLayout = function getLayout(page) {
  return (
    <div className="flex flex-col h-screen">
      <SideBar />
      {page}
    </div>
  );
};
