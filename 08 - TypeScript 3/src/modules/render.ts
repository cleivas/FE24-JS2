export function renderImages(imageURLs:string[]):void{
    const container = document.querySelector('#imageContainer') as HTMLDivElement;
    container.innerHTML = '';

    imageURLs.forEach( url => {
        const img = document.createElement('img');
        img.src = url;
        container.append(img);
    } )

}
