const images = ['0.jpeg', '1.jpeg', '2.jpeg']

chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img')
bgImage.src = `images/${chosenImage}`

document.body.appendChild(bgImage)
