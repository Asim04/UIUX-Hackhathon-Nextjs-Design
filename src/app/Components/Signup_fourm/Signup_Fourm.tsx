import React from "react";

const SignUpForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Remember me?</span>
          </label>
          <button className="w-full bg-orange-500 text-white py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-gray-500 hover:text-orange-500">
          Forgot password?
        </a>
        <div className="text-gray-500 my-2">OR</div>
        <div className="flex space-x-2 justify-center">
          <button className="bg-gray-100 py-2 px-4 rounded-md">Sign up with Google</button>
          <button className="bg-gray-100 py-2 px-4 rounded-md">Sign up with Apple</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
