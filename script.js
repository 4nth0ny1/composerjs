const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        console.log('grid item clicked')
    })
})

addMusicToGrid(){
    
}