import helloWorld from './page-scripts/chapter-3.js'

function pageRouter() {
  // Get URL location
  const pathName = window.location.pathname

  // Check the location and check what page the user are on
  switch (pathName) {
    case '/':
    case '/index.html':
      break
    case '/src/pages/chapter-3.html':
      helloWorld()
  }
}
pageRouter()
