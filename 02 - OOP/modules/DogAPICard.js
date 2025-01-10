export class DogAPICard{
    #breed;

    constructor(breed){
        this.#breed = breed;
    }

    async createCard(containerElement){
        let imgUrl = await this.#getDogImage();

        const img = document.createElement('img');
        img.src = imgUrl;
        containerElement.append(img);

        img.addEventListener('click', async ()=>{
            imgUrl = await this.#getDogImage();
            img.src = imgUrl;
        })
    }

    async #getDogImage(){
        const url = `https://dog.ceo/api/breed/${this.#breed}/images/random`;

        const res = await fetch(url);
        const data = await res.json();

        return data.message;
    }

    getBreed(){
        return this.#breed;
    }
}

/**
 * Vad behövs?
 * - skicka en request till dog API för en random bild av en specifik hundras
 * - ange hundras i konstruktorn
 * - skapa ett img-element 
 * - med en eventlistener
 */