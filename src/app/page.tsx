"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './styles/globals.css';

export default function Page() {
  const words = ['Developer', 'Solver', 'Coder'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const router = useRouter();

  const handleGoProject = () => {
    router.push('/project');
  }

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
        setCurrentText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, 2000);
    
    return () => clearInterval(wordChangeInterval);
  }, [isTyping, words.length]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev.length < words[currentWordIndex].length) {
          return prev + words[currentWordIndex][prev.length];
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, words]);

  return (
    <div className="flex flex-col justify-center items-start gap-10 w-full h-full">
      <div className="sm:text-4xl md:text-4xl lg:text-7xl font-bold">
        SEO HYUNWOO
      </div>
      <div className="w-1/5 border-t-4 border-white" />
      <div className='sm:text-2xl md:text-3xl lg:text-3xl'>
        <span className='mr-4'>Creative</span>
        <span className='font-bold text-white text-opacity-80'>{currentText}</span>
      </div>
      <button onClick={handleGoProject} className="w-1/5 border border-white bg-white text-black px-4 py-2 mt-6">Go Project</button>
    </div>
  );
}
