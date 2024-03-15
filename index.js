const inquirer = require("inquirer")
const fs = require(`fs`)

let readme

inquirer
    .prompt([
        {
            type:`input`,
            message:`What is the title of your project?`,
            name: `title`
        },
        {
            type:`input`,
            messgage:`Provide a brief description.`,
            name:`description`,
        },
        {
            type:`input`,
            message: `What is your table of contents?`,
            name: `table`,
        },
        {
            type:`input`,
            message:`What steps does one need to install in order to run the program?`,
            name:`install`,
        },
        {
            type:`input`,
            message:`What is the use of your project?`,
            name:`usage`,
        },
        {
            type:`input`,
            message:`Who worked on this project?`,
            name:`credits`,
        },
        {
            type:`input`,
            message:`List any licenses you used.`,
            name:`license`,
        },
        {
            type:`input`,
            message:`List any badges here.`,
            name:`badges`,
        },
        {
            type:`input`,
            message:`What features did you use?`,
            name:`features`,
        }
    ])
    .then((response) => {
       readme = 
       `# ${response.title}

        ## Description
       
        ${response.description}
       
        ## Table of Contents
       
        ${response.table}

        ## Installation
       
        ${response.install}
       
        ## Usage
       
        ${response.usage}
       
        ## Credits
       
        ${response.credits}

        ## License
       
        ${response.license}

        ## Badges
       
        ${response.badges}

        ## Features

        ${response.features}`

       fs.writeFile(`./assets/README.md`, readme, (err) => {
        err ? console.error(err) : console.log(`File Created!`)
       })
    })
