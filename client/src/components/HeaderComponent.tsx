import React from "react";

interface HeaderComponentProps {
  currentPage: ("home" | "about" | "team" | "contact")[];
  setCurrentPage?: (page: "home" | "about" | "team" | "contact") => void;
  user?: { name: string } | null;
  darkMode?: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  currentPage,
  setCurrentPage,
  user,
  darkMode = false,
}) => {
  const bgColor = darkMode ? "bg-gray-900" : "bg-[#719191]";
  const textColor = darkMode ? "text-white" : "text-white";
  const buttonBg = darkMode ? "bg-gray-700" : "bg-white";
  const buttonText = darkMode ? "text-white" : "text-[#719191]";
  const hoverBg = darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300";
  const activeBg = darkMode ? "active:bg-gray-500" : "active:scale-90";

  return (
    <header
      className={`absolute flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-16 xl:px-20 xl:h-24 transition-all duration-300 shadow-md ${bgColor}`}
    >
      <nav className="flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
        {["home", "about", "team", "contact"].map(
          (page) =>
            currentPage.includes(
              page as "home" | "about" | "team" | "contact"
            ) && (
              <button
                key={page}
                onClick={() => setCurrentPage?.(page as "home" | "about" | "team" | "contact")}
                className={`px-4 py-2 ${buttonBg} ${buttonText} rounded-lg shadow-md transition-all duration-200 ${hoverBg} ${activeBg} border border-gray-300 font-medium text-lg md:text-xl lg:text-2xl xl:text-xl ${
                  currentPage.includes(
                    page as "home" | "about" | "team" | "contact"
                  )
                    ? "underline"
                    : ""
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            )
        )}
      </nav>

      <div className={`p-4 text-lg md:text-2xl lg:text-3xl xl:text-2xl ${textColor}`}>
        {user ? (
          <span className="font-semibold">Welcome, {user.name}!</span>
        ) : (
          <div className="flex space-x-4">
            <button className={`px-4 py-2 ${buttonBg} ${buttonText} rounded-lg shadow-md transition-all duration-200 ${hoverBg} border ${activeBg} border-gray-300`}>
              Login
            </button>
            <button className={`px-4 py-2 ${bgColor} text-white border border-white rounded-lg shadow-md transition-all duration-200 active:scale-90 hover:brightness-110`}>
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
