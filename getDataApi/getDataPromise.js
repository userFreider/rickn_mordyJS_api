const api = 'https://rickandmortyapi.com/api/character';

const getData = (apiUrl)=> {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.log(data))

}

getData(api);