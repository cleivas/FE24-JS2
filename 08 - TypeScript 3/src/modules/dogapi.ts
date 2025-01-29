export async function getDogImages(breed:string, amount:string):Promise<string[]>{

    try{
        const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;
    
        const res = await fetch(url);
        if(!res.ok) throw new Error('Something went wrong... try again later');

        const data = await res.json();
        return data.message;
    }
    catch(error){
        throw error;
    }

}