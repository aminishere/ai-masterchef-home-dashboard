import React from "react";

const MessageBubble = ({ text, time, isSender }) => (
  <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
    <div
      className={`px-4 py-2 rounded-xl text-sm bg-gray-200 text-black max-w-xs ${
        isSender ? "rounded-br-none" : "rounded-bl-none"
      }`}
    >
      <p>{text}</p>
      <span className="text-xs text-gray-500 float-right">{time}</span>
    </div>
  </div>
);

export default MessageBubble;


