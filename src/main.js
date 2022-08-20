const DOTA2_API_URL = 'https://api.opendota.com/api/heroStats';
const heroNameEl = document.getElementById('heroes-name');

fetch(DOTA2_API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
        //Display Heroes Information
        for (let dotaHeroes of responseJson) {
            const heroesName = document.createElement('p');
            heroesName.innerText = dotaHeroes.localized_name;
            heroNameEl.append(heroesName);
        }
    });
