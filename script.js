let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

// add Event Listener
searchBtn.addEventListener('click', function () {
    // let countryName = countryInp.value;
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    // fetch 
    fetch(finalURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].region);
            console.log(data[0].population);
            console.log(
                Object.values(data[0].languages).toString()
            );
            console.log(Object.keys(data[0].currencies).toString());
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Region: </h4>
                        <span>${data[0].region}</span>
                    </div>
                </div>
                
            `;
        });
})