window.onload = () => {
  const githubLinks = document.getElementsByTagName('a')
  for (let link of githubLinks) {
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  }

  chrome.runtime.onMessage.addListener((msg) => {
    const links = document.getElementsByTagName('a')
    for (let link of links) {
      link.target = msg.target
      link.rel = msg.rel
    }
  })
}
