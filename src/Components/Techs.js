import React from 'react'

const skillArray = [
    {
      title: 'Languages',
      items: 'JavaScript, PHP, Python',
    },
    {
      title: 'Libraries/Frameworks',
      items: 'React, Laravel, Express, Tailwind, Bootstrap',
    },
    {
      title: 'Databases',
      items: 'MySQL, MongoDB',
    },
    {
      title: 'Other Technologies',
      items: 'HTML, CSS, SQL, Node, Git, and many others.',
    },
];
  
function Techs() {

    return (
        <div>
            {skillArray.map((x, i) => (
                <div key={i}>
                <p><b>{x.title}:</b> <em>{x.items}</em></p>
                </div>))
            }
        </div>
    )
}

export default Techs