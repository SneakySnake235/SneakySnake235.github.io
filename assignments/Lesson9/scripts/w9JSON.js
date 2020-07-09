let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];
    for(let i=1; i<towns.length; i++){
        //
        //
        if (towns[i].name == "Preston" ||  towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
       
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para = document.createElement('p');
            let h3year = document.createElement('h3');
            let h3pop = document.createElement('h3');
            let h3rain = document.createElement('h3');
            let img = document.createElement('img');
            
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('.towns').appendChild(card);
 
            para.textContent = towns[i].motto;
            card.appendChild(para);
            document.querySelector('.towns').appendChild(card);
            
            h3year.textContent = 'Year Founded ' + towns[i].yearFounded;
            card.appendChild(h3year);
            h3year.setAttribute("class", "h3year");
            document.querySelector('.towns').appendChild(card);
 
            h3pop.textContent = 'Population ' + towns[i].currentPopulation;
            card.appendChild(h3pop);
            h3pop.setAttribute("class", "h3pop");
            document.querySelector('.towns').appendChild(card);
 
            h3rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(h3rain);
            document.querySelector('.towns').appendChild(card);
 
            img.setAttribute("src", "https://andejuli.github.io/images/" + towns[i].photo);
            img.setAttribute("alt", "An image of " + towns[i].name);
            card.appendChild(img);
            document.querySelector('.towns').appendChild(card);


        //
        //

}
    }

  });
