"use client";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import ig from "../../public/images/ig.png";
import facebook from "../../public/images/facebook.png";
import google from "../../public/images/google.png";
import { useRouter } from "next/navigation";
import { LoginUser } from "@/lib/actions";
import { BeatLoader } from "react-spinners";
import { NAVIGATION, User, USER_AUTHORITES } from "@/types/index";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setErrorMessage] = useState<String>("");
  const [submissionPending, setSubmissionPending] = useState<boolean>(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Set button pending state
    setSubmissionPending(true);

    // Clear error messages
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Incomplete credentials");
      return;
    }

    (async function () {
      try {
        const user: User = await LoginUser({ email, password });

        console.log(user);

        if (user) {
          // Retrieve roles
          const authorities = user.authorities[0]?.authority.split(" ");
          console.log(authorities);

          // Admin page
          if (authorities.includes(USER_AUTHORITES.ADMIN)) {
            router.push(NAVIGATION.ADMIN);
            return;
          }

          // Vendor page
          if (authorities.includes(USER_AUTHORITES.VENDOR)) {
            router.push(NAVIGATION.VENDOR);
            return;
          }

          // User page
          if (authorities.includes(USER_AUTHORITES.USER)) {
            router.push(NAVIGATION.USER);
            return;
          }

          // User page
          throw new Error("User role not found!");
        }
      } catch (error) {
        setErrorMessage("Error validating credentials!");
        // Clear pending state
        setSubmissionPending(false);
      }
    })();
  }
  return (
    <main className="flex min-h-screen justify-center items-center flex-1 ">
      <div className="flex flex-1 w-1/2 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-0 xl:px-0 ">
        <div className="mx-auto w-full lg:w-[500px] bg-white rounded-xl px-10">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-appBlack">
              Welcome back!!!
            </h2>
            <p className="mt-2 text-base leading-6 text-appTitleBgColor font-bold">
              LogIn with your personal info
            </p>
          </div>

          <div className="mt-5 pb-14">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-xs text-right text-error">{error}</p>}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="***********************"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="agree-me"
                      name="agree-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 font-bold block text-sm leading-6 text-gray-700"
                    >
                      I agree to{" "}
                      <span className="text-appRed"> Term of Use </span>
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <Link
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      {/* Forgot password? */}
                    </Link>
                  </div>
                </div>

                <button
                    className="bg-ecobankBlue rounded w-[90vw] max-w-[340px] py-3 mt-8 text-sm text-white focus:outline-none"
                    type="submit"
                    disabled={submissionPending}
                >
                    {" "}
                    {submissionPending ? (
                        <BeatLoader
                            color={"#ffffff"}
                            loading={true}
                            cssOverride={override}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        "Log in"
                    )}
                </button>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-appTitleBgColor px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="px-6 text-gray-900">Or SignIn with </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-4 ">
                <div className="mx-auto">
                  <Link
                    href={"/"}
                    className="flex w-64 items-center justify-evenly rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Image
                      alt="banner-images"
                      src={facebook}
                      width={30}
                      height={30}
                    />
                    <span className="text-sm font-semibold leading-6">
                      Sign Up with Facebook
                    </span>
                  </Link>
                </div>
                <div className="mx-auto">
                  <Link
                    href={"/"}
                    className="flex w-64 items-center justify-evenly rounded-md bg-appRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Image
                      alt="banner-images"
                      src={google}
                      width={30}
                      height={30}
                      className="md:ml-[-10px]"
                    />
                    <span className="text-sm font-semibold leading-6">
                      Sign Up with G-Mail
                    </span>
                  </Link>
                </div>
                <div className="mx-auto">
                  <Link
                    href={"/"}
                    className="flex w-64 items-center justify-evenly rounded-md bg-appTitleBgColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Image
                      alt="banner-images"
                      src={ig}
                      width={30}
                      height={30}
                    />
                    <span className="text-sm font-semibold leading-6">
                      Sign Up with Instagram{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="relative w-full">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="px-6 text-gray-900">
                      Create Account Or Forget Password{" "}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6 ">
                  <div className="mx-auto">
                    <Link
                      href={"/"}
                      className="flex w-64 items-center justify-evenly rounded-md bg-appTitleBgColor px-3 py-1.5 text-sm font-semibold leading-6 text-appWhite shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span className="text-sm font-semibold leading-6">
                        Create Account
                      </span>
                    </Link>
                  </div>
                  <div className="mx-auto">
                    <Link
                      href={"/"}
                      className="flex w-64 items-center justify-evenly rounded-md bg-appBlack px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span className="text-sm font-semibold leading-6">
                        Forget Password?{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
