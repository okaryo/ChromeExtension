const newTab  = document.getElementById('new_tab')
const sameTab = document.getElementById('same_tab')

newTab.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      target: '_blank',
      rel: 'noopener noreferrer'
    })
  })
})

sameTab.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      target: '',
      rel: ''
    })
  })
})
