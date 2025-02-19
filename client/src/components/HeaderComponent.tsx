import React from "react";

interface HeaderComponentProps {
  currentPage: ("landing" | "about" | "team" | "contact")[];
  setCurrentPage?: (page: "landing" | "about" | "team" | "contact") => void;
  user?: { name: string } | null;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  currentPage,
  setCurrentPage,
  user,
}) => {
  return (
    <header
      className={`absolute flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-16 xl:px-20 xl:h-24 transition-all duration-300 shadow-md bg-[#719191]`}
    >
      <nav className="flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
        {[
          "landing",
          "about",
          "team",
          "contact"
        ].map(
          (page) =>
            currentPage.includes(
              page as "landing" | "about" | "team" | "contact"
            ) && (
              <button
                key={page}
                onClick={() => setCurrentPage?.(page as "landing" | "about" | "team" | "contact")}
                className={`px-4 py-2 bg-white text-[#719191] rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 active:scale-90 border border-gray-300 font-medium text-lg md:text-xl lg:text-2xl xl:text-xl ${
                  currentPage.includes(
                    page as "landing" | "about" | "team" | "contact"
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

      <div className="p-4 text-white text-lg md:text-2xl lg:text-3xl xl:text-2xl">
        {user ? (
          <span className="font-semibold">Welcome, {user.name}!</span>
        ) : (
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white text-[#719191] rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 border active:scale-90 border-gray-300">
              Login
            </button>
            <button className="px-4 py-2 bg-[#719191] text-white border border-white rounded-lg shadow-md transition-all duration-200 active:scale-90 hover:bg-[#5f7f7f]">
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
