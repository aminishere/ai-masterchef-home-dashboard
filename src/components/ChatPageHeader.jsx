import React from "react";
import { ArrowLeft } from "lucide-react";

const ChatPageHeader = () => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-black">
    <div className="flex items-center gap-3">
      <ArrowLeft size={20} className="text-white" />
      <h2 className="text-lg font-semibold text-white">Messages</h2>
    </div>
    <img
      src="https://via.placeholder.com/36"
      alt="You"
      className="w-9 h-9 rounded-full"
    />
  </div>
);

export default ChatPageHeader;


