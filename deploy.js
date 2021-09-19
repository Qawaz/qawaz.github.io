const ghpages = require('gh-pages')

ghpages.publish('public', {
    branch: 'public',
    repo: 'https://github.com/timeline-notes/timeline-notes.github.io.git'
}, () => {
    console.log('Deployed "public" to "public" branch in Github')
})
