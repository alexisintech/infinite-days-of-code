//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.getElementById("button").addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value;

    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    fetch (url)
        .then(res => {
        return res.json()
        })
        .then(data => {
            let d = data.drinks[0];
            // console.log(margarita.strDrink); //"The drink's name"
            document.querySelector('h2').innerText = d.strDrink;
            // console.log(d.strInstructions);
            document.querySelector('h3').innerText = d.strInstructions;
            // console.log(d.strDrinkThumb); //Pic of drink
            document.querySelector('img').src = d.strDrinkThumb;
        })

}