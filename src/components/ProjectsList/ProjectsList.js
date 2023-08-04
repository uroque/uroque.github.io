import Card from 'react-bootstrap/Card';
function ProjectBox(project) {
  return (
    <li>
      <a href={project.link}>
        <Card className="text-center">
          <Card.Img variant="top" src={`${project.image}/100px180?text=${project.name}`} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </li>
  );
}

export default ProjectBox;
