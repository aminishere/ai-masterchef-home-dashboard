import React, { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { ArrowLeft, MoreVertical } from "lucide-react";

const API_BASE = "https://689c730a58a27b18087e3762.mockapi.io";

const ChatWindow = ({ chatId = "default" }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load msg
  useEffect(() => {
    let canceled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_BASE}/messages`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();

        if (!canceled) setMessages(data);
      } catch (e) {
        if (!canceled) setError(e.message || "Load error");
      } finally {
        if (!canceled) setLoading(false);
      }
    }

    load();
    return () => {
      canceled = true;
    };
  }, [chatId]);

  // Send message
  async function handleSend(text) {
    const optimistic = {
      id: `tmp-${Date.now()}`,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSender: true,
    };

    setMessages((prev) => [...prev, optimistic]);

    try {
      const res = await fetch(`${API_BASE}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(optimistic),
      });

      if (!res.ok) throw new Error(`Send failed: ${res.status}`);
      const saved = await res.json();

      setMessages((prev) =>
        prev.map((m) => (m.id === optimistic.id ? saved : m))
      );
    } catch (e) {
      setError(e.message || "Send error");
    }
  }

  return (
    <div className="flex flex-col flex-1 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <ArrowLeft size={18} className="text-white" />
          <img
            src="https://gravatar.com/avatar/96dfe31244eb914cb17649ecd38e4f5c?s=400&d=robohash&r=x"
            alt="Lara"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-white font-medium">Lara</p>
        </div>
        <MoreVertical size={18} className="text-gray-300" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {loading && <p className="text-gray-400 text-sm">Loading…</p>}

        {!loading &&
          messages.map((m) => (
            <MessageBubble
              key={m.id}
              text={m.text}
              time={m.time}
              isSender={m.isSender}
            />
          ))}

        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
};

export default ChatWindow;
