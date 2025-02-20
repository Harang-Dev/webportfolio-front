import Image from 'next/image';  // Image 컴포넌트 import 추가
import TextWithLine from '../components/TextWithLine';
import '../styles/globals.css';

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full gap-5 overflow-auto hide-scrollbar">
      <TextWithLine text="ABOUT ME" />
      <span>안녕하세요. 프론트엔드 개발자가 되고싶은 서현우입니다. 요즘은 Typscript 와 Next.js를 학습하고 있습니다.</span>
      <TextWithLine text="EDUCATION" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4">
        <li className="mb-4">2023.12 ~ 2024.04 멀티캠퍼스 개발자 취업캠프(6기) 수료</li>
        <li className="mb-4">2023.07 ~ 2023.07 SW Pioneer Program at USC 3기 수료</li>
        <li>2017.03 ~ 2024.02 동명대학교(디지털콘텐츠학과) 졸업</li>
      </ul>
      <TextWithLine text="CERTIFICATE" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4">
        <li className="mb-4">2018.06 자동차 운전면허(1종 보통)</li>
        <li className="mb-4">2009.12 컴퓨터 활용능력(2급)</li>
        <li>2009.02 워드프로세서(1급)</li>
      </ul>
      <TextWithLine text="SKILLS" />
      <ul style={{ listStyle: 'circle' }} className="list-inside ml-4 w-1/2">
        <li className="mb-4">Front-End</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Image src="/images/html.webp" alt="HTML" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/css.webp" alt="CSS" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/js.webp" alt="JS" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Image src="/images/ts.webp" alt="TS" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '60%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/sc.webp" alt="Styled-Components" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/antd.webp" alt="Antd" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Image src="/images/react.webp" alt="REACT" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/next.webp" alt="NEXTJS" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '60%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <li className="mb-4">Design</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Image src="/images/figma.webp" alt="FIGMA" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>

        <li className="mb-4">Collaboration Tools</li>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <Image src="/images/github.webp" alt="GITHUB" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '80%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/notion.webp" alt="NOTION" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/slack.webp" alt="SLACK" width={64} height={64} className="mb-2" />
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-[#1EE256] rounded-full" style={{ width: '90%', transition: 'width 0.5s' }}></div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
