window.onload = () => {
  const githubLinks = document.querySelector('.markdown-body a')
  for (let link of githubLinks) {
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  }

  chrome.runtime.onMessage.addListener((msg) => {
    const links = document.querySelector('.markdown-body a')
    for (let link of links) {
      link.target = msg.target
      link.rel = msg.rel
    }
  })
}
