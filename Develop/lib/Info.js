const inquirer = require("inquirer");

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'github',
            message: 'What is your github username?',
        },
    ]);
};

const generateHTML = ({ name, position, email, github }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <header class="p-5 mb-4 header bg-light">
        <div class="container">
          <h1 class="display-4">My name is ${name}</h1>
          <p class="lead">my position is ${position}.</p>
          <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My ID number is ${id}</li>
            <li class="list-group-item">My email is ${email}</li>
            <li class="list-group-item">My GitHub username is ${github}</li>
          </ul>
        </div>
      </header>
    </body>
    </html>`;

    const init = () => {
        promptUser()
            .then((answers) => writeFile('index.html', generateHTML(answers)))
            .then(() => console.log('Successfully wrote to index.html'))
            .catch((err) => console.error(err));
    };

init();
