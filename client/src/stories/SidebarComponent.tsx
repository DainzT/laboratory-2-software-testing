import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Circle } from "lucide-react";
import logo from "../assets/petuon_logo.png";
import background from "../assets/BG.png";

export interface SidebarProps {
  isMobile?: boolean;
  addButtons?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobile = false, addButtons = 6 }) => {
  // const location = useLocation();
  // const isActive = (path: string) => location.pathname === path;
  
  const maxButtons = 6;
  const limitedButtons = Math.min(addButtons, maxButtons);
  const paths = Array.from({ length: limitedButtons }, (_, index) => `/page${index}`);

  return (
    <div
      className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-cover bg-center bg-repeat lg:flex"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} className="fixed justify-self-center " alt="Logo" />
      {!isMobile ? (
        <div className="fixed left-4 top-44 flex flex-col space-y-5">
          {paths.map((path) => (
            <Link
              key={path}
              to={path}
            >
              <div>
                <Circle
                  size={38}
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          {paths.map((path) => (
            <Link key={path} to={path}>
              <div>
                <Circle />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
