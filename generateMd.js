//const licenseBadgeLinks = require(".licenseBadges");

function generateMarkdown(data) {
    // licenseBadge = licenseBadgeLinks[data.license];
    return `# ${data.title}
    
## Desciption

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Testing](#tests)
* [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    ${data.license}

## Contribute
    ${data.contribute}
    
## Testing
    ${data.testing}

## Questions
    Any comments, questions, concerns, you should just deal with it

`
}

// To install dependencies, run this:
module.exports = generateMarkdown;