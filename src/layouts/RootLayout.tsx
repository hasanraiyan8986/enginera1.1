import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ChatButton } from '../components/chat/ChatButton';
import { ChatInterface } from '../components/chat/ChatInterface';
import { useState } from 'react';

export const RootLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <Outlet />
      </main>
      {!isChatOpen && (
        <ChatButton onClick={() => setIsChatOpen(true)} isOpen={isChatOpen} />
      )}
      {isChatOpen && (
        <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
};