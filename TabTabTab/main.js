chrome.tabs.query({ currentWindow: true }, function(tabs) {
  let ul = document.getElementById('tab-list')
  for (let tab of tabs) {
    let li = document.createElement('li')

    let a = document.createElement('a')
    a.href = tab.url
    a.addEventListener('click', () => {
      chrome.tabs.update(tab.id, { active: true })
    })
    
    let favicon = document.createElement('img')
    favicon.src = tab.favIconUrl
    if (tab.favIconUrl === '' || tab.favIconUrl === undefined) {
      favicon.src = 'images/tabtabtab128.png'
    }

    let p = document.createElement('p')
    p.innerHTML = tab.title

    let closeIcon = document.createElement('i')
    closeIcon.classList.add('fas')
    closeIcon.classList.add('fa-times')
    closeIcon.addEventListener('click', () => {
      chrome.tabs.remove(tab.id)
      li.remove()
    })

    if (tab.active) {
      a.style.backgroundColor = '#e6fffa'
    }

    ul.appendChild(li)
    li.appendChild(a)
    li.appendChild(closeIcon)
    a.appendChild(favicon)
    a.appendChild(p)
  }
})
