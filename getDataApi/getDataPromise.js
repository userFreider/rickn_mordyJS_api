const api = 'https://rickandmortyapi.com/api/character';

const getData = (apiUrl) => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(json => displayData(json))

}

//imprimir datos
const displayData = (data) => {


  data.results.forEach(persj => {

    const article = document.createRange().createContextualFragment(`
    
       
       <div class="card p-2 m-2 shadow " style="width: 13rem;">
       <img src="${persj.image}" class="card-img-top " alt="personajes">
       <div class="card-body">
         <h5 class="card-title"><span class="fw-bold">Name</span>:${persj.name}</h5>
         <p class="card-text"><span class="fw-bold">Gender</span> :${persj.gender}</p>
         <p class="card-text"><span class="fw-bold">Statust</span> :${persj.status}</p>
         
       </div>
     </div>
          `);

    const div = document.querySelector('#informCaracters');
    div.append(article)

  });



}

getData(api);