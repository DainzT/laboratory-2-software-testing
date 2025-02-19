import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Avatar, { UserData } from "../components/AvatarModal";
import Clock from "../components/ClockComponent";

const ClockPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<UserData | undefined>({ name: "Jane Doe", email: "jane@example.com" });

  const [currentPage, setCurrentPage] = useState<("home" | "about" | "team" | "contact")[]>(["home"]);

  return (
    <div className={`bg-[#719191] min-h-screen`}> 
      <HeaderComponent
        currentPage={currentPage}
        setCurrentPage={(page) => setCurrentPage([page])}
        user={user}
        darkMode={darkMode}
      />
      <div className="opacity-70">
        <Avatar user={user} />
      </div>


      <div className="flex justify-center items-center h-screen">
        <Clock darkMode={darkMode} size="large" />
      </div>
    </div>
  );
};

export default ClockPage;
