import projectsArray from "../Assets/data";
import './Projects.css'

const Projects = () => {
  return ( 
    <div id="project-box">
      {projectsArray.map((x, i) => (
        <div key={i} className="project-div">
          <div className="project-description-div">
            <h2 className="project-name-h2">
              <a href={x.viewAt} target='_blank' rel='noreferrer noopener'>{x.name}</a>
            </h2>
            <h4><em>{x.tech}</em></h4>
            <p className="project-description-p">{x.description}</p>
          </div>
          <div className="project-image-div">
            <a href={x.viewAt} target='_blank' rel='noreferrer noopener'>
              <img src={x.preview} alt="project" />
            </a>
            <div className="project-buttons-div">
              <a href={x.viewAt} target='_blank' rel='noreferrer noopener'>View</a>
              <a href={x.gitHubUrl} target='_blank' rel='noreferrer noopener'>Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects