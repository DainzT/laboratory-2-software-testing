import {User, Moon, Settings } from "lucide-react";
import {UserData} from "../AvatarModal"

interface DropdownMenuProps {
  user: UserData;
  onSettingsClick: () => void;
  onLogout: () => void;
}

const DropdownMenuProps = ({ user, onSettingsClick, onLogout }: DropdownMenuProps) => (
  <div className="
    absolute
    right-0 top-12 
    w-56 
    rounded-lg border bg-white shadow-lg
  ">
    {/* Profile Section */}
    <div className="flex items-center border-b p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-[#354F52]">
        <User className="h-6 w-6" />
      </div>
      <div className="ml-3">
        <p className="font-medium text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-500 cursor-pointer" title={user.email}>
          {user.email.length > 5 ? `${user.email.substring(0, 5)}...@gmail.com` : user.email}
        </p>
      </div>
    </div>

    {/* Dropdown Options */}
    <ul className="py-2">
      <li className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100" onClick={onSettingsClick}>
        <Settings className="mr-2 h-5 w-5 text-gray-700" />
        Settings
      </li>
      <li className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
        <Moon className="mr-2 h-5 w-5 text-gray-700" />
        Darkmode
      </li>
    </ul>

    {/* Footer Options */}
    <ul className="border-t">
      <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={onLogout}>
        Log out
      </li>
    </ul>
    <ul className="border-t">
      <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
        Privacy Policy
      </li>
      <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
        Help and Feedback
      </li>
    </ul>
  </div>
);

export default DropdownMenuProps;
