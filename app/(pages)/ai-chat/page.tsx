'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gsap } from 'gsap';

interface Message {
  id?: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function PersonalizedChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help. How are you feeling today?", sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    gsap.fromTo(
      '.message:not(.animated)',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        onComplete: () => {
          document
            .querySelectorAll('.message')
            .forEach((msg) => msg.classList.add('animated'));
        },
      }
    );
  }, [messages]);

  const sendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage('');

      const apiKey = 'AIzaSyCWlyN6OseLdSUkyKUMw-XOuPICkr-w8Qc';
      const apiUrl =
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' +
        apiKey;

      const conversationHistory = messages
        .map(
          (msg) =>
            `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`
        )
        .join('\n');

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `You are an empathetic mental health assistant.\n${conversationHistory}\nUser: ${inputMessage}\nAssistant:`,
              },
            ],
          },
        ],
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        const botMessage: string = data?.candidates?.[0]?.content?.parts?.[0]?.text
          ? formatMessage(data.candidates[0].content.parts[0].text)
          : "I'm trying to understand better. Could you elaborate on what you're experiencing?";

        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: botMessage, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error generating response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now(),
            text: "I'm having trouble responding right now. Please try again.",
            sender: 'bot',
          },
        ]);
      }
    }
  };

  const formatMessage = (message: string): string => {
    return message.replace('Assistant:', '').trim();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col mt-12 h-[600px] max-w-2xl mx-auto border rounded-lg bg-background text-foreground">
      <div className="flex-1 overflow-y-auto p-4" style={{ height: 'calc(100% - 80px)' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message mb-2 ${
              message.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block max-w-[80%] p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="p-4 border-t">
        <div className="flex">
          <Input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button type="button" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
