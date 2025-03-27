"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gsap } from "gsap";

interface Message {
  id?: number;
  text: string;
  sender: "user" | "bot";
}

export default function PersonalizedChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help. How are you feeling today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    gsap.fromTo(
      ".message:not(.animated)",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        onComplete: () => {
          document.querySelectorAll(".message").forEach((msg) => msg.classList.add("animated"));
        },
      }
    );
  }, [messages.length]); // Ensures animation only runs when a new message is added

  const sendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: "user",
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputMessage("");
      setIsTyping(true); // Show typing indicator

      const apiKey = 'AIzaSyCWlyN6OseLdSUkyKUMw-XOuPICkr-w8Qc';
      const apiUrl =
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' +
        apiKey;

      const conversationHistory = messages
        .map((msg) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`)
        .join("\n");

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `You are an empathetic mental health assistant.
                        You only respond to queries related to mental health, emotional well-being, and self-care.
                        Keep your responses short and concise (2-3 sentences max).
                        If the user's query is not related to mental health, simply reply: 
                        "I'm here to support you with mental health concerns. Let me know how you're feeling." 
        
                        Conversation so far:
                        ${conversationHistory}
                        User: ${inputMessage}
                        Assistant:`,
              },
            ],
          },
        ],
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        const botMessage: string =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I'm trying to understand better. Could you elaborate on what you're experiencing?";

        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: formatMessage(botMessage), sender: "bot" },
        ]);
      } catch (error) {
        console.error("Error generating response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: "I'm having trouble responding right now. Please try again.", sender: "bot" },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const formatMessage = (message: string): string => {
    return message.replace(/^Assistant:\s*/, "").trim();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
    <div className="text-3xl font-semibold mt-4">MindCareBot</div>
    <div className="flex flex-col mt-6 mb-40 h-[75vh] max-w-2xl mx-auto border rounded-lg bg-background text-foreground shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 cust-scroll" style={{ height: "calc(100% - 80px)" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message mb-2 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`inline-block max-w-[80%] p-3 rounded-lg shadow-md ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground self-end"
                  : "bg-secondary text-secondary-foreground self-start"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="message flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <span className="animate-pulse">•</span>
            <span className="animate-pulse delay-75">•</span>
            <span className="animate-pulse delay-150">•</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-4 border-t flex">
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 mr-2 border rounded-lg p-3 focus:ring-2 focus:ring-primary"
        />
        <Button type="button" onClick={sendMessage} disabled={isTyping}>
          {isTyping ? "Typing..." : "Send"}
        </Button>
      </form>
    </div>
    </>
  );
}
