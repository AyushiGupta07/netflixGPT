import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_small.jpg"
          alt="Login Background"
        />
      </div>
      <form className="w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="my-2 p-3 w-full bg-gray-800"
        ></input>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="name"
            className="my-2 p-3 w-full bg-gray-800"
          ></input>
        )}

        <input
          type="password"
          placeholder="Password"
          className="my-2 p-3 w-full bg-gray-800"
        ></input>
        <button className="bg-red-700 p-3 text-white my-6 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer"
          onClick={toggleSignUpForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already register Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
