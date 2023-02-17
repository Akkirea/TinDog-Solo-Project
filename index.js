// 1) Render character data 
// 2) When liked or cross is clicked, render liked or nope img and in 2 seconds swipe next character
// 3) End of character variable, render html "end of feed"

import { dogsData } from './data.js'
import { Character } from './Character.js'

/* // Variables */
let dogsArray = []
let currentDogsIndex = 0 
let dog = dogsData.forEach((dog) => dogsArray.push(dog))
let isWaiting = false
const likeBtn = document.getElementById('like-btn')
const dislikeBtn = document.getElementById('dislike-btn')
const main = document.getElementById('characters')


function render() {
    if (currentDogsIndex < dogsArray.length) {
        dog = getNextDog()
        main.innerHTML = dog.getCharacterHtml()
    } else {
        document.body.innerHTML = `
        <div class="end-dogs">
        <h1 class="end-text">There are no more dogs in your area!</h1>
        </div>`
    }
    isWaiting = false
}

render()


function addEventListeners() {
    likeBtn.addEventListener("click", function() {
        if (!isWaiting) {
            isWaiting = true
            main.innerHTML += `<img src="images/badge-like.png" class="liked">`
            setTimeout(render, 1000)
            dog.setLiked()
            dog.setSwiped()
            
        }
    })

    dislikeBtn.addEventListener("click", function () {
        if (!isWaiting) {
            isWaiting = true
            main.innerHTML += `<img src="images/badge-nope.png" class="nope">`
            setTimeout(render, 1000)
            dog.setSwiped()
        } 
    })
}
addEventListeners()

function getNextDog() {
    const newDog = new Character(dogsArray[currentDogsIndex])
    currentDogsIndex++
    return newDog
}