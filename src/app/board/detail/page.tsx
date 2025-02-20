"use client";
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { postDetail } from '@/app/utlis/api';
import '../../styles/globals.css';

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const { data, isLoading, error } = useQuery({
        queryKey: ['게시글 정보', id],
        queryFn: () => postDetail(id)
    });

    const handleGoBack = (): void => {
        window.history.back();
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>게시글 정보를 불러올 수 없습니다.</div>;
    if (!data) return <div>게시글이 존재하지 않습니다.</div>;

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <h1>자유 게시판</h1>
                <br />
                <div className='flex flex-col min-h-[30vh] items-start p-6 border border-gray-300 rounded-lg p-10 gap-10'>
                    <div className='flex justify-between w-full'>
                    <h2 className='text-2xl font-semibold text-white'>{data.title}</h2>
                    <span className='text-lg text-white'>{data.writer}</span>
                    </div>
                    <hr className='w-full border-t-2 border-white' />
                    <div className='max-h-[30vh] overflow-auto hide-scrollbar'>
                        <p className='text-lg text-white'>{data.description}</p>
                    </div>
                </div>
            </div>
            <button 
                onClick={handleGoBack} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            >
                뒤로가기
            </button>
        </div>
    );
}
