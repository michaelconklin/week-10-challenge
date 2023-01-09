const inquirer = require("inquirer");

const { writeFile } = require('fs').promises;

const promptUser = (data) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'names',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'position',
            message: 'What is your position?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did you go to school?',
        },
    ]);
};

function generateHTML(data) {
    return`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./Develop/dist/style.css">
    </head>
    <body>
    <header>
    <h1> My Team </h1>
    </header>

    <div class="container">
        <div class="card">
        <p>${data.names}</p>
        <div class="information">
            <ul>
                <li>ID: ${data.id}</li>
                <li>
                Email:
                <a href="mailto: ${data.email}"> ${data.email}</a>
                </li>
                <li>School: ${data.school}</li>
            </ul>
        </div>
        </div>
    </html>`
};

    const init = () => {
        promptUser()
            .then((answers) => writeFile('index.html', generateHTML(answers)))
            .then(() => console.log('Successfully wrote to index.html'))
            .catch((err) => console.error(err));
    };

init();
