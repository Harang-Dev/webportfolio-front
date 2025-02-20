"use client"

import { useState } from 'react';
import TextWithLine from '../components/TextWithLine';
import Projects from '../components/Projects';
import Modal from '../components/Modal';
import '../styles/globals.css';
import { ProjectData } from '../types';

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectData: ProjectData[] = [
    {
      text: 'WebPortfolio',
      imageLink: '/images/pf.png',
      description: 'Next.js와 TypeScript를 학습하고 실습해서 만든 웹 포트폴리오입니다.',
      developmentPeriod: '2025.02 ~ 2025.02',
      teamMembers: '1명 (개인 프로젝트)',
      deployUrl: '배포예정',
      githubUrl: 'https://github.com/Harang-Dev/webportfolio',
    },
    {
      text: 'PokeDict',
      imageLink: '/images/pokedict.png',
      description: '포켓몬 사전 웹 애플리케이션으로, 포켓몬의 다양한 정보를 제공합니다.',
      developmentPeriod: '2025.01 ~ 2025.02',
      teamMembers: '1명 (개인 프로젝트)',
      deployUrl: 'https://harang-dev.github.io/Poke-Dict.io/',
      githubUrl: 'https://github.com/Harang-Dev/Poke-Dict.io',
    },
    {
      text: 'MZ 사전',
      imageLink: '/images/mzdict.png',
      description: 'MZ 세대의 용어를 쉽게 찾을 수 있는 사전입니다.',
      developmentPeriod: '2025.01 ~ 2025.01',
      teamMembers: '2명',
      deployUrl: 'https://web-mz-dict-front-m61t9knhb5c1f236.sel4.cloudtype.app/',
      githubUrl: 'https://github.com/Harang-Dev/MZ-Dict-Front',
    },
    {
      text: 'GUFF',
      imageLink: '/images/guff.png',
      description: '(주)거명이엔씨의 백오피스 웹 어플리케이션입니다.',
      developmentPeriod: '2024.05 ~ 2024.10',
      teamMembers: '2명',
      deployUrl: '배포 없음',
      githubUrl: 'https://github.com/Harang-Dev/guff',
    },
    {
      text: '절판 서점',
      imageLink: '/images/bs.png',
      description: '멀티캠퍼스에서 진행한 구매자 중심의 절판도서 역경매 서비스입니다.',
      developmentPeriod: '2024.03 ~ 2024.04',
      teamMembers: '6명',
      deployUrl: '차후 리팩토링 후 배포 예정',
      githubUrl: 'https://github.com/Harang-Dev/RareBookStore',
    },
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="flex flex-col w-full h-full">
      <TextWithLine text="PROJECT" />
      <div className="mb-10" />
      <div className="grid grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <Projects
            key={index}
            text={project.text}
            imageLink={project.imageLink}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
