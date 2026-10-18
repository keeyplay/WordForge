async function getLastCommit() {
    try {
        const response = await fetch('https://api.github.com/repos/keeyplay/WordForge/commits');
        const commits = await response.json();
        
        let lastCommit = commits[0];

        for(let i = 0; i < 5; i++) {
            lastCommit = commits[0+i];
            let commitMessage = lastCommit.commit.message.split('\n')[0]; // first line
            let commitDate = new Date(lastCommit.commit.author.date).toLocaleDateString();
            let commitUrl = lastCommit.html_url;
            document.getElementById('last-commit').innerHTML += `
            <div class="commit-structure">
                <a href="${commitUrl}" target="_blank" class="commit">
                    📦 ${commitMessage}
                </a>
                <br>
                <span class="commit-date">${commitDate}</span>
            <div>
            `;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

getLastCommit();