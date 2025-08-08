import React from "react";
import { trackData } from "../data/tasks.js";
import { CheckCircle, Clock } from "lucide-react";
import TaskSection from "../components/TaskSection.jsx";

const Track = () => {
  return (
    <div className="w-screen min-h-screen bg-[#5e6e88] text-white p-6 grid grid-cols-1 gap-4 mb-0 mt-0 ml-0 mr-0 ">

      <h2 className="text-xl font-bold mb-4">
        {trackData.name} - Detailed Track Record
      </h2>

      <TaskSection
        title="Completed Tasks"
        color="text-green-400"
        icon={CheckCircle}
        completedTasks={trackData.completedTasks}
      />

      <TaskSection
        title="Active Tasks"
        color="text-yellow-400"
        icon={Clock}
        activeTasks={trackData.activeTasks}
      />
    </div>
  );
};

export default Track;
