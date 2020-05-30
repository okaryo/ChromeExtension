chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { status: 'init' }, {}, (response) => {
    const checkboxBody = document.getElementById('language_checkbox_container')

    for (let [key, value] of Object.entries(response || {})) {
      if (key === '') continue

      const label = document.createElement('label')
      label.setAttribute('for', key)

      if (value) {
        label.innerHTML = `<input type="checkbox" id="${key}" checked="checked">${key}`
      } else {
        label.innerHTML = `<input type="checkbox" id="${key}">${key}`
      }

      checkboxBody.appendChild(label)
    }

    const inputs = document.getElementsByTagName('input')

    for (let input of inputs) {
      input.addEventListener('change', (e) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (e.target.checked) {
            chrome.tabs.sendMessage(tabs[0].id, {
              status: 'set',
              targetLanguage: e.target.id.replace(/\s+/g, "")
            })
          } else {
            chrome.tabs.sendMessage(tabs[0].id, {
              status: 'remove',
              targetLanguage: e.target.id.replace(/\s+/g, "")
            })
          }
        })
      })
    }
  })
})
