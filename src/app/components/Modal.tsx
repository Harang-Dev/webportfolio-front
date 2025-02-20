"use client";
import Image from 'next/image';  // next/image 임포트
import { X } from "lucide-react";

interface ModalProps {
  project: {
    text: string;
    imageLink: string;
    description: string;
    developmentPeriod: string;
    teamMembers: string;
    deployUrl: string;
    githubUrl: string;
  };
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-lg relative w-[90%] max-w-[600px] transform transition-transform duration-500 opacity-0 scale-90 sm:opacity-100 sm:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{project.text}</h2>
        
        <Image
          src={project.imageLink}
          alt={`Image for ${project.text}`}
          width={600}
          height={400}
          className="object-cover w-full h-64 rounded-md shadow-md mb-4"
        />

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">&bull; 프로젝트 소개</h3>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">&bull; 개발 기간</h3>
          <p className="text-gray-600">{project.developmentPeriod}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">&bull; 개발 인원</h3>
          <p className="text-gray-600">{project.teamMembers}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">&bull; 배포 URL</h3>
          <p>
            <a href={project.deployUrl} target="_blank" className="text-blue-500 hover:underline">
              {project.deployUrl}
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">&bull; Github</h3>
          <p>
            <a href={project.githubUrl} target="_blank" className="text-blue-500 hover:underline">
              {project.githubUrl}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
