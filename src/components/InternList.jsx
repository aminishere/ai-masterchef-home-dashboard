import { menuItems } from '../data/tasks.js';
import * as Icons from 'lucide-react'; // Import all icons as a map
import { Link } from 'react-router-dom';

export default function InternList() {
  return (
    <div className="bg-[#f3f6f8] p-4 shadow-md h-full flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Intern profiles</h2>

      {/* Menu Items */}
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4">
          <Icons.Users size={18} />
          <span>Intern Performance Reviews</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4">
          <Icons.Users size={18} />
          <span>New Intern Applications</span>
        </li>
        <Link to="/intern-list" className="block">
          <li className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4">
            <Icons.ListTodo size={18} />
            <span>Intern task management</span>
          </li>
        </Link>
        <li className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4">
          <Icons.Briefcase size={18} />
          <span>Intern Attendance Log</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition border-b border-gray-200 pb-4 mb-4">
          <Icons.ChartSpline size={18} />
          <span>Performance Metrics 2024</span>
        </li>
      </ul>

      {/* Add Button */}
      <button className="mt-6 bg-[#7199e2] text-white px-4 py-2 hover:bg-[#5d83d0] transition">
        + Add Intern
      </button>
    </div>
  );
}
