export interface Experience {
  position: string;
  company: string;
  date: string;
  tasks: string[];
}

export interface Education {
  title: string;
  school: string;
  date: string;
  description: string;
}

export interface Courses {
  Microsoft: string[];
  Google: string[];
  Udemy: string[];
  AI: string[];
}

export interface ResumeData {
  title: string;
  description: string;
  experienceTitle: string;
  experience: Experience[];
  educationTitle: string;
  education: Education[];
  coursesTitle: string;
  courses: Courses;
  certificatesTitle: string;
  certificatesSubtitle: string;
  testsTitle: string;
  testCompetency: string;
}

export interface ResumeContent {
  es: ResumeData;
  en: ResumeData;
}
