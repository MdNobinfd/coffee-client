import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const usser = use(AuthContext)
  console.log(usser)
  return (
    <section className="container mx-auto">
          <div className="my-[50px]">
            <Link to="/" className="text-[30px] font-rancho">
              Back To Home
            </Link>
          </div>
    <div className='className="mx-4 xl:w-5/12 lg:w-7/12 md:w-10/12 md:mx-auto text-white rounded-2xl lg:py-[88px] py-8 lg:px-[73px] px-8 bg-[#372727] mt-20'>
      <form
        // onSubmit={handleSignin}
        className="flex flex-col space-y-3.5 mt-[50px]"
        >
        <label htmlFor="">Email</label>
        <input
          type=""
          name="email"
          //   ref={emailRef}
          className="p-5  rounded-md text-base border  border-white focus-within:outline-0 "
          placeholder="Enter your email address"
          />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="p-5  rounded-md text-base border  border-whitefocus-within:outline-0 "
          placeholder="Enter your password"
          />
        <p
          //   onClick={hanldePasswordReset}
          className="underline cursor-pointer text-base"
          >
          Forget Password
        </p>
        {/* {
          errormessage &&
          <p className="text-red-500 text-xl font-bold bg-white/80 rounded-2xl py-1 text-center px-4 capitalize ">{errormessage}</p>
          } */}
        <button
          className="cursor-pointer text-base font-semibold py-4 px-4 bg-white text-black rounded-xl border border-white/50"
          type="submit"
          >
          Login
        </button>
      </form>

      <button
        // onClick={handleGoogleLogin}
        className="cursor-pointer flex items-center justify-center gap-x-2 mt-4 text-base font-semibold py-3 px-4 bg-white text-black rounded-xl w-full"
        >
        <FcGoogle size={32} />
        Google Login
      </button>
      <p className="text-base mt-5">
        You have no account? please{" "}
        <Link to="/signup" className="text-yellow-500 pl-2 underline">
          Register
        </Link>
      </p>
    </div>
          </section>
  );
};

export default SignIn;
