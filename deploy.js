const ghpages = require('gh-pages')

ghpages.publish('public', {
    branch: 'gh-pages',
    repo: 'https://github.com/qawaz/qawaz.github.io.git'
}, () => {
    console.log('Deployed "public" to "public" branch in Github')
})
