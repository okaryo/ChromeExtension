let flexParent = document.getElementById('flex-parent')
const addChildButton = document.getElementById('add-child-button')
const removeChildButton = document.getElementById('remove-child-button')

addChildButton.addEventListener('click', () => {
  let flexChild = document.createElement('div')
  let childNumber = document.getElementsByClassName('flex-children').length + 1

  flexChild.innerHTML = childNumber
  flexChild.classList.add('flex-children')
  flexParent.appendChild(flexChild)
})

removeChildButton.addEventListener('click', () => {
  let flexChildren = document.getElementsByClassName('flex-children')
  let lastChild = flexChildren[flexChildren.length - 1]
  lastChild.remove()
})

let flexDirections = document.getElementsByClassName('flex-direction')
for (let flexDirection of flexDirections) {
  flexDirection.addEventListener('change', () => {
    flexParent.style.flexDirection = flexDirection.value
  })
}

let flexWraps = document.getElementsByClassName('flex-wrap')
for (let flexWrap of flexWraps) {
  flexWrap.addEventListener('change', () => {
    flexParent.style.flexWrap = flexWrap.value
  })
}

let justifyContents = document.getElementsByClassName('justify-content')
for (let justifyContent of justifyContents) {
  justifyContent.addEventListener('change', () => {
    flexParent.style.justifyContent = justifyContent.value
  })
}

let alignItems = document.getElementsByClassName('align-items')
for (let alignItem of alignItems) {
  alignItem.addEventListener('change', () => {
    flexParent.style.alignItems = alignItem.value
  })
}

let alignContents = document.getElementsByClassName('align-content')
for (let alignContent of alignContents) {
  alignContent.addEventListener('change', () => {
    flexParent.style.alignContent = alignContent.value
  })
}
