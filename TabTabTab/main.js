chrome.tabs.query({ currentWindow: true }, function(tabs) {
  let ul = document.getElementById('tab-list')
  for (let tab of tabs) {
    let li = document.createElement('li')
    
    let favicon = document.createElement('img')
    favicon.src = tab.favIconUrl
    if (tab.favIconUrl === '' || tab.favIconUrl === undefined) {
      favicon.src = "images/tabtabtab128.png"
    }

    let a = document.createElement('a')
    a.href = tab.url
    a.text = tab.title

    ul.appendChild(li)
    li.appendChild(favicon)
    li.appendChild(a)
  }
})
