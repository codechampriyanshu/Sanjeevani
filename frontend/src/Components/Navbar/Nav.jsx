import React from "react";

function Nav() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8"
                  src="../images/logo.jpg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Reports
            </a>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}
export default Nav;
