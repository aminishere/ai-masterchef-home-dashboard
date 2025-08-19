import React, { useState } from "react";
import { Paperclip, Send } from "lucide-react";

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState("");

  function trySend() {
    const value = text.trim();
    if (!value) return;
    onSend && onSend(value);
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      trySend();
    }
  }

  return (
    <div className="flex items-center gap-2 p-3 border-t border-gray-700">
      <button className="text-white" type="button" disabled={disabled}>
        <Paperclip size={18} />
      </button>
      <input
        type="text"
        placeholder="Write a message"
        className="flex-1 px-3 py-3 rounded-lg bg-gray-800 text-white outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <button className="text-white" type="button" onClick={trySend} disabled={disabled || !text.trim()}>
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;


