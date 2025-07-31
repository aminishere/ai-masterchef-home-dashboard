import { Home, Users, ClipboardList, Settings , MessagesSquare , ListTodo , ClipboardPenLine , ChartSpline ,Shield  , LogOut , SlidersHorizontal ,CircleUser  } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 flex flex-col border-r border-gray-200">
      <div className="flex flex-col flex-1 bg-[#f3f6f8] p-3">
        <nav className="flex flex-col space-y-4 text-gray-700">
          <SidebarItem icon={<MessagesSquare size={20} />}  />
          <SidebarItem icon={<Home size={20} />}  active />
          <SidebarItem icon={<Users size={20} />}  />
          <SidebarItem icon={<ClipboardList size={20} />}  />
          <SidebarItem icon={<Users size={20} />}  />
          <SidebarItem icon={<ListTodo size={20} />}  />
          {/*line*/}
          <div className="border-t border-gray-200 my-4"></div>
          <SidebarItem icon={<Settings size={20} />}  />
          <SidebarItem icon={<ChartSpline size={20} />}  />
          <SidebarItem icon={<Shield size={20} />}  />
          <SidebarItem icon={<MessagesSquare size={20} />}  />
          <SidebarItem icon={<CircleUser size={20} />}  />
          <div className="border-t border-gray-200 my-4"></div>
          <SidebarItem icon={<SlidersHorizontal size={20} />}  />
          <SidebarItem icon={<LogOut size={20} />}  />
        </nav>
      </div>
    </div>
  );

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer 
      ${active ? "bg-blue-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
}
