import { menuItems } from '../data/tasks.js';
import * as Icons from 'lucide-react'; // Import all icons as a map

export default function InternList() {
  return (
    <div className="bg-[#f3f6f8] p-4 shadow-md h-full flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Intern profiles</h2>

      {/* Menu Items */}
      <ul className="space-y-3">
        {menuItems.map((item, index) => {
          const LucideIcon = Icons[item.icon]; // dynamically get icon component

          return (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4"
            >
              {LucideIcon && <LucideIcon size={18} />}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      {/* Add Button */}
      <button className="mt-6 bg-[#7199e2] text-white px-4 py-2 hover:bg-[#5d83d0] transition">
        + Add Intern
      </button>
    </div>
  );
}
