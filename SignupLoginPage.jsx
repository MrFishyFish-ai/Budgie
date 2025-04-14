import React from "react";

export default function SignupLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Budgie</h1>
        <p className="text-center text-gray-500 mb-6">
          Your AI Budgeting Assistant
        </p>

        <h2 className="text-xl font-semibold mb-4 text-center">Let’s Get Started</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
          >
            🔐 Login
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">or</div>

        <div className="space-y-3">
          <button className="w-full border border-gray-300 rounded-xl py-2 flex justify-center items-center space-x-2 hover:bg-gray-100">
            <span>Continue with Google</span>
          </button>
          <button className="w-full border border-gray-300 rounded-xl py-2 flex justify-center items-center space-x-2 hover:bg-gray-100">
            <span>Continue with Apple</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          New here? <a href="#" className="text-blue-500 hover:underline">Create an account</a>
        </p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">Step 2 of 4</p>
        <div className="flex justify-center space-x-2 mt-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
