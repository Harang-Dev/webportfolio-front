import Image from 'next/image';
import { ProjectProps } from "../types";

const Projects = ({ text, imageLink, onClick }: ProjectProps) => {
  return (
    <div className="w-full h-[30vh] border-2 relative" onClick={onClick}>
      <Image
        src={imageLink}
        alt={text}
        className="object-cover w-full h-full"
        width={600}
        height={300}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Projects;
