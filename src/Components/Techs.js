import './Techs.css'

const skillArray = [
    {
      title: 'Languages',
      items: 'Java, Python TypeScript/JavaScript, SQL, C#, C/C++, PHP',
    },
    {
      title: 'Libraries/Frameworks',
      items: 'React, Redux Toolkit (RTK), Express, Mongoose, Django, .NET Core, Laravel, jQuery, Tailwind, Mocha, Jest',
    },
    {
      title: 'Databases',
      items: 'PostgreSQL, MySQL, MongoDB',
    },
    {
      title: 'Other Technologies',
      items: 'Git, GitHub, AWS, HTML, CSS, JSON, SPAs, REST APIs, SSR',
    },
];
  
function Techs() {

    return (
        <div id="techs-div">
            {skillArray.map((x, i) => (
                <div key={i}>
                <p><b>{x.title}:</b> <em>{x.items}</em></p><br/>
                </div>))
            }
        </div>
    )
}

export default Techs