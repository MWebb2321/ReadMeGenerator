const licenseBadgeLinks = require(".licenseBadges");

function generateMarkdown(data) {
    licenseBadge = licenseBadgeLinks[data.license];
    return `# ${data.title}`

${data.licenseBadge}

## Desciption

}