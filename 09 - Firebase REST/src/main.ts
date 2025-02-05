
const base_url = "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main";

// Add name to main
(document.querySelector('#addName') as HTMLButtonElement).addEventListener('click', async ()=>{

    const url = base_url + '.json';

    const body = {
        // Byt ut till ditt egna namn!!
        clara: {
            test: 'test'
        }
    }

    const options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

});

// Post movie to your name
(document.querySelector('#postMovie') as HTMLButtonElement).addEventListener('click', async ()=>{

    // Lägg till ditt namn efter main
    const url = base_url + '/clara.json';

    const body = {
        title: 'Princess Mononoke',
        year: 1997
    }

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

});

// Patch movie title under your name
(document.querySelector('#patchMovie') as HTMLButtonElement).addEventListener('click', async ()=>{

    // Lägg till ditt namn och firebaseid efter main
    const url = base_url + '/clara/-OIKj1426QWKIvmb2gZo.json';

    const body = {
        title: 'ÄNDRAD TITEL',
    }

    const options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

});

// Hämta alla namn
async function getNodes(url:string):Promise<Object>{

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

getNodes(base_url+'.json')
    .then( names => {
        console.log(names)

        for(const key in names){
            // Loggar varje namn i main eftersom det är ett egenskapsnamn / key
            console.log(key)
            // console.log(names[key])
        }
    });


// Visa alla titlar på filmer under ett namn. När man klickar på titeln loggas dess firebase-id

async function showTitles(){
    const url = base_url + '/clara.json';

    const res = await fetch(url);
    const nameObject = await res.json();

    console.log(nameObject)
    for(const firebaseID in nameObject){
        console.log(firebaseID)
        console.log(nameObject[firebaseID].title)

        const titelEl = document.createElement('p');
        titelEl.innerText = nameObject[firebaseID].title;
        titelEl.id = firebaseID;
        document.body.append(titelEl);

        titelEl.addEventListener('click', event => {
            console.log((event.target as HTMLParagraphElement).id)
        })
    }
}

showTitles();