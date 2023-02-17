export class Character {
    constructor(data) {
        Object.assign(this, data)
    }

    getCharacterHtml () {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return `
        <div class="character-card">
            <div id="badge-container" class="badge"></div>
             <img class="avatar" src="${avatar}" />
             <h1>${name}, ${age}</h1>
             <p>${bio}</p>
         </div>
      `
    }

    setSwiped() {
        this.hasBeenSwiped = true
    }

    setLiked() {
        this.hasBeenLiked = true
    }
}
 
