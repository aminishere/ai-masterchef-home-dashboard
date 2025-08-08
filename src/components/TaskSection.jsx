import React from "react";
import { CheckCircle, Clock8, Calendar, Trash2, StickyNote } from "lucide-react";

const TaskSection = ({ completedTasks, activeTasks, title, color, icon: Icon }) => {
  const tasks = completedTasks || activeTasks || [];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Icon size={20} className={color} />
        <h3 className={`${color} font-semibold`}>
          {title} ({tasks.length})
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-sm p-4 shadow-md"
          >
            {/* Header Row with Delete Button */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <h4 className="text-md font-semibold">{task.title}</h4>
                <span
                  className={`text-white text-xs px-2 py-1 rounded flex items-center gap-1 ${color.replace(
                    "text-",
                    "bg-"
                  )}`}
                >
                  <Icon size={14} /> {task.status}
                </span>
              </div>

              {/* Delete icon */}
              <Trash2 size={16} />
            </div>

            {/* Completed Date / Deadline */}
            {completedTasks && task.completedDate && (
              <p className="text-sm text-gray-400 flex items-center gap-2 pb-3">
                <Calendar size={14} /> Completed: {task.completedDate}
              </p>
            )}

            {activeTasks && task.deadline && (
              <p className="text-sm text-gray-400 flex items-center gap-2 pb-3">
                <Calendar size={14} /> Deadline: {task.deadline}
              </p>
            )}

            {/* Time Worked */}
            <p className="text-sm text-gray-400 flex items-center gap-2 pb-3">
              <Clock8 size={14} /> Time Worked: {task.timeWorked}
            </p>

            {/* Notes for Completed Tasks */}
            {completedTasks && task.notes && (
                <p className="bg-gray-800 rounded p-4 text-sm text-gray-300 flex items-center gap-2 border border-gray-700">
                <StickyNote size={14} /> {task.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskSection;
