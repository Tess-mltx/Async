// let btnFetch = document.getElementById("btnFetch");
// let corps = document.querySelector('.main');
// let ul = document.createElement("ul");
// corps.appendChild(ul)

// function fetchJson() {
//     fetch('data.json')
//         .then((file) => file.json())
//         .then((data) => {
//             console.log(data);
//             data.forEach(element => {
//                 console.log(element);
//                 let li = document.createElement("li");
//                 li.appendChild(document.createTextNode(element));
//                 ul.appendChild(li);
//             });
//         })

// }
// btnFetch.addEventListener('click', () =>{ 
    
//     console.log('click');
//     fetchJson()
// })
let input = document.querySelector("#name");
let inputText = input.textContent
let submit = document.querySelector("#btnSubmit")

submit.addEventListener('click', () =>{ 
    let input = document.getElementById("name");
    let inputText = input.value
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+inputText)
        .then((response) => {
            console.log(response)    
            return response.json()
        })
        .then((data) => {
            console.log(data)
            console.log(inputText);
            console.log(json.strDrink);

        });

})


