import { configure } from '@storybook/react'

// automatically import all files from components dir ending with *.story.js
const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
