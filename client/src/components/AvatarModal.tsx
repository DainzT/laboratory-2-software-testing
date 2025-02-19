import { useState, useEffect } from "react";
import {User, Moon, Settings } from "lucide-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LogInOut from "./logInOutComponent";
import { toast, ToastContainer } from "react-toastify";
import SettingPageModal from "./avatar/SettingsModal";
import DropdownMenu from "./avatar/DropDownMenu"

export interface UserData {
  name: string;
  email: string;
}
interface AvatarProps {
  user?: UserData;
  onClick?: () => void;
}

const Avatar = ({ user: propUser, onClick }: AvatarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (onClick) {
      onClick(); 
    }
  };

  const fetchUserData = async () => {
    if (!token) {
      console.warn("No token found, skipping user data fetch.");
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/avatar/getUser`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data) {
        setFetchedUser({ name: response.data.user_name, email: response.data.user_email });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (!propUser && !fetchedUser) {
      fetchUserData();
    }
  }, [propUser]); 

  const user = propUser || fetchedUser || { name: "", email: "" };

  const handleLogout = async () => {
    setLoading(true); 
    try {
      // Simulate an async operation (e.g., API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.removeItem("token");
      toast.info("You are being logged out. Redirecting to the login page...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoading(false)
      console.error("Logout failed:", error);
    } 
  };
  
  return (
    <>
      <ToastContainer
        position="top-center" // This makes the toast appear at the top center
        autoClose={3000} // Adjust the auto-close time if needed
        hideProgressBar={false} // Show the progress bar
        newestOnTop={true} // New toasts appear at the top of the stack
        closeOnClick // Close on click
        rtl={false} // Set to true for right-to-left layout
        pauseOnFocusLoss
        draggable
      />
      {loading && (
      <LogInOut/>
      )}
   
      {/* Top-right section for Bell and Profile */}
      <div className="
      fixed 
      right-[1rem] top-9
      sm:right-[2rem] sm:top-9
      lg:right-12 lg:top-9 
      xl:right-12 xl:top-9
      items-center space-x-4 lg:flex z-50"
      >
      <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <User className="h-7 w-7 text-[#354F52]" />
          </button>
          {openSettings && 
             <SettingPageModal
                onClose={() => setOpenSettings(false)}
                fetchUserData={fetchUserData}
              />
          } 
          {isDropdownOpen && (
           <DropdownMenu user={user} onSettingsClick={() => setOpenSettings(true)} onLogout={handleLogout} />
          )}
        </div>
      </div>
    </>
  );
};

export default Avatar;
