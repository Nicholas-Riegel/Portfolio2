import selfie from '../Assets/selfie.jpg'
import './Intro.css'

const Intro = () => {
  return (
    <>
      <div id="intro">
        <div id="image-div">
          <img src={selfie} alt="portrait" />
        </div>
        <div id="intro-text-div">
          <h1>Nicholas P. Riegel</h1>
          <h2>Software Engineer / Full Stack Web Developer </h2>
          <p>Welcome to my Portfolio page! As a former educator, specializing in Philosophy, I began teaching myself to code in early 2020 during the Covid pandemic, and absolutely fell in love with it. I feel many of the skills prized in my study of philosophy carry over and have helped me become a better programmer. Philosphy requires exact and rigorous analytical and logical thinking, much like coding, and it also involve thinking deeply and carefully about complex abstract issues, just like coding. In any event, I love coding and I hope that is reflected in the projects below.</p>

          <p>Please feel free to click on the projects and view the source code on GitHub. Please also see the links above to my Resume and GitHub profile. Enjoy!</p>
        </div>
      </div>
      
    </>
  )
}

export default Intro