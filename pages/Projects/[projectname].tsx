import { useRouter } from 'next/router';
import ProjectDetails from '../../Components/ProjectDetails';
import { GetStaticProps, GetStaticPaths } from 'next';
import type { NextPage } from 'next/types';

type Project = {
  id: number;
  banner: string;
  logo: string;
  title: string;
  name: string;
  description: string;
  link?: string;
  github?: string;
  features: string[];
  skills: string[];
  snapshots: string[];
  height: number;
  others: Array<{
    thumbnail: string;
    logo: string;
    title: string;
    description: string;
    link: string;
  }>;
};

// Add this data or import it from data file
const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    banner: "/project_banner.jpg",
    logo: "/path/to/logo.png",
    title: "Project 1",
    description: "Project description here",
    features: [],
    skills: [],
    snapshots: [],
    height: 0,
    others: []
  },
  // ... other project
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { projectname: project.name.toLowerCase().replace(/\s+/g, '-') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ project: Project }> = async ({ params }) => {
  const projectName = params?.projectname as string;
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  if (!project) {
    return <div>Loading....</div>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
