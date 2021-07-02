const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', (e) => {
        e.preventDefault()
        const instrument = document.getElementById('customFile').value
        gridItem.append(instrument)
        
    })
})

