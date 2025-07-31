import { Search } from "lucide-react";
export default function Topbar() {
    return (
      <div className="flex items-center justify-between bg-white p-4  mb-4">
        {/* Greeting */}
        <div>
        <h1 className="font-bold pb-3">Welcome, Intern!</h1>
        <p className="text-lg text-gray-800 font-semibold text-left">Your dashboard is ready</p>
      </div>

  
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text" placeholder="Search interns"
            className="border border-gray-300 px-4 py-3 pr-10 rounded-sm focus:outline-none focus:ring-2 w-96 flex-grow"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

  
        {/* Profile Picture */}
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    );
  }
  