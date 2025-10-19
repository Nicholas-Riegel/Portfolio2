const projectsArray = [
    // {
    //     name: "PHP MySQL Blog",
    //     tech: "PHP, MySQL, CSS, Bootstrap, Heroku",
    //     gitHubUrl: "https://github.com/Nicholas-Riegel/php_blog",
    //     viewAt: "https://php-sessions-oop.herokuapp.com/",
    //     description: "This exercise was to create a CRUD project in object oriented PHP with an MVC structure, a MySQL database, Bootstrap styling, sessions, authentication, and front and backend validation",
    //     categories: ["PHP", "CSS", "Bootstrap", "MySQL", "Heroku"],
    //     preview:'./pictures/php_blog.jpg'
    // },
    {
        name: "React E-Commerce Shopping Cart",
        tech: "React, React-Router, Context API",
        gitHubUrl: "https://github.com/Nicholas-Riegel/shopping-cart-react2",
        viewAt: "https://nicholas-riegel.github.io/shopping-cart-react2/#/",
        description: "Each product includes an image, a description and a price. Clients can select a quantity to purchase. Products are added to the client's shopping cart and a total purchase price is calculated. Methods and technologies used include: useState, useEffect, useContext, useLayoutEffect, HashRouter, .map, .filter, .reduce, .toFixed, ternary operators, etc.",
        categories: ["React"],
        preview:'./pictures/shopping-cart.jpg'
    },
    {
        name: "C# React Todo App",
        tech: "C#, .NET Core, PostgreSQL, React, AWS",
        gitHubUrl: "https://github.com/Nicholas-Riegel/csharp-react-todo-app?tab=readme-ov-file",
        viewAt: "http://147.93.118.154:3000",
        description: "This was a learning project to learn the basics of C# and .NET Core. As the final project at the General Assembly Software Engineer Bootcamp, we were given the challenge to learn a new technology and deploy a fully functional CRUD app on AWS in one week. I chose to create a Todo App with a C# and .NET Core backend and React frontend. Clearly this is a simple project, but I found the challenge more in learning C# and .NET Core.",
        categories: ["React", "C#", ".NET Core", "PostgreSQL", "Hostinger"],
        preview:'./pictures/todo-app.jpg'
    },
    {
        name: "JavaScript Car Blog",
        tech: "JavaScript, Express, Mongoose, EJS, MongoDB, Bcrypt, AWS",
        gitHubUrl: "https://github.com/Nicholas-Riegel/car-blog?tab=readme-ov-file",
        viewAt: "http://147.93.118.154:3002/cars",
        description: "This project allows users to post pictures of their favorite cars and discuss them with others. Guests can view the cars and posts. Users must sign up and sign in to post new cars and create, update, and delete posts. Project employs Express server for routing and requests, Mongoose to interact with MongoDB database, bcrypt to encrypt passwords, ejs for templating. Project is hosted on AWS EC2.",
        categories: ["JavaScript", "Express", "Mongoose", "EJS", "MongoDB", "AWS"],
        preview:'./pictures/car-blog.jpg'
    },
    {
        name: "React Drum Machine",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/drum_machine_react",
        viewAt: "https://nicholas-riegel.github.io/drum_machine_react/",
        description: "This Drum Machine operates either by clicking on the buttons with the mouse or by pressing the keys on the keyboard! The corresponding drum sound plays and the name of the drum appears briefly in the output bar. Technologies: React, hooks, useState, useEffect",
        categories: ["React"],
        preview: './pictures/drum-machine.jpg',
    },
    {
        name: "React Quote Generator",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/random_quote_generator_react",
        viewAt: "https://nicholas-riegel.github.io/random_quote_generator_react/",
        description: "This app fetches the quotes from an API, and puts them in State. useEffect is used initially to update the quotes array state and the random quote object state. A button click updates the random quote object state. A Twitter button automatically sends the quote to your Twitter account to be posted. (If it doesn't work, make sure your addblockers are off.) Technologies: React, useState, useEffect",
        categories: ["React"],
        preview:'./pictures/quote-generator.jpg'
    },
    {
        name: "React Learning App",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/egyptian-deities",
        viewAt: "https://nicholas-riegel.github.io/egyptian-deities/",
        description: "This App could be used to learn many things. I have always wanted to learn more about Egyptian mythology. So this is a fun little project to help people learn some of the most important Ancient Egyptian deities!",
        categories: ["React"],
        preview: './pictures/egypt.jpg',
    },
    {
        name: "API Weather App",
        tech: "JavaScript, HTML, CSS",
        gitHubUrl: "https://github.com/Nicholas-Riegel/weatherApp",
        viewAt: "https://nicholas-riegel.github.io/weatherApp/",
        description: "This weather app gets the current weather and temperature (in Farenheit and Celcius) for any major city in the world. Data is fetched from an API. Weather icon updates to match the weather.",
        categories: ["JavaScript, HTML, CSS"],
        preview: './pictures/weather-app.jpg',
    },
]

export default projectsArray