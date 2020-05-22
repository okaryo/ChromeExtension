window.onload = () => {
  const links = document.querySelectorAll('.markdown-body a')
  for (let link of links) {
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  }

  chrome.runtime.onMessage.addListener((msg) => {
    for (let link of links) {
      link.target = msg.target
      link.rel = msg.rel
    }
  })
}
