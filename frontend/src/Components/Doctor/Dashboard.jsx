import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Dashboard({ person }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle,setToggle]=useState(false)
  useEffect(() => {
    fetch(`http://localhost:8080/user/${person}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setUser({ ...res });
        setLoading(false);
      })
      .catch((e) => {
        window.alert("error occured: ", e);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <header className="flex items-center justify-between w-full p-4 bg-slate-100">
        <nav className="flex items-center">
          <img
            src="/images/logo.jpg" className="hidden w-10 h-10 select-none rounded-2xl sm:block" alt="logo"/>
          <div className="hidden ml-2 text-xs text-slate-900 sm:block">
            <Link
              to="/"
              className="p-2 rounded cursor-pointer bg-slate-100 hover:bg-slate-600 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/appointment"
              className="p-2 ml-1 rounded cursor-pointer bg-slate-100 hover:bg-slate-600 hover:text-white"
            >
              Appointments
            </Link>
            <Link
              to=""
              className="p-2 ml-1 rounded cursor-pointer bg-slate-100 hover:bg-slate-600 hover:text-white"
            >
              Patients
            </Link>
            <Link
              to=""
              className="p-2 ml-1 rounded cursor-pointer bg-slate-100 hover:bg-slate-600 hover:text-white"
            >
              Notifications
            </Link>
          </div>
        </nav>
        {!loading && (
          <div className="w-8 h-8 cursor-pointer">
            <img
              src={user ? user.photo : ""}
              alt="your photo"
              className="rounded-full"
            />
          </div>
        )}
      </header>
      {loading && (
        <div className="text-xl text-center text-green-500">Loading...</div>
      )}
      {!loading && (
          
        <main className="flex w-full h-screen">
            <button className="absolute z-50 left-3 top-3" onClick={()=>setToggle(!toggle)}><svg  xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:hidden fill-blue-500 " viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={(toggle?"translate-x-0 ":"-translate-x-72 ")+" duration-500 flex flex-col pt-24 fixed sm:hidden top-0 left-0 h-full w-72 z-40 bg-black text-white opacity-90"}>
            <div className="flex flex-col justify-between h-screen p-4 bg-slate-800">
              <div className="text-sm">
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Backlog
                </div>
                <div className="flex items-center justify-between p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  <span>Notifications</span>
                  <span className="w-4 h-4 text-xs font-normal text-center bg-blue-600 rounded-full text-slate-900">
                    5
                  </span>
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Community
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Something
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Something
                </div>
              </div>

              <div className="flex p-3 text-sm text-center bg-red-500 rounded cursor-pointer text-slate-900">
                <button className="inline-flex items-center rounded">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            </div>
            </div>
          <aside className="hidden h-screen shadow-md w-80 bg-gray w-fulll sm:block">
            <div className="flex flex-col justify-between h-screen p-4 bg-slate-50">
              <div className="text-sm">
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Backlog
                </div>
                <div className="flex items-center justify-between p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  <span>Notifications</span>
                  <span className="w-4 h-4 text-xs font-normal text-center bg-blue-600 rounded-full text-slate-900">
                    5
                  </span>
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Community
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Something
                </div>
                <div className="p-2 mt-2 rounded cursor-pointer bg-slate-100 text-slate-900 hover:bg-gray-700 hover:text-blue-300">
                  Something
                </div>
              </div>

              <div className="flex p-3 text-sm text-center bg-red-500 rounded cursor-pointer text-slate-900">
                <button className="inline-flex items-center rounded">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            </div>
          </aside>

          <section className="w-full p-4">
                <div className="flex flex-col items-center w-full font-serif">
                  <img src={user.photo} className="mt-2 rounded-xl w-28 " />
                  <span className="py-1 md:py-2">{user.name}</span>
                  <span className="py-1 md:py-2">
                    {user.age} years old, {user.gender}
                  </span>
                  <span className="py-1 md:py-2">from {user.city}</span>
                  <span className="py-1 md:py-2">Email: {user.email}</span>
                  <Link
                    className="px-2 py-1 text-white bg-green-500 rounded-lg"
                    to={`/profile/update/`}
                  >
                    Update profile
                  </Link>
                </div>
          </section>
        </main>
      )}
    </div>
  );
}
