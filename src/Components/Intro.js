import self from '../Assets/selfie.jpg'
import './Intro.css'

const skillArray = [
  {
    title: "Languages",
    items: "JavaScript, PHP, Python, SQL"
  },
  {
    title: "Libraries/Frameworks",
    items: "React, Node, Express, Mongoose, Laravel"
  },
  {
    title: "Databases",
    items: "MongoDB, mySQL, SQLite, MariaDB"
  },
  {
    title: "Other Technologies",
    items: "HTML, CSS, Git, Pug, EJS, Blade"
  }
]

const Intro = () => {
  return (
    <>
      <div id="intro">
        <div id="image-div">
          <img src={self} alt="portrait" />
        </div>
        <div id="intro-text-div">
          <h1>Nicholas P. Riegel</h1>
          <h2>Web Developer / Web Administrator / Software Developer</h2>
          {skillArray.map((x, i) => (
            <div key={i}>
              <p><b>{x.title}:</b> <em>{x.items}</em></p>
            </div>))}
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