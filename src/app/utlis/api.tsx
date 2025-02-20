import axios from "axios";
import { PostData } from "../types";

const API = process.env.NEXT_PUBLIC_API_URL;

// 전체 게시글 조회
export const postAll = async (page: number, limit: number) => {
    const allData = await axios.get(`${API}/post-all`);
    const response = await axios.get(`${API}/post-all?page=${page}&limit=${limit}`);
    const totalPost = allData.data.length;
    const resData = response.data
    return { data :resData, totalPost };
  };

// id로 상세 게시글 조회
export const postDetail = async (id: any) => {
    const response = await axios.get(`${API}/post-detail/${id}`);
    console.log(response.data);
    return (response.data);
};

// 게시글 작성
export const postWrite = async (data: PostData) => {
    const response = await axios.post(`${API}/write`, data);
    console.log(response.data);
    return (response.data);
}