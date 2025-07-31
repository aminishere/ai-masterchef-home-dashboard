import { tasks } from '../data/tasks.js'

export default function PendingTasks() {

  return (
    <div className="bg-[#f3f6f8] p-4 ">
      <h2 className="text-lg font-semibold mb-4 p-4">Pending tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4.5 bg-green-500 border-white rounded-md"></span>
              <span className="text-sm text-gray-500 pl-6">{task}</span>
            </div>
            <span className="text-sm text-gray-500">• Today</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
