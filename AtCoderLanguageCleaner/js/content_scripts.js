const selectElement = document.getElementById('select-lang') || document.getElementById('select-language').closest('.form-group')
const atCoderLanguageOptions = selectElement.getElementsByTagName('option')
const languageStatus = {}

chrome.storage.sync.get(null, (data) => {
  for (let atCoderLanguageOption of atCoderLanguageOptions) {
    const languageValue = atCoderLanguageOption.innerText.replace(/\s+/g, "")
    languageStatus[languageValue] = false

    for (let key of Object.keys(data) || []) {
      if (languageValue === key) {
        languageStatus[languageValue] = true
      }
    }
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.status === 'init') {
    sendResponse(languageStatus)
  } else if (message.status === 'set') {
    chrome.storage.sync.set({ [message.targetLanguage]: true })
    languageStatus[message.targetLanguage] = true
  } else if (message.status === 'remove') {
    chrome.storage.sync.remove(message.targetLanguage)
    languageStatus[message.targetLanguage] = false
  }
})

selectElement.addEventListener('click', () => {
  const languageOptions = document.getElementsByClassName('select2-results__option') || []
  chrome.storage.sync.get(null, (data) => {
    for (let languageOption of languageOptions) {
      let check = false
      for (let key of Object.keys(data) || []) {
        if (languageOption.innerText.replace(/\s+/g, "") === key) check = true
      }

      if (!check) languageOption.style.display = 'none'
    }
  })
})
