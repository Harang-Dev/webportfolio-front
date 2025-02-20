"use client"

import { useMutation } from '@tanstack/react-query';
import { postWrite } from '@/app/utlis/api';
import { useState } from "react";
import { PostData } from '@/app/types';
import { useRouter } from 'next/navigation';
import '../../styles/globals.css';


export default function Page() {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PostData) => postWrite(data),
    onSuccess: (data) => {
      console.log('게시글 작성 성공:', data);
      router.push(`/board`);
      
    },
    onError: (error) => {
      console.error('게시글 작성 실패:', error);
    },
  });

  const handleButton = (data: PostData) => {
    console.log(data);
    mutation.mutate(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleButton({ title, writer, description });
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <h1>자유 게시판</h1>
        <br />
        <div className='flex justify-between items-center'>
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-lg">제목</label>
              <input
                id="title"
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="writer" className="block text-lg">작성자</label>
              <input
                id="writer"
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="작성자를 입력하세요"
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg">내용</label>
              <textarea
                id="description"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="내용을 입력하세요"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              글쓰기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
