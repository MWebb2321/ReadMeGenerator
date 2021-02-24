const licenseBadgeLinks = require(".licenseBadges");

function generateMarkdown(data) {
    licenseBadge = licenseBadgeLinks[data.license];
    return `# ${data.title}`

return `${data.licenseBadge}

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

To install dependencies, run this:
