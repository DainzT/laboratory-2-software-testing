/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginBG from "../assets/LoginBg.png";
import axios from "axios";
import { LoginFormsInputs, Props } from "../types/LoginTypes";
import LogInOut from "../components/logInOutComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToken } from "../hooks/UseToken";

const LoginPage: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();
  const { setToken, fetchTokenFromDatabase } = useToken(); // Use the hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>();

  const handleLogin = async (form: LoginFormsInputs) => {

    setLoading(true)
    try {
        const response = await axios.post("http://localhost:3002/login/userLogin", {
          user_name: form.user_name,
          user_password: form.user_password,
        });
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          toast.success("Login successful! Redirecting to dashboard...");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Failed to retrieve token. Please try again.");
        }
      } else {
        toast.error("Login failed. User ID not returned.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Error connecting to the server.");
      } else {

        alert("An unexpected error occurred.");
      } 
    } finally {
      setLoading(false)

    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
      />

    {loading && (
      
      <LogInOut/>
    )}
   
    <section  
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${LoginBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mr-20">
        <div
          className="w-full rounded-lg shadow md:mb-20 sm:max-w-lg xl:p-0"
          style={{ backgroundColor: "rgba(88, 85, 85, 0.285)" }}
        >
          <div className="p-10 space-y-6 md:space-y-8 sm:p-12">
            <h2 className="text-4xl font-bold text-white">Welcome!</h2>
            <p className="mb-5 text-left font-light text-white">
              Ready to learn smarter? Log in to access your dashboard!
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg bg-[#719191] p-2.5 text-white sm:text-sm"
                  placeholder="Username"
                  {...register("user_name")}
                />
                {errors.user_name && <p className="text-white">{errors.user_name.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#719191] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("user_password")}
                />
                {errors.user_password && <p className="text-white">{errors.user_password.message}</p>}
              </div>
              <div className="flex items-center justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className={`justify-center rounded-3xl px-8 py-2 font-bold text-white 
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#719191] hover:bg-gray-700"}`}
                >
                  Log in
                </button>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-light text-white">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"

                  >
                    Log in
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm font-light text-white">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="text-white font-medium hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
