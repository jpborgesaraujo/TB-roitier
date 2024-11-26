const listaJogos = document.querySelector(".listaJogos");
const logoCentro = document.querySelector(".logoCentro");
const APIChave = "6cd2361e4426450a912f9b73e3b1e2f4";

// Funções existentes
function listagemLancamento(ano){ 
    const url = `https://api.rawg.io/api/games?key=${APIChave}&metacritic=1,100&dates=${ano}-01-01,${ano}-12-30&ordering=-rating`;
    carregarJogos(url); 
}

function listagemGenero(genero){ 
    const url = `https://api.rawg.io/api/games?key=${APIChave}&metacritic=1,100&genres=${genero}&ordering=-rating`; 
    carregarJogos(url);
}

function listagemPublicadora(publicadora){ 
    const url = `https://api.rawg.io/api/games?key=${APIChave}&metacritic=1,100&publishers=${publicadora}&ordering=-rating`;
    carregarJogos(url);
}

function carregarJogos(url) {
    limpar();
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(jogo => {
            const jogoCard = document.createElement('div');
            jogoCard.classList.add('col-sm-12', 'col-md-6', 'col-lg-3');
            jogoCard.innerHTML = `
                <div class="card" style="width: 100%;">
                    <button type= "button" class="btn-close btn-close-dark rounded-3  position-absolute top-0 end-0" onclick="removerJogo(this)" aria-label="Close"></button>
                    <img src="${jogo.background_image}" class="card-img-top" alt="Imagem do jogo ${jogo.name}">
                    <div class="card-body">
                        <h4 class="card-title">${jogo.name}</h4>
                        <ul class="card-text">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                ${jogo.rating}
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                                </svg>
                                ${jogo.released}
                            </li>
                        </ul>
                    </div>
                </div>`;
            logoCentro.classList.add("visually-hidden");
            listaJogos.appendChild(jogoCard);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar jogos: ', error);
    });
}


function limpar() {
    logoCentro.classList.remove("visually-hidden");
    listaJogos.innerHTML = '';
}

function removerJogo(button) {
    button.closest('.col-sm-12').remove();
}

// Nova funcionalidade de busca por ano
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var year = document.getElementById('yearInput').value;
        listagemLancamento(year);
    });
});
