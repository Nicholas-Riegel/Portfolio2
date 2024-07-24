import './Techs.css'

const skillArray = [
    {
      title: 'Languages',
      items: 'JavaScript, TypeScript, PHP, Python, C#, SQL, HTML, CSS',
    },
    {
      title: 'Libraries/Frameworks',
      items: 'React, Laravel, .NET Core, Express, Mongoose, Django, jQuery, Tailwind, Bootstrap, Mocha, Jest',
    },
    {
      title: 'Databases',
      items: 'PostgreSQL, MySQL, MongoDB',
    },
    {
      title: 'Other Technologies',
      items: 'Git, GitHub, AWS, Heroku, Wordpress, Postman, JSON, SPAs, REST APIs, SSR',
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