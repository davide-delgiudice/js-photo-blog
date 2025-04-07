// dichiaro una variabile cotenente l'endpoint dell'api che ci serve
const endPoint = `https://lanciweb.github.io/demo/api/pictures/`;

// creiamo una funzione che ci permetta di aggiungere le i dati dell'API nei campi della card

const createSummerCard = (cards) => {
    // aggiungo la card scritta in HTML in una nuova variabile
    const summerCard = `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div id=${endPoint.id} class="card p-3 mb-3">
                        <div class="img-card">
                            <img src="./assets_day1/img/pin.svg" class="pin" alt="">
                            <img src="${endPoint.url}" width="100%" alt="">
                        </div>
                        <div class="card-body p-0 mt-2">
                            <p class="m-0">${endPoint.date}</p>
                            <p class="fw-bold m-0">${endPoint.title}</p>
                        </div>
                    </div>
                </div>`;
    
    // prendo dal DOM l'ID summerRow che mi servirà per concatenare le varie Card
    document.getElementById('summerRow').innerHTML += summerCard;
}