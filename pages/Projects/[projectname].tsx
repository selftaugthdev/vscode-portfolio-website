import { useRouter } from 'next/router';
import ProjectDetails from '../../Components/ProjectDetails';
import { GetStaticProps, GetStaticPaths } from 'next';

// Add this type
type Project = {
  id: number;
  name: string;
  banner: string;
  // ... other properties
};

// Add this data or import it from your data file
const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    banner: "/project_banner.jpg",
    // ... other properties
  },
  // ... other projects
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { projectname: project.name.toString() },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want to generate pages on demand
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find(
    (p) => p.name.toString() === params?.projectname
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

const ProjectPage = ({ project }: { project: Project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
