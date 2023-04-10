import selfie from '../Assets/selfie.jpg'
import './Intro.css'

const skillArray = [
  {
    title: 'Languages',
    items: 'JavaScript, PHP, SQL, Python',
  },
  {
    title: 'Libraries/Frameworks',
    items: 'React, Express, Node, Laravel, Tailwind, Bootstrap',
  },
  {
    title: 'Databases',
    items: 'MySQL, MongoDB',
  },
  {
    title: 'Other Technologies',
    items: 'HTML, CSS, Git, etc.',
  },
];

const Intro = () => {
  return (
    <>
      <div id="intro">
        <div id="image-div">
          <img src={selfie} alt="portrait" />
        </div>
        <div id="intro-text-div">
          <h1>Nicholas P. Riegel, PhD</h1>
          <h2>Full Stack Web Developer / Software Engineer</h2>
          {skillArray.map((x, i) => (
            <div key={i}>
              <p><b>{x.title}:</b> <em>{x.items}</em></p>
            </div>))
          }
          <p><b>Github:</b><a href="https://github.com/Nicholas-Riegel" target="_blank" rel="noopener noreferrer"> https://github.com/Nicholas-Riegel</a></p> 
        </div>
      </div>
      <div id="projects-title-div">
        <h2>Selected Portfolio Projects</h2>
      </div>
    </>
  )
}

export default Intro