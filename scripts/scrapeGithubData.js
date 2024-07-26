function getRT(date) {
    return date.toDateString();
}

async function getRepoCommits() {
    try {
        const commitData = await fetch('https://api.github.com/repos/mystically11/mystihouse/commits');
        const commits = await commitData.json();
        const lastUpdate = new Date(commits[0].commit.author.date);
        const numberOfCommits = commits.length;

        document.querySelectorAll('[data-commit-count]').forEach(element => {
            element.textContent += `.${numberOfCommits}`;
        });

        document.querySelectorAll('[data-last-update]').forEach(element => {
            element.textContent = `Last update: ${getRT(lastUpdate)}`;
        });
    } catch (error) {
        document.querySelectorAll('[data-last-update]').forEach(element => {
            element.textContent = `Last update: I don't know`;
        });
    }
}

window.onload = () => {
    getRepoCommits();
};