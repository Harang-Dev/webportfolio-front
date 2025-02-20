export interface PostData {
  title: string;
  writer: string;
  description: string;
  id?: string;
}

export interface ProjectData {
  text: string;
  imageLink: string;
  description: string;
  developmentPeriod: string;
  teamMembers: string;
  deployUrl: string;
  githubUrl: string;
}

export interface ProjectProps {
  text: string;
  imageLink: string;
  onClick: () => void;
}
