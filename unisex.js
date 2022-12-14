// ASYNC AWAIT Fetch 

const requestURL = 'https://sydmalan.github.io/think/unisex.json'

async function get_unisex(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);

        const unisex = jsObject['unisex_shirts'];

        unisex.forEach(display_unisex);
    }
};

get_unisex(requestURL);

function display_unisex(item){
    let card = document.createElement('section');
    let img = document.createElement('img');
    let brand = document.createElement('p');
    let desc = document.createElement('p');
    let fabric = document.createElement('p');
    let code = document.createElement('p');

    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.brand + ' ' + item.desc);
    brand.textContent = item.brand;
    desc.textContent = item.description;
    fabric.textContent = item.fabric;
    code.textContent = item.code;

    card.appendChild(img);
    card.appendChild(brand);
    card.appendChild(desc);
    card.appendChild(fabric);
    card.appendChild(code);

    document.querySelector('.cards').appendChild(card); 


}


// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

// async function getProphets(requestURL){
//     const response = await fetch(requestURL);
//     console.log(response);
//     if (response.ok){
//         const jsObject = await response.json();
//         console.log(jsObject);

//         const prophets = jsObject['prophets'];
//         // console.log(prophets[0].lastname);

//         prophets.forEach(displayProphets);
//     }
// };

// getProphets(requestURL);

// function displayProphets(item){
//     let card = document.createElement('section');
//     let name = document.createElement('h2');
//     let birthdate = document.createElement('p');
//     let birthplace = document.createElement('p');
//     let img = document.createElement('img');

//     name.textContent = item.name + ' ' + item.lastname;
//     birthdate.textContent = item.birthdate;
//     birthplace.textContent = item.birthplace;
//     img.setAttribute('src', item.imageurl);
//     img.setAttribute('alt', item.name + ' ' + item.lastname);

//     card.appendChild(name);
//     card.appendChild(birthdate);
//     card.appendChild(birthplace);
//     card.appendChild(img);

//     document.querySelector('.cards').appendChild(card);    
// } 
