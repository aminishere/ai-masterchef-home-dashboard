import React from "react";
import ChatItem from "./ChatItem";
import { Search } from "lucide-react";

const ChatSidebar = () => (
  <div className="w-[320px] bg-black border-r border-gray-700">
    <div className="p-3 border-b border-gray-700">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-800 text-white outline-none"
        />
      </div>
    </div>
    <ChatItem
      name="Lara Mueller"
      lastMessage="Makes to a illustrated on all and..."
      time="17:33"
      avatar="https://gravatar.com/avatar/96dfe31244eb914cb17649ecd38e4f5c?s=400&d=robohash&r=x"
    />
    <ChatItem
      name="Lara Mueller"
      lastMessage="Makes to a illustrated on all and..."
      time="17:33"
      avatar="https://gravatar.com/avatar/96dfe31244eb914cb17649ecd38e4f5c?s=400&d=robohash&r=x"
    />
    <ChatItem
      name="Lara Mueller"
      lastMessage="Makes to a illustrated on all and..."
      time="17:33"
      avatar="https://gravatar.com/avatar/96dfe31244eb914cb17649ecd38e4f5c?s=400&d=robohash&r=x"
    />
  </div>
);

export default ChatSidebar;


