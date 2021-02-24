//const licenseBadgeLinks = require(".licenseBadges");

function generateMarkdown(data) {
    // licenseBadge = licenseBadgeLinks[data.license];
    return `# ${data.title}
    
## Desciption

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contributing)
* [Testing](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    This respository is licensed under the ${data.license} license.

## Contribute
    ${data.contribute}
    
## Testing
    ${data.testing}

## Questions
    Any comments, questions, concerns? Feel free to contact me at [${data.email}](maito:${data.email}). 
    My gitHub profile is [${data.username}], (https://github.com/${data.username})
`
}

module.exports = generateMarkdown;