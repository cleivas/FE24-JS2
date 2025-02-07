type Subject = 'paintings' | 'movies' | 'books';
type Post = {
    subject: Subject,
    rating: number,
    title: string
}


const form = document.querySelector('form');

form?.addEventListener('submit', event=>{
    event.preventDefault();

    const formData = new FormData(form);

    console.log(formData)
    console.log(formData.get("title"))

    // Om typerna inte spelar någon roll kan man loopa igenom alla key value pairs för att skapa ett js objekt
    // const jsObj = {};
    // for(const [key, value] of formData){
    //     console.log(key, value)
    //     jsObj[key] = value;
    // }
    // formData.forEach( (value, key ) => {
    //     jsObj[key] = value;
    // } )


    // OM man måste följa en viss TS type får man ange varje key value pair manuelt
    const jsObj: Post = {
        subject: (formData.get('subject') as Subject),
        title: (formData.get('title') as string) ?? 'default',
        rating: Number(formData.get('rating')) || 0
    }

    console.log(jsObj)

    postPost(jsObj)

    const json = JSON.stringify(jsObj);
    console.log(json)
})

function postPost(newPost: Post):void{
    console.log(newPost)
}