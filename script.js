const gridItems = document.querySelectorAll('.grid-item')
const playButton = document.querySelector('#play-button')
const gridItemsArray = Array.from(gridItems)

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', (e) => {
        e.preventDefault()
        const instrument = document.getElementById('customFile').value
        gridItem.append(instrument)
    })
})

playButton.addEventListener('click', () => {
    gridItemsArray.forEach(item => {
        if (item !== "") {
            console.log(item)
        }
        // get item and play the audio file if it exists
    })
})





