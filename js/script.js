// dichiaro delle variabili che andranno a selezionare degli elementi in HTML tramite ID
const overlay = document.getElementById('overlay')
const button = document.getElementById('over-btn');

// dichiaro una variabile cotenente l'URL dell'API che avrà i dati per riempire la card
const endPoint = `https://lanciweb.github.io/demo/api/pictures/`;


// creiamo una funzione che ci permetta di aggiungere le i dati dell'API nei campi della card
const createSummerCard = (cards) => {
    // aggiungo la card scritta in HTML in una nuova variabile
    const summerCard = `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div class="${cards.id} card p-3 mb-3">
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


// creo una funzione che andrà ad inserire nell'elemento con ID over-img, ovvero l'immagine all'interno dell'overlay, l'immagine della card tramite URL
const createOverlayCard = (cardsUrl) => {
    const overlayCard = `<img src ="${cardsUrl}">`;

    document.getElementById('over-img').innerHTML = overlayCard;
}


// creo una funzione che effetua la chiamata GET all'API per ottenere i dati specificati nella Card 
const getCards = () => {
    axios.get(endPoint).then(resp =>{
        
        // i dati ottenuti dall'API vengono memorizzati in generateArray
        const generateArray = resp.data;
        console.log(generateArray);

        // per ogni elemento dell'array, viene chiamata la funzione createSummerCard
        generateArray.forEach(card => {
            createSummerCard(card);
        });

        // selezioniamo tutte le card con classe .card nella pagina dichiarando una nuova variabile
        const summerImgs = document.querySelectorAll('.card');

        // aggiungiamo un evento di click per ogni card che rimuove la classe hide dell'overlay
        summerImgs.forEach( (card) => {
            card.addEventListener('click', () => {
                overlay.classList.remove('hide');
                
                //  condizione per controllare la card che stiamo andando a cliccare e assocciare la corretta immagine al click grazie alla posizione, riprendendo la funzione createOverlayCard
                if(card.classList.contains(1)){
                    createOverlayCard(generateArray[0].url);
                }
                else if(card.classList.contains(2)){
                    createOverlayCard(generateArray[1].url);
                }
                else if(card.classList.contains(3)){
                    createOverlayCard(generateArray[2].url);
                }
                else if(card.classList.contains(4)){
                    createOverlayCard(generateArray[3].url);
                }
                else if(card.classList.contains(5)){
                    createOverlayCard(generateArray[4].url);
                }
                else {
                    createOverlayCard(generateArray[5].url);
                }
            })
        })
    });
};

// aggiungo un addEvent per reinserire l'hide al click del bottone
button.addEventListener('click', () => {
    overlay.classList.add('hide');
})

// evochiamo la funzione per farci restituire il risultato in pagina
getCards();