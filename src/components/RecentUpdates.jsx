import { updates } from '../data/tasks.js'
import { ArrowRight } from 'lucide-react'

export default function RecentUpdates() {
  
    return (
      <div className="bg-[#f3f6f8]  p-4 ">
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-left ml-4">Recent Updates</h2>
        <ul className="height-auto">
          {updates.map((update, index) => (
            <li key={index} className="flex items-center justify-between border border-gray-200 p-4 m-4">
              <div className="flex items-center justify-between w-full">
                <img
                  src={update.avatar}
                  alt={update.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="text-sm font-semibold text-gray-900">{update.name}</span>{" "}
                    {update.action}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 ml-4 text-gray-400" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  