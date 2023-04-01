const projectsArray = [
    {
        name: "E-Commerce Shopping Cart",
        tech: "React, React-Router, Context API",
        gitHubUrl: "https://github.com/Nicholas-Riegel/shopping_cart_react",
        viewAt: "https://nicholas-riegel.github.io/shopping_cart_react/#/",
        description: "App fetches product data from API. Each product includes an image, a description and a price. Clients can select a quantity to purchase. Products are added to the client's shopping cart and a total purchase price is calculated. Methods, technologies used: useState, useEffect, useContext, useLayoutEffect, HashRouter, .map, .filter, .reduce, .toFixed, ternary operators, etc. (API has in the past gone down temporarily. Please let me know if it is off-line.)",
        categories: ["React"],
        preview:'./pictures/shopping-cart.png'
    },
    {
        name: "Inventory Tracker",
        tech: "Node.js, Express, Mongoose, MongoDB, Pug",
        gitHubUrl: "https://github.com/Nicholas-Riegel/inventory_app_node_express_pug",
        viewAt: "https://inventory-app0.herokuapp.com/",
        description: "This app is designed to keep track of products in inventory. User may choose names of products and categories the products are listed under. Any product or category can be created, read, updated and deleted (i.e. complete CRUD operations). App includes certain protections. Products in a category must be deleted before category can be deleted, and quantity of product must be zero before product can be deleted. As it is hosted on Heroku, app may take a few seconds to upload.",
        categories: ["Node.js", "Express", "Mongoose", "MongoDB", "Pug"],
        preview:'./pictures/inventory-tracker.png'
    },
    {
        name: "Project Manager",
        tech: "Vanilla Javascript, HTML, CSS",
        gitHubUrl: "https://github.com/Nicholas-Riegel/project-manager",
        viewAt: "https://nicholas-riegel.github.io/project-manager/",
        description: "More complex (and useful!) than a simple To-Do App, this project manager allows users to group tasks into different projects. Each project as a name, description, due date and priority, along with the todos. App uses Local Storage to save user's inputs.",
        categories: ["JavaScript"],
        preview:'./pictures/project-manager.png'
    },
    {
        name: "Quote Generator",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/random_quote_generator_react",
        viewAt: "https://nicholas-riegel.github.io/random_quote_generator_react/",
        description: "This app fetches the quotes from an API, and puts them in State. useEffect is used initially to update the quotes array state and the random quote object state. A button click updates the random quote object state. A Twitter button automatically sends the quote to your Twitter account to be posted. (If it doesn't work, make sure your addblockers are off.) Technologies: React, useState, useEffect",
        categories: ["React"],
        preview:'./pictures/quote-generator.png'
    },
    {
        name: "Drum Machine",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/drum_machine_react",
        viewAt: "https://nicholas-riegel.github.io/drum_machine_react/",
        description: "This Drum Machine operates either by clicking on the buttons with the mouse or by pressing the keys on the keyboard! The corresponding drum sound plays and the name of the drum appears briefly in the output bar. Technologies: React, hooks, useState, useEffect",
        categories: ["React"],
        preview: './pictures/drum-machine.png',
    },
    {
        name: "Weather App",
        tech: "JavaScript, HTML, CSS",
        gitHubUrl: "https://github.com/Nicholas-Riegel/weatherApp",
        viewAt: "https://nicholas-riegel.github.io/weatherApp/",
        description: "This weather app gets the current weather and temperature (in Farenheit and Celcius) for any major city in the world. Data is fetched from an API. Weather icon updates to match the weather.",
        categories: ["JavaScript, HTML, CSS"],
        preview: './pictures/weather-app.png',
    },
    {
        name: "Memory Game",
        tech: "React",
        gitHubUrl: "https://github.com/Nicholas-Riegel/memory_game_react",
        viewAt: "https://nicholas-riegel.github.io/memory_game_react/",
        description: "This little memory game uses the Egyptian gods to test your memory! Try to click on each god only once! After each click the cards are shuffled. There is a score-keeper, a high-score, and a reset button.",
        categories: ["React"],
        preview: './pictures/memory-game.png',
    },
]

export default projectsArray