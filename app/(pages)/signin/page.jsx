import TextField from "@/app/components/common/textField/TextField";
import Link from "next/link";
import React from "react";

function signin() {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 ">
                Email address
              </label>
              <TextField
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 ">
                  Password
                </label>
              </div>
              <TextField
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
              />
              <div className="text-sm flex justify-end mt-2">
                <p className="font-normal hover:underline cursor-pointer ">
                  Forgot password?
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#52b9c5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#479ca6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#479ca6]">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?
            <Link
              href="/signup"
              className="font-semibold leading-6 pl-2 hover:underline text-[#52b9c5]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signin;
