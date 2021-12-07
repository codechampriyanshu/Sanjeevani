import React from 'react'
import {Link} from 'react-router-dom'
export default function Log() {
    return (
    <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form className="px-12 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
            <div
              className="flex justify-center py-2 mb-4 text-2xl text-gray-800 border-b-2"
            >
            Login
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                for="username"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autofocus
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                for="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="inline-block px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
              <Link
                className="inline-block text-sm font-normal text-blue-500 align-baseline hover:text-blue-800"
                to="#"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
}


