import React from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import ChatPageHeader from "../components/ChatPageHeader";

export default function ChatPage() {
  return (
    <>
    <div className="fixed inset-0 flex flex-col bg-black text-white"> 
      <ChatPageHeader />
      <div className="flex flex-1">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </div>
    </>
  );
}
