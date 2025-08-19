import React from "react";

const ChatItem = ({ name, lastMessage, time, avatar }) => (
  <div className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer border-b border-gray-700">
    <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
    <div className="flex-1">
      <p className="text-white font-medium">{name}</p>
      <p className="text-gray-400 text-sm truncate">{lastMessage}</p>
    </div>
    <span className="text-gray-500 text-xs">{time}</span>
  </div>
);

export default ChatItem;


