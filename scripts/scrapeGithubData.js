function getRT(date) {
    const now = new Date();
    const convert = Math.floor((now - date) / 1000);
    const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});

    let i; let u;

    switch (true) {
        case (i = Math.floor(convert / 31536000)) >= 1:
            u = 'year';
            break;
        case (i = Math.floor(convert / 2592000)) >= 1:
            u = 'month';
            break;
        case (i = Math.floor(convert / 86400)) >= 1:
            u = 'day';
            break;
        case (i = Math.floor(convert / 3600)) >= 1:
            u = 'hour';
            break;
        case (i = Math.floor(convert / 60)) >= 1:
            u = 'minute';
            break;
        default:
            i = seconds;
            u = 'second';
    }
    
    return rtf.format(-i, u);
}

async function getRepoData() {
    try {
        const commitData= await fetch('https://api.github.com/repos/mystically11/mystihouse/commits');
        const commits = await commitData.json();
        const lastUpdate = new Date(commits[0].commit.author.date);

        document.getElementById('last-updated-text').textContent = `last update: ${getRT(lastUpdate)}`;
    } catch (error) {
        document.getElementById('last-updated-text').textContent = `last update: i dont know`;
    }
}

window.onload = () => {
  getRepoData();
};