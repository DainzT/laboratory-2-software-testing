import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginBG from "../assets/LoginBG.png";
import axios, { AxiosError } from "axios";
import { LoginFormsInputs, Props } from "../types/LoginTypes";
import { supabase } from "../SupabaseClient";

// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage: React.FC<Props> = () => {
  const [error, setError] = useState<string | null>(null); // Track error message
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({
    resolver: yupResolver(validationSchema),
  });

  const handleLogin = async (form: LoginFormsInputs) => {
    try {
      // Try to log in using Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.userName, // Using email for login
        password: form.password,
      });
  
      if (data?.session) {
        // If Supabase login is successful
        alert("Login successful with Supabase!");
        navigate("/dashboard");
      } else if (error) {
        // If there is an error with Supabase login, try the backend API
        alert(error.message);
  
        const response = await axios.post("http://localhost:3002/login/login", {
          userName: form.userName,
          password: form.password,
        });
  
        if (response.data.token) {
          // Store JWT token in sessionStorage from backend
          sessionStorage.setItem("token", response.data.token);
  
          // Navigate to dashboard
          alert("Login successful! Redirecting to dashboard...");
          navigate("/dashboard");
        }
      }
    } catch (error: unknown) {
      // Type-safe error handling for Axios errors
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        alert(axiosError.response?.data?.message || "Something went wrong");
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <section
      className="h-screen flex items-center justify-center"
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
            <p className="text-left font-light text-white mb-5">
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
                  className="bg-[#719191] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName && <p className="text-white">{errors.userName.message}</p>}
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
                  {...register("password")}
                />
                {errors.password && <p className="text-white">{errors.password.message}</p>}
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-[#719191] justify-center hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-3xl"
                >
                  Log in
                </button>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm font-light text-white">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
  );
};

export default LoginPage;
