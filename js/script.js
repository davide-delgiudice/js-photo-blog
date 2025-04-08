const overlay = document.getElementById('overlay')
const button = document.getElementById('over-btn');


// dichiaro una variabile cotenente l'endpoint dell'api che ci serve
const endPoint = `https://lanciweb.github.io/demo/api/pictures/`;

// creiamo una funzione che ci permetta di aggiungere le i dati dell'API nei campi della card

const createSummerCard = (cards) => {
    // aggiungo la card scritta in HTML in una nuova variabile
    const summerCard = `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div id=${cards.id} class="card p-3 mb-3">
                        <div class="img-card">
                            <img src="./assets_day1/img/pin.svg" class="pin" alt="">
                            <img src="${cards.url}" width="100%" alt="">
                        </div>
                        <div class="card-body p-0 mt-2">
                            <p class="m-0">${cards.date}</p>
                            <p class="fw-bold m-0">${cards.title}</p>
                        </div>
                    </div>
                </div>`;
    
    // prendo dal DOM l'ID summerRow che mi servirà per concatenare le varie Card
    document.getElementById('summerRow').innerHTML += summerCard;
}

// effettuo la chiamata get all'API per ottenere i dati specificati nella Card 
const getCards = () => {
    axios.get(endPoint).then(resp =>{
        
        //per ogni card restituita chiamiamo createSummerCard
        resp.data.forEach(card => {
            createSummerCard(card);
        });

        const summerImgs = document.querySelectorAll('.card');
        summerImgs.forEach( (card) => {
            card.addEventListener('click', () => {
                overlay.classList.remove('hide');
            })
        })
    });
};

button.addEventListener('click', () => {
    overlay.classList.add('hide');
})

// evochiamo la funzione per farci restituire il risultato in pagina
getCards();