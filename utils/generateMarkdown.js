// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Name}
  
  #Description
  ${data.Description}

  #Table of Contents
  * [Installation](#Install)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Run)
  * [Questions](#Questions)
  
  #Installation
  ${data.Install}

  #Usage
  ${data.Usage}

  #License
  ${data.License}

  #Cuntributing
  ${data.Contributing}

  #Tests
  ${data.Run}

  #Question
  Contact me:
  GitHub:${data.Username}
  Email:${data.Email}

`;
}

module.exports = generateMarkdown;
