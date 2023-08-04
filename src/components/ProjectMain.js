import ProjectBox from './ProjectBox';
import projects from '../projects';

function ProjectMain() {
  projects.map((project) => {
    return (
      <ul>
        <ProjectBox project={project}></ProjectBox>
      </ul>
    );
  });
}

export default ProjectMain;
