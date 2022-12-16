console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(object => {
    for(let element of object) {
        document.createElement(element)
    }
})