'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Github, Instagram, Rss, Contact } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from 'next/image';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <title>My Website</title>
      </head>
      <body className="flex flex-col h-full">
        <Header />
        <main
          style={{ height: '80vh' }}
          className="flex-grow w-full px-48 sm:px-42 md:px-64 xl:px-48 bg-[#373737] flex"
        >
          <div className="flex">
            <section style={{ width: '43%' }} className="h-80vh mr-20">
              <Image
                src="/images/sakura.webp"
                className="w-full h-full object-cover"
                alt="sakura"
                width={1200}
                height={1600}
                priority
                loading="eager"
              />
            </section>
            <section style={{ width: '57%' }} className="w-3/5 h-80vh">
              <div className="w-full h-full flex flex-col">
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </div>
            </section>
          </div>
        </main>
        <Footer />

        {/* Float Button */}
        <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-2">
          <div className={`flex flex-col items-end space-y-2 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <a href="https://github.com/Harang-Dev" target="_blank" className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/_hyunwoo_o/" target="_blank" className="p-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-400 transition">
              <Instagram size={24} />
            </a>
            <a href="https://hyunwoo-grothdiary.tistory.com/" target="_blank" className="p-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition">
              <Rss size={24} />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition"
          >
            <Contact size={24} />
          </button>
        </div>
      </body>
    </html>
  );
}
