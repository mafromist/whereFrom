const fetch = require("node-fetch");

const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;languages;flag';

const getCountries = async() => {
    const data = await fetch(url);
    return await data.json();
}

module.exports = getCountries;