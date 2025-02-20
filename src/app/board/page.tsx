"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import PostItem from '../components/PostItem';
import { postAll } from '../utlis/api';
import '../styles/globals.css';

export default function Page() {
  const [page, setPage] = useState(1);
  const limit = 7;

  const { data, isLoading, error } = useQuery({
    queryKey: ['게시글 정보', page],
    queryFn: () => postAll(page, limit),
  });

  const router = useRouter();

  const handlePostClick = ({ id }: { id: string }) => {
    router.push(`/board/detail?id=${id}`);
  };

  const handleWriteClick = () => {
    router.push(`/board/write`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const lastPage = Math.ceil(data?.totalPost / limit);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts.</div>;
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1>자유 게시판</h1>
          <br />
          <div className="flex justify-between items-center">
            <span>방문해주신 모든분들께 감사드립니다. 자유로운 의견을 남겨주세요.</span>
            <button className="bg-[#8861E4] text-white px-4 py-2 rounded-md" onClick={() => handleWriteClick()}>
              글쓰기
            </button>
          </div>
          <div className='mt-[3vh]'>
            <div className="text-center text-gray-500">게시글이 없습니다. 첫 번째 글을 작성해보세요!</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col">
        <h1>자유 게시판</h1>
        <br />
        <div className="flex justify-between items-center">
          <span>방문해주신 모든분들께 감사드립니다. 자유로운 의견을 남겨주세요.</span>
          <button className="bg-[#8861E4] text-white px-4 py-2 rounded-md" onClick={() => handleWriteClick()}>
            글쓰기
          </button>
        </div>
        <div className='mt-[3vh]'>
          {data && data.data.map((post: any) => (
            <div className='w-full' key={post.id} onClick={() => handlePostClick({ id: post.id })}>
              <PostItem
                title={post.title}
                writer={post.writer}
              />
            </div>
          ))}
        </div>

        {/* 페이지네이션 버튼 */}
        <div className="mt-4 flex justify-center items-center gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-400 text-white rounded-md disabled:opacity-50"
          >
            이전
          </button>
          <span className="text-lg">{page === lastPage ? '마지막 페이지' : `${page} 페이지`}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === lastPage}
            className="px-4 py-2 bg-gray-400 text-white rounded-md disabled:opacity-50"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
